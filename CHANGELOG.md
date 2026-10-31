# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.1] - 2026-10-31

Patch on 0.4.0. Font tokens, `font-family: inherit`, `Button` `fullWidth`, `AlertRoot` `hideIcon`, the required-field asterisk (`color: 'danger'`), and the inlined `@pandacss/preset-base` dependency are unchanged.

### Removed

- Color tokens added in 0.4.0 by mistake: `brand.pale.lucid`, `primary.subtle`, `primary.subtle.light`, `primary.text`, and `primary` / `danger` / `success` / `warning` / `info` `.lucid.700` and `.lucid.900`. Color tokens match v0.2.0 again. Consumers should use `*.subtle`.

## [0.4.0] - 2026-10-30

Additive release for apps already on 0.3.0 (`designSystem: '@fyrst/ui'`, Panda 2.4). No prop was removed or renamed.

### Added

- `Button` `fullWidth` (boolean, default `false`). The button keeps `inline-flex` sizing until `fullWidth` sets `width: 100%` and `box-sizing: border-box`.
- `AlertRoot` `hideIcon` (boolean, default `false`). The icon, including a custom `#icon` slot, is not rendered, so the flex gap collapses.
- Font tokens: `fonts.sans` (Figtree, then the system sans), `fonts.serif`, `fonts.mono`, and semantic `fonts.body` → `{fonts.sans}`. The package does not ship font files. Load the Figtree face in the app (see the root README).
- `primary.subtle`, `primary.subtle.light`, and `primary.text`, matching the other status colors.
- Restored semantic tokens that 0.3.0 still did not ship: `brand.pale.lucid`, and `primary` / `danger` / `success` / `warning` / `info` `.lucid.700` and `.lucid.900`. Values match the definitions from before the muted `*.subtle` mixes. `*.subtle` stays the preferred muted fill for new UI. `brand.pale` itself is unchanged (`{colors.brand.100}`).

### Fixed

