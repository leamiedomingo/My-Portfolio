export const site = {
  name: "Leamie Sulapas Domingo",
  location: "Butuan City, Philippines",
  tagline: "Software Engineer | Web Developer ",
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

export const about = `I am a Bachelor of Science in Information Systems student at Caraga State University Main Campus in Butuan City. I am passionate about solving real-world problems through thoughtful systems design, data management, and emerging technologies.

My academic work spans database management, system analysis, and research on how artificial intelligence can be governed responsibly in academic settings. I enjoy collaborating with peers and finding ways data-driven solutions can create meaningful community impact.`; 

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

export const memberships = [
  {
    name: "Information System Student Society",
    href: "https://psite.org/",
  },
];
