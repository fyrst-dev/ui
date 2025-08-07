<script setup lang="ts">
import { inject, watch, ref, type Ref } from 'vue'
const prevDisabled = ref(true)
const nextDisabled = ref(true)
const handlePrev = inject<(() => void)>('handlePrev')
const handleNext = inject<(() => void)>('handleNext')
const allItemsVisible = inject<Ref<boolean>>('allItemsVisible', ref(false))
const carouselItems = inject<Ref<NodeListOf<HTMLElement> | null>>('carouselItems', ref(null))
const carouselIndex = inject<Ref<number>>('currentCarouselItemIndex', ref(0))

watch(
  [carouselItems, carouselIndex, allItemsVisible],
  ([items, index, allItemsVisible]) => {

	if (allItemsVisible) {
		prevDisabled.value = true
		nextDisabled.value = true
	} else if (items !== null && items.length > 0) {
		prevDisabled.value = index === 0
		nextDisabled.value = index === items.length - 1
	}
  },
  { immediate: true }
)
</script>

<template>
	<div>
		<slot 
			name="action-prev" 
			:handlePrev="handlePrev" 
			:disabled="prevDisabled">
			<button 
				@click="handlePrev"
				:disabled="prevDisabled">
				Prev
			</button>
		</slot>
		<slot 
			name="action-next" 
			:handleNext="handleNext"
			:disabled="nextDisabled">
			<button 
				@click="handleNext"
				:disabled="nextDisabled">
				Next
			</button>
		</slot>
	</div>
</template>