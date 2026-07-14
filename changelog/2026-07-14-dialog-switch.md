# Dialog and Switch components

**Date**: 2026-07-14

## What's New

Ported Dialog and Switch from the website into `@fyrst/ui` so product UI and form fields share the same reka-ui primitives and design tokens.

## Changelog

### Added
- `DialogRoot` — modal dialog (reka-ui Dialog)
- `ControlSwitch` / `FieldSwitch` / `SwitchRoot` — switch control (reka-ui Switch)
- Playground pages: `dialog.vue`, switch demo on `field.vue`

### Notes
- `DialogRoot` uses `v-model:open`, optional `title` / `description`, and `closeLabel` (default `"Close"`)
- Prefer `FieldSwitch` in forms; use `SwitchRoot` for product UI (e.g. pricing addons)
- Switch supports per-slot `css` overrides (`root` | `track` | `thumb` | `label`), same pattern as `PricingCardRoot`
- Website keeps `reka-ui` as a dependency because it is a peer of `@fyrst/ui`
