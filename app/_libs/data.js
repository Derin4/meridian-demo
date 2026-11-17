// Fictitious, illustrative data for the Meridian Pathways demo. Not immigration advice.

export const programs = [
  {
    slug: "express-entry",
    name: "Express Entry",
    short: "Permanent residence for skilled workers",
    goal: "stay",
    who: "Skilled workers with post-secondary education, work experience and language test results.",
    needs: [
      "Language test results",
      "Education credential assessment",
      "Proof of work experience",
      "Passport and police certificates",
      "Proof of funds, where required",
    ],
    steps: [
      "Check eligibility and build a profile",
      "Enter the pool and improve your ranking",
      "Receive an invitation to apply",
      "Submit the full application",
      "Biometrics and medical exam",
      "Decision",
    ],
    time: "Several months from invitation to decision. Check current official processing times.",
  },
  {
    slug: "provincial-nominee",
    name: "Provincial Nominee Programs",
    short: "Nomination by a province that needs your skills",
    goal: "stay",
    who: "Workers and graduates with a connection to a province, or skills it is looking for.",
    needs: [
      "A job offer or strong local ties, depending on the stream",
      "Language and education evidence",
      "Proof of work experience",
      "Settlement plan",
    ],
    steps: [
      "Identify the right provincial stream",
      "Apply for nomination",
      "Receive the nomination",
      "Apply for permanent residence",
      "Decision",
    ],
    time: "Varies widely by province and stream.",
  },
  {
    slug: "study-permit",
    name: "Study Permits",
    short: "Study at a designated learning institution",
    goal: "study",
    who: "Students accepted by a designated learning institution.",
    needs: [
      "Letter of acceptance",
      "Proof of funds",
      "Passport",
      "Statement of purpose",
      "Medical exam, where required",
    ],
    steps: [
      "Receive your acceptance letter",
      "Gather funds and documents",
      "Submit the permit application",
      "Biometrics",
      "Decision and arrival",
    ],
    time: "Apply as early as possible. Check current official processing times.",
  },
  {
    slug: "work-permit",
    name: "Work Permits",
    short: "Temporary work in Canada",
    goal: "work",
    who: "People with a job offer, an employer-supported file, or an open-permit pathway such as a spouse of a student or worker.",
    needs: [
      "Job offer or employer documents",
      "Passport",
      "Proof of qualifications",
      "Police certificate, where required",
    ],
    steps: [
      "Confirm the right permit category",
      "Employer steps, if required",
      "Submit your application",
      "Biometrics",
      "Decision",
    ],
    time: "Depends on the category and where you apply from.",
  },
  {
    slug: "family-sponsorship",
    name: "Family Sponsorship",
    short: "Bring your spouse, partner or children",
    goal: "family",
    who: "Canadian citizens and permanent residents sponsoring eligible family members.",
    needs: [
      "Proof of relationship",
      "Sponsor and applicant forms",
      "Photos and identity documents",
      "Police and medical checks",
    ],
    steps: [
      "Confirm sponsor eligibility",
      "Prepare the sponsor and applicant packages",
      "Submit together",
      "Medical and background checks",
      "Decision",
    ],
    time: "Often longer than other programs. Check current official processing times.",
  },
  {
    slug: "visitor-visa",
    name: "Visitor Visas & Super Visa",
    short: "Visit family or travel to Canada",
    goal: "visit",
    who: "Visitors and parents or grandparents of Canadian citizens and permanent residents.",
    needs: [
      "Passport",
      "Invitation letter, where relevant",
      "Proof of funds and ties to home",
      "Medical insurance for a super visa",
    ],
    steps: [
      "Choose the right visa",
      "Prepare invitation and funds evidence",
      "Apply online",
      "Biometrics",
      "Decision",
    ],
    time: "Varies by country. Check current official processing times.",
  },
  {
    slug: "citizenship",
    name: "Citizenship Applications",
    short: "Become a Canadian citizen",
    goal: "stay",
    who: "Permanent residents who meet the time-in-Canada and language requirements.",
    needs: [
      "Proof of permanent residence",
      "Physical presence calculation",
      "Language evidence",
      "Tax filing history",
    ],
    steps: [
      "Check eligibility and physical presence",
      "Complete the application",
      "Submit",
      "Test and interview, if requested",
      "Oath ceremony",
    ],
    time: "Check current official processing times.",
  },
];

