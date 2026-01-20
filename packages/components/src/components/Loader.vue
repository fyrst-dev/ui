<script setup lang="ts">
import { css } from 'styled-system/css'

const props = withDefaults(defineProps<{
  size?: number
  label?: string
}>(), {
  size: 40,
  label: 'Loading',
})
</script>

<template>
  <div
    :class="[
      'loader',
      css({
        width: 'var(--loader-size)',
        height: 'var(--loader-size)',
        borderWidth: 'calc((min(var(--loader-size), var(--loader-size)) / 10))',
        boxSizing: 'border-box',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: 'lucid.100',
        borderTopColor: 'primary',
        animationDuration: '1000ms',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationName: 'spin',
      }),
    ]"
    role="status"
    aria-live="polite"
    :aria-label="label"
    :style="{
      '--loader-size': `${size}px`,
    }"
  />
</template>
