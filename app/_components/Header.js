"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GOALS, programs } from "../_libs/data";
import { site } from "../_libs/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState("main");
  const [scrolled, setScrolled] = useState(false);
  const [shut, setShut] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPanel("main");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    setPanel("main");
  }

  const link = (l) =>
    `relative py-2 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100 ${pathname.startsWith(l.href) ? "text-ink after:scale-x-100" : ""}`;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/92 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_6px_20px_-12px_rgba(0,0,0,.25)]" : ""}`}
    >
      <div
        className={`hidden bg-night text-xs text-paper/75 transition-[height,opacity] duration-300 lg:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}
      >
        <div className='mx-auto flex h-9 max-w-6xl items-center justify-between px-6'>
          <span>{site.contact[1]}</span>
          <span className='flex items-center gap-5'>
            <span>{site.contact[2]}</span>
            <span
              className='flex overflow-hidden rounded-full border border-paper/25'
              role='group'
              aria-label='Language'
            >
              {["EN", "FR"].map((l) => (
                <button
                  key={l}
                  type='button'
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-0.5 text-[11px] font-semibold transition-colors ${lang === l ? "bg-paper text-night" : "hover:bg-paper/10"}`}
                >
                  {l}
                </button>
              ))}
            </span>
          </span>
        </div>
      </div>
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${scrolled ? "py-3" : "py-4"}`}
      >
        <Link
          href='/'
          onClick={close}
          className='flex items-center gap-3 font-display text-2xl tracking-tight text-ink'
        >
          <svg viewBox='0 0 32 32' className='h-9 w-9' aria-hidden='true'>
            <rect width='32' height='32' rx='8' fill='#14284b' />
            <circle
              cx='16'
              cy='16'
              r='9'
              fill='none'
              stroke='#f8f6f1'
              strokeWidth='1.6'
            />
            <ellipse
              cx='16'
              cy='16'
              rx='4'
              ry='9'
              fill='none'
              stroke='#f8f6f1'
              strokeWidth='1.6'
            />
            <path d='M7 16h18' stroke='#f8f6f1' strokeWidth='1.6' />
            <circle cx='23' cy='9' r='2.6' fill='#c8322d' />
          </svg>
          {site.name}
        </Link>
        <nav
          className='hidden items-center gap-7 font-body text-sm text-ink/70 lg:flex'
          aria-label='Main'
        >
          {site.nav.map((l) =>
            l.href === "/programs" ? (
              <div
                key={l.href}
                className='group relative'
                data-shut={shut}
                onMouseLeave={() => setShut(false)}
              >
                <Link
                  href={l.href}
                  onClick={() => setShut(true)}
                  className={`flex items-center gap-1 ${link(l)}`}
                >
                  {l.label}
                  <svg
                    viewBox='0 0 12 12'
                    className='h-3 w-3 fill-none stroke-current stroke-2 transition-transform group-hover:rotate-180'
                    aria-hidden='true'
                  >
                    <path d='M2 4.5 6 8l4-3.5' />
                  </svg>
                </Link>
                <div className='mega absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-4'>
                  <div className='grid grid-cols-[1fr_1fr_1fr] gap-6 rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(20,40,75,.5)]'>
                    {GOALS.slice(0, 5).map((g) => (
                      <div key={g.id}>
                        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep'>
                          {g.label}
                        </p>
                        <ul className='space-y-1'>
                          {programs
                            .filter((p) => p.goal === g.id)
                            .map((p) => (
                              <li key={p.slug}>
                                <Link
                                  href={`/programs/${p.slug}`}
                                  onClick={() => setShut(true)}
                                  className='block rounded-lg px-2 py-1.5 text-sm text-ink transition-colors hover:bg-tint'
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href='/eligibility'
                      onClick={() => setShut(true)}
                      className='flex flex-col justify-between rounded-xl bg-deep p-4 text-paper'
                    >
                      <span className='font-display text-lg leading-snug'>
                        Not sure which one? Take the 5-question check.
                      </span>
                      <span className='mt-3 text-sm font-semibold text-paper underline underline-offset-4'>
                        Start →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} className={link(l)}>
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href={site.cta.href}
            className='hidden rounded-full bg-accent px-5 py-2.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep sm:inline-block'
          >
            {site.cta.label}
          </Link>
          <button
            type='button'
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className='flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden'
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-paper transition-[height] duration-500 lg:hidden ${open ? "h-[100dvh]" : "h-0"}`}
        inert={!open}
      >
        <div className='relative h-full'>
          <nav
            className={`absolute inset-0 overflow-y-auto px-6 pb-28 pt-6 transition-transform duration-500 ${panel === "prog" ? "-translate-x-full" : ""}`}
            aria-label='Mobile'
            inert={panel === "prog"}
          >
            {[{ href: "/", label: "Home" }, ...site.nav].map((l) =>
              l.href === "/programs" ? (
                <button
                  key={l.href}
                  type='button'
                  onClick={() => setPanel("prog")}
                  className='flex w-full items-center justify-between border-b border-line py-4 font-display text-2xl text-ink'
                >
                  {l.label}
                  <span className='text-accent' aria-hidden='true'>
                    →
                  </span>
                </button>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className='block border-b border-line py-4 font-display text-2xl text-ink'
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              href={site.cta.href}
              onClick={close}
              className='mt-6 block rounded-full bg-accent py-4 text-center font-body text-sm font-semibold text-white'
            >
              {site.cta.label}
            </Link>
          </nav>
          <nav
            className={`absolute inset-0 overflow-y-auto bg-paper px-6 pb-28 pt-6 transition-transform duration-500 ${panel === "prog" ? "" : "translate-x-full"}`}
            aria-label='Programs'
            inert={panel !== "prog"}
          >
            <button
              type='button'
              onClick={() => setPanel("main")}
              className='mb-2 py-2 font-body text-sm font-semibold text-accent-deep'
            >
              ← Back
            </button>
            {GOALS.map((g) => (
              <div key={g.id} className='border-b border-line py-4'>
                <p className='mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep'>
                  {g.label}
                </p>
                {programs
                  .filter((p) => p.goal === g.id)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/programs/${p.slug}`}
                      onClick={close}
                      className='block py-1.5 font-display text-xl text-ink'
                    >
                      {p.name}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
