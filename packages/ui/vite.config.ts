import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"
import path from "node:path"

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            fileName: "index",
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["next", "react", "react-dom", "react/jsx-runtime"],
        },
    },
    plugins: [
        react(),
        dts({
            tsconfigPath: path.resolve(__dirname, "tsconfig.app.json"),
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
