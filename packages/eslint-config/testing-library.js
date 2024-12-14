import testingLibrary from "eslint-plugin-testing-library"

export default [
  {
    files: ["**/{test,tests}/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    ...testingLibrary.configs["flat/react"],
  },
]
