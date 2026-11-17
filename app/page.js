import Link from "next/link";
import Globe from "./_components/Globe";
import Photo from "./_components/Photo";
import ProcessTimeline from "./_components/ProcessTimeline";
import ProgramFilter from "./_components/ProgramFilter";
import Reveal from "./_components/Reveal";
import SectionHead from "./_components/SectionHead";
import Stamp from "./_components/Stamp";
import Testimonials from "./_components/Testimonials";
import { GOALS, faqs, guides } from "./_libs/data";

const TRUST = [
  ["Licensed consultant", "Fictional licence shown for the demo"],
  ["Fixed fees", "Agreed before any work starts"],
  ["Free intro call", "Fifteen minutes, no obligation"],
];

export default function HomePage() {
  return (
    <>
      <section className='relative overflow-hidden bg-night text-paper'>
        <Globe className='pointer-events-none absolute -right-24 -top-10 hidden h-[34rem] w-[34rem] opacity-30 lg:block' />
        <div className='relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.25fr_1fr] lg:py-24'>
          <div>
            <p className='fade-up mb-4 font-body text-sm tracking-widest text-paper/65'>
              IMMIGRATION CONSULTING
            </p>
            <h1
              className='fade-up mb-6 text-5xl leading-[1.05] sm:text-6xl'
              style={{ "--d": "100ms" }}
            >
              Your move to Canada, explained clearly.
            </h1>
            <p
              className='fade-up mb-8 max-w-prose font-body text-lg text-paper/75'
              style={{ "--d": "200ms" }}
            >
              Meridian Pathways guides individuals and families through study,
              work, family and permanent residence applications, with plain
              language and fixed fees.
            </p>
            <div
              className='fade-up rounded-3xl border border-paper/15 bg-paper/5 p-5 backdrop-blur'
              style={{ "--d": "300ms" }}
            >
              <p className='mb-3 font-display text-lg'>I want to…</p>
              <div className='flex flex-wrap gap-2'>
                {GOALS.map((g) => (
                  <Link
                    key={g.id}
                    href={`/eligibility?goal=${g.id}`}
                    className='rounded-full border border-paper/25 px-4 py-2 font-body text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent'
                  >
                    {g.label}
                  </Link>
                ))}
              </div>
            </div>
            <div
              className='fade-up mt-6 flex flex-wrap gap-4'
              style={{ "--d": "400ms" }}
            >
              <Link
                href='/book'
                className='rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
              >
                Book a consultation
              </Link>
              <Link
                href='/eligibility'
                className='self-center border-b border-paper/40 pb-1 font-body text-sm transition-colors hover:border-paper'
              >
                Check your options
              </Link>
            </div>
          </div>
          <div className='relative'>
            <Photo
              id='hero'
              label='A family arriving at an airport'
              swatch={["#3a6ea5", "#0c1a33"]}
              priority
              sizes='(min-width:1024px) 40vw, 100vw'
              className='aspect-[4/5] w-full rounded-[2rem]'
            />
            <Stamp className='absolute -bottom-6 -left-4 h-28 w-28 drop-shadow-lg sm:-left-8 sm:h-32 sm:w-32' />
          </div>
        </div>
      </section>

      <section className='border-b border-line bg-tint'>
        <div className='mx-auto grid max-w-6xl gap-6 px-6 py-6 text-center font-body text-sm sm:grid-cols-3'>
          {TRUST.map(([a, b]) => (
            <p key={a}>
              <strong className='block font-display text-xl'>{a}</strong>
              <span className='text-muted'>{b}</span>
            </p>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead
          eyebrow='Programs'
          title='Find the pathway that fits'
          text='Illustrative programs. Official rules and processing times change often.'
        />
        <ProgramFilter />
        <Link
          href='/programs'
          className='mt-8 inline-block font-body text-sm font-semibold text-accent-deep underline underline-offset-4'
        >
          See all programs
        </Link>
      </section>

      <section className='bg-deep text-paper'>
        <div className='mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr]'>
          <div>
            <SectionHead
              light
              eyebrow='Eligibility check'
              title='Not sure where to start?'
              text='Five quick questions point you to the programs worth discussing. Illustrative only, never a decision.'
              className='!mb-6'
            />
            <Link
              href='/eligibility'
              className='inline-block rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
            >
              Start the check
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            {["Education", "Experience", "Language", "Job offer"].map(
              (t, i) => (
                <Reveal
                  key={t}
                  delay={i * 80}
                  className='rounded-2xl border border-paper/15 bg-paper/5 p-4 text-center font-display text-lg'
                >
                  {t}
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='grid gap-12 lg:grid-cols-[1fr_1.2fr]'>
          <div>
            <SectionHead eyebrow='How it works' title='Five clear steps' />
            <Photo
              id='office'
              label='A consultation room with a world map'
              swatch={["#e9eef5", "#3a6ea5"]}
              sizes='(min-width:1024px) 40vw, 100vw'
              className='hidden aspect-[4/3] w-full rounded-3xl lg:block'
            />
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className='bg-tint'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <SectionHead center eyebrow='Clients' title='What clients say' />
          <Testimonials />
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 py-20'>
        <SectionHead
          eyebrow='Guides'
          title='Plain-language reading'
          text='Illustrative titles for the demo. A real practice would link full guides.'
        />
        <div className='grid gap-5 sm:grid-cols-3'>
          {guides.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 80}
              className='lift rounded-2xl border border-line bg-white p-6'
            >
              <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep'>
                {g.tag}
              </p>
              <h3 className='mb-2 text-xl'>{g.title}</h3>
              <p className='font-body text-sm text-muted'>{g.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-4xl px-6 pb-20'>
        <h2 className='mb-6 text-3xl'>Common questions</h2>
        <div className='divide-y divide-line border-y border-line'>
          {faqs.map((f) => (
            <details key={f.q} className='group py-4'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-body font-medium'>
                {f.q}
                <span
                  className='text-xl text-accent transition-transform group-open:rotate-45'
                  aria-hidden='true'
                >
                  +
                </span>
              </summary>
              <p className='mt-2 font-body text-sm text-muted'>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className='bg-night text-paper'>
        <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-14'>
          <p className='max-w-xl font-display text-3xl leading-snug'>
            Talk it through with a consultant. The first call is free.
          </p>
          <Link
            href='/book'
            className='rounded-full bg-accent px-8 py-4 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
