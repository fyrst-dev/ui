import CarouselRoot from './CarouselRoot.vue'
import CarouselItem from './CarouselItem.vue'
import CarouselNavigation from './CarouselNavigation.vue'

// Named exports for direct imports
export { CarouselRoot, CarouselItem, CarouselNavigation }

// Default export for namespaced usage: <Carousel.Root />, <Carousel.Item />, etc.
export default {
  Root: CarouselRoot,
  Item: CarouselItem,
  Navigation: CarouselNavigation,
}
