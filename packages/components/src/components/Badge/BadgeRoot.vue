<script setup lang="ts">
import { computed } from 'vue'
import { badgeStyles } from './styles'
import { css } from 'styled-system/css'

const props = defineProps<{
  label: string
  color?: 'default' | 'primary' | 'success' | 'info' | null
  size?: 'sm' | 'md' | 'lg'
}>()

const badgeClass = computed(() => css(
  badgeStyles.raw({ color: props.color ?? undefined, size: props.size ?? undefined }),
))
</script>

<template>
  <span :class="badgeClass">
    <slot name="icon" />
    <slot name="label">{{ label }}</slot>
  </span>
</template>
