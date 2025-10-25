# Ulaman Eco-Luxury Retreat – Front-End Test Foundation

This repository bootstraps the Next.js implementation for cloning **[ulamanbali.com](https://ulamanbali.com)** as part of the *Front End Test Batch October25*. It establishes the project baseline, tech stack, content scaffolding, and development workflows so that future iterations can focus on UI fidelity, responsiveness, and optional CMS integration.

## Project Highlights

- **Framework:** Next.js 15 (App Router) with React 19, TypeScript, and server-first rendering patterns.
- **Styling:** Tailwind CSS 4 with design tokens, layered gradients, and responsive utility-first layout primitives.
- **Data Layer:** Local JSON (`src/data/site.json`) shaped like a CMS. A Next.js Route Handler (`/api/content`) exposes the same shape as an API for easy migration to external data sources.
- **State & Fetching:** TanStack Query v5 with hydration and prefetch logic to bridge server data loading with client-side interactivity.
- **Feature Skeleton:** Parallax storytelling, fullscreen hero video, curated articles, offerings list, and reusable layout components aligned with ulamanbali.com’s structure.
- **Tooling:** Custom ESLint flat-config, TypeScript strict mode, and ready-to-run lint, build, and dev scripts.

## Getting Started

```bash
npm install

# run locally on http://localhost:3000
npm run dev

# type-check + lint
npm run lint

# production build preview
npm run build
npm run start
```

### Environment Variables

- `NEXT_PUBLIC_SITE_URL` – Optional. Set to the canonical production URL. If unset, the app falls back to `https://www.ulamanbali.com`.

## Directory Outline

```
src/
├── app/
│   ├── api/content/route.ts    → Route handler exposing the site JSON as an API.
│   ├── layout.tsx              → Global fonts, metadata, React Query provider.
│   ├── page.tsx                → Server component prefetching TanStack Query data.
│   └── providers.tsx           → React Query provider composition.
├── data/site.json              → CMS-shaped content source.
├── features/site/…             → Hero, parallax, articles, offerings, footer components.
├── lib/…                       → Data loaders & shared utilities.
└── types/site.ts               → Strong typing for all content structures.
```

## Development Notes

- The hero section streams a remote rainforest video via `<video>` with autoplay, playsInline, and muted attributes to match the original site’s motion language.
- Parallax slices use a lightweight scroll listener to translate layered gradients without introducing heavy animation libraries.
- All media assets are remote (Unsplash / Coverr) until the real brand assets are prepared. Update `src/data/site.json` or connect the fetcher to an API to swap them.
- Tailwind’s design tokens (colors, radii, typography) are exposed via CSS custom properties for easy theming and future designer collaboration.

## Roadmap & Next Steps

1. **Pixel Parity:** Replace placeholder imagery, tune typography, and align spacing per design audits.
2. **Responsiveness:** Validate breakpoints on tablets and small devices, introduce tests with Playwright (optional).
3. **Data Backends:** Swap `fetchSiteContent` to pull from a Laravel Filament API without changing UI components.
4. **Performance:** Add image preloads, font subsetting, smooth scrolling, and RSC streaming strategies.
5. **Deployment:** Configure `vercel.json`, set environment variables, and deploy to Vercel. Push the repository to GitHub as requested.

## Assessment Answers

All 15 detailed answers required by the brief live in [`docs/assessment.md`](docs/assessment.md). They cover component architecture, state management, responsiveness strategy, data modelling, deployment considerations, CMS integration concepts, and best practices.

---

**© 2025 Mind Interactive Media.** This starter is for evaluation purposes only and is structured to evolve into a production-ready clone with optional CMS integration.
