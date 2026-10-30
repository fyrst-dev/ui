<script setup lang="ts">
import { inject, watch, ref, type Ref } from 'vue'
import { css } from 'styled-system/css'

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
    }
    else if (items !== null && items.length > 0) {
      prevDisabled.value = index === 0
      nextDisabled.value = index === items.length - 1
    }
  },
  { immediate: true },
)
</script>

<template>
  <div>
    <slot
      name="action-prev"
      :handle-prev="handlePrev"
      :disabled="prevDisabled"
    >
      <button
        :class="css({ fontFamily: 'inherit' })"
        :disabled="prevDisabled"
        @click="handlePrev"
      >
        Prev
      </button>
    </slot>
    <slot
      name="action-next"
      :handle-next="handleNext"
      :disabled="nextDisabled"
    >
      <button
        :class="css({ fontFamily: 'inherit' })"
        :disabled="nextDisabled"
        @click="handleNext"
      >
        Next
      </button>
    </slot>
  </div>
</template>
