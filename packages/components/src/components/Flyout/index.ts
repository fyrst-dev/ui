import FlyoutRoot from './FlyoutRoot.vue'
import FlyoutDropdown from './FlyoutDropdown.vue'

// Named exports for direct imports
export { FlyoutRoot, FlyoutDropdown }

// Default export for namespaced usage: <Flyout.Root />, <Flyout.Dropdown />
export default {
    Root: FlyoutRoot,
    Dropdown: FlyoutDropdown,
}
