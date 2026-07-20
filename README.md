# BuildCalc

Free construction material calculators built with Vue 3, TypeScript, Vite SSG, and Cloudflare Pages deployment.

## Features

- 8 static calculators: concrete, paint, flooring, mulch, gravel, drywall, tile, and roofing.
- Formula logic lives in `src/lib` with Vitest coverage.
- SEO pages are pre-rendered with canonical URLs, Open Graph metadata, FAQ schema, article schema, and sitemap generation.
- Calculator metadata, guide content, legal pages, source credits, and affiliate links are data-driven.

## Scripts

```sh
npm install
npm run dev
npm run check
npm test
npm run lint
npm run build
```

## Deployment

The app is configured for Cloudflare Pages:

```txt
https://buildcalc-tools.pages.dev/
```

`npm run build` generates `dist/`, pre-renders static routes, creates `sitemap.xml`, and copies the SSG 404 page to `dist/404.html`.

Cloudflare Pages should be connected to `Max179/BuildCalc` on the `main` branch with:

```txt
Build command: npm run build
Build output directory: dist
Root directory: /
```

## Environment

- `VITE_AMAZON_TAG`: optional Amazon affiliate tag appended to BuyBox links.
- `VITE_ADSENSE_CLIENT`: optional AdSense client id. Ad units also need a slot prop before a live ad is rendered.

## Notes

Calculator results are planning estimates. Verify local code requirements, product coverage, waste factors, and supplier quantities before purchase.
