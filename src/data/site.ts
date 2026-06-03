export const site = {
  name: "Leamie Sulapas Domingo",
  location: "Butuan City, Philippines",
  tagline: "Student| Web Developer | Research Analyst",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "leamie.domingo@carsu.edu.ph",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://www.linkedin.com/in/leamie-sulapas-domingo-324041413/",
  github: "https://github.com/leamiedomingo",
  instagram: "https://www.instagram.com/just_lea432?igsh=aGc0MTQ4a201amJp",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I am a full-stack software engineer with hands-on experience in end-to-end product development, from requirements gathering and system planning to implementation, optimization, and long-term maintenance. I am currently part of ISySS-CDM, a three-year project where I work as a senior programmer and take on key responsibilities in data gathering, software development, architecture design, and making sure the codebase remains efficient, scalable, and maintainable as the project grows.

Beyond full-stack engineering, I also have a strong interest in immersive technologies and have previously contributed to a DOST-funded initiative, MARVELTechnologies, which focused on building AR/VR solutions through mining simulation use cases. That experience expanded my perspective on simulation-driven learning and interactive environments, and it strengthened my ability to design solutions across both traditional and emerging platforms.

I also work on mobile development using React Native and Flutter, and I continue to broaden my technical focus through DevOps automation, workflow improvement, and AI-powered solutions that help teams deliver faster, smarter, and with greater consistency.`; 

export const experience = [
  { role: "Database Developer", company: "CCIS-CSU", year: "2026" },
  { role: "Research Analyst", company: "CCSI-CSU", year: "2026" },
  { role: "Web Developer", company: "CCIS-CSU", year: "2025-2026" },
  { role: "BS Information System", company: "Caraga State University", year: "2021" },
  { 
   role: "Hello World", company: "Started my coding journey", year: "2022"
  },
  { role: "Research Assistant", company: "CCIS-CSU", year: "2025" },
  { role: "System Analyst", company: "BSIS-CSU", year: "2026" },
  { role: "Documentation Officer", company: "LGU", year: "2022-2024" },
  { role: "Seminar Participant", company: "Sangguniang Kabataan", year: "2023" },
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  modeling: [
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Unity Game Engine",
    "C#",
  ],
};

export const projects = [
  { name: "Corporate Payroll & Tax Compliance System", description: "Full-stack database system with 8 normalized tables, privacy-compliant PII handling under RA 10173, indexed queries, and masked employee data view. Built for ITE 16 — Database Management Systems." },
  { name: "AI Governance Readiness Research", description: "Academic research manuscript studying AI governance readiness and ChatGPT usage practices in higher education, comparing faculty and students at CSU using a UTAUT framework adapted from Bukhathoki et al. (2024)." },
  { name: "Personal Portfolio Website", description: "A clean, minimal personal portfolio built from scratch using HTML, CSS, and JavaScript. Deployed via Vercel with version control through GitHub." },
  { name: "Car Rental Management System", description: "Built a car rental system with vehicle inventory, booking management, and customer records using database integration." },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "TESDA NC Certificates",
    issuer: "TESDA",
    href: "#",
  },
  {
    name: "Coursera UX/UI Certification",
    issuer: "Google",
    href: "#",
  },
  {
    name: "SQL and Database Basics",
    issuer: "SoloLearn",
    href: "#",
  },
];

export const recommendations = [
  { quote: "Information systems are the backbone of modern organizations, enabling efficiency, innovation, and competitive advantage.", author: "James O'Brien", title: "Professor & Author" },
  { quote: "Every business is a software company. You have to start thinking and operating like a digital company.", author: "Satya Nadella", title: "CEO, Microsoft" },
  { quote: "Information is the oil of the 21st century, and analytics is the combustion engine.", author: "Peter Sondergaard", title: "Senior Vice President, Gartner Research" },
  { quote: "The goal of information technology is to automate and accelerate the flow of information to improve decision-making.", author: "Bill Gates", title: "Co-Founder, Microsoft" },
  { quote: "Data is not information, information is not knowledge, knowledge is not understanding, understanding is not wisdom.", author: "Clifford Stoll", title: "Astronomer & Author" },
  { quote: "An information system is not just technology — it is people, processes, and data working together.", author: "Kenneth Laudon", title: "Professor, New York University" },
  { quote: "Without data, you're just another person with an opinion.", author: "W. Edwards Deming", title: "Statistician & Management Consultant" },
  { quote: "The internet is becoming the town square for the global village of tomorrow.", author: "Bill Gates", title: "Co-Founder, Microsoft" },
];

export const memberships = [
  {
    name: "Information System Student Society - Caraga State University",
    href: "https://psite.org/",
  },
];
