// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vanessarosa.art',
  output: 'static',
  // robots.txt points at a sitemap, so one has to exist
  integrations: [sitemap()],

  // Portuguese is not built yet. When it is, uncomment — routes mirror at
  // /pt/ and the switcher keeps you on the same page.
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'pt'],
  //   routing: { prefixDefaultLocale: false },
  // },
});
