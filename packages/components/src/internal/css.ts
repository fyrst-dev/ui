import { css, cx } from 'styled-system/css'
import type { SystemStyleObject } from 'styled-system/types'

/**
 * Per-component `css` prop: style objects keyed by the component's slot names.
 * `root` is always the outermost element.
 *
 * Panda only generates CSS for objects it can see at build time, so pass each
 * slot through `css.raw()` from the app's own `styled-system/css`:
 *
 * ```vue
 * <FyrstAlertRoot :css="{ root: css.raw({ maxWidth: 'md' }) }" />
 * ```
 */
export type CssMap<K extends string> = Partial<Record<K, SystemStyleObject>>

/**
 * Class for one slot: the recipe class plus the consumer's override.
 *
 * Recipes live in Panda's `recipes` layer and `css()` output in `utilities`,
 * so the override wins without merging style objects.
 */
export function withCss(recipeClass: string | undefined, override?: SystemStyleObject | null): string {
  if (!override) {
    return recipeClass ?? ''
  }
  return cx(recipeClass, css(override))
}
