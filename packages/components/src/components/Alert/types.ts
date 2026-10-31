import type { CssMap } from '../../internal/css'

export interface AlertMessage {
  title?: string | null
  description: string
}

export type AlertCss = CssMap<'root' | 'icon' | 'content' | 'message' | 'title' | 'description' | 'close'>
