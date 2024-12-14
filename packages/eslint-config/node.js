import nodePlugin from "eslint-plugin-n"

export default [
  nodePlugin.configs["flat/recommended-script"],
  {
    rules: {
      "n/exports-style": ["error", "module.exports"],
    },
  },
]
