import Link from "next/link";
import Photo from "../_components/Photo";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className='mx-auto grid max-w-6xl items-start gap-14 px-6 py-16 sm:grid-cols-[1fr_1.2fr]'>
      <Photo
        id='about'
        label='Ravi Menon, licensed immigration consultant'
        swatch={["#e9eef5", "#3a6ea5"]}
        priority
        sizes='(min-width:640px) 40vw, 100vw'
        className='aspect-[4/5] w-full rounded-[2rem]'
      />
      <div className='max-w-prose sm:pt-4'>
        <h1 className='mb-6 text-4xl'>About Meridian Pathways</h1>
        <p className='mb-4 font-body leading-relaxed text-muted'>
          Meridian Pathways was founded by Ravi Menon, a licensed immigration
          consultant who arrived in Canada as an international student and went
          through most of the programs he now advises on.
        </p>
        <p className='mb-4 font-body leading-relaxed text-muted'>
          The practice is built on three promises: plain language, fixed fees
          agreed up front, and honesty about what is and is not likely to work.
        </p>
        <p className='mb-8 font-body leading-relaxed text-muted'>
          Ravi Menon and his licence are fictional and shown for this demo. A
          real practice would display its licence number and regulator here.
        </p>
        <Link
          href='/book'
          className='inline-block rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
        >
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
