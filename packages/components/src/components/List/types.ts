import type { ComputedRef } from 'vue'
import type { Styles } from 'styled-system/css'
import { createInjectionKey } from '../../composables/injection-key'
import type { ListStyles } from './styles'

export const ListStylesKey = createInjectionKey<ComputedRef<ListStyles>>('ListStyles')

/**
 * Per-component `css` prop map. Keys are the component's public slot names,
 * where `root` always refers to the component's outermost element (regardless
 * of the underlying SVA slot name). Inner slots keep their SVA names.
 *
 * Each component exposes its own narrow type so only the slots it actually
 * renders are accepted as keys.
 */
export type ListCss<K extends string> = Partial<Record<K, Styles>>

export type ListRootCss = ListCss<'root'>
export type ListItemCss = ListCss<'root' | 'marker'>
