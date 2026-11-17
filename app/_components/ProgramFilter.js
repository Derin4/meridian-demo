"use client";

import Link from "next/link";
import { useState } from "react";
import { GOALS, programs } from "../_libs/data";

export default function ProgramFilter({ limit }) {
  const [goal, setGoal] = useState("all");
  const tabs = [{ id: "all", label: "All" }, ...GOALS];
  let list =
    goal === "all" ? programs : programs.filter((p) => p.goal === goal);
  if (limit && goal === "all") list = list.slice(0, limit);
  return (
    <div>
      <div
        role='tablist'
        aria-label='Filter programs by goal'
        className='no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6'
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            role='tab'
            type='button'
            aria-selected={goal === t.id}
            onClick={() => setGoal(t.id)}
            className={`shrink-0 rounded-full border px-4 py-2 font-body text-sm transition-all ${goal === t.id ? "pop border-deep bg-deep text-paper" : "border-line bg-white text-ink hover:border-accent"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div key={goal} className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {list.map((p, i) => (
          <Link
            key={p.slug}
            href={`/programs/${p.slug}`}
            style={{ "--d": `${i * 50}ms` }}
            className='step-in lift group flex flex-col rounded-2xl border border-line bg-white p-6'
          >
            <span className='mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-tint px-3 py-1 text-xs font-semibold text-deep'>
              {GOALS.find((g) => g.id === p.goal)?.label}
            </span>
            <h3 className='mb-2 text-xl transition-colors group-hover:text-accent'>
              {p.name}
            </h3>
            <p className='mb-5 font-body text-sm text-muted'>{p.short}</p>
            <span className='mt-auto font-body text-sm font-semibold text-accent-deep'>
              Learn more{" "}
              <span className='inline-block transition-transform group-hover:translate-x-1'>
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
