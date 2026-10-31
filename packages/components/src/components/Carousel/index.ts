import CarouselRoot from './CarouselRoot.vue'
import CarouselItem from './CarouselItem.vue'
import CarouselNavigation from './CarouselNavigation.vue'

export { CarouselRoot, CarouselItem, CarouselNavigation }

export { CarouselContextKey } from './types'
export type { CarouselContext, CarouselRootCss, CarouselItemCss, CarouselNavigationCss } from './types'

export default {
  Root: CarouselRoot,
  Item: CarouselItem,
  Navigation: CarouselNavigation,
}
