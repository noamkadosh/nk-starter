import type { Linter } from "eslint"

type Vitest = {
  core: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/vitest" {
  const vitest: Vitest
  export default vitest
}
