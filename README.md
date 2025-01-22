# NK-Starter

This is a [Turborepo](https://turbo.build/repo/) monorepo starter template. It provides a foundational setup for building modern web applications.

1. [Runtime and Package Manager](#runtime-and-package-manager)
2. [What's Inside?](#whats-inside)
3. [How to Run](#how-to-run)
4. [Useful Links](#useful-links)

## Runtime and Package Manager

- **Runtime:** `node.js` `v22.13.0`  
  [Node.js](https://nodejs.org/en/)

- **Package Manager:** `bun` `v1.2.0`  
  [Bun](https://bun.sh/)

## What's Inside?

This repository includes the following apps and packages:

### Apps

- `@nk/web`: A `next.js` app.  
  [Next.js](https://nextjs.org/)

- `@nk/cms`: A `next.js` app integrated with `payload` CMS.  
  [Next.js](https://nextjs.org/) | [Payload CMS](https://payloadcms.com/)

- `@nk/storybook`: A `storybook` app for developing and testing components.  
  [Storybook](https://storybook.js.org/)

- `@nk/docs`: A `next.js` app powered by `fumadocs`.  
  [Next.js](https://nextjs.org/) | [Fumadocs](https://fumadocs.vercel.app/)

### Packages

- `@nk/design-system`: A `react` components library built with `vite`.  
  [React](https://reactjs.org/) | [Vite](https://vitejs.dev/)

- `@nk/eslint-config`: Shared `eslint` configurations.  
  [ESLint](https://eslint.org/)

- `@nk/typescript-config`: Shared `tsconfig.json` configurations.  
  [TypeScript](https://www.typescriptlang.org/)

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky/) for git hooks
- [lint-staged](https://github.com/lint-staged/lint-staged/) for staged files processing

## How to Run

1. **Install dependencies:**

   ```sh
   bun install
   ```

2. **Build the project:**

   ```sh
   bun run build
   ```

3. **Start development mode:**

   ```sh
   bun run dev
   ```

4. **Lint, type-check or format as needed:**
   ```sh
   bun run lint
   bun run type-check
   bun run format
   ```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
