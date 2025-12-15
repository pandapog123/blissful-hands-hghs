import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null, // set to 'index.html' for SPA fallback if needed
    }),
    prerender: {
      // prerender all discoverable routes
      entries: ["*"],
    },
  },
};

export default config;
