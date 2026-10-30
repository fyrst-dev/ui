---
name: panda-v2-migration
description: >-
  Migrate a consumer project that uses @fyrst/ui or the fyrst design preset
  from Panda CSS 1.x to Panda CSS 2.x. Use when the app still depends on
  @pandacss/dev 1.x, panda ship, containerSizes, Styles from styled-system/css,
  styled-system/css/index.mjs, or @pandacss/studio; when codegen, tsup --dts,
  or bun install fails after a Panda 2 bump; or when the user asks to upgrade
  Panda, @fyrst/ui/design-preset, or a vendored copy of the preset.
---

# Migrate a @fyrst/ui consumer from Panda CSS 1 to 2

You are migrating a **consuming** project (app, storefront, or library) that still runs Panda CSS 1.x while using `@fyrst/ui`, `@fyrst/ui/design-preset`, and/or a **vendored copy** of that preset. `@fyrst/ui` itself is on Panda **2.4.x** (see [fyrst-dev/ui#78](https://github.com/fyrst-dev/ui/pull/78)). Public export names from `@fyrst/ui` did not change.

This skill is the ordered path. Read the official Panda guide for anything that needs extra detail.

## Official sources (cite these)

- Upgrade guide: <https://panda-css.com/docs/get-started/upgrading-to-v2>
- Announcement: <https://panda-css.com/blog/panda-css-v2>
- GitHub changelog (`v2` branch): <https://github.com/chakra-ui/panda/blob/v2/packages/dev/CHANGELOG.md>
- CLI reference (v2 commands, including `buildinfo`): <https://panda-css.com/docs/references/cli>
- Config: <https://panda-css.com/docs/references/config>
- `@fyrst/ui` consumer setup: repo root `README.md`

Do not invent Panda APIs. If this skill and upstream disagree on a Panda-only detail, follow the upgrade guide.

## Hard rules

- Keep the **consumer contract**: `import { preset } from '@fyrst/ui/design-preset'` (or the vendored equivalent) and `include` `@fyrst/ui/panda.buildinfo.json`. Do **not** switch the app to `panda lib` / `designSystem` unless the user explicitly wants that *and* they own that library. `@fyrst/ui` still ships `panda.buildinfo.json`, not a `panda lib` package.
- Align **every** `@pandacss/*` package on the **same 2.x version**. Never mix 1.x and 2.x in one lockfile.
- List `@pandacss/preset-base` in `presets` **before** the fyrst preset.
- Do not ship compiled Panda CSS from `@fyrst/ui`. `@fyrst/ui/style.css` is Iconify icons only. The app generates styles locally.
- Public-repo hygiene: no customer names, client domains, internal consumer repo names, screenshots of customer UIs, or secrets in commits, skills, or PRs.

## What v2 is (short)

v2 keeps `css()`, recipes, tokens, conditions, and JSX props. It rewrites the compiler (Oxc / `@pandacss/compiler`). Output stays close to v1 except the deliberate breaks below. v2 is **ESM-only** and needs **Node 22+**.

## What @fyrst/ui changed in the 2.4 upgrade

These are the adaptations that actually landed for `@fyrst/ui`. Apply the matching change in the consumer.

| Area | v1 consumer | v2 consumer |
| --- | --- | --- |
| Packages | `@pandacss/dev` `^1` | `@pandacss/dev`, `@pandacss/preset-base`, and `@pandacss/types` `^2.4` everywhere |
| Studio | `@pandacss/studio` (v1) | Remove it. Use the [hosted Studio](https://panda-css.com/studio) if needed |
| `panda.config` presets | Often only the fyrst preset (v1 injected base) | `['@pandacss/preset-base', preset]` |
| Nested preset | fyrst preset did not list base | fyrst `definePreset` now has `presets: ['@pandacss/preset-base']` |
| Theme | `theme.extend.containerSizes` | `theme.extend.containers` (old key is **ignored with no warning**) |
| CLI for component styles | `panda ship` | `panda buildinfo --outfile …/panda.buildinfo.json` |
| Codegen files | `styled-system/css/index.mjs` | `styled-system/css/index.js` |
| Style object type | `Styles` from `styled-system/css` | `SystemStyleObject` from `styled-system/types` |
| Buildinfo JSON | `styles.atomic` | `atoms` (keep a fallback to `styles.atomic`) |
| Preset DTS (`tsup --dts`) | inferred `preset` / `keyframes` | explicit `Preset`, `CssKeyframes`, `AnimationStyles` |
| Consumer include | `@fyrst/ui/panda.buildinfo.json` | **unchanged** |

`@fyrst/ui` public exports stay: `preset`, `breakpoints`, `@fyrst/ui/design-preset`, `@fyrst/ui/panda.buildinfo.json`.

# Step-by-step checklist

Run these in the **consumer** repo. Do not skip the before-snapshot; it is how you catch visual regressions.

## 0. Preconditions

1. Confirm the project uses `@fyrst/ui` and/or a copy of `packages/preset` from [fyrst-dev/ui](https://github.com/fyrst-dev/ui), and `@pandacss/dev` 1.x.
2. Confirm **Node 22+** (and a Bun/npm/pnpm that can install optional native `@pandacss/compiler` bindings).
3. Confirm `"type": "module"` (or `.mjs` config) so `panda.config.ts` loads as ESM. Convert `require('@pandacss/dev')` to `import`. `createRequire(resolve(process.cwd(), 'panda.config.ts'))` for `require.resolve('@fyrst/ui/panda.buildinfo.json')` is still valid — that is Node resolution, not a CJS Panda build.
4. `postcss.config.cjs` may stay CommonJS. Keep `@pandacss/dev/postcss` in PostCSS (Nuxt: `postcss.plugins['@pandacss/dev/postcss']`). Keep `@layer reset, base, tokens, recipes, utilities` in the app CSS.

## 1. Snapshot generated output (before)

From the app that runs Panda (storefront, Nuxt playground, Vite app):

```bash
# Use the project's existing codegen script, then copy artifacts aside.
panda codegen --clean   # v1 is fine for the snapshot
```

Save, outside the working tree or in a throwaway directory:

- `styled-system/tokens/` (token types and maps)
- generated CSS (`styled-system/styles.css` or the PostCSS output the app actually serves)
- a list of token names:

```bash
# Example: collect color / spacing / radius keys from generated token types
rg -o "\"[a-zA-Z0-9.-]+\"" styled-system/tokens --glob '*.d.ts' | sort -u
```

If the app already has Playwright or visual tests, note that baseline. Do not commit customer screenshots into a public repo.

## 2. Bump Panda (all packages, one major)

In **every** workspace package that mentions Panda (root, apps, UI kits, the vendored preset package):

```bash
# bun example — use the consumer's package manager
bun add -d @pandacss/dev@^2.4.0 @pandacss/preset-base@^2.4.0 @pandacss/types@^2.4.0
```

Also bump any integration to the **same** 2.x line: `@pandacss/postcss`, `@pandacss/vite`, `@pandacss/webpack`, `@pandacss/rollup`, `@pandacss/bun`.

Remove v1-only packages:

```bash
# studio has no v2 npm package; it pulls @pandacss/*@1.x back into the lockfile
bun remove @pandacss/studio
```

Declare peers the same way `@fyrst/ui` does:

```json
{
  "peerDependencies": {
    "@pandacss/dev": "^2.4.0",
    "@pandacss/preset-base": "^2.4.0"
  }
}
```

Libraries that emit `.d.ts` for presets should also peer/dev-depend on `@pandacss/types` `^2.4.0`.

Reinstall and **prove the lockfile is not mixed**:

```bash
rg '@pandacss/' bun.lock | rg '1\.[0-9]'
# must print nothing. Every @pandacss/* should be 2.4.x (or another single 2.x).
```

If any `1.x` remains, find the dependent (`bun why @pandacss/studio`, `bun why @pandacss/dev`) and remove or upgrade it. Then reinstall.

## 3. Upgrade @fyrst/ui or the vendored preset

**npm consumer:** bump `@fyrst/ui` to a release built from Panda 2 (commit `e9d03ed` / PR #78 or later). Keep using:

- `import { preset } from '@fyrst/ui/design-preset'`
- `require.resolve('@fyrst/ui/panda.buildinfo.json')` in `include`

**Vendored preset:** see [Vendored copy of the preset](#vendored-copy-of-the-preset). Copy source from that same commit or later; do not leave a Panda 1 snapshot of `packages/preset/src`.

## 4. Rewrite `panda.config.ts`

v1 injected `@pandacss/preset-base` unless `eject: true`. v2 injects **nothing**. A config that only lists the fyrst preset still *builds*, but you lose base utilities/conditions and get `unknown_condition` warnings.

### Before (Panda 1)

```ts
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { defineConfig } from '@pandacss/dev'
import { preset } from '@fyrst/ui/design-preset'

const require = createRequire(resolve(process.cwd(), 'panda.config.ts'))

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

### After (Panda 2)

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

Rules:

- `@pandacss/preset-base` **first**, fyrst preset **second**.
- Keep `panda.buildinfo.json` in `include`. Without it, `@fyrst/ui` component styles never generate. The Nuxt module warns in `dev` if that export cannot be resolved or PostCSS is missing `@pandacss/dev/postcss`.
- Install `@pandacss/preset-base` in the app that **loads** the config. Nested `presets: ['@pandacss/preset-base']` inside the fyrst `definePreset` is a **string** that must resolve from the consumer install.
- Search for other `defineConfig` / `panda.config.*` files (apps, packages, playgrounds, fixtures) and update all of them.

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

| v1 | v2 |
| --- | --- |
| `panda ship` | `@fyrst/ui` consumers and this design system: `panda buildinfo --outfile ./dist/panda.buildinfo.json`. `panda lib` is the upstream replacement for **publishing a new design system**, not for consuming `@fyrst/ui` |
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
# or
panda build --clean
```

v2 does not delete files it no longer generates. v1 wrote `.mjs`; v2 writes `.js`. Vite resolves `index.mjs` **before** `index.js`, so a leftover v1 file silently wins.

## 7. Codegen import paths and `Styles`

Search the consumer:

```bash
rg "styled-system/css/index\\.mjs" -g '!node_modules' -g '!dist'
rg "\\bStyles\\b" -g '*.{ts,tsx,vue,d.ts}' --glob '!node_modules'
rg "createStyleContext|defineParts|containerSizes|panda ship" -g '!node_modules'
```

### `index.mjs` → `index.js`

```ts
// ❌ v1 (tests, vitest setup, manual imports)
import { existsSync } from 'node:fs'
const styledSystemCss = resolve(packageRoot, 'styled-system/css/index.mjs')

// ✅ v2
const styledSystemCss = resolve(packageRoot, 'styled-system/css/index.js')
```

Runtime `import { css, cva, sva } from 'styled-system/css'` stays the same.

### `Styles` → `SystemStyleObject`

v2 codegen no longer exports `Styles` from `styled-system/css`. `@fyrst/ui` component override props (`classRoot`, css maps, and similar) use `SystemStyleObject`:

```ts
// ❌ v1
import type { Styles } from 'styled-system/css'

export type CardCss = Partial<Record<string, Styles>>
classRoot?: Styles | null

// ✅ v2
import type { SystemStyleObject } from 'styled-system/types'

export type CardCss = Partial<Record<string, SystemStyleObject>>
classRoot?: SystemStyleObject | null
```

Keep `import { css, cx, cva, sva } from 'styled-system/css'` for values.

## 8. TS2742 when the consumer builds its own preset or library

`definePreset` / `defineKeyframes` in Panda 2 infer types that point at a nested `@pandacss/types` path. `tsup --dts` (and other declaration emit) then fails:

```
TS2742: The inferred type of 'keyframes' cannot be named without a reference to
'.bun/@pandacss+types@2.4.0/node_modules/@pandacss/types'.
A type annotation is necessary.
```

Same for `preset`.

Fix: **explicit annotations** plus a resolvable `@pandacss/types` dependency. Keep the **export names** (`preset`, `keyframes`, …).

```ts
import type { Preset } from '@pandacss/dev'
import { definePreset } from '@pandacss/dev'

const preset: Preset = definePreset({
  name: 'my-preset',
  presets: ['@pandacss/preset-base'],
  // ...
})

export { preset }
```

```ts
import type { AnimationStyles, CssKeyframes } from '@pandacss/types'
import { defineAnimationStyles, defineKeyframes } from '@pandacss/dev'

export const animationStyles: AnimationStyles = defineAnimationStyles({ /* ... */ })
export const keyframes: CssKeyframes = defineKeyframes({ /* ... */ })
```

Add `@pandacss/types` `^2.4.0` as a **devDependency and peerDependency** of the package that emits those `.d.ts` files. Do not rely on it only existing nested under `.bun/` or `node_modules/@pandacss/dev`.

This is only required for packages that **publish declaration files** for Panda objects. An app that only runs `panda codegen` does not need to annotate `defineConfig`.

## 9. Buildinfo shape and `imported_recipe_raw_dynamic`

### JSON shape

v1 `panda ship` wrote something consumers sometimes read as `styles.atomic`. v2 `panda buildinfo` writes **`atoms`**.

When a script or test counts extracted styles:

```ts
const atomCount = buildinfo.atoms?.length ?? buildinfo.styles?.atomic?.length ?? 0
```

Do not assume `styles.atomic` exists after the bump. `@fyrst/ui` still exports the file at `@fyrst/ui/panda.buildinfo.json`; only the inner keys changed.

### `imported_recipe_raw_dynamic`

`panda buildinfo` / extraction may warn `imported_recipe_raw_dynamic` when `.raw()` is called in another file with **dynamic** variant values (props, computed state). That is expected for Vue SFCs that do:

```ts
// styles.ts — static cva/sva (this still extracts)
export const badgeStyles = cva({ base: { /* ... */ }, variants: { /* ... */ } })

// BadgeRoot.vue — variants from props (warns, still OK if styles.ts extracted)
const badgeClass = computed(() => css(
  badgeStyles.raw({ color: props.color, size: props.size }),
))
```

**What to do:**

1. Keep CVA/SVA **definitions** in a `styles.ts` next to the component, as static objects. That is how `@fyrst/ui` extracts component styles into `panda.buildinfo.json`.
2. Treat the warning as non-blocking if atom count stays healthy and component classes still appear in generated CSS.
3. If atoms **drop** or a recipe disappears from CSS: colocate the variant object in the same file as `cva`/`sva`, or pass a **static** object into `.raw()` (no imported runtime map).
4. Do not “fix” the warning by inlining recipes into every Vue file or by switching to `panda lib` for `@fyrst/ui`.

## 10. Other v2 behavior to know (only if the consumer hits it)

- **Compound variants** are their own class; `css` no longer fully replaces them.
- **Theme keys without `extend`** replace a narrower slice than v1 (one recipe, not every recipe). `breakpoints` still replace the whole set. Prefer `theme.extend`.
- **Border / shorthand vs longhand:** all-sides shorthands win over per-side shorthands. Use longhands (`borderInlineEndWidth`) for overrides.
- **`scrollbarWidth`:** `auto | thin | none`, not size tokens.
- **`sizes.prose`** in `@pandacss/preset-panda` went `65ch` → `60ch`. Override the token to keep 65ch. The fyrst preset does not ship `prose`.
- **No universal CSS variable reset.** Utilities that need `@property` need Chrome 85+ / Safari 16.4+ / Firefox 128+, or `optimize.propertyFallback: true`.
- v2 **follows named imports** across files. `staticCss` workarounds for “Panda cannot see this import” can often go. Default/namespace imports are still not followed.

# Vendored copy of the preset

Some consumers copy `packages/preset` (or its built `dist`) into their tree, for example `vendor/design-preset/`, instead of resolving `@fyrst/ui/design-preset` from npm. Keep this generic: do not name the host application.

## Detect a vendored copy

Look for a local `definePreset` named `fyrst-design-preset`, a `tokens/` tree that matches this repo, or a package that re-exports `{ preset, breakpoints }` from a path under `vendor/` / `third_party/` / `packages/design-preset/`.

## Update the pin

1. Record the current pin (git submodule SHA, copied commit, or patch series).
2. Fetch [github.com/fyrst-dev/ui](https://github.com/fyrst-dev/ui) at **`e9d03ed`** (squash-merge of #78) **or later** on `master`.
3. Replace the vendored files with `packages/preset/src/**` from that commit (and the matching `packages/preset/package.json` Panda ranges if the vendor package has its own manifest). Do not copy `styled-system/` or other codegen folders.
4. If the consumer applied local patches on top of the preset, **re-apply them** on the new tree. Do not silently drop token or condition patches.
5. In the vendored `definePreset`, ensure:

```ts
const preset: Preset = definePreset({
  name: 'fyrst-design-preset',
  presets: ['@pandacss/preset-base'],
  theme: {
    extend: {
      containers: { /* not containerSizes */ },
    },
  },
})
```

6. Add `@pandacss/dev`, `@pandacss/preset-base`, and `@pandacss/types` `^2.4.0` to that vendored package (dev + peer) and to the app that loads `panda.config.ts`.
7. Point the app `presets` at `['@pandacss/preset-base', vendoredPreset]`.
8. If the app still uses **published** `@fyrst/ui` components, keep `include: [require.resolve('@fyrst/ui/panda.buildinfo.json'), …]` — vendoring the preset does not replace buildinfo.
9. Rebuild the vendored package (`tsup --dts` or the repo’s build). Fix TS2742 with the annotations in section 8.
10. Run the verification section. Diff tokens against the before-snapshot.

Do not publish customer-specific token overrides back to `fyrst-dev/ui` from this skill.

# Verification (required)

After the edits:

```bash
# 1. lockfile
rg '@pandacss/' bun.lock | rg '1\.[0-9]'   # empty

# 2. clean codegen in every package that has a panda.config
panda codegen --clean
# leftover v1 files must be gone:
find styled-system -name '*.mjs'   # empty (unless you set outExtension: 'mjs')

# 3. project scripts
bun run lint
bun run build
bun run test
# plus the app’s typecheck if it is separate (vue-tsc / tsc)

# 4. Panda health
panda doctor
```

## Diff generated CSS and token names

Compare the section 1 snapshot to the new `styled-system/`:

1. **Token names** (colors, spacing, radii, font sizes, semantic colors). Names should match the v1 snapshot. v2 may wrap unions (for example `Registered<…>`) and alphabetize; that is OK. **Missing** names are not.
2. **Container query conditions.** After `containers`, `@<name>/<size>` conditions should exist. If they vanished, `containerSizes` was left in place.
3. **Utility / recipe class names** in generated CSS for `@fyrst/ui` components (button, field, dialog, …). A large drop in file size or atom count means extraction missed recipes — see `imported_recipe_raw_dynamic`.
4. **Visual pass** on the app’s own screens (home, a form, a dialog, a product/list view — whatever the consumer actually has). Check light and dark if the app uses `.light` / color modes. Confirm `@fyrst/ui` components still have spacing, radius, and color.

Stop and fix before declaring done if token names disappeared, container queries died, or component classes are missing.

# Common errors and fixes

| Symptom | Cause | Fix |
| --- | --- | --- |
| `TS2742` on `preset` / `keyframes` during `tsup --dts` | Inferred type points at nested `@pandacss/types` | Annotate `Preset`, `CssKeyframes`, `AnimationStyles`; add `@pandacss/types` `^2.4` as a real dependency |
| `Cannot find module '@pandacss/types'` | Types came from a nested install only | Direct dep on `@pandacss/types` in the emitting package |
| `unknown_condition` / missing `Flex` or other patterns | `preset-base` not listed / not installed | `presets: ['@pandacss/preset-base', preset]` and install the package in the app that loads config |
| Utilities exist in one package, gone in another | Mixed 1.x / 2.x lockfile, or a workspace package still on 1.x | Same `^2.4` everywhere; delete `node_modules` + lockfile noise; `rg '1\.' bun.lock` |
| Install pulls `@pandacss/dev@1.12` back | `@pandacss/studio` or another v1-only package | Remove `studio` and any `@pandacss/*@1` |
| `panda: command not found: ship` / unknown command `ship` | v2 dropped `ship` | `panda buildinfo --outfile <path>` for `@fyrst/ui`-style artifacts |
| Component styles missing in the app | `panda.buildinfo.json` not in `include`, or resolve failed | `require.resolve('@fyrst/ui/panda.buildinfo.json')` via `createRequire(resolve(process.cwd(), 'panda.config.ts'))` — cwd, not `import.meta.url` |
| `Styles` is not exported from `styled-system/css` | v2 codegen | `import type { SystemStyleObject } from 'styled-system/types'` |
| Runtime still loads old codegen | leftover `index.mjs` | `panda codegen --clean`; import `index.js`; grep for `.mjs` |
| Vite/Webpack uses old styles | `index.mjs` wins over `index.js` | `--clean` and delete `styled-system/**/*.mjs` |
| Container queries do nothing | still `containerSizes` | rename to `containers` |
| `ERR_REQUIRE_ESM` on `@pandacss/dev` | CJS `require('@pandacss/dev')` | ESM `import`; `"type": "module"` |
| Node engine errors / native binding fails | Node &lt; 22 | Upgrade Node |
| `createStyleContext` missing | removed | `createSlotRecipeContext` / `createRecipeContext` |
| Atom count in tests is 0 | test still reads `styles.atomic` | `buildinfo.atoms ?? buildinfo.styles?.atomic` |
| `imported_recipe_raw_dynamic` flood | `.raw({ ...props })` across files | Keep static `cva`/`sva` in `styles.ts`; ignore if atoms stay up; colocate if CSS is missing |
| Theme tokens vanished after override | `theme.tokens` without `extend` | use `theme.extend.tokens` unless you intend to replace that scale |
| Nuxt warn: cannot resolve buildinfo / missing PostCSS | module check | install `@fyrst/ui`, include buildinfo, set `postcss.plugins['@pandacss/dev/postcss']` |

# Do not

- Do not mix Panda majors to “just get CI green”.
- Do not replace `@fyrst/ui/panda.buildinfo.json` with `designSystem` unless you are publishing a **different** library with `panda lib`.
- Do not add `@pandacss/studio@1` to a 2.x lockfile.
- Do not leave `containerSizes` “for compatibility” — v2 will not read it.
- Do not commit customer names, domains, or screenshots. Use generic paths (`vendor/design-preset`, `apps/web`).
