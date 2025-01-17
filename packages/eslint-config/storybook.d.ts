import type { Linter } from "eslint"

type Storybook = {
  core: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/storybook" {
  const storybook: Storybook
  export default storybook
}
