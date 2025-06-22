import path from "path";
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ mode }) => ({
  logLevel: "info", // Alterado para 'info' para mais detalhes em desenvolvimento
  publicDir: "static",
  server: {
    host: "::",
    port: 3000,
    open: true // Abre o navegador automaticamente ao iniciar o servidor
  },
  plugins: [react(), tailwindcss()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],

    css: true, // Ignore CSS files in tests
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    typecheck: {
      tsconfig: "./tsconfig.spec.json"
    },
    coverage: {
      reporter: ["lcov", "text"],
      provider: "v8",
      reportsDirectory: "coverage",
      all: true, // Incluindo todos os arquivos na cobertura
      include: ["src/**/*.{js,ts,jsx,tsx}"],
      exclude: ["**/*.spec.{js,ts,jsx,tsx}", "src/app"]
    }
  }
}));
