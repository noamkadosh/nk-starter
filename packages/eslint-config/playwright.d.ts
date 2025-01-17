import type { Linter } from "eslint"

type Playwright = {
  core: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/playwright" {
  const playwright: Playwright
  export default playwright
}
