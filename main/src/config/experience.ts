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
      "Resolved UI occlusion in AgentCard by implementing a flexible ribbon badge layout. Refactored tool resolution from partial string matching to canonical full-reference equality across ToolsSection and SelectToolsDialog, eliminating duplicate tool registrations and ensuring deterministic description rendering.",
    ],
  },
  {
    company: "Veermata Jijabai Technological Institute, Mumbai",
    role: "Bachelor of Technology (B.Tech)",
    periodShort: "2022 - 2026",
    periodLong: "2022 - 2026",
    locationShort: "Mumbai, IN",
    locationLong: "Mumbai, India",
    details: [
      "",
    ],
  },
  {
    company: "krkn",
    role: "Contributor (CNCF)",
    periodShort: "2026 - Present",
    periodLong: "2026 - Present",
    link: "https://github.com/krkn-chaos/krkn",
    details: [
      "Hardened serverless chat function error handling by isolating JSON payload validation, returning a clean 400 Bad Request on malformed inputs rather than uncaught 500 server crashes. Integrated test suite execution into contributor workflows, and eliminated redundant banner state across etcd split-brain and IO Hog chaos scenarios (#554).",
    ],
  },
  {
    company: "Unified Mentor Private Limited",
    role: "Software Engineer Intern",
    periodShort: "Jun 2025 - Aug 2025",
    periodLong: "Jun 2025 - Aug 2025",
    locationShort: "Remote, IN",
    locationLong: "Remote, India",
    details: [
      "Engineered REST APIs with JWT authentication, role-based access control (RBAC), and MongoDB pipelines for user and campaign workflows. Built responsive frontend modules for the Sahayog crowdfunding platform using React and Tailwind CSS.",
    ],
  },
];
