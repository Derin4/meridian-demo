import DemoForm from "../_components/DemoForm";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Book a consultation" };

export default function BookPage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr]'>
      <div>
        <SectionHead
          eyebrow='Book a consultation'
          title='Tell us about your situation'
          text='The first fifteen-minute call is free. Every consultation is confidential.'
        />
        <DemoForm
          prefix='MP'
          submitLabel='Request consultation (demo)'
          successTitle='Consultation requested'
          successText='We will email you available times within one business day.'
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "country",
              label: "Country you are in now",
              required: true,
            },
            {
              name: "goal",
              label: "What are you hoping to do?",
              type: "select",
              options: [
                "Live in Canada permanently",
                "Work in Canada",
                "Study in Canada",
                "Join family in Canada",
                "Visit Canada",
                "Citizenship",
                "Not sure",
              ],
              required: true,
            },
            {
              name: "notes",
              label: "Anything else we should know?",
              type: "textarea",
            },
          ]}
        />
      </div>
      <aside className='self-start bg-tint p-7 font-body text-sm'>
        <h2 className='mb-3 font-display text-2xl'>What happens next</h2>
        <ol className='list-decimal space-y-2 pl-5 text-muted'>
          <li>We read your request and reply with times.</li>
          <li>You have a free fifteen-minute video call.</li>
          <li>If we can help, you receive a clear plan and a fixed fee.</li>
        </ol>
      </aside>
    </div>
  );
}
