# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Liga Canaria de Basket** - Official portal for the Canarian Basketball League (Canelones, Uruguay). A Next.js 15 application featuring fixtures, standings, clubs, venues (sedes), news, and tournament information with rich 3D/interactive components.

### Tech Stack
- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS v4 + CSS custom properties for theming
- **Animation**: Motion (Framer Motion v12)
- **Language**: TypeScript (strict mode)
- **Fonts**: Bebas Neue, Inter, Syne (via next/font/google)
- **Package Manager**: pnpm

## Common Commands

```bash
# Development
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
pnpm clean        # Clean Next.js cache (.next/)

# Type checking
pnpm tsc --noEmit # Run TypeScript type check (via Next.js build)
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts, global styles
│   ├── page.tsx            # Homepage - composes all sections
│   ├── clubes/page.tsx     # Clubs listing page
│   ├── estadisticas/page.tsx # Statistics/standings page
│   ├── noticias/page.tsx   # News/articles page
│   ├── sedes/page.tsx      # Venues map page
│   └── torneo/page.tsx     # Tournament page
├── components/             # React components (all client-side)
│   ├── Navbar.tsx          # Floating glassmorphism navigation
│   ├── LiveScoreboardBar.tsx # Sticky live scores bar
│   ├── Hero3D.tsx          # 3D parallax hero section
│   ├── 3DTeamsCarousel.tsx # 3D tilted teams carousel
│   ├── TournamentSplitSection.tsx # 65/35 split screen
│   ├── EpicMomentsNewspaperCarousel.tsx # Vintage newspaper carousel
│   ├── InteractiveCanelonesMap.tsx # Interactive map of Canelones
│   ├── LeaderboardSection.tsx # Trading card style leaderboard
│   ├── SocialSection.tsx   # Social media section
│   ├── Footer.tsx          # Editorial magazine footer
│   ├── FixtureModal.tsx    # Interactive fixture modal
│   └── AccessibilityWidget.tsx # Floating accessibility controls
├── data/
│   └── ligaData.ts         # All league data (clubs, venues, matches, standings, articles)
└── app/globals.css         # Global styles, CSS variables, animations
```

## Key Data Structures (src/data/ligaData.ts)

- **Club**: 15 teams across SERIE A (9) and SERIE B (6) with colors, logos, stats
- **Venue**: 8 venues with capacity, surface, coordinates for map
- **Match**: Fixtures with round, date, time, venue, scores, status
- **Standing**: League tables for both series (pos, pj, pg, pp, pf, pc, dif, pts)
- **Article**: Editorial articles with tags, summaries, images

## Design System

### Color Palette (CSS Variables in globals.css)
```css
--azul-rey: #0B2B6B;        /* Royal Blue - primary */
--azul-rey-dark: #061A42;   /* Dark Blue - text/background */
--verde-vibrante: #28B838;  /* Vibrant Green - accent */
--verde-vibrante-bright: #32D643; /* Bright Green */
--amarillo-brillante: #FFE600; /* Brilliant Yellow - highlight */
--amarillo-hover: #E6D000;  /* Yellow hover */
--gris-deportivo: #F4F6F8;  /* Light gray */
--gris-borde: #E2E8F0;      /* Border gray */
```

### Typography
- **Display/Headlines**: Syne (700/800) + Bebas Neue fallback
- **Body/UI**: Inter
- **Special**: Bebas Neue for editorial tags, navigation

### Custom Utilities (globals.css)
- `.perspective-1000`, `.perspective-2000` - 3D perspective
- `.transform-style-3d`, `.backface-hidden` - 3D transforms
- `.animate-float` - Floating animation
- `.pulse-yellow` - Yellow pulse animation
- `.nav-backdrop` - Glassmorphism backdrop blur
- `.editorial-clip-1/2`, `.editorial-tag` - Newspaper clip effects

### Accessibility Modes (via AccessibilityWidget)
- `html.font-scale-large` (115%)
- `html.font-scale-xlarge` (130%)
- `html.high-contrast` (filter + forced outlines)
- `html.reduce-motion` (disables animations/transitions)

## Component Patterns

### Client Components
All components use `'use client'` directive. State is managed locally with `useState`. No global state management (Redux, Context) currently.

### Props Pattern
Components receive callbacks for modal/navigation control:
```tsx
<Navbar onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />
<Hero3D onOpenFixtureModal={...} />
```

### Motion/Animation
Uses `motion` (Framer Motion) for:
- Scroll-triggered animations (`whileInView`)
- Hover/tap transitions
- 3D transforms and parallax
- Staggered children animations

## Image Handling

- Local images in `public/equipos/` (team logos) and `public/banners/`
- Remote images from Unsplash/Pexels (configured in `next.config.ts`)
- `next/image` used throughout with proper sizing

## Deployment

- **Vercel** (configured in `.vercel/`)
- Build output: `standalone` on non-Windows platforms
- Environment variables in `.env.local` (see `.env.example`)

## Working with Data

All league data is in `src/data/ligaData.ts`. To update:
1. Modify the exported arrays (CLUBES_CANELONES, SEDES_CANELONES, etc.)
2. Types are defined at top of file (Club, Venue, Match, Standing, Article)
3. Images referenced by path or URL - add new images to `public/equipos/` or use remote

## Adding New Pages

1. Create `src/app/nueva-pagina/page.tsx`
2. Import components from `../components/`
3. Data from `../../data/ligaData`

## Linting Notes

- ESLint config extends `eslint-config-next` only
- `eslint.ignoreDuringBuilds: true` in next.config.ts
- Run `pnpm lint` manually before committing