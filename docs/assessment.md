# Front End Test – Implementation Answers

This document captures the architectural decisions and forward-looking plans for the Ulaman Bali clone. Responses map directly to the required question set to ensure review clarity.

## Front End Implementation

### 1. Component Structure
- **Feature-first folders:** Components live under `src/features/site/` grouped by domain (hero, parallax, articles, offerings, footer). This keeps related UI, hooks, and styles together for easy reuse or extraction into standalone packages.
- **Presentation vs composition:** Leaf components (`HeroSection`, `ArticlesGrid`, etc.) accept typed props and remain stateless, while `SitePage` handles orchestration and data fetching. This separation makes it trivial to reuse sections on other routes or storybook scenarios.
- **Shared primitives:** A tiny `src/lib/utils.ts` hosts cross-cutting helpers (e.g., `cn`), and shared types in `src/types/site.ts` guarantee consistent data contracts between the UI, API routes, and potential CMS adapters.
- **Data-driven layouts:** Layouts consume typed content objects, so swapping the source (JSON → API → CMS) requires no component rewrites—only a new provider implementing the same shape.

### 2. State Management
- **TanStack Query for server data:** Anything that originates outside the component tree (site content, CMS data) flows through query clients to gain caching, retry, and hydration for free.
- **Local React state for UI micro interactions:** Toggles (e.g., mobile nav open/close) rely on `useState` within the component to avoid unnecessary global subscribers.
- **Decision rule:** If the value is required by more than one route or must survive navigations, it belongs in TanStack Query or another shared store. Otherwise keep it local to minimize complexity and re-renders.

### 3. Responsive Strategy
- **Tailwind breakpoints:** Utility classes (`sm:`, `md:`, `lg:`) capture breakpoint behavior inline, making the intent obvious. Components emphasize fluid widths, CSS grid, and flexbox to gracefully scale.
- **Viewport-safe spacing:** Layout sizes use `max-w-*` and `%`/`vw` rather than hard px values to maintain rhythm across devices.
- **Testing cadence:** Each module will be validated in browser dev tools with device presets and, if time allows, automated via Playwright visual comparisons.

### 4. Performance Optimization
- **Server-first data:** Pages prefetch TanStack Query data on the server and hydrate on the client, which avoids waterfalls.
- **Static assets:** Remote images leverage `next/image` with AVIF/WebP, while videos stream from CDN sources with poster fallbacks.
- **Incremental enhancements:** Future passes will add `generateStaticParams`, selective `dynamic = "error"` for static pages, `next/script` for deferred scripts, font subsetting, and bundle analysis.

## Data Management

### 5. Data Fetching (Local JSON)
- **CMS-like schema:** `src/data/site.json` stores sections (`hero`, `parallaxSlices`, `articles`, etc.) in a normalized fashion so each page or section can query only what it needs.
- **Typed contracts:** `src/types/site.ts` mirrors the JSON structure and protects against accidental shape drift as the dataset grows (e.g., adding `gallery` or `rooms` arrays).
- **Composable loaders:** `loadSiteContent()` reads the JSON once per request, letting server components or API routes reuse the same helper without duplicating parsing logic.

### 6. API Integration Patterns
- **Unified fetcher:** `fetchSiteContent()` abstracts the transport. On the server it returns JSON directly; on the client it falls back to `/api/content`.
- **TanStack Query defaults:** Retries, stale times, and error surfaces are centralized in the query client so callers only handle success data.
- **UI feedback:** Components rely on Suspense for loading states and a shared boundary will eventually render friendly error fallbacks (e.g., “Content unavailable, retry”).
- **Caching:** Query keys (`["site-content"]`) keep cache invalidation explicit. When swapping to a real API, simply layer in `queryClient.invalidateQueries` after mutations.

### 7. Content Structure (Rooms, Facilities, Gallery)
- **Hierarchical typing:** Extend `SiteContent` with sub-records (`rooms`, `facilities`, `gallery`) where each item includes metadata, media dimensions, and CTA links.
- **Relational references:** Use IDs so offerings can reference shared facilities or gallery assets without duplicating payloads.
- **Localization-ready:** Nest text fields inside objects keyed by locale to prepare for future multi-language support.

## Deployment & Infrastructure

### 8. Vercel Deployment Configuration
- **Project settings:** Enable Next.js default build target, set `NODE_OPTIONS=--trace-warnings` for debugging, and hook `npm run build`.
- **Next config:** Remote image patterns already include Unsplash; extend with production asset domains as they are finalized.
- **Edge optimizations:** Gradually introduce `segmentConfig` and route-based `revalidate` windows for content that can be cached at the edge.

### 9. Environment Setup
- **`.env.local`:** Local development uses `NEXT_PUBLIC_SITE_URL=http://localhost:3000`.
- **`.env.production`:** Set to the live domain (`https://retreat.example.com`) so metadata canonical URLs resolve correctly.
- **Secret management:** Any API keys (e.g., Filament token) stay in server-only env vars (`CMS_API_URL`, `CMS_API_KEY`) and are injected through Vercel’s Environment Variables UI.

### 10. Asset Optimization
- **Videos:** Hosted on performant CDNs (Coverr/Cloudinary). Use multiple sources, specify codecs, and lazy-load non-critical videos.
- **Images:** Prefer AVIF/WebP via `next/image`, define `sizes` attributes, and prefetch hero imagery.
- **Fonts:** Continue using `next/font` to subset Geist, and consider self-hosting custom typography if required for brand parity.

## CMS Integration (Bonus Plan)

### 11. API Design with Laravel Filament
- **Resource-based routes:** `/api/v1/rooms`, `/api/v1/facilities`, `/api/v1/gallery`, `/api/v1/articles`.
- **Filtering & pagination:** Allow query params (`?featured=true`, `?limit=6`) so the front end can mirror homepage widgets without extra logic.
- **Response envelope:** `{ data: [...], meta: { pagination }, included: [...] }` for future-proofing relationships.

### 12. Content Modeling
- **Core tables:** `rooms`, `facilities`, `articles`, `media_assets`, `tags`.
- **Pivot tables:** `facility_room`, `article_media` to model many-to-many relationships.
- **Versioning:** Track draft vs published states with status columns and timestamps to enable content scheduling.

### 13. Admin UX Priorities
- **Preview-first:** Instant preview panes or Livewire components so editors see parallax copy and hero layout before publishing.
- **Bulk media management:** Drag-and-drop galleries with auto-generated responsive variants.
- **Workflow tooling:** Role-based access, changelog history, and quick actions (duplicate room, schedule article).

## Best Practices

### 14. Code Organization for Collaboration
- **Conventional commits + lint-staged:** Enforce formatting and linting pre-commit, making PRs predictable.
- **Story-driven development:** Pair each UI component with Storybook stories (future work) to document states and accelerate review.
- **Clear boundaries:** Keep app-specific logic under `src/features`, shared utilities under `src/lib`, and ensure no component reaches across feature folders without an explicit import contract.

### 15. Error Handling Approach
- **Network:** TanStack Query retries once, then surfaces an error boundary slot. A reusable `<QueryError>` component will display context-aware messaging.
- **Data validation:** Decode API payloads with Zod (planned) before passing to UI, failing fast when schemas deviate.
- **UI safeguards:** Defensive checks (e.g., optional chaining on image media) prevent runtime crashes while logging anomalies for analysis.

---

*Prepared for Mind Interactive Media – Front End Test Batch October25.*
