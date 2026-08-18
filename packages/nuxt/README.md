# Internal: Nuxt module

Workspace package used to build the Nuxt module that `@fyrst/ui/nuxt` exports.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

```ts
export default defineNuxtConfig({
  modules: ['@fyrst/ui/nuxt'],
})
```

```ts
import { preset } from '@fyrst/ui/design-preset'

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    './node_modules/@fyrst/ui/dist/panda.buildinfo.json',
    './app/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

See the [root README](../../README.md) for the full consumer setup.
