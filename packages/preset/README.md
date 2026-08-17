# @fyrst/design-preset

Panda CSS preset with Fyrst Digital design tokens, semantic colors, breakpoints, and patterns.

## Install

```bash
bun add @fyrst/design-preset @pandacss/dev
```

Peer dependency: `@pandacss/dev`.

## Usage

Add the preset to the consuming project's `panda.config.ts`. This package does not ship compiled CSS. When using `@fyrst/ui-components`, include the shipped buildinfo file so the app's Panda generate can emit component styles:

```ts
import { createRequire } from 'node:module'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/design-preset'

const require = createRequire(import.meta.url)

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    require.resolve('@fyrst/ui-components/panda.buildinfo.json'),
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
})
```

After codegen, use the generated `styled-system` runtime in your app (`css`, `cva`, `sva`, patterns).
