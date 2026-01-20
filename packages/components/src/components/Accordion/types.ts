/**
 * Represents a single accordion item with its content and metadata
 */
export interface AccordionItem {
  /** Unique identifier for the accordion item */
  id: string
  /** Title/header text for the accordion item (supports HTML) */
  title: string
  /** Content text for the accordion item (supports HTML) */
  content: string
  /** Optional icon identifier for the accordion item */
  icon?: string
}
