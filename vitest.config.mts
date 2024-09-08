/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteRequire } from "vite-require";
import tsconfigPaths from "vite-tsconfig-paths";

// console.log(new URL("./", import.meta.url).pathname);

export default defineConfig({
  plugins: [tsconfigPaths(), react(), viteRequire()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    alias: {
      "@/": new URL("./", import.meta.url).pathname,
    },
    globals: true,
  },
});
