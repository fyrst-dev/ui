import type { Styles } from 'styled-system/css'

/**
 * Per-component `css` prop map. Keys are the component's public slot names,
 * where `root` always refers to the component's outermost element (regardless
 * of the underlying SVA slot name). Inner slots keep their SVA names.
 */
export type SwitchCssMap<K extends string> = Partial<Record<K, Styles>>

export type SwitchCss = SwitchCssMap<'root' | 'track' | 'thumb' | 'label'>
