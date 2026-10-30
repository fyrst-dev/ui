<script setup lang="ts">
import { computed } from 'vue'
import { loaderSizeValues, loaderStyles, type LoaderSizeValue } from './styles'
import { css } from 'styled-system/css'

defineOptions({ name: 'FyLoader' })

const props = withDefaults(defineProps<{
  size?: number
  label?: string
}>(), {
  size: 40,
  label: 'Loading',
})

function resolveLoaderSize(value: number): LoaderSizeValue {
  if ((loaderSizeValues as readonly number[]).includes(value)) {
    return value as LoaderSizeValue
  }

  return loaderSizeValues.reduce((closest, candidate) => {
    return Math.abs(candidate - value) < Math.abs(closest - value)
      ? candidate
      : closest
  }, 40 as LoaderSizeValue)
}

const loaderClass = computed(() => css(loaderStyles.raw({
  size: resolveLoaderSize(props.size),
})))
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
  />
</template>
