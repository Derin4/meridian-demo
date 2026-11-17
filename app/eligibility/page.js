import { Suspense } from "react";
import Eligibility from "../_components/Eligibility";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Eligibility check" };

export default function EligibilityPage() {
  return (
    <div className='mx-auto max-w-4xl px-6 py-16'>
      <SectionHead
        eyebrow='Eligibility check'
        title='Five questions, a clearer starting point'
        text='Answer a few questions and see which programs may be worth discussing. Illustrative only.'
      />
      <Suspense fallback={null}>
        <Eligibility />
      </Suspense>
    </div>
  );
}
