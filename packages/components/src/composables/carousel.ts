import { computed, onMounted, onUnmounted, ref, shallowRef, toValue, watch, type MaybeRefOrGetter, type Ref } from 'vue'

export type CarouselScrollMode = 'item' | 'viewport'

export interface CarouselOptions {
  scrollMode: MaybeRefOrGetter<CarouselScrollMode>
}

/** Minimum time between two wheel-driven moves, so one gesture moves one step. */
const WHEEL_COOLDOWN_MS = 400

/**
 * Carousel scrolling for `item` and `viewport` modes.
 *
 * Navigation uses the scroller's overflow geometry (`scrollTo` + item offsets),
 * not IntersectionObserver visibility. Observer callbacks only toggle the
 * `visible` class — a `threshold` of `1` never marked items visible when the
 * viewport was smaller than an item (issue #11).
 *
 * @param options Carousel options.
 * @param options.scrollMode `item` moves one item; `viewport` moves past the visible ones.
 * @param carousel The scroll container. Its direct children are the items.
 */
export function useCarousel(options: CarouselOptions, carousel: Ref<HTMLElement | null>) {
  const carouselItems = shallowRef<HTMLElement[]>([])
  const currentCarouselItemIndex = ref(0)
  const visibleCarouselItems = shallowRef<HTMLElement[]>([])
  const scrollDirection = ref<'prev' | 'next' | null>(null)
  let observer: IntersectionObserver | null = null
  let lastWheelAt = 0

  const carouselItem = computed(() => carouselItems.value[currentCarouselItemIndex.value] ?? null)

  const pages = computed(() => {
    const visibleCount = visibleCarouselItems.value.length
    if (visibleCount === 0) return 0
    return Math.ceil(carouselItems.value.length / visibleCount)
  })

  const allItemsVisible = computed(() => {
    const total = carouselItems.value.length
    return total > 0 && visibleCarouselItems.value.length === total
  })

  watch(carouselItem, (newItem, oldItem) => {
    newItem?.classList.add('active')
    if (oldItem && oldItem !== newItem) {
      oldItem.classList.remove('active')
    }
  })

  const isFullyVisible = (item: HTMLElement, scroller: HTMLElement) => {
    const start = item.offsetLeft
    const end = start + item.offsetWidth
    const viewStart = scroller.scrollLeft
    const viewEnd = viewStart + scroller.clientWidth
    return start >= viewStart - 1 && end <= viewEnd + 1
  }

  /** First item that still reaches into the viewport. */
  const firstOverlappingIndex = (items: HTMLElement[], scroller: HTMLElement) => {
    const index = items.findIndex(item => item.offsetLeft + item.offsetWidth > scroller.scrollLeft)
    return index === -1 ? 0 : index
  }

  const scrollToIndex = (index: number) => {
    const item = carouselItems.value[index]
    const scroller = carousel.value
    if (!item || !scroller) return

    scroller.scrollTo({ left: item.offsetLeft, behavior: 'smooth' })
    currentCarouselItemIndex.value = index
  }

  const viewportTargetIndex = (direction: 'next' | 'prev'): number | null => {
    const items = carouselItems.value
    const scroller = carousel.value
    if (!scroller || items.length === 0) return null

    const fullyVisible = items.filter(item => isFullyVisible(item, scroller))

    if (direction === 'next') {
      const lastFullyVisible = fullyVisible.at(-1)
      // When the viewport is smaller than one item nothing is fully visible;
      // step from the first overflowing item instead.
      const nextIndex = lastFullyVisible
        ? items.indexOf(lastFullyVisible) + 1
        : firstOverlappingIndex(items, scroller) + 1
      return nextIndex < items.length ? nextIndex : null
    }

    const firstFullyVisible = fullyVisible[0]
    const prevIndex = firstFullyVisible
      ? items.indexOf(firstFullyVisible) - 1
      : firstOverlappingIndex(items, scroller) - 1
    return prevIndex >= 0 ? prevIndex : null
  }

  const move = (direction: 'next' | 'prev') => {
    scrollDirection.value = direction
    if (toValue(options.scrollMode) === 'viewport') {
      const index = viewportTargetIndex(direction)
      if (index !== null) scrollToIndex(index)
      return
    }
    scrollToIndex(currentCarouselItemIndex.value + (direction === 'next' ? 1 : -1))
  }

  const handleNext = () => move('next')
  const handlePrev = () => move('prev')

  /**
   * Wheel navigation (opt-in on `CarouselRoot` with `wheel-navigation`).
   * Follows the dominant axis and moves at most one step per gesture.
   */
  const handleWheel = (event: WheelEvent) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    if (delta === 0) return
    event.preventDefault()

    const now = Date.now()
    if (now - lastWheelAt < WHEEL_COOLDOWN_MS) return
    lastWheelAt = now
    move(delta > 0 ? 'next' : 'prev')
  }

  onMounted(() => {
    carouselItems.value = Array.from(carousel.value?.querySelectorAll<HTMLElement>(':scope > *') ?? [])

    if (typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const target = entry.target as HTMLElement
        if (entry.isIntersecting) {
          target.dataset.carouselVisibility = 'visible'
          target.classList.add('visible')
        }
        else {
          delete target.dataset.carouselVisibility
          target.classList.remove('visible')
        }
      }
      visibleCarouselItems.value = carouselItems.value.filter(item => item.dataset.carouselVisibility === 'visible')
    }, {
      root: carousel.value,
      rootMargin: '0px',
      // `1` never intersected when the viewport was smaller than an item.
      threshold: 0.01,
    })

    carouselItems.value.forEach(item => observer?.observe(item))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
    carouselItems.value = []
    currentCarouselItemIndex.value = 0
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
