<script setup lang="ts">
import { carouselStyles } from './styles'
import { withCss } from '../../internal/css'
import type { CarouselItemCss } from './types'

const props = defineProps<{
  css?: CarouselItemCss
}>()

const styles = carouselStyles.raw()
</script>

<template>
  <li :class="withCss(styles.item, props.css?.root)">
    <slot />
  </li>
</template>
