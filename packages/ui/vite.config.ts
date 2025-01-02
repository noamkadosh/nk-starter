import path from "node:path"
import { fileURLToPath } from "node:url"

import react from "@vitejs/plugin-react-swc"
import { globSync } from "glob"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["next", "react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        globSync("src/**/*.{ts,tsx}")
          .filter(
            (file) =>
              !file.startsWith("src/types/") &&
              !file.endsWith("types.ts") &&
              !file.includes(".stories.") &&
              !file.includes(".test.") &&
              !file.includes(".spec."),
          )
          .map((file) => [
            path.relative(
              "src",
              file.slice(0, file.length - path.extname(file).length),
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        chunkFileNames: "_chunks/[name].[hash].js",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, "tsconfig.app.json"),
      exclude: ["**/*.{test,stories}.*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
