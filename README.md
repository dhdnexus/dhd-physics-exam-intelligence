# DHD Physics Exam Intelligence (DHD-PEI)

A premium examination intelligence platform for undergraduate physics.

DHD-PEI is **not** a lesson platform — it does not teach physics concepts. It is built to organise, analyse and compare the raw material of undergraduate physics assessment: past examination papers, individual questions, worked solutions, documented misconceptions, difficulty rankings, and cross-university comparisons.

This repository currently contains the **architectural foundation** of the platform: routing, layout, navigation, and the design system. No examination data, question intelligence, or analytics are implemented yet — see [Roadmap](#roadmap) below.

---

## Vision

Undergraduate physics is examined differently at every institution, but very little tooling exists to study *how*. DHD-PEI's long-term purpose is to give students and educators a rigorous, evidence-based view of examination practice by building out, over time:

- **Examination Corpus** — an indexed, searchable collection of past papers
- **Question Intelligence** — individual questions extracted, tagged, and cross-referenced
- **Worked Solutions** — clear, structured solutions attached to each question
- **Misconceptions** — documented patterns of student error tied to topics
- **Difficulty Ranking** — a consistent, comparable measure of question difficulty
- **University Comparison** — how institutions differ in what and how they examine
- **Examination Analytics** — trends across topics, difficulty, and time

Every module above is a *future* module. This build establishes the shell they will live in.

---

## Tech Stack

| Layer | Choice |
|---|---|
| UI library | React 19 |
| Build tool | Vite |
| Language | TypeScript |
| Routing | React Router (v7) |
| Styling | Tailwind CSS (v4) |
| Component patterns | shadcn/ui-style primitives (cva, Radix-free) |
| Motion | Framer Motion |
| Icons | Lucide React |

---

## Installation

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:5173` by default.

Other scripts:

```bash
npm run build     # type-check (tsc -b) and produce a production build in dist/
npm run preview   # serve the production build locally
npm run lint       # run oxlint
```

---

## Folder Structure

```
src/
  app/                 Route table and app-level wiring
  components/
    layout/             AppShell, Logo, Footer, PageContainer, SectionHeading, EmptyState
    navigation/          Sidebar, TopNavbar, Breadcrumb
    exam/                Reserved for Session 2+ (Examination Corpus)
    analytics/           KpiCard now; charts/analytics in Session 7+
    solution/            Reserved for Session 4+ (Worked Solutions)
    ui/                  Design-system primitives (Button, Card, ...)
  pages/
    Dashboard/           Hero + KPI placeholders
    Corpus/               Examination Corpus (placeholder)
    Question/             Question Detail (placeholder, route: /question/:id)
    Universities/          Universities (placeholder)
    Analytics/             Analytics (placeholder)
    About/                 Product identity, mission, roadmap
  data/                 Static placeholder data (KPIs, nav config)
  hooks/                 Shared hooks (e.g. useBreadcrumbs)
  lib/                   Utilities and design tokens (cn, colors, fonts, radius)
  styles/                Global stylesheet and design tokens (Tailwind v4 @theme)
  types/                 Shared TypeScript types, including forward-declared domain models
public/                 Static assets (favicon)
docs/                   Project documentation
```

---

## Architecture Overview

**Routing.** All routes are declared in `src/app/routes.tsx` and rendered through `useRoutes` inside `App.tsx`. A catch-all (`*`) route renders a custom 404 page. Route transitions are lightly animated with Framer Motion.

| Path | Page |
|---|---|
| `/` | Dashboard |
| `/corpus` | Examination Corpus |
| `/question/:id` | Question Detail |
| `/universities` | Universities |
| `/analytics` | Analytics |
| `/about` | About |
| `*` | 404 Not Found |

**Layout.** `AppShell` composes `Sidebar`, `TopNavbar`, routed page content, and `Footer`. The sidebar is persistent on desktop (`lg` breakpoint and above) and collapses into an animated drawer on mobile, controlled from `TopNavbar`'s menu button. `PageContainer` gives every page a consistent max-width and padding; `SectionHeading` and `Breadcrumb` provide consistent page framing.

**Design system.** Colors, type, radius, and spacing are defined once as CSS custom properties in `src/styles/globals.css` (Tailwind v4 `@theme`) and mirrored in `src/lib/tokens.ts` for use in TypeScript (e.g. future chart color scales). The visual identity is an "examination archive" aesthetic: navy and gold, IBM Plex Serif for display type paired with Inter for UI/body text, a faint millimetre-grid texture, and gold corner ticks on index-card-style components (see `KpiCard`).

**Domain types.** `src/types/index.ts` forward-declares the data shapes later sessions will populate (`ExamPaper`, `ExamQuestion`, `WorkedSolution`, `Misconception`, `University`). These are unused placeholders in this build — they exist so the architecture is legible ahead of real data.

**Data.** `src/data/` currently holds only static configuration: sidebar navigation entries and placeholder KPI values for the Dashboard. No examination data exists yet.

---

## Roadmap

DHD-PEI is being built in eight sessions:

1. **Foundation & Architecture** *(this build)* — routing, layout, navigation, design system, placeholder pages
2. **Examination Corpus** — paper ingestion model, corpus browser, filtering by university/course/year
3. **Question Intelligence** — question extraction, tagging, and the question detail view
4. **Worked Solutions** — structured solution authoring and rendering
5. **Misconceptions** — misconception documentation and linking to topics/questions
6. **University Comparison** — university profiles and cross-institution comparison views
7. **Examination Analytics** — difficulty ranking, topic frequency, and trend analytics
8. **Stabilization & Delivery** — end-to-end verification, polish, and release packaging

---

## Status

**Session 1 of 8 — Foundation & Architecture: complete.**
Production build verified (`npm run build`), all routes confirmed to resolve, responsive navigation (persistent desktop sidebar / mobile drawer) verified. No examination data or feature modules are implemented yet.
