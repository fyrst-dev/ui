# @fyrst/ui-nuxt

Nuxt module for the Fyrst Digital Vue UI components.

## Install

```bash
bun add @fyrst/ui-nuxt @pandacss/dev
```

`@fyrst/design-preset` and `@fyrst/ui-components` are installed with the module. `@pandacss/dev` is a required peer.

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

The module:

- Auto-imports components with a `Fyrst` prefix (`FyrstButton`, `FyrstCardRoot`, `FyrstAlert`, …)
- Auto-imports composables (`useCarousel`, `useFlyout`, `useFormData`, `createInjectionKey`)
- Injects the icon stylesheet from `@fyrst/ui-components`

Component styles are **not** bundled. The consuming app must depend on `@pandacss/dev` and keep its own `panda.config.ts` that consumes the library buildinfo:

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

Add the Panda layer directive to a global stylesheet (`~/assets/css/global.css`) and include that file from `nuxt.config.ts`:

```css
@layer reset, base, tokens, recipes, utilities;
```

```vue
<template>
  <FyrstButton label="Get started" color="primary" />
</template>
```

## Options

```ts
export default defineNuxtConfig({
  modules: ['@fyrst/ui-nuxt'],
  fyrstUi: {
    prefix: 'Fyrst',
    icons: true,
  },
})
```

| Option | Default | Description |
| --- | --- | --- |
| `prefix` | `'Fyrst'` | Component name prefix |
| `icons` | `true` | Inject the icon stylesheet |

## Local development

```bash
bun install
bun run build
bun run --filter='@fyrst/ui-nuxt' dev:prepare
bun run --filter='@fyrst/ui-nuxt' dev
bun run --filter='@fyrst/ui-nuxt' test
```
