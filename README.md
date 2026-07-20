# BuildCalc

Free construction material calculators built with Vue 3, TypeScript, Vite SSG, and static GitHub Pages deployment.

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

The app is configured for the GitHub Pages project path:

```txt
https://max179.github.io/BuildCalc/
```

`npm run build` generates `dist/`, pre-renders static routes, creates `sitemap.xml`, and copies the SSG 404 page to `dist/404.html`.

`npm run deploy` force-pushes the built `dist/` output to the `gh-pages` branch.

## Environment

- `VITE_AMAZON_TAG`: optional Amazon affiliate tag appended to BuyBox links.
- `VITE_ADSENSE_CLIENT`: optional AdSense client id. Ad units also need a slot prop before a live ad is rendered.

## Notes

Calculator results are planning estimates. Verify local code requirements, product coverage, waste factors, and supplier quantities before purchase.
