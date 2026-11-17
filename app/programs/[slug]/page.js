import Link from "next/link";
import { notFound } from "next/navigation";
import ChecklistTool from "../../_components/ChecklistTool";
import { programs } from "../../_libs/data";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  return { title: p ? p.name : "Programs" };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = programs.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <div className='mx-auto max-w-5xl px-6 py-16'>
      <Link
        href='/programs'
        className='font-body text-sm text-muted hover:text-ink'
      >
        ← All programs
      </Link>
      <h1 className='fade-up mb-2 mt-4 text-5xl'>{p.name}</h1>
      <p
        className='fade-up mb-10 max-w-prose font-body text-lg text-muted'
        style={{ "--d": "100ms" }}
      >
        {p.short}
      </p>

      <div className='grid gap-12 md:grid-cols-[1.3fr_1fr]'>
        <div className='space-y-10'>
          <section>
            <h2 className='mb-2 text-2xl'>Who it is for</h2>
            <p className='font-body text-muted'>{p.who}</p>
          </section>
          <section>
            <h2 className='mb-4 text-2xl'>Typical steps</h2>
            <ol className='relative space-y-4 pl-12'>
              <span
                className='absolute bottom-3 left-[15px] top-3 w-0.5 bg-line'
                aria-hidden='true'
              />
              {p.steps.map((s, i) => (
                <li key={s} className='relative font-body text-sm'>
                  <span className='absolute -left-12 top-[-4px] flex h-8 w-8 items-center justify-center rounded-full bg-deep font-display text-sm text-paper'>
                    {i + 1}
                  </span>
                  <span className='block pt-1'>{s}</span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className='mb-2 text-2xl'>Timeline</h2>
            <p className='font-body text-muted'>{p.time}</p>
          </section>
        </div>
        <aside className='space-y-6 self-start'>
          <ChecklistTool key={slug} initial={slug} fixed />
          <div className='rounded-2xl bg-deep p-6 text-paper'>
            <p className='mb-4 font-display text-xl'>
              Talk it through with a consultant.
            </p>
            <Link
              href='/book'
              className='inline-block rounded-full bg-accent px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
            >
              Book a consultation
            </Link>
          </div>
        </aside>
      </div>

      <div className='mt-16 border-t border-line pt-8'>
        <h2 className='mb-4 text-xl'>Other programs</h2>
        <div className='flex flex-wrap gap-3'>
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/programs/${o.slug}`}
              className='rounded-full border border-line bg-white px-4 py-2 font-body text-sm transition-colors hover:border-accent hover:text-accent'
            >
              {o.name}
            </Link>
          ))}
        </div>
      </div>
      <p className='mt-10 font-body text-xs text-muted'>
        Illustrative information only, not legal or immigration advice.
      </p>
    </div>
  );
}
