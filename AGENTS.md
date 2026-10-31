# Agent Instructions for @fyrst/ui

Monorepo for the fyrst.dev design system. Publish **one** npm package: `@fyrst/ui`.

Workspace packages (private, not published):
- `@fyrst/design-preset` - Panda CSS preset (`@fyrst/ui/design-preset`)
- `@fyrst/ui-components` - Vue 3 UI components (`@fyrst/ui` / `@fyrst/ui/components`)
- `@fyrst/ui-nuxt` - Nuxt module (`@fyrst/ui/nuxt`)

Uses Bun as package manager and build tool, full TypeScript support.

First-party agent skills live in `.agents/skills/<name>/SKILL.md`. Consumer apps on `@fyrst/ui` 0.2.x (`panda.buildinfo.json` in `include`) or still on Panda CSS 1.x should follow [`.agents/skills/panda-v2-migration/SKILL.md`](.agents/skills/panda-v2-migration/SKILL.md). Consumer apps on 0.3.x / 0.4.x upgrading to 0.5.x should follow [`.agents/skills/fyrst-ui-0.5-migration/SKILL.md`](.agents/skills/fyrst-ui-0.5-migration/SKILL.md). Every breaking change to the public API needs a matching section in a migration skill.

## Package Structure

```
packages/
├── preset/              # @fyrst/design-preset - Panda CSS Preset
│   └── src/
│       ├── index.ts           # Token preset (`@fyrst/ui/design-preset`)
│       ├── components.ts      # componentsPreset: recipes + staticCss (library build only)
│       ├── recipes/           # fy* component recipes
│       └── tokens/            # Base & semantic tokens
├── components/          # @fyrst/ui-components - Vue 3 UI Components
└── nuxt/               # @fyrst/ui-nuxt - Nuxt Module
    ├── src/runtime/         # Module runtime
    └── test/             # E2E tests
```

## Build Commands

```bash
bun run build              # Clean root dist, link @fyrst/ui, build preset/components/nuxt, assemble dist, panda lib
bun run build:preset        # Panda CSS preset
bun run build:components    # Vue components + root dist exports
bun run build:nuxt          # Nuxt module (prepack only; does not build playground)
bun run panda:lib           # panda codegen + panda lib (manifest under dist/panda/, syncs generated exports)
bun run link:package        # Symlink the root package to node_modules/@fyrst/ui (dev only)
bun run watch:preset        # Preset watch mode
bun run dev:components      # Components dev server
bun run dev:nuxt            # Link @fyrst/ui, panda lib, then Nuxt module playground
bun run dev:nuxt:prepare    # Link @fyrst/ui, panda lib, then stub/prepare the Nuxt module + playground
bun run dev:nuxt:build      # Link @fyrst/ui, then build the Nuxt playground (dev check, not publish)
bun run typecheck           # tsc on the preset, vue-tsc on the components
bun run clean               # Clean all dist folders
```

## Lint Commands

```bash
bun run lint               # ESLint on sources, tests, and build scripts
bun run lint:fix            # Auto-fix lint issues
bun run --filter='@fyrst/ui-nuxt' lint   # Lint specific package
```

## Test Commands

`@fyrst/ui-components` has Vitest unit/SSR tests. `@fyrst/ui-nuxt` has Vitest tests with `@nuxt/test-utils` (needs a prior `bun run build` for dist + `panda lib` artifacts).

```bash
bun run test                              # Link @fyrst/ui, then run all tests
bun run --filter='@fyrst/ui-components' test   # Component unit + SSR tests
bun run --filter='@fyrst/ui-nuxt' test    # Nuxt package tests (needs `bun run link:package`)
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

### Component Styling (config recipes)

Component styles are Panda **config recipes** in the preset package, not `cva`/`sva` in the components package.

**1. Recipe** in `packages/preset/src/recipes/<name>.ts`. Use `defineRecipe` (one element) or `defineSlotRecipe` (several). Prefix the key with `fy` and the class name with `fy-`:
```typescript
import { defineSlotRecipe } from '@pandacss/dev'

