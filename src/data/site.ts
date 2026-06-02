export const site = {
  name: "Leamie Sulapas Domingo",
  location: "Butuan City, Philippines",
  tagline: "Student | Web Developer ",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "leamie.domingo@carsu.edu.ph",
  linkedin: "https://www.linkedin.com/in/leamie-sulapas-domingo-324041413/",
  github: "https://github.com/leamiedomingo",
  instagram: "https://www.instagram.com/just_lea432?igsh=aGc0MTQ4a201amJp",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I am a Bachelor of Science in Information Systems student at Caraga State University Main Campus in Butuan City. I am passionate about solving real-world problems through thoughtful systems design, data management, and emerging technologies.

My academic work spans database management, system analysis, and research on how artificial intelligence can be governed responsibly in academic settings. I enjoy collaborating with peers and finding ways data-driven solutions can create meaningful community impact.`; 

export const experience = [
  { role: "Senior Programmer", company: "ISySS-CDM CSU", year: "2026" },
  { role: "Systems Analyst", company: "DA-BAFE ABEMIS3.0", year: "2025" },
  { role: "Part Time Faculty", company: "CCIS-CSU", year: "2024" },
  { role: "Evaluator", company: "FaMRIA, DA BAFE", year: "2024" },
  {
    role: "Master of Science in Information Tech",
    company: "Caraga State University",
    year: "2024",
  },
  { role: "Junior Developer", company: "MARVELTechnologies", year: "2022" },
  { role: "Admin Staff", company: "OWWA Caraga", year: "2019-2022" },
  { role: "BS Information Technology", company: "Caraga State University", year: "2019" },
  { role: "Hello World", company: "Started my coding journey", year: "2015" },
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
  { name: "Corporate Payroll & Tax Compliance System", description: "Full-stack database system with 8 normalized tables, privacy-compliant PII handling under RA 10173, indexed queries, and masked employee data view. Built for ITE 16 — Database Management Systems.",
  { name: "AI Governance Readiness Research", description: "Academic research manuscript studying AI governance readiness and ChatGPT usage practices in higher education, comparing faculty and students at CSU using a UTAUT framework adapted from Budhathoki et al. (2024).", 
  { name: "Personal Portfolio Website", description: "A clean, minimal personal portfolio built from scratch using HTML, CSS, and JavaScript. Deployed via Vercel with version control through GitHub.", 
];


export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "SPARK Technical Training for Blockchain Cryptocurrency Specialist Certification",
    issuer: "Department of Information and Communications Technology",
    href: "#",
  },
  {
    name: "Coursera UX/UI Certification",
    issuer: "Google",
    href: "#",
  },
  {
    name: "Project Management",
    issuer: "University of the Philippines",
    href: "#",
  },
];

export const recommendations = [
  { quote: "Information System Student Society", author: "Carly Fiorina", title: "(CEO) of Hewlett-Packard (HP)" },
  { quote: "Information technology and business are becoming inextricably interwoven.", author: "Bill Gates", title: "Philanthropist, Investor, and Co-founder of Microsoft." },
  { quote: "In each business, there is a process, or a delivery system or information system, that is changing rapidly under them.", author: "Ken Moelis", title: "Founder and Executive Chairman of Moelis & Company" },
];

export const memberships = [
  {
    name: "Information System Student Society - Caraga State University",
    href: "https://psite.org/",
  },
];
