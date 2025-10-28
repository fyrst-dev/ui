<script setup lang="ts">
import { ref, useSlots, type PropType, provide } from 'vue'
import { css, type Styles } from 'styled-system/css'
import { useCarousel } from '../../composables/carousel'

/** Props */
const props = defineProps({
	scrollMode: {
		type: String as PropType<'item' | 'viewport'>,
		default: 'item',
		validator: (value: string) => ['item', 'viewport'].includes(value)
	},
	classWrapper: {
		type: Object as PropType<Styles>,
		default: null
	},
	classCarousel: {
		type: Object as PropType<Styles>,
		default: null
	},
})

/** Reactive data */
const slots = useSlots()
const carousel = ref<HTMLElement | null>(null)

/** composable */
const { 
	handleNext, 
	handlePrev, 
	handleWheel,
	carouselItems,
	carouselItem,
	visibleCarouselItems,
	currentCarouselItemIndex,
	scrollDirection, 
	allItemsVisible
} = useCarousel(props, carousel, slots)

provide('carousel', carousel)
provide('handleNext', handleNext)
provide('handlePrev', handlePrev)
provide('carouselItems', carouselItems)
provide('carouselItem', carouselItem)
provide('visibleCarouselItems', visibleCarouselItems)
provide('currentCarouselItemIndex', currentCarouselItemIndex)
provide('scrollDirection', scrollDirection)
provide('allItemsVisible', allItemsVisible)
</script>

<template>
	<div 
		:class="css(
			css.raw({ 
				position: 'relative',
				display: 'flex', 
				flexDirection: 'column', 
				maxWidth: '100%' 
			}),
			props.classWrapper,
		)">
		<slot name="carousel-before" />
		<ul 
			ref="carousel" 
			:class="css(
				css.raw({
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					overflowX: 'scroll',
					scrollSnapType: 'x mandatory',
					scrollBehavior: 'smooth',
					scrollbarWidth: 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					},
					gap: '16px',
					padding: '16px 0px',
				}),
				props.classCarousel
			)"
			@wheel.prevent="handleWheel">
			<slot />
		</ul>
		<slot name="carousel-after" />
	</div>
</template>
