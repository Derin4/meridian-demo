import ProgramFilter from "../_components/ProgramFilter";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <SectionHead
        eyebrow='Programs'
        title='What we help with'
        text='Summaries are illustrative. Your consultant will confirm what applies to you.'
      />
      <ProgramFilter />
    </div>
  );
}
