import { ref, computed, watch, onMounted, onUnmounted, type Slots, type Ref } from 'vue'

/**
 * Carousel scrolling for `item` and `viewport` modes.
 *
 * Navigation uses the scroller's overflow geometry (`scrollTo` + item offsets),
 * not IntersectionObserver visibility. Observer callbacks only toggle CSS
 * classes — a `threshold` of `1` never marked items visible when the viewport
 * was smaller than an item (issue #11).
 */
export function useCarousel(props: { scrollMode: 'item' | 'viewport' }, carousel: Ref<HTMLElement | null>, slots: Slots) {
  const carouselItems = ref<NodeListOf<HTMLElement> | null>(null)
  const currentCarouselItemIndex = ref<number>(0)
  const visibleCarouselItems = ref<HTMLElement[]>([])
  const scrollDirection = ref<'prev' | 'next' | null>(null)
  const itemsVisibilityObserver = ref<IntersectionObserver | null>(null)

  const options = {
    itemActiveClass: 'active',
    itemVisibleClass: 'visible',
  }

  const getItems = (): HTMLElement[] => Array.from(carouselItems.value ?? [])

  const carouselItem = computed(() => {
    const items = getItems()
    if (items.length === 0) return null
    return items[currentCarouselItemIndex.value] ?? null
  })

  const pages = computed(() => {
    const visibleCount = visibleCarouselItems.value.length
    if (visibleCount === 0) return 0
    return Math.ceil((carouselItems.value?.length ?? 0) / visibleCount)
  })

  const allItemsVisible = computed(() => {
    const total = carouselItems.value?.length ?? 0
    return total > 0 && visibleCarouselItems.value.length === total
  })

  watch(carouselItem, (newItem, oldItem) => {
    if (newItem) {
      newItem.classList.add(options.itemActiveClass)
    }
    if (oldItem && oldItem !== newItem) {
      oldItem.classList.remove(options.itemActiveClass)
    }
  })

  const isFullyVisible = (item: HTMLElement, scroller: HTMLElement) => {
    const start = item.offsetLeft
    const end = start + item.offsetWidth
    const viewStart = scroller.scrollLeft
    const viewEnd = viewStart + scroller.clientWidth
    return start >= viewStart - 1 && end <= viewEnd + 1
  }

  const scrollToIndex = (index: number) => {
    const items = getItems()
    const item = items[index]
    const scroller = carousel.value
    if (!item || !scroller) {
      console.warn('No more items to scroll', scrollDirection.value)
      return
    }

    scroller.scrollTo({ left: item.offsetLeft, behavior: 'smooth' })
    currentCarouselItemIndex.value = index
  }

  const getViewportTargetIndex = (direction: 'next' | 'prev'): number | null => {
    const items = getItems()
    const scroller = carousel.value
    if (!scroller || items.length === 0) return null

    const fullyVisible = items.filter(item => isFullyVisible(item, scroller))

    if (direction === 'next') {
      const lastFullyVisible = fullyVisible[fullyVisible.length - 1]
      if (lastFullyVisible) {
        const nextIndex = items.indexOf(lastFullyVisible) + 1
        return nextIndex < items.length ? nextIndex : null
      }

      // Viewport is smaller than one item: nothing is fully visible, but we can
      // still advance to the next overflowing item.
      const viewStart = scroller.scrollLeft
      const currentIndex = items.findIndex(item => item.offsetLeft + item.offsetWidth > viewStart)
      const startIndex = currentIndex === -1 ? 0 : currentIndex
      const nextIndex = startIndex + 1
      return nextIndex < items.length ? nextIndex : null
    }

    const firstFullyVisible = fullyVisible[0]
    if (firstFullyVisible) {
      const prevIndex = items.indexOf(firstFullyVisible) - 1
      return prevIndex >= 0 ? prevIndex : null
    }

    const viewStart = scroller.scrollLeft
    const currentIndex = items.findIndex(item => item.offsetLeft + item.offsetWidth > viewStart)
    const startIndex = currentIndex === -1 ? 0 : currentIndex
    const prevIndex = startIndex - 1
    return prevIndex >= 0 ? prevIndex : null
  }

  const scrollItem = () => {
    const delta = scrollDirection.value === 'next' ? 1 : -1
    scrollToIndex(currentCarouselItemIndex.value + delta)
  }

  const scrollViewport = () => {
    const direction = scrollDirection.value === 'prev' ? 'prev' : 'next'
    const index = getViewportTargetIndex(direction)
    if (index === null) {
      console.warn('No more items to scroll', scrollDirection.value)
      return
    }
    scrollToIndex(index)
  }

  const handleNext = () => {
    scrollDirection.value = 'next'
    if (props.scrollMode === 'item') {
      scrollItem()
    }
    else if (props.scrollMode === 'viewport') {
      scrollViewport()
    }
    else {
      console.warn('No more items to scroll next')
    }
  }

  const handlePrev = () => {
    scrollDirection.value = 'prev'
    if (props.scrollMode === 'item') {
      scrollItem()
    }
    else if (props.scrollMode === 'viewport') {
      scrollViewport()
    }
    else {
      console.warn('No more items to scroll prev')
    }
  }

  const handleWheel = (event: WheelEvent) => {
    event.deltaY > 0 ? handleNext() : handlePrev()
  }

  onMounted(() => {
    carouselItems.value = slots.default ? carousel.value?.querySelectorAll(':scope > *') ?? null : null

    if (typeof IntersectionObserver !== 'undefined') {
      itemsVisibilityObserver.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.carouselVisibility = 'visible'
            entry.target.classList.add(options.itemVisibleClass)
          }
          else {
            delete (entry.target as HTMLElement).dataset.carouselVisibility
            entry.target.classList.remove(options.itemVisibleClass)
          }
        })
        visibleCarouselItems.value = Array.from(carouselItems.value ?? []).filter(item => item.dataset.carouselVisibility === 'visible')
      }, {
        root: carousel.value,
        rootMargin: '0px',
        // `1` never intersected when the viewport was smaller than an item.
        threshold: 0.01,
      })

      if (carouselItems.value && itemsVisibilityObserver.value) {
        carouselItems.value.forEach(item => itemsVisibilityObserver.value!.observe(item))
      }
    }
  })
  onUnmounted(() => {
    carouselItems.value = null
    currentCarouselItemIndex.value = 0
    if (itemsVisibilityObserver.value) itemsVisibilityObserver.value.disconnect()
  })

  return {
    handleNext,
    handlePrev,
    handleWheel,
    carouselItems,
    carouselItem,
    currentCarouselItemIndex,
    visibleCarouselItems,
    scrollDirection,
    allItemsVisible,
    pages,
  }
}
