# Website 

[![CI](https://github.com/rutujdhawale/website/actions/workflows/ci.yml/badge.svg)](https://github.com/rutujdhawale/website/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.dot.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

This repo powers my website at [rutuj.tech](https://rutuj.tech).

## What's Inside

- **Hero**: Local time, social links, and an interactive vinyl disc audio player.
- **Experience**: Add Experiences
- **Projects**: Add relevant projects
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
