# Internal: Panda CSS preset

Workspace package used to build the preset that `@fyrst/ui/design-preset` exports.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

```ts
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    './node_modules/@fyrst/ui/dist/panda.buildinfo.json',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  outdir: 'styled-system',
})
```

See the [root README](../../README.md) for install and publishing.
