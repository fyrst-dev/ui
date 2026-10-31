import type { CssMap } from '../../internal/css'

export interface TabItemData {
  value: string
  /** Tab text. HTML only when `html` is set. */
  label: string
  disabled?: boolean
  icon?: string
  /** Render `label` as HTML. Pass trusted strings only. */
  html?: boolean
}

export interface TabChangePayload {
  value: string
  direction: 'prev' | 'next'
}

export type TabRootCss = CssMap<'root'>
export type TabItemCss = CssMap<'root' | 'icon'>
