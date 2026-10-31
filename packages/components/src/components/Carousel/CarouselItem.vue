<script setup lang="ts">
import { fyCarousel } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import type { CarouselItemCss } from './types'

const props = defineProps<{
  css?: CarouselItemCss
}>()

const classes = fyCarousel()
</script>

<template>
  <li :class="withCss(classes.item, props.css?.root)">
    <slot />
  </li>
</template>
