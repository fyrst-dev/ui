# Normalize public Vue component API

**Date**: 2026-08-19
**Issue**: #44

## What's Changed

`@fyrst/ui` now has one canonical name per Vue SFC. Nuxt auto-imports, the Vue plugin, and `@fyrst/ui/vue/*` use the same names. Internal `Control*` components are no longer published.

## Changelog

### Changed

- Alert, Badge, and Tab default namespace objects use `{ Root }` (and Tab `{ Root, Item }`). Named exports are `AlertRoot`, `BadgeRoot`, `TabRoot`.
- `Tab.vue` renamed to `TabRoot.vue`.
- Button and Loader live in folders with `styles.ts`. Public names stay `Button` / `Loader`.
- `vue-entries.ts` `nuxtComponents` is 1:1 with `vueLibEntries` (no alias table).

### Removed (breaking)

| Removed | Use instead |
| --- | --- |
| `<FyrstAlert>` | `<FyrstAlertRoot>` |
| `<FyrstBadge>` | `<FyrstBadgeRoot>` |
| `<FyrstTab>` | `<FyrstTabRoot>` |
| named `Alert` / `Badge` / `Tab` | `AlertRoot` / `BadgeRoot` / `TabRoot` |
| `Badge.BadgeRoot` | `Badge.Root` |
| `@fyrst/ui/vue/Alert` | `@fyrst/ui/vue/AlertRoot` |
| `@fyrst/ui/vue/Badge` | `@fyrst/ui/vue/BadgeRoot` |
| `@fyrst/ui/vue/Tab` | `@fyrst/ui/vue/TabRoot` |
| `Control.*` / `ControlInput` / … | `Field.*` / `FyrstField*` |
| `fieldContextKey`, control styles, URL helpers, Control-only types | not public; `FieldOption` remains as a Field type |

`FyrstButton`, `FyrstLoader`, `FyrstCardRoot`, `FyrstField*`, `FyrstTabItem`, and other already-canonical names are unchanged.

## Migration

```ts
// before
import { Alert, Badge, Tab } from '@fyrst/ui'

// after
import { AlertRoot, BadgeRoot, TabRoot } from '@fyrst/ui'
```

```ts
import Badge from '@fyrst/ui'
// before: <Badge.BadgeRoot />
// after:  <Badge.Root />
```

```vue
<!-- before -->
<FyrstAlert :messages="messages" />
<!-- after -->
<FyrstAlertRoot :messages="messages" />
```

`app.use(FyrstUI)` registers `AlertRoot` / `BadgeRoot` / `TabRoot` only.