export const fyBadge = defineSlotRecipe({
  className: 'fy-badge',
  slots: ['root', 'icon'],
  base: { root: { ... } },
  variants: { size: { sm: { ... } } },
  defaultVariants: { size: 'md' },
})
```
Register it in `packages/preset/src/recipes/index.ts` (`recipes` or `slotRecipes`). `componentsPreset` (`packages/preset/src/components.ts`) adds every registered recipe to `staticCss`, because variants come from props at runtime and Panda cannot see them. Generate repetitive variants in code (see `progress.ts`, `loader.ts`, `card.ts`); a preset runs as code, it is not statically extracted.

`componentsPreset` is only for the library build (root `panda.config.ts` and `packages/components/panda.config.ts`). It is **not** part of the token-only `@fyrst/ui/design-preset` export.

**2. Component** folder `packages/components/src/components/Badge/` with `BadgeRoot.vue` and `index.ts` (plus `types.ts` when needed). Standalone exceptions (`Button`, `Loader`) keep those public names.

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { fyBadge } from 'styled-system/recipes'
import { withCss, type CssMap } from '../../internal/css'

export type BadgeCss = CssMap<'root' | 'icon'>

const props = defineProps<{ size?: 'sm' | 'md' | 'lg', css?: BadgeCss }>()
const classes = computed(() => fyBadge({ size: props.size }))
</script>

<template>
  <span :class="withCss(classes.root, props.css?.root)">…</span>
</template>
```

- Call the recipe function directly. Do not call `.raw()` across files and do not wrap recipe output in `css()`.
- Every component takes a `css` prop typed `CssMap<…>`; `root` is always the outermost element. `withCss` appends the override (utilities layer beats recipes layer).
- Share recipe classes between parts through a typed `createInjectionKey` context (see `Card/types.ts`), never string keys.
- Numeric variant keys are strings in the generated types (`String(size)`).
- Prefer semantic tokens (`surface`, `border`, `text.muted`, `neutral`) over `_light` overrides. Keep a `_light` block only when state selectors must beat light-mode colors on specificity (see `switch.ts`).

**3. Content.** Render copy as text. When a prop may carry markup, add an `html?: boolean` prop and render through `internal/RichText.vue` (the only `v-html`; ESLint `vue/no-v-html` is on).

**4. index.ts** — named parts plus default namespace `{ Root, … }`, and export the component's `*Css` types:
```typescript
import BadgeRoot from './BadgeRoot.vue'
export { BadgeRoot }
export type { BadgeCss } from './BadgeRoot.vue'
export default { Root: BadgeRoot }
```

Register the entry in `vue-entries.ts` (`vueLibEntries`; `nuxtComponents` is derived) and the named export in `vue-components.ts`. `Button` / `Loader` export the SFC by those names and do not use a `{ Root }` namespace.

Do not export `Control*` from `@fyrst/ui`. Bare controls stay under `src/internal/controls/` and share `useFieldControl()` (id, ARIA links, validity from the Field context). Public form API is `Field.*` / `FyrstField*`; composed fields use `FieldSharedProps` and `FieldFooter`. Re-export `FieldOption` from Field.

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

Publish the root `@fyrst/ui` package with `.github/workflows/publish.yml`. The Action authenticates with npm trusted publishing (OIDC). Do not add `NPM_TOKEN` or a bypass-2FA granular token.

The first version must be published locally with `npm login` + 2FA, then attach the trusted publisher on npmjs.com (`fyrst-dev` / `ui` / `publish.yml`).

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

1. Token changes: add to both `tokens.ts` and `semantic-tokens.ts`. Recipe changes go in `packages/preset/src/recipes/`
2. New packages: register in root `package.json` under `workspaces`
3. Build order: Nuxt module requires preset built first (automatic)
4. Peer dependencies: `vue`, `reka-ui`, and `@pandacss/dev` are required. `@pandacss/preset-base` is a published `dependency` (the design-system preset inlines the module; apps on `designSystem` do not install it). `nuxt` and `@nuxt/kit` are optional (only `@fyrst/ui/nuxt`). Do not put `@nuxt/kit` in published `dependencies`.
5. No Prettier: ESLint used for formatting (stylistic rules)
6. Do not ship compiled Panda CSS (`panda cssgen`, `styles.css`, `panda.css`). Publish only the root `@fyrst/ui` package. Consuming apps must depend on `@pandacss/dev`, keep their own `panda.config.ts`, and set `designSystem: '@fyrst/ui'` (no fyrst preset, no `include` into the package). The library build runs `panda lib --outdir dist --files './**/*.{js,mjs}' --panda '^2.4.0'` after assembling `dist/`. That command owns `./panda/*`, `./css`, `./recipes`, `./tokens`, `./types`, and other generated subpaths — do not hand-edit them. Custom exports (`./design-preset`, `./preset`, `./nuxt`, `./vue/*`, `./style.css`) stay in `package.json`. `@fyrst/ui/style.css` is Iconify icons only: do not add `<style>` blocks to components. The root `panda.config.ts` sets `forceImportExtension: true` so the published runtime loads in plain Node. Pack root `dist/` only (assembled from workspace build outputs, including `dist/panda/` and `dist/styled-system/`) — do not include nested `packages/*/dist`.
