import path from "node:path"

import type { StorybookConfig } from "@storybook/react-vite"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 * @param value - The package name.
 * @returns - The absolute path of the package.
 */
function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, "package.json")))
}

const config: StorybookConfig = {
  stories: [
    "../../../apps/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../../../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite")
    const { default: react } = await import("@vitejs/plugin-react-swc")
    const { default: tsConfigPaths } = await import("vite-tsconfig-paths")

    return mergeConfig(config, {
      plugins: [react(), tsConfigPaths()],
    })
  },
}

export default config
