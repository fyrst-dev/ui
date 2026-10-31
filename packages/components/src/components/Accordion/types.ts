import type { CssMap } from '../../internal/css'

/**
 * Represents a single accordion item with its content and metadata
 */
export interface AccordionItem {
  /** Unique identifier for the accordion item */
  id: string
  /** Title for the accordion item (supports HTML) */
  title: string
  /** Content for the accordion item (supports HTML) */
  content: string
  /** Optional icon identifier for the accordion item */
  icon?: string
}

export type AccordionCss = CssMap<'root' | 'item' | 'trigger' | 'icon' | 'title' | 'indicator' | 'content'>
