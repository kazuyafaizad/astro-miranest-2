// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
import { imagetools } from "vite-imagetools";
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  renderers: ["@astrojs/renderer-preact"],
  vite: {
    // for example only - adapt for your own project
    plugins: [imagetools({ force: true })],
  },
});
