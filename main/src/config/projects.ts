export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  tags: string[];
  href: string;
  website?: string;
  featured?: boolean;
  cover?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "hybrid-rag",
    title: "Hybrid RAG",
    date: "05.2026",
    description:
      "A terminal-based hybrid retrieval-augmented generation system combining dense and sparse vector search with real-time query telemetry.",
    tech: ["Python", "RAG", "Vector Search", "CLI"],
    tags: ["AI", "RAG", "LLM", "Python", "Vector Search", "CLI"],
    href: "https://github.com/rutujdhawale/rag",
    featured: true,
    cover: "/assets/projects/hrag.png",
    gradient: "from-teal-500/25 via-emerald-500/15 to-cyan-500/25",
  },
  {
    slug: "stickercanvas",
    title: "StickerCanvas",
    date: "06.2026",
    description:
      "Tactile sticker playground and studio with on-device AI background removal and 300 DPI print export.",
    tech: ["Next.js", "React 19", "PixiJS v8", "WebGPU", "Hugging Face", "Tailwind CSS"],
    tags: ["AI", "WebGPU", "PixiJS", "Next.js", "React", "Creative Tools"],
    href: "https://github.com/rutujdhawale/StickCanvas",
    website: "https://stick-canvas.vercel.app",
    featured: true,
    cover: "/assets/projects/stickercanvas.png",
    gradient: "from-orange-500/25 via-rose-500/15 to-amber-500/25",
  },
  {
    slug: "folderzip",
    title: "FolderZip",
    date: "05.2026",
    description:
      "Convert ASCII directory tree structures directly into downloadable ZIP archives with client-side parsing.",
    tech: ["TypeScript", "Next.js", "JSZip", "Tailwind CSS"],
    tags: ["Developer Tools", "TypeScript", "Next.js", "Utility"],
    href: "https://github.com/rutujdhawale/FolderZip",
    featured: true,
    cover: "/assets/projects/folderzip.png",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
  },
  {
    slug: "ninety-plus",
    title: "Ninety+",
    date: "04.2026",
    description:
      "A football analytics platform providing live Premier League matchday standings, fixtures, clubs, and news.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    tags: ["Sports Analytics", "React", "Next.js", "TypeScript"],
    href: "https://github.com/rutujdhawale/90Plus",
    featured: true,
    cover: "/assets/projects/ninety-plus.png",
    gradient: "from-lime-500/25 via-green-500/15 to-emerald-500/25",
  },
];
