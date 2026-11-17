Meridian Pathways

A demo website for a fictional immigration consultancy, built by MyClickAid for its portfolio gallery.

Live demo: https://meridian-demo.derin-obasa.workers.dev/

Not real immigration advice. Meridian Pathways, its consultant, licence, programs, timelines and eligibility information are fictional and illustrative. Nothing on this site is legal or immigration advice, and no forms send any data.

What it shows
Programs finder: tabs by goal (live, work, study, join family, visit), a Programs mega-menu on desktop and a drill-down menu on mobile.
"I want to…" hero panel: goal chips that open the eligibility check with the goal already chosen.
Eligibility check: five questions that point to programs worth discussing, with a progress bar.
Document checklist: pick a program, tick documents off and watch the progress bar fill.
Process timeline: five steps with a line that draws as you scroll.
Testimonials carousel, guides, FAQ and a booking form with a demo confirmation.
Details: an animated globe and stamp badge, a utility bar with a language toggle (visual only), a newsletter form in the footer, reduced-motion support, and keyboard-friendly menus.
Built with
Next.js (App Router, JavaScript, static export)
Tailwind CSS v4
Fonts: Fraunces and Work Sans, self-hosted with @fontsource
Hosted on Cloudflare
Getting started
bash
npm install
npm run dev

Open http://localhost:3000.

To create the production build (a static site in the out folder):

bash
npm run build
Project structure
app/
\_components/ Header, Footer, Globe, Stamp, ProgramFilter, ChecklistTool, ...
\_libs/ site.js, data.js, pictures.js, helpers.js
\_styles/ globals.css
programs/ Programs list and program pages
eligibility/ Eligibility check
checklist/ Document checklist
process/ How it works
about/ book/ About page and booking form
public/ Photos (.webp)
Photos

Photos are optional. Each slot shows a gradient placeholder until you add an image. Put the files in public/ and register them in app/\_libs/pictures.js:

Slot File Ratio
Hero mp-hero.webp 4:5
About mp-about.webp 4:5
Office mp-office.webp 4:3
Deployment

The site is a static export (output: "export" in next.config.mjs) and deploys to Cloudflare from this repository. Every push to the main branch rebuilds and redeploys it.

About MyClickAid

MyClickAid is a bespoke web design studio. This site is one of several demo projects that show what a custom-designed website can look like for different kinds of businesses.
