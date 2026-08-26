# osull.io

Personal site for David O'Sullivan — independent full stack developer.

## Stack

- Next.js 16 (App Router, static export via Netlify)
- React 19
- Tailwind CSS v4
- Geist / Geist Mono via `next/font`

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Content

Everything editable lives in two files:

- `lib/site.ts` — name, role, location, social links, contact email, services list, tech stack
- `lib/projects.ts` — the product cards, including each card's mono badge, accent colour and link

Design tokens (colours, radii) are CSS variables in `app/globals.css`, exposed to Tailwind through `@theme inline`.
