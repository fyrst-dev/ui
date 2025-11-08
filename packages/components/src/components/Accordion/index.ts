import AccordionRoot from "./AccordionRoot.vue"

// Named exports for direct imports
export { AccordionRoot }

// Export types
export type { AccordionItem } from './types'

// Default export for namespaced usage: <Accordion.Root />
export default {
  Root: AccordionRoot,
}