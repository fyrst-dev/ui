<script setup lang="ts">
import { computed } from 'vue'
import { badgeStyles } from './styles'
import { withCss, type CssMap } from '../../internal/css'

export type BadgeCss = CssMap<'root'>

const props = withDefaults(defineProps<{
  label: string
  color?: 'default' | 'primary' | 'success' | 'info' | 'danger' | null
  size?: 'sm' | 'md' | 'lg'
  css?: BadgeCss
}>(), {
  color: 'default',
  size: 'md',
})

const badgeClass = computed(() => withCss(
  badgeStyles.raw({ color: props.color ?? 'default', size: props.size }),
  props.css?.root,
))
</script>

<template>
  <span :class="badgeClass">
    <slot name="icon" />
    <slot name="label">{{ label }}</slot>
  </span>
</template>
