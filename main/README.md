# Rutuj Dhawale — Personal Portfolio & Website

[![CI Build & Type Check](https://github.com/rutujdhawale/website/actions/workflows/ci.yml/badge.svg)](https://github.com/rutujdhawale/website/actions/workflows/ci.yml)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.dot.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Personal portfolio and engineering showcase for **Rutuj Dhawale** — AI Engineer, Systems Builder, and Full-Stack Developer based in Mumbai, India.

**Live Website:** [rutuj.tech](https://rutuj.tech) · **GitHub:** [@rutujdhawale](https://github.com/rutujdhawale)

---

## Features

- **Hero & Identity** — Bio, avatar, interactive music disc player with waveform visualizer, local timezone clock (`Asia/Kolkata`), quick-copy email button, and direct socials.
- **Experience** — Minimalist timeline showcasing contributions and roles:
  - **kagent** — Open-source contributor to cloud-native agentic AI workflows and autonomous systems.
  - **Veermata Jijabai Technological Institute (VJTI), Mumbai** — B.Tech in Electronics & Telecommunication (2022 – 2026).
  - **krkn** — Contributor to CNCF chaos engineering and Kubernetes resilience testing scenarios.
  - **Unified Mentor Private Limited** — Software Engineer Intern developing MERN REST APIs, JWT authentication, and responsive interfaces.
- **Featured Projects** — Detailed project portfolio with live demos, repositories, tech tags, and deep-dive pages:
  - **Hybrid RAG** — Terminal-based hybrid retrieval-augmented generation combining dense and sparse vector search with telemetry.
  - **StickerCanvas** — Tactile creative playground with on-device AI background removal (RMBG-1.4 via WebGPU), 60–120 FPS WebGL scene graph (PixiJS v8), and physical 300 DPI print export.
  - **FolderZip** — Client-side ASCII directory tree parser converting markdown tree structures directly into structured ZIP archives.
  - **Ninety+** — Live football telemetry and Premier League matchday analytics platform.
- **Live GitHub Activity** — Real-time contributions calendar and commit statistics fetched via GitHub API with built-in latency-tolerant timeouts.
- **Direct Resume Access** — Streamlined header navigation button opening cloud-hosted resume PDF directly.
- **Theme Support** — Seamless light and dark mode with persistence via `next-themes`.
- **Analytics & Web Vitals** — Integrated privacy-first Vercel Analytics tracking.
- **CI / CD Automation** — GitHub Actions workflow verifying TypeScript types, lint rules, and production Next.js builds on every push and pull request.

---

## Tech Stack

| Category | Tools & Libraries |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, React 19) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/), [Simple Icons](https://simpleicons.org/) |
| **UI Components** | Radix UI Primitives, Custom Liquid Glass Morphism Cards |
| **Theming** | `next-themes` |
| **Analytics** | `@vercel/analytics` |
| **CI / CD** | GitHub Actions |

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- `npm` (or `pnpm` / `bun`)

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/rutujdhawale/website.git
cd website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

### Build & Production

```bash
# Build production bundle
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI for lint, typecheck, and build
├── main/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout, analytics, fonts, meta tags
│   │   │   ├── page.tsx         # Home page composition
│   │   │   ├── projects/        # Projects grid & dynamic project detail pages
│   │   │   ├── resume/          # Embedded resume viewer fallback
│   │   │   ├── robots.ts        # Dynamic robots.txt
│   │   │   └── sitemap.ts       # Dynamic sitemap.xml
│   │   ├── components/          # Reusable UI cards, headers, footers, widgets
│   │   ├── config/              # Centralized data sources (projects, experience, hero)
│   │   └── lib/                 # Utilities, GitHub contribution fetcher, metadata helpers
│   └── public/                  # Static assets, fonts, icons, logos
├── package.json                 # Root script forwarding
└── README.md
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
