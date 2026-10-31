import type { CssMap } from '../../internal/css'

export interface TabItemData {
  value: string
  /** Tab label, rendered as HTML. */
  label: string
  disabled?: boolean
  icon?: string
}

export interface TabChangePayload {
  value: string
  direction: 'prev' | 'next'
}

export type TabRootCss = CssMap<'root'>
export type TabItemCss = CssMap<'root' | 'icon'>
