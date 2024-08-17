import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"
import { resolve } from "node:path"

export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            formats: ["es", "cjs"],
            fileName: "index",
        },
        rollupOptions: {
            external: ["next", "react", "react-dom", "react/jsx-runtime"],
        },
    },
})
