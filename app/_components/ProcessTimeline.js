"use client";

import { useEffect, useRef, useState } from "react";
import { process as steps } from "../_libs/data";

export default function ProcessTimeline({ dark = false }) {
  const ref = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const calc = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = (window.innerHeight * 0.7 - r.top) / r.height;
      setP(Math.max(0, Math.min(1, v)));
    };
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol ref={ref} className='relative space-y-10 pl-14'>
      <span
        className={`absolute bottom-2 left-[19px] top-2 w-0.5 ${dark ? "bg-paper/20" : "bg-line"}`}
        aria-hidden='true'
      />
      <span
        className='absolute left-[19px] top-2 w-0.5 bg-accent'
        style={{ height: `calc((100% - 1rem) * ${p})` }}
        aria-hidden='true'
      />
      {steps.map((s, i) => {
        const on = p >= i / steps.length - 0.02;
        return (
          <li key={s.n} className='relative'>
            <span
              className={`absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 font-display text-sm transition-colors duration-500 ${on ? "border-accent bg-accent text-white" : dark ? "border-paper/30 bg-night text-paper/60" : "border-line bg-paper text-muted"}`}
            >
              {s.n}
            </span>
            <h3 className={`mb-1 text-xl ${dark ? "text-paper" : ""}`}>
              {s.title}
            </h3>
            <p
              className={`max-w-prose font-body text-sm ${dark ? "text-paper/70" : "text-muted"}`}
            >
              {s.text}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
