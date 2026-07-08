import Tab from './Tab.vue'
import TabItem from './TabItem.vue'

export { Tab, TabItem }
export type { TabItemData, TabChangePayload } from './types'

export default {
  Root: Tab,
  Item: TabItem,
}
