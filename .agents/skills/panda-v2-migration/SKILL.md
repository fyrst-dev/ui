---
name: panda-v2-migration
description: >-
  Migrate a consumer project that uses @fyrst/ui or the fyrst design preset
  from Panda CSS 1.x to Panda CSS 2.x, and from @fyrst/ui 0.2.x
  (panda.buildinfo.json in include) to 0.3.x / 0.4.x (designSystem: '@fyrst/ui').
  Use when the app still depends on @pandacss/dev 1.x, panda ship,
  containerSizes, Styles from styled-system/css, styled-system/css/index.mjs,
  or @pandacss/studio; when it still includes @fyrst/ui/panda.buildinfo.json
  or lists @fyrst/ui/design-preset in presets; when codegen, tsup --dts, or
  bun install fails after a Panda 2 bump; or when the user asks to upgrade
  Panda, @fyrst/ui, @fyrst/ui/design-preset, or a vendored copy of the preset.
---

# Migrate a @fyrst/ui consumer to Panda CSS 2 and designSystem

You are migrating a **consuming** project (app, storefront, or library) that uses `@fyrst/ui`, `@fyrst/ui/design-preset`, and/or a **vendored copy** of that preset.

There are two stacked contracts:

1. **Panda CSS 2.4.x** (needed since `@fyrst/ui` 0.2.0). See the official [Panda CSS v2 upgrade guide](https://panda-css.com/docs/get-started/upgrading-to-v2).
2. **`designSystem: '@fyrst/ui'`** (needed since `@fyrst/ui` 0.3.0). See [Build a design system](https://panda-css.com/docs/design-systems/build-a-design-system) and [Consume with Panda](https://panda-css.com/docs/design-systems/consume-with-panda).

If the app is already on Panda 2 and `@fyrst/ui` 0.2.x, skip to [Switch 0.2.x include/buildinfo to designSystem](#switch-02x-includebuildinfo-to-designsystem). If it is still on Panda 1, run the Panda 2 steps first, then that section.

This skill is the ordered path. Read the official Panda guides for anything that needs extra detail.

## Official sources (cite these)

- Upgrade guide: <https://panda-css.com/docs/get-started/upgrading-to-v2>
- Announcement: <https://panda-css.com/blog/panda-css-v2>
- GitHub changelog (`v2` branch): <https://github.com/chakra-ui/panda/blob/v2/packages/dev/CHANGELOG.md>
- CLI reference: <https://panda-css.com/docs/references/cli>
- Config: <https://panda-css.com/docs/references/config>
- Design system (library): <https://panda-css.com/docs/design-systems/build-a-design-system>
- Consume with Panda: <https://panda-css.com/docs/design-systems/consume-with-panda>
- Publishing: <https://panda-css.com/docs/design-systems/publishing>
- `@fyrst/ui` consumer setup: repo root `README.md`

Do not invent Panda APIs. If this skill and upstream disagree on a Panda-only detail, follow the upgrade / design-system guides.

## Hard rules

- Keep the **consumer contract** for `@fyrst/ui` **0.3.x**: `designSystem: '@fyrst/ui'`. Do **not** add `@fyrst/ui/preset` / `@fyrst/ui/design-preset` to `presets`, and do **not** `include` `@fyrst/ui` or `@fyrst/ui/panda.buildinfo.json`. Listing the package in `include` errors with `design_system_in_include`.
- `@fyrst/ui/design-preset` (and `@fyrst/ui/preset`) still exist for **token-only** apps that do not render the Vue components and do not set `designSystem`. Do not combine that preset with `designSystem`.
- Align **every** `@pandacss/*` package on the **same 2.x version**. Never mix 1.x and 2.x in one lockfile.
- On `@fyrst/ui` **0.4.0+** with `designSystem: '@fyrst/ui'`, do **not** add `@pandacss/preset-base`. The package depends on it and inlines the module into `dist/panda/preset.mjs`. `@pandacss/dev` stays a peer. A string preset name would be resolved from the app ([Publishing](https://panda-css.com/docs/design-systems/publishing)); that is why 0.3.0 apps had to install it themselves.
- On **0.3.x**, or on a token-only config that still writes `presets: ['@pandacss/preset-base', preset]`, install `@pandacss/preset-base` in the app. 0.4.0 token-only configs can use `presets: [preset]` — the preset imports the base module, and `@fyrst/ui`'s dependency resolves it.
- Do not ship compiled Panda CSS from `@fyrst/ui`. `@fyrst/ui/style.css` is Iconify icons only. The app generates styles locally.
- Public-repo hygiene: no customer names, client domains, internal consumer repo names, screenshots of customer UIs, or secrets in commits, skills, or PRs.

## What v2 is (short)

v2 keeps `css()`, recipes, tokens, conditions, and JSX props. It rewrites the compiler (Oxc / `@pandacss/compiler`). Output stays close to v1 except the deliberate breaks below. v2 is **ESM-only** and needs **Node 22+**.

## What @fyrst/ui changed

### 0.2.0 (Panda 2.4)

| Area | v1 consumer | v2 consumer (`@fyrst/ui` 0.2.x) |
| --- | --- | --- |
| Packages | `@pandacss/dev` `^1` | `@pandacss/dev`, `@pandacss/preset-base`, and `@pandacss/types` `^2.4` everywhere |
| Studio | `@pandacss/studio` (v1) | Remove it. Use the [hosted Studio](https://panda-css.com/studio) if needed |
| Nested preset | fyrst preset did not list base | fyrst `definePreset` now has `presets: ['@pandacss/preset-base']` |
| Theme | `theme.extend.containerSizes` | `theme.extend.containers` (old key is **ignored with no warning**) |
| Codegen files | `styled-system/css/index.mjs` | `styled-system/css/index.js` |
| Style object type | `Styles` from `styled-system/css` | `SystemStyleObject` from `styled-system/types` |
| Buildinfo JSON | `styles.atomic` | `atoms` |

### 0.3.0 (panda lib / designSystem) — breaking vs 0.2.0

| Area | `@fyrst/ui` 0.2.x | `@fyrst/ui` 0.3.x |
| --- | --- | --- |
| App `panda.config` | `presets: ['@pandacss/preset-base', preset]` plus `include` of `@fyrst/ui/panda.buildinfo.json` | `designSystem: '@fyrst/ui'` only. `include` is the **app's** source |
| Library CLI | `panda buildinfo --outfile dist/panda.buildinfo.json` | `panda lib --outdir dist --files './**/*.{js,mjs}' --panda '^2.4.0'` |
| Public export | `@fyrst/ui/panda.buildinfo.json` | `@fyrst/ui/panda/lib.json` (plus `preset.mjs`, `buildinfo.json`). Apps do not import these; `designSystem` loads them |
| Generated subpaths | none | `panda lib` syncs `./panda/*`, `./css`, `./tokens`, `./types`, … Do not hand-edit them |
| `@fyrst/ui/design-preset` | required in app `presets` | optional; token-only. Do not combine with `designSystem` |
| `@fyrst/ui/nuxt` | still auto-imports | still auto-imports; the app must set `designSystem` |
| Vue entry CSS imports | `styled-system/css` (bundled or aliased) | published JS imports `@fyrst/ui/css` so stale-buildinfo fallback can re-extract |
| Inline `style=` | Card/Loader/Progress/FormPrompt used CSS variables on `style=` | variants are classes; SSR HTML has no `style=` from those components |

### 0.4.x (consumer patches) — additive on 0.3.x

| Area | 0.3.x | 0.4.x |
| --- | --- | --- |
| `@pandacss/preset-base` | peer; `designSystem` apps still installed it so Panda could resolve the string from the app | dependency of `@fyrst/ui`; inlined into `dist/panda/preset.mjs`. Do not add it on a `designSystem` app |
| `Button` | `size` `sm` \| `md` \| `lg` only; no `font-family` | `fullWidth` boolean (default `false`); `fontFamily: 'inherit'` |
| Fields | input / textarea / select trigger used the user-agent font when preflight was off | `fontFamily: 'inherit'` on those controls. Field URL already had `font: inherit` |
| `AlertRoot` | `#icon` only replaces the default icon | `hideIcon` omits the icon and its gap |
| Fonts | no `fonts.sans` / `serif` / `mono` on this preset | Figtree sans stack, system serif and mono, semantic `fonts.body`. Load the face in the app (root README). The package does not ship font files |
| Status washes | `danger` / `success` / `warning` / `info` use `*.subtle`. `primary` is a single color | unchanged in 0.4.1. 0.4.0 added `*.lucid.700`, `*.lucid.900`, `brand.pale.lucid`, `primary.subtle`, `primary.subtle.light`, and `primary.text` by mistake; 0.4.1 removes them. Use `*.subtle` |
| Required asterisk | `danger.subtle` (grey wash in dark mode) | `danger` again |

No props were removed. `fullWidth` and `hideIcon` default to `false`.

# Switch 0.2.x include/buildinfo to designSystem

Run this on every `panda.config.ts` / `panda.config.mjs` in the consumer (apps, playgrounds, fixtures).

### Before (`@fyrst/ui` 0.2.x)

```ts
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

const require = createRequire(resolve(process.cwd(), 'panda.config.ts'))

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', preset],
  include: [
    require.resolve('@fyrst/ui/panda.buildinfo.json'),
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  outdir: 'styled-system',
})
```

### After (`@fyrst/ui` 0.3.x)

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

Rules:

- One field: `designSystem: '@fyrst/ui'`. Do not add the fyrst preset, `importMap`, or `buildinfo.json` by hand.
- `include` is only the app's own source. A glob into `node_modules/@fyrst/ui` re-extracts what the package already ships.
- Keep `@layer reset, base, tokens, recipes, utilities` in the app CSS. Keep `@pandacss/dev/postcss` (or `@pandacss/vite`).
- Import components as before (`@fyrst/ui`, `@fyrst/ui/vue/Button`, Nuxt `FyrstButton`). Do **not** copy component `cva` / `sva` style objects into the app to "make CSS work".
- If `buildinfo.json` is stale or malformed, Panda warns `design_system_buildinfo_stale` and re-extracts the `files` globs from `lib.json`. Styles should still appear. Persistently missing utilities means the installed `@fyrst/ui` is older than 0.3.0 or peers are mixed.

Search and delete:

```bash
rg "panda.buildinfo.json|@fyrst/ui/design-preset|@fyrst/ui/preset" -g 'panda.config.*' -g '!node_modules'
```

Card / Loader / Progress call sites: discrete variants only. `CardRoot` `borderColor` is ignored. `Loader` `size` snaps to `[16,20,24,32,40,48,56,64,80,96,120]`. Progress width is a 0–100 class, not `--progress-value`.

# Step-by-step checklist (Panda 1 → 2, then 0.3.x)

Run these in the **consumer** repo. Do not skip the before-snapshot; it is how you catch visual regressions.

## 0. Preconditions

1. Confirm the project uses `@fyrst/ui` and/or a copy of `packages/preset` from [fyrst-dev/ui](https://github.com/fyrst-dev/ui).
2. Confirm **Node 22+** (and a Bun/npm/pnpm that can install optional native `@pandacss/compiler` bindings).
3. Confirm `"type": "module"` (or `.mjs` config) so `panda.config.ts` loads as ESM. Convert `require('@pandacss/dev')` to `import`.
4. `postcss.config.cjs` may stay CommonJS. Keep `@pandacss/dev/postcss` in PostCSS (Nuxt: `postcss.plugins['@pandacss/dev/postcss']`). Keep `@layer reset, base, tokens, recipes, utilities` in the app CSS.

## 1. Snapshot generated output (before)

From the app that runs Panda:

```bash
panda codegen --clean
```

Save, outside the working tree or in a throwaway directory:

- `styled-system/tokens/`
- generated CSS (`styled-system/styles.css` or the PostCSS output the app actually serves)
- a list of token names:

```bash
rg -o "\"[a-zA-Z0-9.-]+\"" styled-system/tokens --glob '*.d.ts' | sort -u
```

If the app already has Playwright or visual tests, note that baseline. Do not commit customer screenshots into a public repo.

## 2. Bump Panda (all packages, one major)

In **every** workspace package that mentions Panda:

```bash
bun add -d @pandacss/dev@^2.4.0 @pandacss/types@^2.4.0
```

Add `@pandacss/preset-base@^2.4.0` only for a **0.3.x** `designSystem` app, a token-only config that still lists the string `'@pandacss/preset-base'`, or a vendored preset. `@fyrst/ui` **0.4.0** `designSystem` apps do not.

Also bump any integration to the **same** 2.x line: `@pandacss/postcss`, `@pandacss/vite`, `@pandacss/webpack`, `@pandacss/rollup`, `@pandacss/bun`.

Remove v1-only packages:

```bash
bun remove @pandacss/studio
```

Reinstall and **prove the lockfile is not mixed**:

```bash
rg '@pandacss/' bun.lock | rg '1\.[0-9]'
# must print nothing. Every @pandacss/* should be 2.4.x (or another single 2.x).
```

If any `1.x` remains, find the dependent (`bun why @pandacss/studio`, `bun why @pandacss/dev`) and remove or upgrade it. Then reinstall.

## 3. Upgrade @fyrst/ui

**npm consumer:** bump `@fyrst/ui` to **0.4.x** (or **0.3.x** if you are not taking the font, token, and preset-base fixes yet). Then apply [Switch 0.2.x include/buildinfo to designSystem](#switch-02x-includebuildinfo-to-designsystem). On 0.4.0, remove a direct `@pandacss/preset-base` dependency that was only there so `designSystem` could resolve.

**Vendored preset:** see [Vendored copy of the preset](#vendored-copy-of-the-preset). Copy source from a 0.3.x commit or later; do not leave a Panda 1 snapshot of `packages/preset/src`. If the app also uses **published** `@fyrst/ui` components, the app still needs `designSystem: '@fyrst/ui'` — vendoring the preset does not replace `panda lib`.

## 4. Rewrite `panda.config.ts`

Use the 0.3.x snippet above for any app that renders `@fyrst/ui` components.

v1 injected `@pandacss/preset-base` unless `eject: true`. v2 injects **nothing**. On `@fyrst/ui` 0.4.0 the fyrst preset already imports that module, so `presets: [preset]` is enough for a token-only app. On 0.2.x / 0.3.x, token-only configs must still list `['@pandacss/preset-base', preset]` or they lose base utilities/conditions (`unknown_condition`). A string `'@pandacss/preset-base'` is always resolved from the app, even in 0.4.0.

Remove gone config keys if present: `studio`, `eject`, `emitTokensOnly`, `gitignore`, `clean`, `watch`, `poll`, `lightningcss`, `browserslist`. Replace `forceConsistentTypeExtension` with `forceImportExtension` (different semantics — read the upgrade guide). Drop `syntax` / template-literal mode. Convert array conditions to the nested object form ending in `'@slot'`.

If the consumer used root `hooks`, move them onto `plugins[].hooks`. Supported: `config:resolved`, `preset:resolved`, `parser:before`, `codegen:prepare`, `codegen:done`, `cssgen:done` (observe-only). Do not restore v1 engine hooks.

## 5. Theme key: `containerSizes` → `containers`

The old key is ignored **without a warning**. Container query conditions (`@<name>/<size>`) silently disappear.

```ts
// ❌ v1
theme: {
  extend: {
    containerSizes: { sm: '384px', md: '448px' },
  },
}

// ✅ v2
theme: {
  extend: {
    containers: { sm: '384px', md: '448px' },
  },
}
```

Search the consumer **and** any vendored preset for `containerSizes`.

Other upstream renames that apply if the consumer used them:

| v1 | v2 |
| --- | --- |
| `theme.containerSizes` | `theme.containers` |
| `createStyleContext` from `styled-system/jsx` | `createSlotRecipeContext` (sva) or `createRecipeContext` (cva) |
| `defineParts` | write selectors, or `defineSlotRecipe` |
| `RecipeConfig` / `SlotRecipeConfig` from `@pandacss/dev` | those names from `@pandacss/types`; generated types are `RecipeDefinition` / `SlotRecipeDefinition` |
| `Token` / `SizeToken` from `styled-system/tokens` | `styled-system/types` |
| `types/prop-type` (`UtilityValues`), `CssProperties` | `SystemStyleObject` / `SystemProperties` from `styled-system/types` |
| `jsxFramework: 'qwik'` | removed; use `css()` |
| `globalPositionTry` | `positionTry()` / `theme.positionTry` |

`@pandacss/dev` now exports only `Config`, `Preset`, and `UserConfig` as types. Import other config types from `@pandacss/types`.

## 6. CLI scripts

Update **package.json scripts**, CI, and docs.

| v1 | v2 / `@fyrst/ui` 0.3 |
| --- | --- |
| `panda ship` | **Consumers:** do not run this. **Library:** `panda lib` (not `panda buildinfo`) |
| `panda spec` | `panda codegen --spec` (optional path `--spec=./design-system.json`) |
| `panda emit-pkg` | removed |
| `panda studio` / `--build` / `--preview` | hosted Studio; remove `@pandacss/studio` |
| `panda mcp` / `panda init-mcp` | `npx -y @pandacss/mcp` |
| `panda info` | folded into `panda doctor` |
| `panda codegen --silent` | `panda codegen --log-level silent` |
| `--cpu-prof` | `--profile` |
| `panda cssgen "src/**/*.tsx"` | `panda cssgen --include "src/**/*.tsx"` |
| `panda -o dist` (meant outdir) | `panda --outdir dist` (`-o` is `--outfile`, a CSS path) |
| `--poll`, `--lightningcss`, `--emitTokensOnly` | gone |

Always run the **first** v2 codegen with `--clean`:

```bash
panda codegen --clean
```

v2 does not delete files it no longer generates. v1 wrote `.mjs`; v2 writes `.js`. Vite resolves `index.mjs` **before** `index.js`, so a leftover v1 file silently wins.

## 7. Codegen import paths and `Styles`

Search the consumer:

```bash
rg "styled-system/css/index\\.mjs" -g '!node_modules' -g '!dist'
rg "\\bStyles\\b" -g '*.{ts,tsx,vue,d.ts}' --glob '!node_modules'
rg "createStyleContext|defineParts|containerSizes|panda ship|panda.buildinfo.json" -g '!node_modules'
```

### `index.mjs` → `index.js`

```ts
// ❌ v1
const styledSystemCss = resolve(packageRoot, 'styled-system/css/index.mjs')

// ✅ v2
const styledSystemCss = resolve(packageRoot, 'styled-system/css/index.js')
```

Runtime `import { css, cva, sva } from 'styled-system/css'` stays the same in **app** source. `@fyrst/ui` components imported from the package use `@fyrst/ui/css` inside the published JS; the app does not change those imports.

### `Styles` → `SystemStyleObject`

```ts
// ❌ v1
import type { Styles } from 'styled-system/css'

// ✅ v2
import type { SystemStyleObject } from 'styled-system/types'
```

Keep `import { css, cx, cva, sva } from 'styled-system/css'` for values in app code. Apps that add nothing of their own may import `css` from `@fyrst/ui/css` instead.

## 8. TS2742 when the consumer builds its own preset or library

`definePreset` / `defineKeyframes` in Panda 2 infer types that point at a nested `@pandacss/types` path. `tsup --dts` then fails TS2742.

Fix: **explicit annotations** plus a resolvable `@pandacss/types` dependency. Keep the **export names** (`preset`, `keyframes`, …).

```ts
import type { Preset } from '@pandacss/dev'
import { definePreset } from '@pandacss/dev'

const preset: Preset = definePreset({
  name: 'my-preset',
  presets: ['@pandacss/preset-base'],
})

export { preset }
```

```ts
import type { AnimationStyles, CssKeyframes } from '@pandacss/types'
import { defineAnimationStyles, defineKeyframes } from '@pandacss/dev'

export const animationStyles: AnimationStyles = defineAnimationStyles({ /* ... */ })
export const keyframes: CssKeyframes = defineKeyframes({ /* ... */ })
```

Add `@pandacss/types` `^2.4.0` as a **devDependency and peerDependency** of the package that emits those `.d.ts` files.

This is only required for packages that **publish declaration files** for Panda objects. An app that only runs `panda codegen` does not need to annotate `defineConfig`.

## 9. `imported_recipe_raw_dynamic`

Extraction may warn `imported_recipe_raw_dynamic` when `.raw()` is called in another file with **dynamic** variant values (props, computed state). That is expected for Vue SFCs that do:

```ts
export const badgeStyles = cva({ base: { /* ... */ }, variants: { /* ... */ } })

const badgeClass = computed(() => css(
  badgeStyles.raw({ color: props.color, size: props.size }),
))
```

Keep CVA/SVA **definitions** in a `styles.ts` next to the component, as static objects. That is how `@fyrst/ui` extracts component styles into `panda lib` buildinfo. Treat the warning as non-blocking if component classes still appear in generated CSS.

## 10. Other v2 behavior to know (only if the consumer hits it)

- **Compound variants** are their own class; `css` no longer fully replaces them.
- **Theme keys without `extend`** replace a narrower slice than v1. Prefer `theme.extend`.
- **Border / shorthand vs longhand:** all-sides shorthands win over per-side shorthands.
- **`scrollbarWidth`:** `auto | thin | none`, not size tokens.
- **`sizes.prose`** in `@pandacss/preset-panda` went `65ch` → `60ch`. The fyrst preset does not ship `prose`.
- **No universal CSS variable reset.** Utilities that need `@property` need Chrome 85+ / Safari 16.4+ / Firefox 128+, or `optimize.propertyFallback: true`.
- v2 **follows named imports** across files. Default/namespace imports are still not followed.

# Vendored copy of the preset

Some consumers copy `packages/preset` (or its built `dist`) into their tree, for example `vendor/design-preset/`, instead of resolving `@fyrst/ui/design-preset` from npm. Keep this generic: do not name the host application.

## Detect a vendored copy

Look for a local `definePreset` named `fyrst-design-preset`, a `tokens/` tree that matches this repo, or a package that re-exports `{ preset, breakpoints }` from a path under `vendor/` / `third_party/` / `packages/design-preset/`.

## Update the pin

1. Record the current pin (git submodule SHA, copied commit, or patch series).
2. Fetch [github.com/fyrst-dev/ui](https://github.com/fyrst-dev/ui) at a **0.3.x** commit **or later** on `master`.
3. Replace the vendored files with `packages/preset/src/**` from that commit. Do not copy `styled-system/` or other codegen folders.
4. If the consumer applied local patches on top of the preset, **re-apply them** on the new tree.
5. In the vendored `definePreset`, import `@pandacss/preset-base` and pass that module on `presets` (0.4.0). A string `'@pandacss/preset-base'` still works if the app installs the package (0.3.x). Keep `theme.extend.containers` (not `containerSizes`).
6. Add `@pandacss/dev` and `@pandacss/types` `^2.4.0` to the package that owns `panda.config.ts`. On 0.4.0, `@pandacss/preset-base` is a dependency of the vendored preset (it imports the module); the app does not add it again. On 0.3.x, the app installs `@pandacss/preset-base` because a string preset is resolved from the app.
7. If the app only needs tokens (no `@fyrst/ui` Vue components), point `presets` at `[vendoredPreset]` on 0.4.0. On 0.3.x, use `['@pandacss/preset-base', vendoredPreset]`.
8. If the app still uses **published** `@fyrst/ui` components, set `designSystem: '@fyrst/ui'` and do **not** also list the vendored preset. Vendoring the preset does not replace `panda lib`.
9. Rebuild the vendored package. Fix TS2742 with the annotations in section 8.
10. Run the verification section. Diff tokens against the before-snapshot.

Do not publish customer-specific token overrides back to `fyrst-dev/ui` from this skill.

# Verification (required)

After the edits:

```bash
rg '@pandacss/' bun.lock | rg '1\.[0-9]'   # empty

rg "panda.buildinfo.json" -g '!node_modules'   # empty in app configs

panda codegen --clean
find styled-system -name '*.mjs'   # empty (unless you set outExtension: 'mjs')

bun run lint
bun run build
bun run test
panda doctor
```

## Diff generated CSS and token names

1. **Token names** should match the v1 / 0.2 snapshot. Missing names are not OK.
2. **Container query conditions.** After `containers`, `@<name>/<size>` conditions should exist.
3. **Utility class names** for `@fyrst/ui` components (button `d_inline-flex`, `bg_primary`, card, field, dialog, …) must appear even though the app did not re-declare those style objects.
4. **Visual pass** on the app's own screens. Check light and dark if the app uses `.light` / color modes.
5. **CSP / SSR:** component HTML should not contain `style=""` from Card, Loader, Progress, or FieldInput.

Stop and fix before declaring done if token names disappeared, container queries died, or component classes are missing.

# Common errors and fixes

| Symptom | Cause | Fix |
| --- | --- | --- |
| `TS2742` on `preset` / `keyframes` during `tsup --dts` | Inferred type points at nested `@pandacss/types` | Annotate `Preset`, `CssKeyframes`, `AnimationStyles`; add `@pandacss/types` `^2.4` as a real dependency |
| `Cannot find module '@pandacss/types'` | Types came from a nested install only | Direct dep on `@pandacss/types` in the emitting package |
| `unknown_condition` / missing `Flex` or other patterns | `preset-base` not listed / not installed (token-only config on 0.3.x, or a string preset the app cannot resolve) | 0.4.0: `presets: [preset]`. 0.3.x: `presets: ['@pandacss/preset-base', preset]` and install the package in the app |
| `preset_resolution_failed` for `@pandacss/preset-base` on a `designSystem` app | 0.3.0 published a string preset resolved from the app | upgrade to 0.4.0 and remove the direct dependency. Do not add the string back |
| Utilities exist in one package, gone in another | Mixed 1.x / 2.x lockfile, or a workspace package still on 1.x | Same `^2.4` everywhere |
| Install pulls `@pandacss/dev@1.12` back | `@pandacss/studio` or another v1-only package | Remove `studio` and any `@pandacss/*@1` |
| `panda: command not found: ship` | v2 dropped `ship` | Consumers: `designSystem`. Library authors: `panda lib` |
| Component styles missing in the app | still on 0.2.x include/buildinfo, or `designSystem` missing | `designSystem: '@fyrst/ui'`; do not include the package |
| `design_system_in_include` | package listed in `include` | move it to `designSystem` |
| `design_system_manifest_not_found` / `_not_exported` | installed `@fyrst/ui` is older than 0.3.0 | bump `@fyrst/ui` and reinstall |
| `design_system_peer_range_unsatisfied` | app Panda major ≠ library | `@pandacss/dev` `^2.4` in the app |
| `design_system_buildinfo_stale` | malformed/old buildinfo; Panda re-extracts `files` | expected fallback; styles should remain. If utilities vanish, the installed JS is not importing `@fyrst/ui/css` |
| `Styles` is not exported from `styled-system/css` | v2 codegen | `import type { SystemStyleObject } from 'styled-system/types'` |
| Runtime still loads old codegen | leftover `index.mjs` | `panda codegen --clean` |
| Container queries do nothing | still `containerSizes` | rename to `containers` |
| `ERR_REQUIRE_ESM` on `@pandacss/dev` | CJS `require('@pandacss/dev')` | ESM `import`; `"type": "module"` |
| Node engine errors / native binding fails | Node &lt; 22 | Upgrade Node |
| `createStyleContext` missing | removed | `createSlotRecipeContext` / `createRecipeContext` |
| Nuxt warn: cannot resolve `@fyrst/ui/panda/lib.json` | module check | install `@fyrst/ui` 0.3.x, set `designSystem`, set `postcss.plugins['@pandacss/dev/postcss']` |
| Card/Loader/Progress look unstyled or CSP blocks paint | leftover inline `style=` from 0.2.x, or expecting arbitrary `borderColor` | upgrade `@fyrst/ui`; use discrete variants |

# Do not

- Do not mix Panda majors to “just get CI green”.
- Do not keep `@fyrst/ui/panda.buildinfo.json` in `include` after 0.3.0 — that export is gone.
- Do not add `@fyrst/ui/preset` to `presets` **and** set `designSystem: '@fyrst/ui'`.
- Do not add `@pandacss/studio@1` to a 2.x lockfile.
- Do not leave `containerSizes` “for compatibility” — v2 will not read it.
- Do not re-declare `@fyrst/ui` component `cva` / `sva` objects in the app to generate CSS.
- Do not commit customer names, domains, or screenshots. Use generic paths (`vendor/design-preset`, `apps/web`).
