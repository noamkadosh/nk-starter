import type { Linter } from "eslint"

type Node = {
  core: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/node" {
  const node: Node
  export default node
}
