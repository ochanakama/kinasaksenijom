import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkSafeLinks from './src/plugins/remark-safe-links.mjs';

export default defineConfig({
  site: 'https://kinasaksenijom.com',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkSafeLinks],
  },
  trailingSlash: 'always',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
