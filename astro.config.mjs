import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // CHANGE THIS after Vercel gives you your real URL (example: https://dhyeypatel.vercel.app)
  site: 'https://dhyeyp.vercel.app',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
