# Restaurant Website

Static Astro site for a single-location, family-owned sit-down restaurant. The site is optimized for local SEO, ad landing traffic, and foot traffic. The menu is linked externally and is not maintained in this repo.

## Update Restaurant Details

Edit `src/data/info.json` for factual business data: address, phone, hours, menu URL, map links, social links, and image paths.

Edit `src/locales/es.js` for all visible copy: restaurant name, descriptions, navigation labels, CTAs, meta descriptions, image alt text, review quotes, and `llms.txt` text.

Also update:

- `astro.config.mjs` `site`
- `src/locales/es.js`
- Real gallery image URLs or local image files before launch

## Commands

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
