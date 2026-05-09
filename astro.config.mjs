import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from '@twodft/astro-icon';
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.shunyamark.com",
  
  output: 'server',        // or 'static' if you don't need SSR
  adapter: cloudflare({
    // Optional: platformProxy for better local dev
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [
    icon(),
    sitemap(),
    lottie(),
    react(),
    markdoc(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
