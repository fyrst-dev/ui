# @fyrst/ui

Monorepo for Fyrst Digital's design system:

| Package | Description |
| --- | --- |
| [`@fyrst/design-preset`](./packages/preset) | Panda CSS preset with design tokens |
| [`@fyrst/ui-components`](./packages/components) | Vue 3 UI components |
| [`@fyrst/ui-nuxt`](./packages/nuxt) | Nuxt module for the Vue components |

The root `@fyrst/ui` workspace is private. Publish and consume the three packages above.

## How styling works

Consuming apps **must** depend on `@pandacss/dev` and keep their own `panda.config.ts`. This library does **not** ship compiled Panda CSS.

Your app:

1. Uses the preset from `@fyrst/design-preset`
2. Includes `@fyrst/ui-components/panda.buildinfo.json` (from `panda ship`)
3. Generates `styled-system` and CSS locally

`@fyrst/ui-components/style.css` is the Iconify stylesheet only.

## Install

**Nuxt**

```bash
bun add @fyrst/ui-nuxt @pandacss/dev
```

```ts
export default defineNuxtConfig({
  modules: ['@fyrst/ui-nuxt'],
  css: ['~/assets/css/global.css'],
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  },
})
```

```css
/* assets/css/global.css */
@layer reset, base, tokens, recipes, utilities;
```

```ts
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/design-preset'

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    './node_modules/@fyrst/ui-components/dist/panda.buildinfo.json',
    './app/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

Components are auto-imported with a `Fyrst` prefix (`FyrstButton`, `FyrstCardRoot`, …).

**Vue (Vite)**

```bash
bun add @fyrst/ui-components @fyrst/design-preset @pandacss/dev
```

```ts
import { createApp } from 'vue'
import FyrstUI from '@fyrst/ui-components'
import '@fyrst/ui-components/style.css'

const app = createApp({})
app.use(FyrstUI)
```

`style.css` is the icon stylesheet only. Component styles come from your Panda config:

```ts
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/design-preset'

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    './node_modules/@fyrst/ui-components/dist/panda.buildinfo.json',
    './src/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

## Development

```bash
bun install
bun run build
bun run dev:nuxt
```

See `AGENTS.md` for lint, test, and package scripts.

## Publishing

Packages are versioned together at `0.1.0`. Publish in order so workspace dependencies resolve on npm:

1. Create the public `@fyrst` org on npm (or request access).
2. Authenticate (`npm login` / `NPM_TOKEN`).
3. From the repo root:

```bash
bun run build
bun run test
bun run publish:packages
```

Or run the **Publish to npm** GitHub Action after adding an `NPM_TOKEN` repository secret.
