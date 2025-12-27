import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

export default defineConfig(
    {
      site: "https://example.com",
      integrations: [icon(), sitemap(), react(), mdx(), partytown()],

      vite: {
        plugins: [tailwindcss()]
      }
    }
    // sitemap({
    //     filter: (page) => page !== "https://example.com/about",
    // })
);

// TODO: can remove robots file if you want.