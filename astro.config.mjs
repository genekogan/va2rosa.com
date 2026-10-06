// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import imageSizes from './src/integrations/image-sizes.mjs';

export default defineConfig({
  site: 'https://vanessarosa.art',
  output: 'static',
  // robots.txt points at a sitemap, so one has to exist; image-sizes gives
  // every picture its size and its smaller copies once the pages are built
  integrations: [sitemap(), imageSizes()],

  // Portuguese is not built yet. When it is, uncomment — routes mirror at
  // /pt/ and the switcher keeps you on the same page.
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'pt'],
  //   routing: { prefixDefaultLocale: false },
  // },
});
