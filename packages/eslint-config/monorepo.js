import turbo from "eslint-plugin-turbo"

export default {
  turbo: [{ ...turbo.configs["flat/recommended"], name: "turbo" }],
}