export const process = [
  {
    n: "01",
    title: "A free intro call",
    text: "Fifteen minutes to understand your situation and tell you honestly whether we can help.",
  },
  {
    n: "02",
    title: "A clear plan",
    text: "We recommend a pathway, the documents you need, the likely timeline and a fixed fee.",
  },
  {
    n: "03",
    title: "Document preparation",
    text: "We build the application with you, review every document and check it before it is submitted.",
  },
  {
    n: "04",
    title: "Submission and follow-up",
    text: "We submit, track your file and respond to any requests for more information.",
  },
  {
    n: "05",
    title: "Arrival and settling in",
    text: "Practical guidance for your first months, from banking to health cards.",
  },
];

export const testimonials = [
  {
    quote:
      "They told us honestly which route fitted our situation, and which one did not. We never felt sold to.",
    name: "Skilled worker, Express Entry",
  },
  {
    quote:
      "The checklist alone saved us weeks. Everything was in the right order the first time.",
    name: "Family sponsorship client",
  },
  {
    quote:
      "I had been refused once before. This time every document was explained and nothing was missing.",
    name: "Study permit client",
  },
];

export const faqs = [
  {
    q: "Are you a licensed consultant?",
    a: "In this fictional demo, yes: Ravi Menon is shown as a licensed immigration consultant. A real consultant would display their licence number here.",
  },
  {
    q: "How much do you charge?",
    a: "A fixed fee is quoted after the consultation, and we explain exactly what is included. The first fifteen-minute call is free.",
  },
  {
    q: "Can you guarantee approval?",
    a: "No one can. Decisions belong to the government. We make sure your application is complete, accurate and as strong as it can be.",
  },
  {
    q: "Do you work with people outside Canada?",
    a: "Yes. Consultations are by video call and we work with clients around the world.",
  },
];

// Illustrative quiz questions. The scoring lives in the Eligibility component.
export const quiz = [
  {
    id: "goal",
    q: "What are you hoping to do?",
    options: [
      ["stay", "Live in Canada permanently"],
      ["work", "Work in Canada for a time"],
      ["study", "Study in Canada"],
      ["family", "Join family in Canada"],
      ["visit", "Visit Canada"],
    ],
  },
  {
    id: "edu",
    q: "Your highest level of education?",
    options: [
      ["hs", "High school"],
      ["dip", "College diploma or trade"],
      ["bach", "Bachelor's degree"],
      ["grad", "Master's or doctorate"],
    ],
  },
  {
    id: "exp",
    q: "Years of skilled work experience?",
    options: [
      ["0", "Less than 1 year"],
      ["1", "1–2 years"],
      ["3", "3–5 years"],
      ["6", "More than 5 years"],
    ],
  },
  {
    id: "lang",
    q: "Have you taken an approved English or French test?",
    options: [
      ["yes", "Yes"],
      ["no", "Not yet"],
    ],
  },
  {
    id: "offer",
    q: "Do you have a job offer or acceptance letter in Canada?",
    options: [
      ["yes", "Yes"],
      ["no", "No"],
    ],
  },
];

// ---- Added for the redesign (fictitious, illustrative) ----

export const GOALS = [
  {
    id: "stay",
    label: "Live in Canada",
    short: "Permanent residence and citizenship",
  },
  { id: "work", label: "Work in Canada", short: "Temporary work permits" },
  { id: "study", label: "Study in Canada", short: "Study permits" },
  { id: "family", label: "Join family", short: "Family sponsorship" },
  { id: "visit", label: "Visit Canada", short: "Visitor and super visas" },
];

export const guides = [
  {
    tag: "Planning",
    title: "How to read a processing-time estimate",
    text: "Why the number you see is a starting point, and what can move it.",
  },
  {
    tag: "Choosing a path",
    title: "Study permit or work permit: which first?",
    text: "A simple way to compare the two routes before you spend anything.",
  },
  {
    tag: "Fees",
    title: "What a fixed fee should include",
    text: "Five questions to ask any consultant about what is and is not covered.",
  },
];

export const stamps = ["Licensed consultant", "Fixed fees", "Free intro call"];
