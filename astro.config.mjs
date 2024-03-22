import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  trailingSlash: "never",
  integrations: [tailwind(), sitemap(), icon()],
  output: "server",
});
