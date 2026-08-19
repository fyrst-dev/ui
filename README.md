# @fyrst/ui

fyrst.dev design system. One npm package with subpath exports:

| Import | What you get |
| --- | --- |
| `@fyrst/ui` / `@fyrst/ui/components` | Vue 3 UI components |
| `@fyrst/ui/design-preset` | Panda CSS preset with design tokens |
| `@fyrst/ui/nuxt` | Nuxt module |
| `@fyrst/ui/panda.buildinfo.json` | Panda `ship` output for component styles |
| `@fyrst/ui/style.css` | Iconify stylesheet only |

This library does **not** ship compiled Panda CSS. Consuming apps depend on `@pandacss/dev`, keep their own `panda.config.ts`, and generate styles locally.

## Install

Required peers: `vue`, `reka-ui`, `@pandacss/dev`. `nuxt` and `@nuxt/kit` are optional and only needed for `@fyrst/ui/nuxt` (a Nuxt app already provides both).

**Nuxt**

```bash
bun add @fyrst/ui reka-ui @pandacss/dev
```

```ts
export default defineNuxtConfig({
  modules: ['@fyrst/ui/nuxt'],
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
import { createRequire } from 'node:module'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

const require = createRequire(import.meta.url)

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    require.resolve('@fyrst/ui/panda.buildinfo.json'),
    './app/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

Components are auto-imported with a `Fyrst` prefix (`FyrstButton`, `FyrstCardRoot`, …).

**Vue (Vite)**

```bash
bun add @fyrst/ui vue reka-ui @pandacss/dev
```

```ts
import { createApp } from 'vue'
import FyrstUI from '@fyrst/ui'
import '@fyrst/ui/style.css'

const app = createApp({})
app.use(FyrstUI)
```

```ts
import { createRequire } from 'node:module'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

const require = createRequire(import.meta.url)

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    require.resolve('@fyrst/ui/panda.buildinfo.json'),
    './src/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

You can also import from `@fyrst/ui/components` if you want the subpath to be explicit.

`createInjectionKey` is exported from `@fyrst/ui` but is not auto-imported by the Nuxt module.

## Component names

Nuxt auto-imports Vue components with a `Fyrst` prefix (`FyrstButton`, `FyrstAlert`, `FyrstCardRoot`). Each auto-import points at a per-component file from `@fyrst/ui/vue/*` (for example `@fyrst/ui/vue/Button`), so unused `Fyrst*` components are not pulled into the app bundle.

Named Vue roots live next to compound namespaces:

| Pattern | Examples |
| --- | --- |
| Vue root (+ `*Root` alias) | `Alert` / `AlertRoot`, `Tab` / `TabRoot`, `Badge` / `BadgeRoot` |
| Named parts | `CardRoot`, `CardBody`, `TabItem` |
| Namespace object (`Card.Root`) | `Accordion`, `Card`, `Carousel`, `Dialog`, `Field`, `Flyout`, `Form`, `Hero`, `List`, `PricingCard`, `Progress`, `Switch`, `Control` |

`Alert` and `Tab` are the root Vue components, not `{ Root }` namespace objects.

## Development

This repo is a Bun workspace. Internal package names (`@fyrst/design-preset`, `@fyrst/ui-components`, `@fyrst/ui-nuxt`) stay private and are not published.

```bash
bun install
bun run build
bun run dev:nuxt
```

`bun run build` and `bun run dev:nuxt` link the root package at `node_modules/@fyrst/ui` so the playground can import `@fyrst/ui/design-preset` the same way consumers do.

See `AGENTS.md` for lint, test, and package scripts.

## Publishing

Publish the root package only. The GitHub Action uses [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC). There is no `NPM_TOKEN`.

`prepublishOnly` runs `bun run build`. The Action already builds and tests with Bun, then runs `npm publish --ignore-scripts` so that script does not rebuild. `bun publish` cannot authenticate with OIDC.

### First publish (bootstrap)

Trusted publishing can only be attached to a package that already exists.

1. Create the public `@fyrst` org on npm (or request access) and enable 2FA.
2. `npm login` in a browser session (interactive 2FA). Do not create a bypass-2FA granular token.
3. From the repo root:

```bash
bun run build
bun run test
npm publish --access public --ignore-scripts
```

4. On npmjs.com → `@fyrst/ui` → Settings → Trusted Publisher → GitHub Actions:
   - Organization or user: `fyrst-dev`
   - Repository: `ui`
   - Workflow filename: `publish.yml` (filename only, including `.yml`)
   - Environment name: leave empty
   - Allowed actions: `npm publish`

### Later publishes

Run the **Publish to npm** GitHub Action (`workflow_dispatch`) or publish a GitHub Release. After the first OIDC publish succeeds, you can set the package to require 2FA and disallow tokens.
