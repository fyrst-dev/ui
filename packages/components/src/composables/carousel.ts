import { ref, computed, watch, onMounted, onUnmounted, type Slots, type Ref } from 'vue'

/**
 * @todo #3
 * There is a bug in `viewPort` scrollmode where its impossible to scroll if the viewport is too small.
 * It seems that elements doesn't get the visible flag and this causes follow-up problems
 * @todo 
 * `item` scrollmode is buggy, it doesn't scroll to the next item
 * @param props 
 * @param carousel 
 * @param slots 
 * @returns {object}
 */
export function useCarousel(props: { scrollMode: 'item' | 'viewport' }, carousel: Ref<HTMLElement | null>, slots: Slots) {
	// Reactive state
	const carouselItems = ref<NodeListOf<HTMLElement> | null>(null)
	const currentCarouselItemIndex = ref<number>(0)
	const visibleCarouselItems = ref<HTMLElement[]>([])
	const scrollDirection = ref<'prev' | 'next' | null>(null)
	const itemsVisibilityObserver = ref<IntersectionObserver | null>(null)

	// Constants and IntersectionObserver
	const options = {
		itemActiveClass: 'active',
		itemVisibleClass: 'visible',
	}

	// Computed for active carousel item
	const carouselItem = computed(() => {
		if ((carouselItems.value ?? []).length > 0) {
			return carouselItems.value![currentCarouselItemIndex.value]
		}
		return null
	})

	const pages = computed(() => {
		return Math.ceil((carouselItems.value?.length ?? 0) / visibleCarouselItems.value.length)
	})

	const allItemsVisible = computed(() => {
		const total = carouselItems.value?.length ?? 0
		return total > 0 && visibleCarouselItems.value.length === total
	})

	// Watch active item changes to toggle active class
	watch(carouselItem, (newItem, oldItem) => {
		if (newItem) {
			newItem.classList.add(options.itemActiveClass)
		}
		if (oldItem) {
			oldItem.classList.remove(options.itemActiveClass)
		}
	})

	// Helper to compute next/prev index based on visible items
	const getOffsetCarouselItemIndex = (position: 'first' | 'last') => {
		if (!carouselItems.value) return null
		if (position === 'first') {
			const firstVisibleItem = visibleCarouselItems.value[0];
			return firstVisibleItem ? Array.from(carouselItems.value).indexOf(firstVisibleItem) - 1 : null;
		}
		if (position === 'last') {
			const lastVisibleItem = visibleCarouselItems.value[visibleCarouselItems.value.length - 1];
			return lastVisibleItem ? Array.from(carouselItems.value).indexOf(lastVisibleItem) + 1 : null;
		}
		return null
	}

	// Methods to scroll items or viewport
	const scrollItem = () => {
		const snapAlign = scrollDirection.value === 'next' ? 'end' : 'start'
		const index = scrollDirection.value === 'next' ? currentCarouselItemIndex.value + 1 : currentCarouselItemIndex.value - 1
		if (!carouselItems.value || carouselItems.value[index] === undefined) {
			console.warn('No more items to scroll', scrollDirection.value)
			return
		}
		carouselItems.value[index].style.scrollSnapAlign = snapAlign
		carouselItems.value[index].scrollIntoView({ behavior: 'smooth' })
		currentCarouselItemIndex.value = index
	}

	const scrollViewport = () => {
		const index = scrollDirection.value === 'prev' ? getOffsetCarouselItemIndex('first') : getOffsetCarouselItemIndex('last')

		if (!carouselItems.value || !carouselItems.value.length) return

		if (
			index === null 
			|| !carouselItems.value 
			|| carouselItems.value[index] === undefined
		) {
			console.warn('No more items to scroll', scrollDirection.value)
			return
		}

		carouselItems.value[index].scrollIntoView({ behavior: 'smooth' })
		currentCarouselItemIndex.value = index
	}

	const handleNext = () => {
		scrollDirection.value = 'next'
		if (props.scrollMode === 'item') {
			scrollItem()
		} else if (props.scrollMode === 'viewport') {
			scrollViewport()
		} else {
			console.warn('No more items to scroll next')
		}
	}

	const handlePrev = () => {
		scrollDirection.value = 'prev'
		if (props.scrollMode === 'item') {
			scrollItem()
		} else if (props.scrollMode === 'viewport') {
			scrollViewport()
		} else {
			console.warn('No more items to scroll prev')
		}
	}

	const handleWheel = (event: WheelEvent) => {
		event.deltaY > 0 ? handleNext() : handlePrev()
	}

	// Lifecycle: setup and teardown
	onMounted(() => {
		carouselItems.value = slots.default ? carousel.value?.querySelectorAll(':scope > *') ?? null : null
		itemsVisibilityObserver.value = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					(entry.target as HTMLElement).dataset.carouselVisibility = 'visible'
					entry.target.classList.add(options.itemVisibleClass)
				} else {
					delete (entry.target as HTMLElement).dataset.carouselVisibility
					entry.target.classList.remove(options.itemVisibleClass)
				}
			})
			visibleCarouselItems.value = Array.from(carouselItems.value ?? []).filter(item => item.dataset.carouselVisibility === 'visible')
		}, {
			root: carousel.value,
			rootMargin: '0px',
			threshold: 1
		})

		if (carouselItems.value && itemsVisibilityObserver.value) {
			carouselItems.value.forEach(item => itemsVisibilityObserver.value!.observe(item))
		}
	})
	onUnmounted(() => {
		carousel.value = null
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
