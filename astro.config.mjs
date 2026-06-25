// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pillet-partners.ch',
  adapter: netlify(),
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.9,
      filter: (page) => !page.includes('/merci'),
    }),
  ],
});
