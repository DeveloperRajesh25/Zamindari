# Zamindari Restaurant

A premium multi-page website for **Zamindari Restaurant** — authentic Andhra cuisine served inside a restored colonial-era bungalow in Maharani Peta, Visakhapatnam.

> *Where Heritage Meets the Table.*

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

The `postbuild` step runs `next-sitemap` and generates `public/sitemap.xml` + `public/robots.txt`.

## Routes

| Route            | Page                                |
|------------------|-------------------------------------|
| `/`              | Home — hero, signature dishes, story, ambiance, reviews, booking, map |
| `/menu`          | Full menu — soups, appetizers, mains, biryani, south indian, desserts |
| `/about`         | Our Story — the bungalow, the kitchen, the experience  |
| `/gallery`       | Masonry gallery with custom lightbox + filter chips    |
| `/reservations`  | Reservation form (react-hook-form + zod) + summary card |
| `/contact`       | Contact info, map, message form, Instagram strip       |
| `/api/reserve`   | POST endpoint — validates and logs reservation         |
| `*` (not found)  | Editorial 404 page                                     |

## Folder map

```
src/
├── app/
│   ├── layout.tsx                root layout, fonts, metadata, JSON-LD
│   ├── page.tsx                  home
│   ├── globals.css               tokens + utilities
│   ├── menu/page.tsx
│   ├── about/page.tsx
│   ├── gallery/{page,GalleryClient}.tsx
│   ├── reservations/page.tsx
│   ├── contact/{page,ContactForm}.tsx
│   ├── api/reserve/route.ts
│   └── not-found.tsx
├── components/
│   ├── layout/   Navbar · Footer · PageTransition
│   ├── home/     Hero · HeritageStrip · SignatureDishes · StorySection · AmbianceShowcase · ReviewsCarousel · BookingCTA · LocationMap
│   ├── menu/     MenuTabs · MenuSection · MenuItem · FloatingReserveCTA
│   ├── ui/       Button · Eyebrow · Divider · SectionHeading · Reveal · ImageFallback · ElephantMark
│   └── shared/   ReservationForm · ContactInfo
├── data/         site.ts · menu.ts · reviews.ts
└── lib/          motion.ts · utils.ts
```

## Design tokens

Defined as CSS variables in `src/app/globals.css` and exposed to Tailwind via `tailwind.config.ts`:

| Token              | Hex       | Usage                              |
|--------------------|-----------|------------------------------------|
| `--zamindari-bg-cream`   | `#F8F4ED` | Page background                |
| `--zamindari-ink`        | `#1C1814` | Primary text                   |
| `--zamindari-burgundy`   | `#5A1A1A` | Brand, primary CTAs            |
| `--zamindari-gold`       | `#C9A961` | Accent, dividers, hover        |
| `--zamindari-gold-soft`  | `#E8D9B0` | Hover, subtle backgrounds      |
| `--zamindari-charcoal`   | `#2A2622` | Footer, dark sections          |
| `--zamindari-terracotta` | `#B85C38` | Secondary accent, errors       |
| `--zamindari-paper`      | `#FFFFFF` | Cards on cream                 |
| `--zamindari-line`       | `#E5DCC9` | Hairline borders               |

Typography: **Fraunces** (display), **Inter** (body), **Cormorant Garamond** (italic flourishes), all loaded via `next/font`.

## Images

All photography paths under `public/images/` are placeholders for now. The `<ImageFallback />` component renders a warm-toned gradient with the filename in serif italic text whenever the image is missing — drop your real photos into the same paths and they take over automatically.

Expected paths are listed in `src/components/home/SignatureDishes.tsx`, `src/app/gallery/GalleryClient.tsx`, and `src/components/home/AmbianceShowcase.tsx`.

## SEO

- Title template + per-page `metadata` exports
- OpenGraph + Twitter cards (`/images/og-image.jpg`)
- JSON-LD `Restaurant` schema in root layout (address, geo, hours, rating, cuisine)
- `next-sitemap` generates sitemap + robots.txt at build time

Set the canonical URL via `SITE_URL` env var before building for production:

```
SITE_URL=https://zamindari.com npm run build
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — accept the defaults.
4. (Optional) Add `SITE_URL` as an environment variable.
5. Deploy.

## Reservations API

`POST /api/reserve` accepts JSON matching the form schema. The current implementation logs the payload to the server console; swap in an email/CRM integration when ready.

## Accessibility

- Semantic HTML throughout (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- Visible gold focus ring on every interactive element
- Form fields have `aria-invalid`, `aria-describedby` for errors, and proper label/input association
- All animations respect `prefers-reduced-motion`
- Alt text on every image describes the actual scene

## Tech stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-hook-form](https://react-hook-form.com/) + [zod](https://zod.dev/)
- [Lucide React](https://lucide.dev/) icons
- [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)

---

© Zamindari Restaurant · Crafted with care in Visakhapatnam
