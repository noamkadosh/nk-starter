import type { Linter } from "eslint"

type Jsx = {
  a11y: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/jsx" {
  const jsx: Jsx
  export default jsx
}
