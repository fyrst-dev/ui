# Agent Instructions for @fyrst/ui

Monorepo for the fyrst.dev design system. Publish **one** npm package: `@fyrst/ui`.

Workspace packages (private, not published):
- `@fyrst/design-preset` - Panda CSS preset (`@fyrst/ui/design-preset`)
- `@fyrst/ui-components` - Vue 3 UI components (`@fyrst/ui` / `@fyrst/ui/components`)
- `@fyrst/ui-nuxt` - Nuxt module (`@fyrst/ui/nuxt`)

Uses Bun as package manager and build tool, full TypeScript support.

## Package Structure

```
packages/
├── preset/              # @fyrst/design-preset - Panda CSS Preset
│   └── src/
│       ├── index.ts           # Main preset export
│       └── tokens/            # Base & semantic tokens
├── components/          # @fyrst/ui-components - Vue 3 UI Components
└── nuxt/               # @fyrst/ui-nuxt - Nuxt Module
    ├── src/runtime/         # Module runtime
    └── test/             # E2E tests
```

## Build Commands

```bash
bun run build              # Build all packages (preset, components, nuxt prepack)
bun run build:preset        # Panda CSS preset
bun run build:components    # Vue components
bun run build:nuxt          # Nuxt module (prepack only; does not build playground)
bun run watch:styled-system # Preset watch mode
bun run dev:components      # Components dev server
bun run dev:nuxt            # Nuxt module dev
bun run dev:nuxt:build      # Build the Nuxt playground (dev check, not publish)
bun run clean               # Clean all dist folders
```

## Lint Commands

```bash
bun run lint               # Run ESLint on all packages
bun run lint:fix            # Auto-fix lint issues
bun run --filter='@fyrst/ui-nuxt' lint   # Lint specific package
```

## Test Commands

Only `@fyrst/ui-nuxt` has tests (Vitest with `@nuxt/test-utils`).

```bash
bun run test                              # Run all tests
bun run --filter='@fyrst/ui-nuxt' test    # Nuxt package tests
bun run --filter='@fyrst/ui-nuxt' test:watch   # Watch mode
bun run --filter='@fyrst/ui-nuxt' test -- basic.test.ts   # Single file
bun run --filter='@fyrst/ui-nuxt' test -t "test name"    # By name
bun run --filter='@fyrst/ui-nuxt' test:types             # Type checking
```

## Code Style Guidelines

### TypeScript

- `strict: true` - Enable all strict type checking
- `noImplicitOverride` - Always use `override` keyword for inherited methods
- `noUncheckedIndexedAccess` - Array indices return `T | undefined`
- `verbatimModuleSyntax` - Use `import type` explicitly for type-only imports
- `moduleResolution: bundler` - Modern import behavior
- `noUnusedLocals: true`, `noUnusedParameters: true`

**Path Aliases:**
```json
{
  "@fyrst/ui/*": "./packages/*/src/index.ts",
  "@fyrst/design-preset": "./packages/preset/src/index.ts",
  "@fyrst/ui-components": "./packages/components/src/index.ts"
}
```

### Import Conventions

- Use type-only imports for types: `import type { Foo } from '...'`
- ESLint errors on unused imports - remove them or prefix with `_`
- Group imports: external packages, then workspace packages
- Example:
  ```typescript
  import type { Component } from 'vue'
  import { useSlots } from 'vue'
  import type { ButtonProps } from '@fyrst/ui-components'
  ```

### Naming

- PascalCase for components, types, interfaces, enums
- camelCase for variables, functions, file names (except Vue components)
- Prefix unused args with `_`: `_event`, `_props`
- Prefix unused imports with `_`: `import type { _UnusedType }`

### Vue Components

- Use `<script setup lang="ts">`
- Use Reka UI for primitives
- Use Panda CSS for styling
- Follow patterns in `packages/components/src/`

### CVA/SVA Styling Pattern

New components using CVA (or SVA for multi-slot) must follow this pattern:

**1. Create component folder** (e.g., `packages/components/src/components/Badge/`):
```
Badge/
├── Badge.vue
├── styles.ts
└── index.ts
```

**2. styles.ts** - Define CVA/SVA with slots if needed:
```typescript
import { cva } from 'styled-system/css'
// or for multi-slot: import { sva } from 'styled-system/css'

export const badgeStyles = cva({
  base: { ... },
  variants: { ... },
  defaultVariants: { ... },
})
```

**3. Component.vue** - Use computed with `.raw()`:
```typescript
import { computed } from 'vue'
import { badgeStyles } from './styles'

const props = defineProps<{ ... }>()

const badgeClass = computed(() =>
  badgeStyles.raw({ color: props.color, size: props.size }),
)
```

```vue
<template>
  <span :class="badgeClass">...</span>
</template>
```

**4. index.ts** - Export component:
```typescript
import Badge from './Badge.vue'
export { Badge }
export default { Badge }
```

### Panda CSS

- Use semantic tokens: `colors.primary`, `colors.neutral`
- Use responsive props: `{ base: ..., md: ..., lg: ... }`
- Mobile-first: define base styles, then add breakpoints
- Breakpoints: `3xs` (360px), `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`

### Error Handling

- Use proper TypeScript types - avoid `any`
- Handle async with proper error types
- Use Vitest with `@nuxt/test-utils`

### ESLint

- Uses `@nuxt/eslint-config` with stylistic rules
- Unused imports = error (fix with `bun run lint:fix`)
- Unused variables = warning (prefix with `_` to silence)
- `@typescript-eslint/no-unused-vars` disabled; uses unused-imports plugin

### Release Process (maintainers)

```bash
bun run --filter='@fyrst/ui-nuxt' release
# Runs: lint → test → prepack → changelogen → npm publish → git push
```

## Key Dependencies

| Category | Packages |
|----------|----------|
| Runtime | bun, vue ^3.5, nuxt ^4.3, @pandacss/dev, reka-ui ^2.6 |
| Dev | vitest, @nuxt/test-utils, @nuxt/eslint-config, typescript ^5.9 |
| Build | tsup, vite, vue-tsc, @nuxt/module-builder |

## Design Tokens

- **Base Tokens**: Primitive values (colors, spacing, font sizes)
- **Semantic Tokens**: Context-aware with light/dark mode support
- **Responsive Breakpoints**: Mobile-first with named breakpoints

## Testing Guidelines

Vitest with `@nuxt/test-utils`. Test files in `packages/nuxt/test/*.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({ rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)) })
  it('renders the index page', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<div>basic</div>')
  })
})
```

## Important Notes

1. Token changes: add to both `tokens.ts` and `semantic-tokens.ts`
2. New packages: register in root `package.json` under `workspaces`
3. Build order: Nuxt module requires preset built first (automatic)
4. Peer dependencies: `vue`, `reka-ui`, and `@pandacss/dev` are required. `nuxt` and `@nuxt/kit` are optional (only `@fyrst/ui/nuxt`). Do not put `@nuxt/kit` in published `dependencies`.
5. No Prettier: ESLint used for formatting (stylistic rules)
6. Do not ship compiled Panda CSS (`panda cssgen`, `styles.css`, `panda.css`). Publish only the root `@fyrst/ui` package. Consuming apps must depend on `@pandacss/dev`, keep their own `panda.config.ts` (`import { preset } from '@fyrst/ui/design-preset'`), and include `@fyrst/ui/panda.buildinfo.json` from `panda ship`. `@fyrst/ui/style.css` is Iconify icons only.
