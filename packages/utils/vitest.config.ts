/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
