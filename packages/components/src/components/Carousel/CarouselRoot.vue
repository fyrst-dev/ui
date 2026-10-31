<script setup lang="ts">
import { provide, ref } from 'vue'
import { carouselStyles } from './styles'
import { useCarousel, type CarouselScrollMode } from '../../composables/carousel'
import { withCss } from '../../internal/css'
import { CarouselContextKey, type CarouselRootCss } from './types'

const props = withDefaults(defineProps<{
  scrollMode?: CarouselScrollMode
  /**
   * Move between items with the mouse wheel. Off by default: when on, the
   * carousel captures wheel events, so the page does not scroll over it.
   */
  wheelNavigation?: boolean
  css?: CarouselRootCss
}>(), {
  scrollMode: 'item',
})

const carousel = ref<HTMLElement | null>(null)

const state = useCarousel({ scrollMode: () => props.scrollMode }, carousel)

provide(CarouselContextKey, { ...state, carousel })

const styles = carouselStyles.raw()

const onWheel = (event: WheelEvent) => {
  if (props.wheelNavigation) {
    state.handleWheel(event)
  }
}
</script>

<template>
  <div :class="withCss(styles.root, props.css?.root)">
    <slot name="carousel-before" />
    <ul
      ref="carousel"
      :class="withCss(styles.viewport, props.css?.viewport)"
      @wheel="onWheel"
    >
      <slot />
    </ul>
    <slot name="carousel-after" />
  </div>
</template>
