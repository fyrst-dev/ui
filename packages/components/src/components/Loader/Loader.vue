<script setup lang="ts">
import { computed } from 'vue'
import { fyLoader } from 'styled-system/recipes'
import { withCss, type CssMap } from '../../internal/css'

export type LoaderCss = CssMap<'root'>

defineOptions({ name: 'FyrstLoader' })

const props = withDefaults(defineProps<{
  /** Diameter in px. Snaps to the closest of 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 120. */
  size?: number
  label?: string
  css?: LoaderCss
}>(), {
  size: 40,
  label: 'Loading',
})

// Keep in sync with `loaderSizes` in the preset's loader recipe.
const loaderSizes = [16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 120] as const
type LoaderSize = `${typeof loaderSizes[number]}`

function resolveLoaderSize(value: number): LoaderSize {
  const closest = loaderSizes.reduce((best, candidate) =>
    Math.abs(candidate - value) < Math.abs(best - value) ? candidate : best,
  )
  return String(closest) as LoaderSize
}

const loaderClass = computed(() => withCss(
  fyLoader({ size: resolveLoaderSize(props.size) }),
  props.css?.root,
))
</script>

<template>
  <div
    :class="['loader', loaderClass]"
    role="status"
    :aria-label="label"
  />
</template>
