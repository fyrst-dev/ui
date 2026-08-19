<script setup lang="ts">
import { computed } from 'vue'
import { loaderStyles } from './styles'
import { css } from 'styled-system/css'

defineOptions({ name: 'FyLoader' })

withDefaults(defineProps<{
  size?: number
  label?: string
}>(), {
  size: 40,
  label: 'Loading',
})

const loaderClass = computed(() => css(loaderStyles.raw()))
</script>

<template>
  <div
    :class="[
      'loader',
      loaderClass,
    ]"
    role="status"
    aria-live="polite"
    :aria-label="label"
    :style="{
      '--loader-size': `${size}px`,
    }"
  />
</template>
