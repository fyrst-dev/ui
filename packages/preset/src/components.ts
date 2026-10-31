import type { Preset } from '@pandacss/dev'
import { definePreset } from '@pandacss/dev'
import { recipes, slotRecipes } from './recipes'

const allVariants = (names: string[]) =>
  Object.fromEntries(names.map(name => [name, ['*' as const]]))

/**
 * Component recipes for the `@fyrst/ui` Vue components.
 *
 * Only the library build uses this preset (root `panda.config.ts`). `panda lib`
 * publishes it inside the design system, so apps get it through
 * `designSystem: '@fyrst/ui'`. It is not part of the token-only
 * `@fyrst/ui/design-preset` export.
 *
 * Variants come from props at runtime, so Panda cannot see which ones are
 * used. `staticCss` emits every variant; that matches 0.4.x, where each
 * component's full CSS already shipped to every app.
 */
export const componentsPreset: Preset = definePreset({
  name: 'fyrst-components',
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
  staticCss: {
    extend: {
      recipes: allVariants([...Object.keys(recipes), ...Object.keys(slotRecipes)]),
    },
  },
})
