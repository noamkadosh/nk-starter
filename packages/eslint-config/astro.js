import eslintPluginAstro from "eslint-plugin-astro"

export default {
  core: [
    ...eslintPluginAstro.configs.recommended,
    {
      ignores: [".astro"],
    },
  ],
  a11y: eslintPluginAstro.configs["jsx-a11y-recommended"],
}
