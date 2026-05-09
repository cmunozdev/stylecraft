// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://stylecrafts.es",
  output: "static",

  build: {
    inlineStylesheets: "never"
  },

  adapter: cloudflare()
});