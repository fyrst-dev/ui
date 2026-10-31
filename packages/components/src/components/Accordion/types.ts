import type { CssMap } from '../../internal/css'

/**
 * Represents a single accordion item with its content and metadata
 */
export interface AccordionItem {
  /** Unique identifier for the accordion item */
  id: string
  /** Title text. HTML only when the accordion sets `html`. */
  title: string
  /** Content text. HTML only when the accordion sets `html`. */
  content: string
  /** Optional icon identifier for the accordion item */
  icon?: string
}

export type AccordionCss = CssMap<'root' | 'item' | 'trigger' | 'icon' | 'title' | 'indicator' | 'content'>
