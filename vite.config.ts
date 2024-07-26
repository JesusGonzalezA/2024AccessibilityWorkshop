import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["specs/setUpTests.ts"],
  },
  plugins: [
    mkcert({
      savePath: "./certs",
    }),
    react(),
  ],
})
