import ListRoot from './ListRoot.vue'
import ListItem from './ListItem.vue'

// Named exports for direct imports
export { ListRoot, ListItem }

// Export types
export type { ListStyles } from './styles'
export type { ListRootCss, ListItemCss } from './types'

// Default export for namespaced usage: <Card.Root />, <Card.Body />
export default {
  Root: ListRoot,
  Item: ListItem,
}
