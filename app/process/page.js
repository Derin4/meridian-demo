import Link from "next/link";
import ProcessTimeline from "../_components/ProcessTimeline";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "How it works" };

export default function ProcessPage() {
  return (
    <div className='mx-auto max-w-3xl px-6 py-16'>
      <SectionHead
        eyebrow='How it works'
        title='Five clear steps, from first call to settling in'
      />
      <ProcessTimeline />
      <Link
        href='/book'
        className='mt-12 inline-block rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-deep'
      >
        Book a consultation
      </Link>
    </div>
  );
}
