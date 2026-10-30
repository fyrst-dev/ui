# Internal: Panda CSS preset

Workspace package used to build the preset that `@fyrst/ui/design-preset` and `@fyrst/ui/preset` export.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

Apps that render `@fyrst/ui` Vue components should set `designSystem` only:

```ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  designSystem: '@fyrst/ui',
  include: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  outdir: 'styled-system',
})
```

`@fyrst/ui/design-preset` remains for token-only consumers that do **not** use `designSystem`. Do not combine the two.

See the [root README](../../README.md) for install and publishing.

Consumers on `@fyrst/ui` 0.2.x or Panda CSS 1.x: follow the [Panda 2 migration skill](../../.agents/skills/panda-v2-migration/SKILL.md).
