import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "../asset"),
    },
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/asset": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/pdf": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
