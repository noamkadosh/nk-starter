import type { Linter } from "eslint"

type TestingLibrary = {
  core: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/testing-library" {
  const testingLibrary: TestingLibrary
  export default testingLibrary
}
