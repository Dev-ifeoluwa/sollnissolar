# Sollnis Solar

A Next.js 14 (App Router) + TypeScript + Tailwind CSS prototype for a solar
products company: an animated landing page and a filterable shop page
covering solar generators, inverters, charge controllers, panels, fans,
irons, street lights and accessories.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom design tokens in `tailwind.config.ts`
- **Framer Motion** — page-load reveals, hover states, animated filters
- **lucide-react** — icon set

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The shop lives at `/shop`, and category
cards on the landing page deep-link into it with `?category=`.

```bash
npm run build   # production build
npm run start   # serve the production build
```

Requires Node 18.17+.

## Project structure

```
app/
  layout.tsx        # fonts (Space Grotesk / Inter / JetBrains Mono), metadata
  page.tsx           # landing page composition
  shop/page.tsx       # shop page composition
  globals.css         # base styles, focus states, motion-path for the hero
components/
  Navbar.tsx, Footer.tsx
  Hero.tsx, PowerFlow.tsx      # animated sun → panel → battery → home diagram
  CategoryShowcase.tsx, FeaturedProducts.tsx, WhySollnis.tsx, CTASection.tsx
  ProductCard.tsx, ShopExperience.tsx   # search + category tabs + sort + grid
data/
  products.ts          # all product data lives here — this is your CMS for now
lib/
  types.ts, category-meta.tsx
```

## What's real vs. placeholder

- All product data (18 items across 8 categories) is **static**, in
  `data/products.ts`. There's no database or backend yet.
- "Request Quote" buttons and the contact links are **not wired to
  anything** — they render, but don't submit anywhere.
- Product visuals are **icon-based placeholders** (no photography), styled
  per-category, so the shop works with zero image assets.
- Pricing is in Naira and illustrative, not live.

## What I'd extend first

1. **Wire up "Request Quote"** — turn the button on `ProductCard` into a
   modal or route that posts to an email service (Resend) or a lightweight
   form endpoint, so enquiries actually reach the sales team.
2. **Move products into a CMS or database** — swap `data/products.ts` for
   Sanity/Contentful or a Postgres table + Prisma, so the shop can be
   updated without a code deploy. Keep the `Product` type in `lib/types.ts`
   as the contract.
3. **Real product photography** — replace the icon placeholders in
   `ProductCard` with an `<Image>` per product once you have shots; the
   gradient watermark can stay as a fallback for products without photos
   yet.
4. **A real product detail page** (`/shop/[id]`) — right now the shop is
   list-only; each card's data already has everything needed (specs,
   description, warranty) to build one with `generateStaticParams`.
5. **Cart / checkout**, if you want to sell online rather than just
   generate quote leads — Sollnis's business model (sized systems, quoted
   installs) may actually be better served by keeping "Request Quote" as
   the primary action and adding checkout only for small accessories.
6. **Analytics on category clicks and searches** in `ShopExperience` — you
   already have the filter state; hooking it to an analytics event tells
   you which categories to stock more of.
