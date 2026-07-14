import type { Styles } from 'styled-system/css'

/**
 * Per-component `css` prop map. Keys are the component's public slot names,
 * where `root` always refers to the component's outermost element (regardless
 * of the underlying SVA slot name). Inner slots keep their SVA names.
 */
export type ProgressCssMap<K extends string> = Partial<Record<K, Styles>>

export type ProgressCss = ProgressCssMap<'root' | 'track' | 'indicator' | 'value'>

export type ProgressSize = 'sm' | 'md' | 'lg'

export type ProgressColor = 'primary' | 'success' | 'danger' | 'info'
