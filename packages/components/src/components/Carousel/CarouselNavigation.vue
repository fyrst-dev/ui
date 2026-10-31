<script setup lang="ts">
import { computed, inject } from 'vue'
import { fyCarousel } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import { CarouselContextKey, type CarouselNavigationCss } from './types'

const props = withDefaults(defineProps<{
  prevLabel?: string
  nextLabel?: string
  css?: CarouselNavigationCss
}>(), {
  prevLabel: 'Prev',
  nextLabel: 'Next',
})

const carousel = inject(CarouselContextKey, null)

const itemCount = computed(() => carousel?.carouselItems.value.length ?? 0)
const index = computed(() => carousel?.currentCarouselItemIndex.value ?? 0)
const allVisible = computed(() => carousel?.allItemsVisible.value ?? false)

const prevDisabled = computed(() => allVisible.value || itemCount.value === 0 || index.value === 0)
const nextDisabled = computed(() => allVisible.value || itemCount.value === 0 || index.value === itemCount.value - 1)

const handlePrev = () => carousel?.handlePrev()
const handleNext = () => carousel?.handleNext()

const classes = fyCarousel()
</script>

<template>
  <div :class="withCss(classes.navigation, props.css?.root)">
    <slot
      name="action-prev"
      :handle-prev="handlePrev"
      :disabled="prevDisabled"
    >
      <button
        type="button"
        :class="withCss(classes.button, props.css?.button)"
        :disabled="prevDisabled"
        @click="handlePrev"
      >
        {{ prevLabel }}
      </button>
    </slot>
    <slot
      name="action-next"
      :handle-next="handleNext"
      :disabled="nextDisabled"
    >
      <button
        type="button"
        :class="withCss(classes.button, props.css?.button)"
        :disabled="nextDisabled"
        @click="handleNext"
      >
        {{ nextLabel }}
      </button>
    </slot>
  </div>
</template>
