# Ulaman Eco-Luxury Retreat – Front-End Test Foundation

This repository bootstraps the Next.js implementation for cloning **[ulamanbali.com](https://ulamanbali.com)** as part of the *Front End Test Batch October25*. It establishes the project baseline, tech stack, content scaffolding, and development workflows so that future iterations can focus on UI fidelity, responsiveness, and optional CMS integration.

## Project Highlights

- **Framework:** Next.js 15 (App Router) with React 19, TypeScript, and server-first rendering patterns.
- **Styling:** Tailwind CSS 4 with design tokens, layered gradients, and responsive utility-first layout primitives.

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

Mindmedia Front End quizes — Dendy Sapto Adi
================================================

Halo! I’m Dendy Sapto Adi, an Indonesian front-end programmer putting this for the Mindmedia quiz.

Front End Implementation
------------------------

### 1. Component Structure: How do you design component hierarchy to ensure reusability and maintainability?
The site is organised feature-first. Every section that you see on the landing page lives inside `src/features/site/components` as a “slice” component (for example `room-types-carousel-slice.tsx`, `experiences-collage-slice.tsx`, and so on). Each slice keeps its helper functions and subcomponents in the same file so it is easy to move or reuse the slice without hunting cross-file dependencies. Shared primitives type definitions in `src/types/site.ts`, utilities in `src/lib/utils.ts`, fonts under `src/fonts`, and Tailwind tokens in `src/app/tailwind-3-2-7.css`, sit one level up and stay completely stateless. With this layout, swapping slices, reordering sections, or powering them from a CMS becomes a matter of wiring different props without touching unrelated parts of the tree.

### 2. State Management: What approach do you use for state management (global vs local) and how do you decide between them?
I keep state as local as possible. The header tracks scroll position and overlay state with simple `useState` + `useEffect`, while both carousels rely on `useRef` and `useState` to manage scroll offsets. Data that needs to be shared across slices navigation items, footer content gets resolved once in `site-page.tsx` and then passed down through props. If a future requirement introduces shared business logic (authentication, cart, etc.), that’s when I’d consider a global store, but for this content-led site local state keeps things predictable and avoids extra dependencies.

### 3. Responsive Strategy: What techniques do you implement to ensure consistency across different screen sizes?
Tailwind’s breakpoint utilities (`sm:`, `lg:`, `xl:`) are applied directly where layout decisions happen. The shared `app-container` class ensures consistent gutters and max widths, while each slice adjusts spacing, flex direction, and visibility as the screen changes—for instance `hidden sm:block` toggles review badges in the header, and the carousels collapse navigation buttons on small screens. Because the responsive rules are colocated with the JSX, QA can trace any visual behaviour straight to its source.

### 4. Performance Optimization: What methods do you use to optimize bundle size and loading time in Nuxt.js/Next.js?
Next.js already gives us smart defaults, so I focus on playing nicely with them: every media-heavy slice uses `next/image` with meaningful `sizes`, derived data is memoised (`site-footer.tsx` merges menu items once per render), and components remain server-friendly so they can benefit from SSG/ISR. By leaning on Tailwind instead of a heavy component library, the client bundle stays slim. When a section is clearly below the fold, we can promote it to a dynamic import later, but at this stage the static slices already hydrate quickly.

Data Management
---------------

### 5. Data Fetching: If using local JSON, how do you structure data to be scalable for supporting multiple page types?
Local content sits inside `src/data/site.json` and mirrors the slice approach. I’d continue with an object like `{ layout: [{ type: "roomCarousel", props: {...} }, ...] }` so new page types only require new entries rather than code changes. TypeScript interfaces in `src/types/site.ts` enforce the shape, which is exactly how the hard-coded constants (room lists, footer links) are structured today.

### 6. API Integration: If creating custom API, what design patterns do you use for handling loading states, error handling, and caching?
My default pattern is a lightweight fetch wrapper that returns `{ data, error, status }`. Components can branch on those fields without guessing what went wrong. For caching and revalidation, I typically reach for SWR or React Query—both work well with Next.js and keep loading/error indicators consistent. Mutations would return optimistic updates so the UI stays snappy, while errors funnel through a single notification utility to avoid scattered toasts.

### 7. Content Structure: How do you organize content types (rooms, facilities, gallery) in a flexible data structure?
All content types share a core shape—ID/slug, title, description, media, and optional tags. In JSON it’s natural to keep them in separate arrays (as this repo currently does) but I’d also add relational links so facilities or galleries can be attached to rooms easily. In a CMS world that becomes collections with polymorphic references. The front end already consumes these shapes by mapping arrays; powering them from an API later will just swap the data source.

Deployment & Infrastructure
---------------------------

### 8. Vercel Deployment: What configurations are needed for optimal performance on Vercel?
I rely on Next.js defaults and then fine-tune: set the allowed image domains, enable ISR for slices that can be cached, and make sure `next.config.js` (not committed yet) sets compression and headers when needed. Preview deployments per branch let designers review slices before they hit main. If we add serverless API routes like the prototype in `src/app/api/content/route.ts`. we ensure they stay stateless so Vercel can scale them easily.

### 9. Environment Setup: How do you set up environment variables for development vs production?
Locally, variables go into `.env.local`; production values live in Vercel’s dashboard. Sensitive keys never get the `NEXT_PUBLIC_` prefix, while anything the browser needs is explicitly declared. I like to provide an `.env.example` so new teammates can see what needs to be filled in this is on the internal to-do list below.

### 10. Asset Optimization: What is your strategy for optimally handling images, fonts, and static assets?
Images use the built-in `<Image>` component with descriptive alt text and proper sizing, fonts are self-hosted under `src/fonts` and can easily be wired into `next/font` to reduce layout shifts, and static SVGs/icons live in `public/`. Larger background media references CDN URLs from Prismic so we don’t bloat the repo and still benefit from caching headers upstream.

CMS Integration (Bonus Points)
------------------------------

### 11. API Design: If implementing Laravel Filament, how do you design the REST API structure for frontend consumption?
I’d group endpoints by resource (`/api/rooms`, `/api/facilities`, `/api/pages/:slug`) and return `{ data, meta }` payloads using Laravel API Resources to keep formatting consistent. but still on progesss

### 12. Content Modeling: What is your database design approach to support dynamic content management?
Core tables capture the main entities (rooms, facilities, packages, media). Page compositions live in a `page_slices` table that stores slice type, order, and JSON props. That mirrors the React slices and aligns nicely with Filament’s repeaters/blocks, letting editors rearrange sections without requesting schema migrations.

### 13. Admin UX: What features are important in the admin panel to facilitate easy content management?
Editors appreciate drag-and-drop ordering, inline previews, validation hints, and role-based permissions. I’d also add publish scheduling, status badges (draft/live), and quick links to related media or translations. These quality-of-life touches reduce back-and-forth with developers and keep the content calendar moving.

Best Practices
--------------

### 14. Code Organization: How do you structure the project to facilitate collaboration and future development?
The repo follows Next.js conventions (`src/app` for routing, `src/features` for domain features, `src/lib` for helpers) so new engineers can find things quickly. Each slice exports a single component, TypeScript keeps contracts honest, and linting/formatting (ESLint, Prettier) maintain consistency. This layout scales well for collaboration because each PR usually touches just one slice folder plus any shared assets.

### 15. Error Handling: What is your approach to handling different types of errors (network, data, UI) gracefully?
I separate concerns: network errors are caught in the fetch layer and surfaced via a shared notification/toast system; data errors are prevented with TypeScript and runtime guards before they reach the UI; unexpected UI crashes fall back to React error boundaries so the page stays usable. For observability I hook into a logging service (Sentry or similar) so we spot issues before users report them.

Admin Links
-----------

- Filament Admin: http://147.93.107.169:11020/admin/login  
  - Email: `admin@gmail.com`  
  - Password: `admin`
