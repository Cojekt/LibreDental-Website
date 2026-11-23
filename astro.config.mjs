// @ts-check
import { defineConfig } from "astro/config";

// Static output: every page is pre-rendered to HTML at build time.
// No adapter is needed because Cloudflare serves the ./dist folder directly.
export default defineConfig({
  site: "https://libredental.com",
  output: "static",
  trailingSlash: "ignore",
  // Astro 7 defaults to React-style whitespace rules, which drop the space
  // between text and a link when they're on separate lines in the source.
  // `true` still minifies the HTML, but never removes a space that shows.
  compressHTML: true,
});
