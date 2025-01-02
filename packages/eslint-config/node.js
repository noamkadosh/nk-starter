import nodePlugin from "eslint-plugin-n"

export default {
  core: [
    {
      ...nodePlugin.configs["flat/recommended-script"],
      name: "node",
      rules: {
        "n/exports-style": ["error", "module.exports"],
      },
    },
  ],
}
