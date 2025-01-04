import eslintPluginAstro from "eslint-plugin-astro"

export default {
  core: [
    ...eslintPluginAstro.configs.recommended,
    {
      ignores: [".astro", "dist"],
    },
  ],
  a11y: eslintPluginAstro.configs["jsx-a11y-recommended"],
}
