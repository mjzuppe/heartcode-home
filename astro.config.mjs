import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  integrations: [alpinejs(), tailwind(), sitemap(), icon()],
  output: "static",
});
