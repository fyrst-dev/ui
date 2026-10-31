import type { ComputedRef } from 'vue'
import { createInjectionKey } from '../../composables/injection-key'
import type { CssMap } from '../../internal/css'

export type ListSize = 'sm' | 'md' | 'lg'
export type ListState = 'default' | 'primary' | 'success' | 'danger' | 'info'

/** Defaults a `ListRoot` hands to its items. An item's own props win. */
export interface ListContext {
  size: ListSize
  state: ListState
}

export const ListContextKey = createInjectionKey<ComputedRef<ListContext>>('ListContext')

export type ListRootCss = CssMap<'root'>
export type ListItemCss = CssMap<'root' | 'marker'>
