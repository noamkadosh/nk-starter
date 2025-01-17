import type { Linter } from "eslint"

type Core = {
  importJavascript: Linter.FlatConfig[]
  importTypescript: Linter.FlatConfig[]
  javascript: Linter.FlatConfig[]
  jsdocJavascript: Linter.FlatConfig[]
  jsdocTypescript: Linter.FlatConfig[]
  json: Linter.FlatConfig[]
  markdown: Linter.FlatConfig[]
  prettier: Linter.FlatConfig[]
  promise: Linter.FlatConfig[]
  regex: Linter.FlatConfig[]
  sonarjs: Linter.FlatConfig[]
  typescript: Linter.FlatConfig[]
  unicorn: Linter.FlatConfig[]
}

declare module "@nk/eslint-config/core" {
  const core: Core
  export default core
}
