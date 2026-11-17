"use client";

import { useState } from "react";
import { programs } from "../_libs/data";

export default function ChecklistTool({
  initial = "express-entry",
  fixed = false,
}) {
  const [slug, setSlug] = useState(initial);
  const [ticked, setTicked] = useState({});
  const p = programs.find((x) => x.slug === slug);
  const done = p.needs.filter((n) => ticked[`${slug}:${n}`]).length;
  const pct = Math.round((done / p.needs.length) * 100);

  return (
    <div>
      {fixed ? null : (
        <div
          className='no-scrollbar -mx-6 mb-6 flex gap-2 overflow-x-auto px-6'
          role='tablist'
          aria-label='Choose a program'
        >
          {programs.map((x) => (
            <button
              key={x.slug}
              type='button'
              role='tab'
              aria-selected={slug === x.slug}
              onClick={() => setSlug(x.slug)}
              className={`shrink-0 rounded-full border px-4 py-2 font-body text-sm transition-all ${slug === x.slug ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-accent"}`}
            >
              {x.name}
            </button>
          ))}
        </div>
      )}
      <div
        key={slug}
        className='step-in rounded-2xl border border-line bg-white p-6'
      >
        <div className='mb-4 flex items-center justify-between gap-4'>
          <h3 className='text-xl'>{p.name}: documents you may need</h3>
          <span
            className='font-body text-sm font-semibold text-accent-deep'
            aria-live='polite'
          >
            {done}/{p.needs.length}
          </span>
        </div>
        <div
          className='mb-5 h-2 overflow-hidden rounded-full bg-tint'
          role='progressbar'
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label='Checklist progress'
        >
          <div
            className='h-full rounded-full bg-accent transition-all duration-500'
            style={{ width: `${pct}%` }}
          />
        </div>
        <ul className='space-y-2'>
          {p.needs.map((n) => {
            const k = `${slug}:${n}`;
            return (
              <li key={n}>
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 font-body text-sm transition-colors ${ticked[k] ? "border-accent/40 bg-tint" : "border-line hover:border-accent"}`}
                >
                  <input
                    type='checkbox'
                    checked={!!ticked[k]}
                    onChange={() => setTicked((t) => ({ ...t, [k]: !t[k] }))}
                    className='h-4 w-4 accent-[#c8322d]'
                  />
                  <span className={ticked[k] ? "text-muted line-through" : ""}>
                    {n}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
        {pct === 100 ? (
          <p className='step-in mt-4 rounded-xl bg-deep p-3 text-center font-body text-sm text-paper'>
            Everything gathered. A consultant would now review each document.
          </p>
        ) : null}
        <p className='mt-4 font-body text-xs text-muted'>
          Illustrative list. Requirements change, so confirm with official
          sources.
        </p>
      </div>
    </div>
  );
}
