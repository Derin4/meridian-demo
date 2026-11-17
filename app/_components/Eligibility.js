"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { programs, quiz } from "../_libs/data";

// Illustrative logic only: it points to programs worth discussing, never to an outcome.
function suggest(a) {
  const out = [];
  const bySlug = (s) => programs.find((p) => p.slug === s);
  const skilled =
    (a.edu === "bach" || a.edu === "grad" || a.edu === "dip") && a.exp !== "0";
  if (a.goal === "stay") {
    if (skilled)
      out.push([
        bySlug("express-entry"),
        a.lang === "yes"
          ? "You have education, experience and a language test, the core of an Express Entry profile."
          : "Your education and experience fit Express Entry. A language test would be your next step.",
      ]);
    out.push([
      bySlug("provincial-nominee"),
      a.offer === "yes"
        ? "A job offer can open provincial nomination streams."
        : "A province may nominate people whose skills match local needs.",
    ]);
    out.push([
      bySlug("citizenship"),
      "A later step, once you are a permanent resident.",
    ]);
  }
  if (a.goal === "work") {
    out.push([
      bySlug("work-permit"),
      a.offer === "yes"
        ? "Your job offer is the starting point for a work permit."
        : "Without an offer, we would look at open-permit pathways and employer options.",
    ]);
    if (skilled)
      out.push([
        bySlug("express-entry"),
        "Temporary work can also lead to permanent residence later.",
      ]);
  }
  if (a.goal === "study") {
    out.push([
      bySlug("study-permit"),
      a.offer === "yes"
        ? "An acceptance letter means you can start preparing a study permit file."
        : "You will need an acceptance letter first, then a study permit.",
    ]);
    out.push([bySlug("work-permit"), "Some graduates can work after study."]);
  }
  if (a.goal === "family")
    out.push([
      bySlug("family-sponsorship"),
      "A Canadian citizen or permanent resident can sponsor eligible family members.",
    ]);
  if (a.goal === "visit")
    out.push([
      bySlug("visitor-visa"),
      "A visitor visa, or a super visa for parents and grandparents.",
    ]);
  return out;
}

export default function Eligibility() {
  const g = useSearchParams().get("goal");
  const preset = quiz[0].options.some(([v]) => v === g) ? g : null;
  const [i, setI] = useState(preset ? 1 : 0);
  const [answers, setAnswers] = useState(preset ? { goal: preset } : {});
  const done = i >= quiz.length;
  const q = quiz[i];
  const results = done ? suggest(answers) : [];

  function pick(v) {
    setAnswers((a) => ({ ...a, [q.id]: v }));
    setI((n) => n + 1);
  }

  if (done) {
    return (
      <div className='step-in'>
        <h2 className='mb-2 text-3xl'>Programs worth discussing</h2>
        <p className='mb-8 max-w-prose font-body text-sm text-muted'>
          This is an illustrative starting point, not an assessment of
          eligibility. A consultant would check current rules against your full
          situation.
        </p>
        <div className='mb-8 space-y-4'>
          {results.map(([p, why]) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className='lift step-in block rounded-2xl border border-line bg-white p-5 hover:border-accent'
            >
              <p className='font-display text-xl'>{p.name}</p>
              <p className='font-body text-sm text-muted'>{why}</p>
            </Link>
          ))}
        </div>
        <div className='flex flex-wrap gap-4'>
          <Link
            href='/book'
            className='rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
          >
            Book a consultation
          </Link>
          <button
            type='button'
            onClick={() => {
              setI(0);
              setAnswers({});
            }}
            className='px-2 font-body text-sm underline underline-offset-4'
          >
            Start again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-xl'>
      <div className='mb-6 h-2 overflow-hidden rounded-full bg-line'>
        <div
          className='h-full rounded-full bg-accent transition-all duration-500'
          style={{ width: `${(i / quiz.length) * 100}%` }}
        />
      </div>
      <p className='mb-2 font-body text-xs uppercase tracking-widest text-muted'>
        Question {i + 1} of {quiz.length}
      </p>
      <h2 key={q.id} className='step-in mb-6 text-3xl'>
        {q.q}
      </h2>
      <div className='space-y-3'>
        {q.options.map(([v, label]) => (
          <button
            key={v}
            type='button'
            onClick={() => pick(v)}
            className='block w-full rounded-2xl border border-line bg-white px-5 py-4 text-left font-body transition-all hover:translate-x-1 hover:border-accent hover:bg-tint'
          >
            {label}
          </button>
        ))}
      </div>
      {i > 0 ? (
        <button
          type='button'
          onClick={() => setI(i - 1)}
          className='mt-6 font-body text-sm text-muted underline underline-offset-4 hover:text-ink'
        >
          ← Back
        </button>
      ) : null}
    </div>
  );
}
