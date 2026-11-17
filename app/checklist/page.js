import ChecklistTool from "../_components/ChecklistTool";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Document checklist" };

export default function ChecklistPage() {
  return (
    <div className='mx-auto max-w-4xl px-6 py-16'>
      <SectionHead
        eyebrow='Document checklist'
        title='Gather what you need, tick as you go'
        text='Pick a program and tick each document off. Illustrative lists only.'
      />
      <ChecklistTool />
    </div>
  );
}
