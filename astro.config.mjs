// @ts-check
import { defineConfig } from "astro/config";

// Static output: every page is pre-rendered to HTML at build time.
// No adapter is needed because Cloudflare serves the ./dist folder directly.
export default defineConfig({
  site: "https://libredental.com",
  output: "static",
  trailingSlash: "ignore",
});
