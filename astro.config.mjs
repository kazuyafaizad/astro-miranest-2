// astro.config.mjs
import { defineConfig } from "astro/config";
import { imagetools } from "vite-imagetools";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "http://miranest.jp",
  vite: {
    ssr: {
      external: ["svgo"]
    },
    server: {
      host: "0.0.0.0"
    },
    plugins: [imagetools()]
  },
  server: {
    host: true
  },
  integrations: [tailwind()]
});