# Internal: Panda CSS preset

Workspace package used to build the preset that `@fyrst/ui/design-preset` exports.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

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
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  outdir: 'styled-system',
})
```

See the [root README](../../README.md) for install and publishing.
