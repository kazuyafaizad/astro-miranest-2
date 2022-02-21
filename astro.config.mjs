// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { imagetools } from 'vite-imagetools';

import path from 'node:path';
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  renderers: ["@astrojs/renderer-preact"],
  buildOptions: {
    sitemap: true,
    site: 'https://astro.build/',
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
    plugins: [imagetools({format:'webp',force:true})],
    resolve: {
      alias: {
        $src: path.resolve('./src'),
        $components: path.resolve('./src/components'),
        $layouts: path.resolve('./src/layouts'),
        $pages: path.resolve('./src/pages'),
        $images: path.resolve('./src/images'),
      },
    },
  },
  buildOptions: {
    site: "http://test.miranest.jp",
    sitemap: true,
  },
  devOptions: {
    hostname: "0.0.0.0",
  },
});
