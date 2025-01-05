import eslintPluginAstro from "eslint-plugin-astro"

export default {
  core: [
    ...eslintPluginAstro.configs.recommended.map((config) => ({
      ...config,
      files: ["**/*.astro"],
      ignores: [".astro", "dist"],
    })),
  ],
  a11y: [
    ...eslintPluginAstro.configs["jsx-a11y-recommended"].map((config) => ({
      ...config,
      files: ["**/*.astro"],
      ignores: [".astro", "dist"],
    })),
  ],
}
