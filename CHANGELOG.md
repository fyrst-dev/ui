# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/fyrst-dev/ui/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/fyrst-dev/ui/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/fyrst-dev/ui/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/fyrst-dev/ui/releases/tag/v0.1.0
