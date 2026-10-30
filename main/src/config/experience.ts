export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort?: string;
  locationLong?: string;
  working?: boolean;
  details?: string[];
  link?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "kagent",
    role: "Contributor (CNCF)",
    periodShort: "2025 - Present",
    periodLong: "2025 - Present",
    link: "https://github.com/kagent-dev/kagent",
    details: [
      "Fixed AgentCard UI occlusion with an adaptive ribbon badge. Refactored tool resolution to full-reference equality across ToolsSection and SelectToolsDialog, preventing duplicate registrations.",
    ],
  },
  {
    company: "Veermata Jijabai Technological Institute, Mumbai",
    role: "Bachelor of Technology (B.Tech)",
    periodShort: "2022 - 2026",
    periodLong: "2022 - 2026",
    locationShort: "Mumbai, IN",
    locationLong: "Mumbai, India",
    link: "https://vjti.ac.in/",
  },
  {
    company: "krkn",
    role: "Contributor (CNCF)",
    periodShort: "2026 - Present",
    periodLong: "2026 - Present",
    link: "https://github.com/krkn-chaos/krkn",
    details: [
      "Hardened serverless chat function error handling to return 400 Bad Request on invalid JSON payloads instead of 500 server crashes. Added test execution steps to contributing guides and cleaned redundant banners across chaos docs.",
    ],
  },
  {
    company: "Unified Mentor Private Limited",
    role: "Software Engineer Intern",
    periodShort: "2025 - Aug 2025",
    periodLong: "2025 - Aug 2025",
    locationShort: "Remote, IN",
    locationLong: "Remote, India",
    link: "https://unifiedmentor.com/",
    details: [
      "Engineered secure REST APIs with JWT auth, RBAC, and MongoDB for user workflows. Developed responsive frontend components for the Sahayog crowdfunding platform using React and Tailwind CSS.",
    ],
  },
];
