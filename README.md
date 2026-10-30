# Rutuj Dhawale | Personal Website & Portfolio

[![CI](https://github.com/rutujdhawale/website/actions/workflows/ci.yml/badge.svg)](https://github.com/rutujdhawale/website/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.dot.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Hey, I'm Rutuj Dhawale, an engineering student at VJTI Mumbai and a software engineer focused on AI systems, cloud-native workflows, and full-stack development.

This repo powers my personal portfolio at [rutuj.tech](https://rutuj.tech).

## What's Inside

- **Hero**: Quick bio, local time in Mumbai, one-click email copy, social links, and an interactive vinyl disc audio player.
- **Experience**:
  - **kagent**: Open-source contributor. Resolved AgentCard badge ribbon layouts (#952) and refactored tool identification from partial matching to full canonical references in ToolsSection and SelectToolsDialog.
  - **Veermata Jijabai Technological Institute (VJTI), Mumbai**
  - **krkn (CNCF)**: Open-source contributor. Hardened Netlify chat function error handling to return 400 Bad Request on malformed JSON instead of 500 server crashes, integrated test execution into contributing guides, and fixed redundant banners in chaos scenarios (#554).
  - **Unified Mentor Private Limited**: Software Engineer Intern. Built REST APIs, JWT authentication, and responsive React/Tailwind UI modules for the Sahayog crowdfunding platform.
- **Projects**:
  - **Hybrid RAG**: CLI-first hybrid retrieval-augmented generation combining dense vector embeddings with BM25 keyword search and live telemetry.
  - **StickerCanvas**: On-device AI creative studio with WebGPU background removal, 60-120 FPS WebGL scene graph (PixiJS), and 300 DPI print export.
  - **FolderZip**: Browser utility converting ASCII directory trees directly into downloadable ZIP archives with client-side parsing.
  - **Ninety+**: Premier League live matchday standings, dynamic club performance insights, and fixture analytics.
- **GitHub Activity**: Real-time contributions calendar fetched with latency fallbacks.
- **Direct Resume Access**: Quick header button opening my resume directly on Google Drive.
- **Theme**: Clean dark and light mode toggle.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Phosphor Icons
- **Analytics**: Vercel Analytics
- **CI / CD**: GitHub Actions (Windows runner: ESLint, TypeScript check, and Next.js production build)

## Local Setup

Clone and install dependencies:

```bash
git clone https://github.com/rutujdhawale/website.git
cd website
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Quality Checks

```bash
# Run ESLint
npm run lint

# Check TypeScript types
cd main && npx tsc --noEmit

# Production build
npm run build
```

## License

MIT
