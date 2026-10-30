# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/fyrst-dev/ui/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/fyrst-dev/ui/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/fyrst-dev/ui/releases/tag/v0.1.0
