import TabRoot from './TabRoot.vue'
import TabItem from './TabItem.vue'

export { TabRoot, TabItem }

export type { TabItemData, TabChangePayload, TabRootCss, TabItemCss } from './types'

export default {
  Root: TabRoot,
  Item: TabItem,
}
