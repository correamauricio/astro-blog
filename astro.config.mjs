import { defineConfig } from 'astro/config';

const isNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  site: isNetlify 
    ? 'https://savantnexus.netlify.app' 
    : 'https://correamauricio.github.io',

  base: isNetlify ? '/' : '/astro-blog',
});