import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://jamsa-cantina.pages.dev';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.endsWith('/404/')
    })
  ],
  site: siteUrl,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, 
    },
  },
});