- `Button`, field inputs, textareas, and select triggers set `font-family: inherit`, so with preflight off they follow the app font instead of the user-agent face. The same inherit is set on the prompt textarea, the flyout trigger, and the carousel's default prev/next buttons. Field URL already used `font: inherit`.
- The required-field asterisk uses `color: 'danger'` again (solid red). It had been switched to `danger.subtle`, which reads as a grey wash in dark mode.
- `@pandacss/preset-base` is a dependency of `@fyrst/ui`, and the published design-system preset inlines that module. Apps on `designSystem: '@fyrst/ui'` no longer add `@pandacss/preset-base` themselves. `@pandacss/dev` stays a peer. [Publishing](https://panda-css.com/docs/design-systems/publishing) keeps Panda itself as a peer; a string preset name is resolved from the app, so the library passes the module through `panda lib` instead.

## [0.3.0] - 2026-10-30

Official Panda 2 **library** consumption (`panda lib` / `designSystem`) plus CSP-safe SSR. This is a **breaking** upgrade from 0.2.0 for consuming apps. Follow [`.agents/skills/panda-v2-migration/SKILL.md`](.agents/skills/panda-v2-migration/SKILL.md) and the official [Build a design system](https://panda-css.com/docs/design-systems/build-a-design-system) guide.

0.x semver: this is a breaking **minor**. A 1.0.0 bump is not required unless you treat 0.2.0 as a frozen public contract.

### Breaking

- **Breaking:** consume component styles with `designSystem: '@fyrst/ui'` only. Remove `presets: ['@pandacss/preset-base', fyrstPreset]` and `include: [require.resolve('@fyrst/ui/panda.buildinfo.json'), …]` from app configs. Do not list `@fyrst/ui` in `include` (`design_system_in_include`).
- **Breaking:** `@fyrst/ui/panda.buildinfo.json` is removed. `panda lib` publishes `dist/panda/lib.json`, `preset.mjs`, and `buildinfo.json`, plus generated subpaths (`@fyrst/ui/css`, `@fyrst/ui/tokens`, `@fyrst/ui/types`, …). Do not hand-edit those generated `package.json` exports.
- **Breaking:** Card, Loader, Progress, and FormPrompt no longer emit inline `style=` / CSS variables for variants. Strict `style-src 'self'` SSR can ship the HTML as-is.
  - `CardRoot` `borderSize` is a discrete `0`–`8` class variant (unknown values snap to `1`).
  - `CardRoot` `borderColor` is deprecated and has no effect (arbitrary colors needed inline styles).
  - `Loader` `size` snaps to a discrete px set.
  - `ProgressRoot` value is a `0`–`100` class variant (indeterminate uses percent `0` plus `data-state`).

### Added

- FieldInput / ControlInput `type` includes `password` and `search` (with the existing text-like types). Native input attributes fall through to the real `<input>` (`inheritAttrs: false` on FieldInput).
- Published Vue entries import `@fyrst/ui/css` instead of bundling `styled-system`, so the stale-buildinfo fallback (`design_system_buildinfo_stale`) can re-extract `cva` / `css` from `dist`.

### Kept

- `@fyrst/ui/design-preset` and `@fyrst/ui/preset` still export the token preset for **token-only** apps that do not set `designSystem`. Do not combine that preset with `designSystem`.
- `@fyrst/ui/nuxt` still auto-imports components. The app must set `designSystem: '@fyrst/ui'` and keep `@pandacss/dev/postcss`.

## [0.2.0] - 2026-10-30

Panda CSS 2 is a **breaking** upgrade for consuming apps. Follow [`.agents/skills/panda-v2-migration/SKILL.md`](.agents/skills/panda-v2-migration/SKILL.md) and the official [Panda CSS v2 upgrade guide](https://panda-css.com/docs/get-started/upgrading-to-v2).

### Changed

- **Breaking:** require Panda CSS **2.4.x**. Peers are `@pandacss/dev` and `@pandacss/preset-base` `^2.4.0`. Do not mix `@pandacss/*` 1.x and 2.x in one lockfile. Remove `@pandacss/studio` (v1-only).
- **Breaking:** list `@pandacss/preset-base` in `panda.config` `presets` **before** the fyrst preset. v2 no longer injects the base preset.
- **Breaking:** `theme.extend.containerSizes` is now `theme.extend.containers`. The old key is ignored with no warning.
- **Breaking:** `panda ship` is replaced by `panda buildinfo --outfile …/panda.buildinfo.json`. Keep including `@fyrst/ui/panda.buildinfo.json`. v2 buildinfo uses `atoms` (not `styles.atomic`).
- **Breaking:** codegen writes `styled-system/**/index.js` instead of `index.mjs`. Leftover `.mjs` files can win in Vite; run `panda codegen --clean`.
- **Breaking:** `Styles` is no longer exported from `styled-system/css`. Use `SystemStyleObject` from `styled-system/types`.
- Annotate preset exports (`Preset`, `CssKeyframes`, `AnimationStyles`) and depend on `@pandacss/types` so `tsup --dts` no longer hits TS2742.

Public export names are unchanged: `preset`, `breakpoints`, `@fyrst/ui/design-preset`, `@fyrst/ui/panda.buildinfo.json`.

### Added

- Agent skill for consumer migrations: [`.agents/skills/panda-v2-migration/SKILL.md`](.agents/skills/panda-v2-migration/SKILL.md).
- Development tooling: `tsup` 9, `vitest` 5, `happy-dom` 21, `@nuxt/devtools` 4, and `actions/checkout` 7.

## [0.1.0] - 2025-08-07

### Added

- Initial `@fyrst/ui` design system: Panda CSS preset, Vue 3 components, and Nuxt module.

[unreleased]: https://github.com/fyrst-dev/ui/compare/v0.4.1...HEAD
[0.4.1]: https://github.com/fyrst-dev/ui/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/fyrst-dev/ui/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/fyrst-dev/ui/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/fyrst-dev/ui/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/fyrst-dev/ui/releases/tag/v0.1.0
