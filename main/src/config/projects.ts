export type ProjectFeature = {
  category: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  description: string;
  tech: string[];
  tags: string[];
  href: string;
  website?: string;
  featured?: boolean;
  cover?: string;
  gradient: string;
  overview: string;
  features: ProjectFeature[];
};

export const projects: Project[] = [
  {
    slug: "hybrid-rag",
    title: "Hybrid RAG",
    tagline: "Terminal-based hybrid retrieval-augmented generation combining dense and sparse vector search.",
    date: "05.2026",
    description:
      "A terminal-based hybrid retrieval-augmented generation system combining dense and sparse vector search with real-time query telemetry.",
    tech: ["Python", "RAG", "Vector Search", "CLI"],
    tags: ["AI", "RAG", "LLM", "Python", "Vector Search", "CLI", "NLP"],
    href: "https://github.com/rutujdhawale/Hybrid-RAG",
    featured: true,
    cover: "/assets/projects/hrag.png",
    gradient: "from-teal-500/25 via-emerald-500/15 to-cyan-500/25",
    overview:
      "A high-performance CLI-first hybrid retrieval-augmented generation (RAG) system combining dense vector search and sparse BM25 scoring for pinpoint context retrieval and minimal latency.",
    features: [
      {
        category: "Hybrid Retrieval Engine",
        points: [
          "Combines dense semantic embeddings with BM25 keyword matching using Reciprocal Rank Fusion (RRF).",
          "Eliminates hallucination caused by vocabulary mismatch in technical documentation.",
        ],
      },
      {
        category: "Real-Time Terminal Telemetry",
        points: [
          "Live terminal dashboard monitoring embedding latencies, token consumption, and retrieval scores.",
          "Zero-latency local vector indexing with private offline inference.",
        ],
      },
      {
        category: "Adaptive Document Ingestion",
        points: [
          "Automated chunking and sliding window overlap for PDFs, Markdown, and source code files.",
          "Contextual compression to filter out irrelevant paragraphs before prompt construction.",
        ],
      },
    ],
  },
  {
    slug: "stickercanvas",
    title: "StickerCanvas",
    tagline: "Ultra-tactile creative playground & 300 DPI sticker sheet studio.",
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
    overview:
      "An on-device AI creative studio and sticker sheet design workspace. Combines photos, digital art, and emoji into vinyl die-cut stickers with ~200ms background removal, a 60–120 FPS WebGL scene graph, and physical 300 DPI print-ready export.",
    features: [
      {
        category: "60–120 FPS WebGL Scene Graph (PixiJS v8)",
        points: [
          "Custom high-throughput 2D WebGL rendering engine handling 100+ sticker layers with zero lag.",
          "RAF-coalesced transforms synchronizing touch, trackpad, and mouse moves with native refresh rates.",
          "Multi-touch gestures: 1-finger drag, 2-finger pinch zoom, pan, and 15° rotation snapping.",
        ],
      },
      {
        category: "On-Device Neural AI Background Removal",
        points: [
          "Powered by RMBG-1.4 via @huggingface/transformers running 100% on local GPU/CPU (WebGPU / WASM fallback).",
          "Zero cloud latency, complete user privacy, and automated main-body saliency detection.",
        ],
      },
      {
        category: "Physical 300 DPI Print Sheet Studio",
        points: [
          "True-to-scale calibrated exports for A4 and US Letter sizes with automated bleed and cut guides.",
          "Real-time vinyl die-cut borders and physical contact shadows.",
        ],
      },
    ],
  },
  {
    slug: "folderzip",
    title: "FolderZip",
    tagline: "Client-side ASCII directory tree converter to downloadable ZIP archives.",
    date: "05.2026",
    description:
      "Convert ASCII directory tree structures directly into downloadable ZIP archives with client-side parsing.",
    tech: ["TypeScript", "Next.js", "JSZip", "Tailwind CSS"],
    tags: ["Developer Tools", "TypeScript", "Next.js", "JSZip", "Utility", "Tailwind CSS"],
    href: "https://github.com/rutujdhawale/FolderZip",
    featured: true,
    cover: "/assets/projects/folderzip.png",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
    overview:
      "An instant in-browser developer utility converting ASCII and Unicode folder tree representations directly into structured, ready-to-use downloadable .zip archives.",
    features: [
      {
        category: "100% Client-Side In-Browser Generation",
        points: [
          "All parsing and archive creation executes locally via JSZip; zero file structure data leaves your browser.",
          "Handles standard Unicode box-drawing characters (├──, └──, │, |--).",
        ],
      },
      {
        category: "Smart Hierarchy Detection",
        points: [
          "Automatically differentiates between nested directories and files based on syntax and file extensions.",
          "Instant ZIP archive generation and one-click download.",
        ],
      },
    ],
  },
  {
    slug: "ninety-plus",
    title: "Ninety+",
    tagline: "Football telemetry & live Premier League matchday analytics.",
    date: "04.2026",
    description:
      "A football analytics platform providing live Premier League matchday standings, fixtures, clubs, and news.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    tags: ["Sports Analytics", "React", "Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
    href: "https://github.com/rutujdhawale/Ninety-Plus",
    featured: true,
    cover: "/assets/projects/ninety+.png",
    gradient: "from-lime-500/25 via-green-500/15 to-emerald-500/25",
    overview:
      "A modern football analytics platform delivering real-time Premier League matchday standings, dynamic club performance insights, fixtures, and news tracking.",
    features: [
      {
        category: "Live Standings & Matchday Telemetry",
        points: [
          "Real-time table updates, goal differential calculations, and recent form guides.",
          "Interactive fixture calendars and club head-to-head records.",
        ],
      },
      {
        category: "Sleek Responsive Architecture",
        points: [
          "Built with Next.js App Router and Tailwind CSS for instant transitions and high accessibility.",
          "Optimized static caching with client-side telemetry hydration.",
        ],
      },
    ],
  },
];
