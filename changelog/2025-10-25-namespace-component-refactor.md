# Refactor: Nested Namespace Component Structure

**Branch:** `master` (issue #8)  
**Date:** October 25, 2025

## What's Changed

Refactored flat component structure to nested namespace pattern for Card, Carousel, Flyout, and Hero component families. This brings consistency with existing Field and Form components and improves component organization and maintainability.

## Changelog

### Changed

- **Card components** → `Card/` namespace
  - `Card.vue` renamed to `CardRoot.vue` and moved to `Card/CardRoot.vue`
  - `CardBody.vue` moved to `Card/CardBody.vue`
  - Added `Card/index.ts` with namespace exports

- **Carousel components** → `Carousel/` namespace
  - `Carousel.vue` renamed to `CarouselRoot.vue` and moved to `Carousel/CarouselRoot.vue`
  - `CarouselItem.vue` moved to `Carousel/CarouselItem.vue`
  - `CarouselNavigation.vue` moved to `Carousel/CarouselNavigation.vue`
  - Added `Carousel/index.ts` with namespace exports

- **Flyout components** → `Flyout/` namespace
  - `Flyout.vue` renamed to `FlyoutRoot.vue` and moved to `Flyout/FlyoutRoot.vue`
  - `FlyoutDropdown.vue` moved to `Flyout/FlyoutDropdown.vue`
  - Updated internal import in FlyoutRoot to reference new path
  - Added `Flyout/index.ts` with namespace exports

- **Hero components** → `Hero/` namespace
  - `HeroLead.vue` moved to `Hero/HeroLead.vue` (name unchanged)
  - Added `Hero/index.ts` with namespace exports

- **Main exports** updated in `packages/components/src/index.ts`
  - Changed imports from flat `.vue` files to subdirectory namespace exports
  - Added `Loader` component to exports (was missing)

- **Styled-system imports** updated across all moved components
  - Changed from `../../styled-system/css` to `../../../styled-system/css`

- **Component Props interfaces** exported for TypeScript support
  - Added `export` keyword to Props interfaces in CardRoot, FlyoutRoot, FlyoutDropdown, and HeroLead

### Added

- Namespace export pattern for Card, Carousel, Flyout, and Hero families
- `sass-embedded` as dev dependency for SCSS processing

## Breaking Changes

### Direct Imports (Non-Nuxt)

**OLD:**
```typescript
import Card from '@fyrst/ui-components'
import CardBody from '@fyrst/ui-components'
```

**NEW - Named imports:**
```typescript
import { CardRoot, CardBody } from '@fyrst/ui-components'
```

**NEW - Namespace imports:**
```typescript
import Card from '@fyrst/ui-components'
// Use as: <Card.Root>, <Card.Body>
```

### Nuxt Auto-Imports

Component tags have changed (flat structure maintained):

**OLD:**
```vue
<FyrstCard>
  <FyrstCardBody>Content</FyrstCardBody>
</FyrstCard>

<FyrstCarousel>
  <FyrstCarouselItem>Slide 1</FyrstCarouselItem>
  <FyrstCarouselNavigation />
</FyrstCarousel>

<FyrstFlyout>
  <FyrstFlyoutDropdown>Menu</FyrstFlyoutDropdown>
</FyrstFlyout>

<FyrstHeroLead headline="Welcome" />
```

**NEW:**
```vue
<FyrstCardRoot>
  <FyrstCardBody>Content</FyrstCardBody>
</FyrstCardRoot>

<FyrstCarouselRoot>
  <FyrstCarouselItem>Slide 1</FyrstCarouselItem>
  <FyrstCarouselNavigation />
</FyrstCarouselRoot>

<FyrstFlyoutRoot>
  <FyrstFlyoutDropdown>Menu</FyrstFlyoutDropdown>
</FyrstFlyoutRoot>

<FyrstHeroLead headline="Welcome" />
```

### Migration Guide

1. **Find and replace** in Nuxt templates:
   - `<FyrstCard` → `<FyrstCardRoot`
   - `</FyrstCard>` → `</FyrstCardRoot>`
   - `<FyrstCarousel` → `<FyrstCarouselRoot`
   - `</FyrstCarousel>` → `</FyrstCarouselRoot>`
   - `<FyrstFlyout>` → `<FyrstFlyoutRoot>`
   - `</FyrstFlyout>` → `</FyrstFlyoutRoot>`
   - HeroLead remains unchanged

2. **Update direct imports** to use named exports or namespace pattern

3. **No changes needed** for:
   - Button, Loader (remain flat)
   - Field, Form (already using namespace pattern)
   - Composables (useCarousel, useFlyout, useFormData)

## Technical Details

### Component Structure

All component families now follow this pattern:

```
ComponentFamily/
├── ComponentRoot.vue (or specific name like HeroLead.vue)
├── ComponentSubComponent.vue
└── index.ts (namespace exports)
```

### Export Pattern

```typescript
// Named exports for direct imports
export { ComponentRoot, ComponentSubComponent }

// Default export for namespaced usage
export default {
    Root: ComponentRoot,
    SubComponent: ComponentSubComponent,
}
```

### Benefits

- **Consistent organization** - All multi-component families use same structure
- **Better discoverability** - Related components grouped in subdirectories  
- **Namespace support** - Can use `Component.SubComponent` syntax in direct imports
- **Backwards compatibility** - Nuxt auto-imports still work (flat structure)
- **Future extensibility** - Easy to add new variants to component families

## Files Modified

- `packages/components/src/components/Card/CardRoot.vue` (moved & renamed)
- `packages/components/src/components/Card/CardBody.vue` (moved)
- `packages/components/src/components/Card/index.ts` (created)
- `packages/components/src/components/Carousel/CarouselRoot.vue` (moved & renamed)
- `packages/components/src/components/Carousel/CarouselItem.vue` (moved)
- `packages/components/src/components/Carousel/CarouselNavigation.vue` (moved)
- `packages/components/src/components/Carousel/index.ts` (created)
- `packages/components/src/components/Flyout/FlyoutRoot.vue` (moved & renamed)
- `packages/components/src/components/Flyout/FlyoutDropdown.vue` (moved)
- `packages/components/src/components/Flyout/index.ts` (created)
- `packages/components/src/components/Hero/HeroLead.vue` (moved)
- `packages/components/src/components/Hero/index.ts` (created)
- `packages/components/src/index.ts` (updated)
- `packages/components/package.json` (added sass-embedded)
- `.github/chatmodes/Frontend Dev.chatmode.md` (documentation updated)

## Files Deleted

- `packages/components/src/components/Card.vue`
- `packages/components/src/components/CardBody.vue`
- `packages/components/src/components/Carousel.vue`
- `packages/components/src/components/CarouselItem.vue`
- `packages/components/src/components/CarouselNavigation.vue`
- `packages/components/src/components/Flyout.vue`
- `packages/components/src/components/FlyoutDropdown.vue`
- `packages/components/src/components/HeroLead.vue`
