# Resume

> Resume builder based on [Markdown](https://www.markdownguide.org/) and [Tailwind CSS](https://tailwindcss.com/). Built with [Astro](https://astro.build/), and inspired by [Standard Resume](https://standardresume.co/).

## Features

- Full Tailwind CSS integration with `@tailwindcss/typography` plugin
- Dark mode ready with `:dark` tag powered by Tailwind CSS
- No need for complex data structure, just write your information in Markdown!
- Resume PDF generation using [Playwright](https://playwright.dev/)
- Fonts powered by [Fontsource](https://fontsource.org/)
- Full Typescript support

## UI

### Light mode

| Desktop                                                                                                                | Tablet                                                                                                                | Phone                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![Desktop Light](https://user-images.githubusercontent.com/3399429/198139123-066a9575-b247-494c-bf89-d847cc079cba.png) | ![Tablet light](https://user-images.githubusercontent.com/3399429/198139120-df681ea7-9353-433f-863a-670f3f395995.png) | ![Phone light](https://user-images.githubusercontent.com/3399429/198139113-265d0597-e1cf-4733-ae53-c24bc2a218ac.png) |

### Dark mode

| Desktop                                                                                                                | Tablet                                                                                                                | Phone                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![Desktop Light](https://user-images.githubusercontent.com/3399429/198139151-a04eacbb-f627-4d29-ada6-d353bea60b81.png) | ![Tablet light](https://user-images.githubusercontent.com/3399429/198139141-82076204-7018-415b-b313-1bde36939a8a.png) | ![Phone light](https://user-images.githubusercontent.com/3399429/198139137-e29fa7c8-d152-46de-b038-85faae1e7652.png) |

### PDF Generated

| Page 1                                                                                                              | Page 2                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![Pdf Page 1](https://user-images.githubusercontent.com/3399429/198139108-252928a4-bd64-4268-bd96-7cd9962dc635.png) | ![Pdf Page 2](https://user-images.githubusercontent.com/3399429/198139094-cf5e16c4-79b7-4094-939f-9960c56621b4.png) |

## Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

The pdf is generated at build time, so no need to manually generated it.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`              | Installs dependencies                              |
| `pnpm dlx astro dev`          | Starts local dev server at `localhost:4321`        |
| `pnpm dlx astro build`        | Build your production site to `./dist/`            |
| `pnpm dlx astro build`      | Preview your build locally, before deploying       |
| `pnpm dlx astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm dlx astro --help` | Get help using the Astro CLI                       |


## License

MIT.
