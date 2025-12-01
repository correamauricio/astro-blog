import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  site: isNetlify 
    ? 'https://savantnexus.netlify.app' 
    : 'https://correamauricio.github.io',

  base: isNetlify ? '/' : '/astro-blog',
});