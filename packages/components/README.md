# Internal: Vue components

Workspace package used to build the Vue components that `@fyrst/ui` and `@fyrst/ui/components` export.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

```ts
import { Button } from '@fyrst/ui'
import '@fyrst/ui/style.css'
```

Component styles are `cva` / `sva` definitions in each component's `styles.ts`. Components import `styled-system/css`, which the build rewrites to `@fyrst/ui/css`.

See the [root README](../../README.md) for install, Panda config, and publishing.
