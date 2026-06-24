// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace with the real production domain before deploy.
const SITE = 'https://talos-automatisation.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  server: { port: Number(process.env.PORT) || 4321 },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: { cssMinify: 'esbuild' },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
