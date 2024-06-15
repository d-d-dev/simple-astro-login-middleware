import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  output: 'server',
  integrations: [svelte(), tailwind()]
});