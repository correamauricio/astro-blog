import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  site: isNetlify 
    ? 'https://savantnexus.netlify.app' 
    : 'https://correamauricio.github.io',

  base: isNetlify ? '/' : '/astro-blog',
  integrations: [tailwind()],
});