# 2025-10-28 - Styled System External Package Architecture

**Branch:** `feat/styled-system-resolution`  
**Date:** October 28, 2025

## What's New

Implemented the **"use panda as external package"** approach for the monorepo, transforming the design system architecture to use a centralized styled-system package.

## What's Changed

### Package Rename
- **`@fyrst/design-preset`** → **`@fyrst/styled-system`**
  - Package renamed to reflect its new dual purpose: design tokens + styled-system runtime
  - Version bumped to `0.2.0` to indicate breaking change

### Architecture Changes

#### `@fyrst/styled-system` (formerly preset)
- **Added** PandaCSS codegen to generate styled-system output
- **Added** `panda.config.ts` for configuration
- **Added** styled-system exports (css/, jsx/, patterns/, tokens/, types/)
- **Added** `panda emit-pkg` to auto-generate package.json exports
- **Updated** build script to include: `prepare → build tokens → emit-pkg`
- Now exports both design tokens (preset) AND styled-system runtime

#### `@fyrst/ui-components`
- **Updated** dependency: `@fyrst/design-preset` → `@fyrst/styled-system`
- **Updated** `panda.config.ts`: Added `importMap: '@fyrst/styled-system'`
- **Updated** `vite.config.ts`: Externalized `@fyrst/styled-system` in build
- **Updated** all 18 component files:
  - `from 'styled-system/css'` → `from '@fyrst/styled-system/css'`
  - `from '../../../styled-system/css'` → `from '@fyrst/styled-system/css'`
- **Removed** local styled-system alias from Vite config
- Components now import from external package instead of local codegen

#### `@fyrst/ui-nuxt`
- **Updated** playground dependency: `@fyrst/design-preset` → `@fyrst/styled-system`
- **Updated** playground `panda.config.ts`: Added `importMap: '@fyrst/styled-system'`

#### Root Package
- **Updated** build scripts:
  - `build:preset` → `build:styled-system` (alias `build:preset` kept for compatibility)
  - `watch:preset` → `watch:styled-system` (alias `watch:preset` kept for compatibility)
- **Added** export alias: `./styled-system` points to preset package
- **Updated** build order ensures styled-system builds first

## Files Modified

### Package Configuration
- `packages/preset/package.json` - Renamed, added styled-system exports
- `packages/preset/panda.config.ts` - Created
- `packages/components/package.json` - Updated dependency
- `packages/components/panda.config.ts` - Added importMap
- `packages/components/vite.config.ts` - Externalized styled-system
- `packages/nuxt/playground/package.json` - Updated dependency
- `packages/nuxt/playground/panda.config.ts` - Added importMap
- `package.json` - Updated build scripts and exports

### Component Imports (18 files)
- `Button.vue`
- `Loader.vue`
- `Card/CardRoot.vue`
- `Card/CardBody.vue`
- `Carousel/CarouselRoot.vue`
- `Carousel/CarouselItem.vue`
- `Flyout/FlyoutRoot.vue`
- `Flyout/FlyoutDropdown.vue`
- `Hero/HeroLead.vue`
- `Field/FieldBase.vue`
- `Field/FieldInput.vue`
- `Field/FieldLabel.vue`
- `Field/FieldError.vue`
- `Field/FieldMessage.vue`
- `Field/FieldRequired.vue`
- `Form/FormInput.vue`
- `Form/FormPrompt.vue`
- `Form/FormPromptFooter.vue`

## Breaking Changes

### Import Path Changes
**Before:**
```typescript
import { css } from 'styled-system/css'
import { cva } from '../../../styled-system/css'
```

**After:**
```typescript
import { css } from '@fyrst/styled-system/css'
import { cva } from '@fyrst/styled-system/css'
```

### Package Name Change
**Before:**
```json
{
  "dependencies": {
    "@fyrst/design-preset": "workspace:*"
  }
}
```

**After:**
```json
{
  "dependencies": {
    "@fyrst/styled-system": "workspace:*"
  }
}
```

### Consuming Applications Migration

Apps using this library need to:

1. **Update dependencies:**
   ```bash
   # Replace design-preset with styled-system
   bun add @fyrst/styled-system
   bun remove @fyrst/design-preset
   ```

2. **Update panda.config.ts:**
   ```typescript
   import { preset } from '@fyrst/styled-system'  // Changed from design-preset
   
   export default defineConfig({
     presets: [preset],
     importMap: '@fyrst/styled-system',  // Add this line
     // ... rest of config
   })
   ```

3. **Mark as external in build tools (if building a library):**
   ```typescript
   // vite.config.ts
   export default defineConfig({
     build: {
       rollupOptions: {
         external: ['@fyrst/styled-system']
       }
     }
   })
   ```

## Benefits

✅ **Single source of truth** - Styled-system generated once, consumed everywhere  
✅ **Shared runtime** - Apps and library use the same styled-system code  
✅ **No duplicate CSS generation** - One codegen process instead of multiple  
✅ **Better tree-shaking** - Cleaner dependency graph  
✅ **Consistent styling** - All packages use identical PandaCSS runtime  
✅ **Simpler mental model** - External package approach aligns with PandaCSS best practices

## Technical Details

### Build Process Flow
1. `@fyrst/styled-system` runs `panda codegen` → generates css/, jsx/, patterns/, tokens/, types/
2. `@fyrst/styled-system` runs `panda emit-pkg` → updates package.json exports
3. `@fyrst/styled-system` runs `tsup` → builds TypeScript preset/tokens
4. `@fyrst/ui-components` imports from `@fyrst/styled-system/css` etc.
5. `@fyrst/ui-components` runs `panda ship` → generates buildinfo.json for consumers

### Package Structure
```
@fyrst/styled-system/
├── dist/           # Built preset/tokens (TypeScript)
├── css/            # PandaCSS css utilities
├── jsx/            # PandaCSS JSX elements
├── patterns/       # PandaCSS patterns
├── tokens/         # PandaCSS token runtime
└── types/          # PandaCSS TypeScript types
```

## Testing

All testing passed successfully:
- ✅ Styled-system package builds correctly
- ✅ Components package builds with external imports
- ✅ Components dev server starts successfully
- ✅ Nuxt playground dev server works
- ✅ Full monorepo build completes
- ✅ All 18 component files use correct imports
- ✅ TypeScript compilation succeeds
- ✅ Vite build externalizes styled-system properly

## References

- [PandaCSS Component Library Guide](https://panda-css.com/docs/guides/component-library#use-panda-as-external-package)
- Feature branch: `feat/styled-system-resolution`
