"use client";

import { useState } from "react";
import { testimonials } from "../_libs/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <div className='mx-auto max-w-3xl text-center'>
      <figure key={i} className='step-in'>
        <span
          className='font-display text-6xl leading-none text-accent'
          aria-hidden='true'
        >
          &ldquo;
        </span>
        <blockquote className='font-display text-2xl leading-snug sm:text-3xl'>
          {t.quote}
        </blockquote>
        <figcaption className='mt-4 font-body text-sm text-muted'>
          {t.name}
        </figcaption>
      </figure>
      <div className='mt-8 flex items-center justify-center gap-3'>
        <button
          type='button'
          aria-label='Previous story'
          onClick={() =>
            setI((i + testimonials.length - 1) % testimonials.length)
          }
          className='h-10 w-10 rounded-full border border-line bg-white transition-colors hover:border-accent'
        >
          ←
        </button>
        {testimonials.map((x, n) => (
          <button
            key={x.name}
            type='button'
            aria-label={`Story ${n + 1}`}
            aria-current={n === i}
            onClick={() => setI(n)}
            className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-accent" : "w-2.5 bg-line"}`}
          />
        ))}
        <button
          type='button'
          aria-label='Next story'
          onClick={() => setI((i + 1) % testimonials.length)}
          className='h-10 w-10 rounded-full border border-line bg-white transition-colors hover:border-accent'
        >
          →
        </button>
      </div>
    </div>
  );
}
