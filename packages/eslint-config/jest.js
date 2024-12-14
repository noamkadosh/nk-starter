  import jest from "eslint-plugin-jest"
import jestDom from "eslint-plugin-jest-dom"

export default [
  {
    files: ["**/{test,tests}/**/*.{test,spec}.{ts,tsx}"],
    ...jest.configs["flat/recommended"],
    ...jestDom.configs["flat/recommended"],
    settings: {
      jest: {
        version: 27,
      },
    },
  },
]
