import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://savantnexus.netlify.app",
  vite: {
    plugins: [tailwind()],
  },
});