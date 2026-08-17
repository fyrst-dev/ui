# @fyrst/ui-components

Vue 3 component library for the Fyrst Digital design system.

## Install

```bash
bun add @fyrst/ui-components @fyrst/design-preset @pandacss/dev
```

Peer dependencies: `vue`, `reka-ui`, `@pandacss/dev`, and `@fyrst/design-preset`.

This package does **not** ship compiled Panda styles. Your app must depend on `@pandacss/dev`, keep its own `panda.config.ts`, and include the shipped buildinfo JSON.

## Panda CSS

Create a `panda.config.ts` in the consuming project:

```ts
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/design-preset'

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: [
    './node_modules/@fyrst/ui-components/dist/panda.buildinfo.json',
    './src/**/*.{js,ts,vue}',
  ],
  outdir: 'styled-system',
})
```

Then generate styles (`panda codegen`) and wire `@pandacss/dev/postcss` (or the equivalent) into your bundler.

`@fyrst/ui-components/style.css` is the icon stylesheet only. Import it alongside your generated Panda CSS.

## Usage

### Plugin

```ts
import { createApp } from 'vue'
import FyrstUI from '@fyrst/ui-components'
import '@fyrst/ui-components/style.css'

const app = createApp({})
app.use(FyrstUI)
```

### Individual components

```vue
<script setup lang="ts">
import { Button, CardRoot, CardBody } from '@fyrst/ui-components'
import '@fyrst/ui-components/style.css'
</script>

<template>
  <CardRoot>
    <CardBody>
      <Button label="Click me" color="primary" size="md" />
    </CardBody>
  </CardRoot>
</template>
```

Compound components are also available as namespaces (`Card.Root`, `Accordion.Root`, …).

## Button

Renders a `<button>` or an `<a>` when `to` is set.

| Prop | Type | Default |
| --- | --- | --- |
| `label` | `string \| null` | `null` |
| `icon` | `string \| null` | `null` |
| `to` | `string \| null` | `null` |
| `type` | `'button' \| 'submit' \| 'reset' \| null` | `null` |
| `color` | `'primary' \| 'secondary' \| 'transparent'` | `'secondary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `order` | `'regular' \| 'inverse'` | `'regular'` |
| `external` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |

```vue
<template>
  <Button label="Primary" color="primary" />
  <Button label="Docs" to="https://fyrst.digital" external />
  <Button label="Disabled" disabled />
</template>
```

## Nuxt

Prefer [`@fyrst/ui-nuxt`](https://www.npmjs.com/package/@fyrst/ui-nuxt) for auto-imports. You still need a Panda config that includes the buildinfo file.

## Development

```bash
bun run dev
bun run build
bun run clean
```
