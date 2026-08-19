# Internal: Nuxt module

Workspace package used to build the Nuxt module that `@fyrst/ui/nuxt` exports.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

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

The module auto-imports Vue components. It does **not** generate Panda CSS. Keep `@layer reset, base, tokens, recipes, utilities` in your CSS. In `dev`, the module warns if `@fyrst/ui/panda.buildinfo.json` cannot be resolved or PostCSS is missing `@pandacss/dev/postcss`.

See the [root README](../../README.md) for the full consumer setup.
