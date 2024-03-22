import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: 'https://heartandcode.co',
  integrations: [alpinejs(), tailwind(), sitemap(), icon(), sitemap()],
  output: "static",
});
