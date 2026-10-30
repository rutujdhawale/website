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
    role: "Contributor",
    periodShort: "2025 — Present",
    periodLong: "2025 — Present",
    link: "https://github.com/kagent-dev/kagent",
    details: [
      "Contributing to cloud-native agentic AI workflows, multi-agent Kubernetes orchestrations, and autonomous system agents.",
    ],
  },
  {
    company: "Veermata Jijabai Technological Institute, Mumbai",
    role: "Bachelor of Technology (B.Tech)",
    periodShort: "2022 – 2026",
    periodLong: "2022 – 2026",
    locationShort: "Mumbai, IN",
    locationLong: "Mumbai, India",
    details: [
      "Electronics & Telecommunication",
    ],
  },
  {
    company: "krkn",
    role: "Contributor · CNCF",
    periodShort: "2024 — Present",
    periodLong: "2024 — Present",
    link: "https://github.com/krkn-chaos/krkn",
    details: [
      "Contributing to chaos and resiliency testing scenarios for Kubernetes clusters, failure injection automation, and cluster performance benchmarking under degraded states.",
    ],
  },
  {
    company: "Unified Mentor Private Limited",
    role: "Software Engineer Intern",
    periodShort: "Jun 25 – Aug 25",
    periodLong: "Jun 2025 – Aug 2025",
    locationShort: "Remote, IN",
    locationLong: "Remote, India",
    details: [
      "Implemented REST APIs, JWT-based authentication, role-based access control, and MongoDB integration to support secure user and campaign management. Developed Sahayog, a MERN-based crowdfunding platform, building reusable React components and responsive pages using Tailwind CSS.",
    ],
  },
];
