# Internal: Vue components

Workspace package used to build the Vue components that `@fyrst/ui` and `@fyrst/ui/components` export.

This folder is **not** published to npm. Consume the design system as `@fyrst/ui`.

```ts
import { Button } from '@fyrst/ui'
import '@fyrst/ui/style.css'
```

Component styles are not in this package: they are Panda config recipes in `packages/preset/src/recipes/`, registered by `componentsPreset`. Components import the generated runtime from `styled-system/recipes`, which the build rewrites to `@fyrst/ui/recipes`.

See the [root README](../../README.md) for install, Panda config, and publishing.
