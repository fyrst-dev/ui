# @fyrst/ui

fyrst.dev design system. One npm package with subpath exports:

| Import | What you get |
| --- | --- |
| `@fyrst/ui` / `@fyrst/ui/components` | Vue 3 UI components |
| `@fyrst/ui/design-preset` / `@fyrst/ui/preset` | Panda CSS preset (token-only consumers; not used with `designSystem`) |
| `@fyrst/ui/nuxt` | Nuxt module |
| `@fyrst/ui/vue/*` | Per-component Vue entries (for example `@fyrst/ui/vue/Button`) |
| `@fyrst/ui/style.css` | Iconify stylesheet only |

This library does **not** ship compiled Panda CSS. Consuming apps depend on `@pandacss/dev`, keep their own `panda.config.ts`, and set `designSystem: '@fyrst/ui'`. `panda lib` writes `@fyrst/ui/panda/*` (`lib.json`, `preset.mjs`, `buildinfo.json`) and the generated `./css`, `./tokens`, `./types`, … subpaths. Do not hand-edit those generated exports.

Upgrading from 0.4.x? 0.5.0 has breaking changes. Follow [`.agents/skills/fyrst-ui-0.5-migration/SKILL.md`](.agents/skills/fyrst-ui-0.5-migration/SKILL.md) (it is in the git repository, not in the npm tarball).

## Install

Required peers: `vue`, `reka-ui`, `@pandacss/dev`. `@pandacss/preset-base` is a normal dependency: `panda lib` inlines it into the design-system preset, so apps that set `designSystem: '@fyrst/ui'` do not install it. `nuxt` and `@nuxt/kit` are optional and only needed for `@fyrst/ui/nuxt` (a Nuxt app already provides both).

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
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  designSystem: '@fyrst/ui',
  include: [
    './app/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

Do not add `@fyrst/ui/preset`, `@fyrst/ui/design-preset`, or `@fyrst/ui` to `presets` / `include`. `designSystem` already loads the theme and component styles. Listing the package in `include` errors with `design_system_in_include`.

Components are auto-imported with a `Fyrst` prefix (`FyrstButton`, `FyrstAlertRoot`, `FyrstCardRoot`, …).

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
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  designSystem: '@fyrst/ui',
  include: [
    './src/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

You can also import from `@fyrst/ui/components` if you want the subpath to be explicit.

`createInjectionKey` is exported from `@fyrst/ui` but is not auto-imported by the Nuxt module.

## Styling components

Component styles are atomic Panda classes from `cva` / `sva` definitions inside the package. They reach the app through `designSystem: '@fyrst/ui'`; Panda generates every variant of each definition, so the app does not need to render a variant for its CSS to exist.

**Per-instance overrides.** Every component takes a `css` prop: style objects keyed by slot, where `root` is always the outermost element. Wrap each value in `css.raw()` from the app's own `styled-system/css`. Panda only generates CSS for objects it can see at build time; a bare object literal compiles but produces no CSS.

```vue
<script setup lang="ts">
import { css } from 'styled-system/css'
</script>

<template>
  <FyrstAlertRoot
    :messages="messages"
    :css="{ root: css.raw({ maxWidth: 'md' }), title: css.raw({ fontSize: 'xl' }) }"
  />
</template>
```

The component merges the override into its own style object before generating classes, so an overridden property gets one class and the override wins.

**Semantic colors.** Besides `primary`, `neutral`, and the status colors, the preset has `surface`, `surface.raised`, `border`, `border.hover`, `border.subtle`, and `text.muted`. They switch between dark (default) and `.light` on their own, so app styles rarely need `_light`.

## Text and HTML content

Content props (`label`, `title`, `headline`, `description`, list and accordion items, field `message` and `error`) render as **text**. To render a trusted string as HTML, set `html` on the component:

```vue
<FyrstHeroLead html headline="Build <mark>faster</mark>" />
```

Never pass user input, server error messages, or translated strings you do not control with `html`.

## Component names

Nuxt auto-imports Vue components with a `Fyrst` prefix (`FyrstButton`, `FyrstAlertRoot`, `FyrstCardRoot`) as named exports of `@fyrst/ui`. Per-component files remain available at `@fyrst/ui/vue/*` for direct imports (for example `@fyrst/ui/vue/Button`).

Nuxt tags, the Vue plugin, and `@fyrst/ui/vue/*` use the same canonical names:

| Pattern | Examples |
| --- | --- |
| Standalone | `Button`, `Loader` (`FyrstButton`, `FyrstLoader`) |
| Named roots / parts | `AlertRoot`, `BadgeRoot`, `TabRoot`, `CardRoot`, `CardBody`, `TabItem` |
| Namespace object (`Card.Root`) | `Accordion`, `Alert`, `Badge`, `Card`, `Carousel`, `Dialog`, `Field`, `Flyout`, `Form`, `Hero`, `List`, `PricingCard`, `Progress`, `Switch`, `Tab` |

`Alert.Root` is the same component as named `AlertRoot`. There is no `FyrstAlert` / `FyrstBadge` / `FyrstTab` alias. Form controls are `Field.*` / `FyrstField*` — `Control*` is not a public export.

## Fonts

The preset defines `fonts.sans`, `fonts.serif`, and `fonts.mono`. `fonts.sans` is **Figtree**, then the system sans (`ui-sans-serif, system-ui, sans-serif`, plus emoji fonts). `fonts.serif` and `fonts.mono` are those same system stacks. Semantic `fonts.body` aliases `fonts.sans`.

The npm package does not include font files. Load the Figtree **variable** face so intermediate weights (450, 750) resolve. [Fontsource](https://fontsource.org/fonts/figtree) is one way:

```bash
bun add @fontsource-variable/figtree
```

```css
@import '@fontsource-variable/figtree';
```

Self-hosting works the same way. Figtree is under the [SIL Open Font License](https://openfontlicense.org/). The `@font-face` `font-family` must be `Figtree`.

`Button`, text inputs, textareas, and select triggers set `font-family: inherit`, so they follow the document face when preflight is off. With preflight on, Panda's reset already sets `font: inherit` on those controls. Preflight sets the document face to `--global-font-body`, which falls back to Panda's built-in system stack. It does not apply `fonts.sans` on its own. Point the document at the sans token:

```ts
globalCss: {
  html: {
    fontFamily: 'sans',
  },
},
```

Until the face is loaded, `fonts.sans` falls through to the system sans.

## Development

This repo is a Bun workspace. Internal package names (`@fyrst/design-preset`, `@fyrst/ui-components`, `@fyrst/ui-nuxt`) stay private and are not published.

```bash
bun install
bun run build
bun run typecheck
bun run test
bun run dev:nuxt
```

`bun run build` and `bun run dev:nuxt` link the root package at `node_modules/@fyrst/ui` and run `panda lib`, so the playground can set `designSystem: '@fyrst/ui'` the same way consumers do.

See `AGENTS.md` for lint, test, and package scripts.

Migration skills live in the git repository (not in the npm tarball):

- Apps on `@fyrst/ui` 0.2.x (`panda.buildinfo.json` in `include`) or still on Panda CSS 1.x: [`.agents/skills/panda-v2-migration/SKILL.md`](.agents/skills/panda-v2-migration/SKILL.md).
- Apps on `@fyrst/ui` 0.3.x / 0.4.x: [`.agents/skills/fyrst-ui-0.5-migration/SKILL.md`](.agents/skills/fyrst-ui-0.5-migration/SKILL.md).

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
