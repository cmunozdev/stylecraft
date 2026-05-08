// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://stylecraft.es",
  output: "static",
  build: {
    inlineStylesheets: "never"
  }
});
