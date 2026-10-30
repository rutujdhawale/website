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
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "hybrid-rag",
    title: "Hybrid RAG",
    date: "05.2026",
    description:
      "A terminal-based hybrid retrieval-augmented generation system combining dense and sparse vector search with real-time query telemetry.",
    tech: ["Python", "RAG", "Vector Search", "CLI"],
    tags: ["AI", "RAG", "LLM", "Python", "Vector Search", "CLI", "NLP"],
    href: "https://github.com/rutujdhawale/Hybrid-RAG",
    featured: true,
    cover: "/assets/projects/hrag.png",
    gradient: "from-teal-500/25 via-emerald-500/15 to-cyan-500/25",
    highlights: [
      "Terminal-based hybrid retrieval-augmented generation combining dense embeddings and sparse keyword matching.",
      "Real-time query latency telemetry and adaptive scoring for high-accuracy contextual retrieval.",
      "Zero-dependency local terminal UI with instant vector database indexing.",
    ],
  },
  {
    slug: "stickercanvas",
    title: "StickerCanvas",
    date: "06.2026",
    description:
      "An ultra-tactile creative playground and production-grade sticker sheet studio with on-device AI background removal (RMBG-1.4 via WebGPU/WASM), a 60–120 FPS WebGL scene graph (PixiJS v8), and physical 300 DPI print-ready export.",
    tech: ["Next.js", "React 19", "PixiJS v8", "WebGPU", "Hugging Face", "Tailwind CSS"],
    tags: ["AI", "WebGPU", "PixiJS", "Next.js", "React 19", "Creative Tools", "Tailwind CSS"],
    href: "https://github.com/rutujdhawale/StickCanvas",
    website: "https://stick-canvas.vercel.app",
    featured: true,
    cover: "/assets/projects/stickercanavs.png",
    gradient: "from-orange-500/25 via-rose-500/15 to-amber-500/25",
    highlights: [
      "⚡ 60–120 FPS WebGL 2D Scene Graph powered by PixiJS v8, supporting 100+ high-res sticker layers with multi-touch gestures and snap controls.",
      "🧠 On-Device Neural AI Background Removal (RMBG-1.4 via WebGPU / WASM fallback) for instant ~200ms subject extraction with 100% privacy.",
      "🖨️ Physical 300 DPI Print Sheet Exporter calibrated for standard A4 and US Letter sizes with automated bleed and scissor cutlines.",
    ],
  },
  {
    slug: "folderzip",
    title: "FolderZip",
    date: "05.2026",
    description:
      "Convert ASCII directory tree structures directly into downloadable ZIP archives with client-side parsing.",
    tech: ["TypeScript", "Next.js", "JSZip", "Tailwind CSS"],
    tags: ["Developer Tools", "TypeScript", "Next.js", "JSZip", "Utility", "Tailwind CSS"],
    href: "https://github.com/rutujdhawale/FolderZip",
    featured: true,
    cover: "/assets/projects/folderzip.png",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
    highlights: [
      "Client-side ASCII directory tree parsing converting text structures directly into structured folders and files.",
      "Instant in-browser ZIP generation using JSZip without uploading any file tree data to external servers.",
      "Lightweight, responsive interface with instant preview and download capabilities.",
    ],
  },
  {
    slug: "ninety-plus",
    title: "Ninety+",
    date: "04.2026",
    description:
      "A football analytics platform providing live Premier League matchday standings, fixtures, clubs, and news.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    tags: ["Sports Analytics", "React", "Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
    href: "https://github.com/rutujdhawale/Ninety-Plus",
    featured: true,
    cover: "/assets/projects/ninety+.png",
    gradient: "from-lime-500/25 via-green-500/15 to-emerald-500/25",
    highlights: [
      "Live Premier League matchday telemetry, dynamic league table calculations, and fixture calendars.",
      "Comprehensive club and player statistics with optimized responsive dashboards.",
      "Built with Next.js App Router and Tailwind CSS for instant page transitions and caching.",
    ],
  },
];
