<script setup lang="ts">
/**
 * @component ProgressRoot
 * @description Progress bar built on reka-ui Progress primitives.
 * A `null` value renders the indeterminate animation.
 */
import { computed } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import { progressStyles } from './styles'
import { withCss } from '../../internal/css'
import type { ProgressColor, ProgressCss, ProgressSize } from './types'

type ProgressPercent = NonNullable<NonNullable<Parameters<typeof progressStyles.raw>[0]>['percent']>

const props = withDefaults(defineProps<{
  modelValue?: number | null
  max?: number
  size?: ProgressSize
  color?: ProgressColor
  showValue?: boolean
  getValueLabel?: (value: number | null | undefined, max: number) => string | undefined
  getValueText?: (value: number | null | undefined, max: number) => string | undefined
  css?: ProgressCss
  class?: unknown
}>(), {
  modelValue: null as number | null,
  max: 100,
  size: 'md',
  color: 'primary',
  showValue: false,
})

const isIndeterminate = computed(() => props.modelValue == null)

const percentage = computed(() => {
  if (props.modelValue == null || props.max <= 0)
    return 0
  return Math.min(100, Math.max(0, Math.round((props.modelValue / props.max) * 100)))
})

// Each whole percent is a static class, so SSR HTML carries no `style=`.
// Indeterminate bars get no percent class; the `[data-state="indeterminate"]`
// width applies instead.
const styles = computed(() => progressStyles.raw({
  size: props.size,
  color: props.color,
  percent: isIndeterminate.value ? undefined : percentage.value as ProgressPercent,
}))

const displayValue = computed(() => {
  if (isIndeterminate.value)
    return undefined
  return `${percentage.value}%`
})
</script>

<template>
  <div
    :class="[withCss(styles.root, props.css?.root), props.class]"
  >
    <div
      v-if="showValue"
      :class="withCss(styles.value, props.css?.value)"
    >
      <slot
        name="value"
        :model-value="modelValue"
        :max="max"
        :percentage="percentage"
      >
        {{ displayValue }}
      </slot>
    </div>

    <ProgressRoot
      :model-value="modelValue"
      :max="max"
      :get-value-label="getValueLabel"
      :get-value-text="getValueText"
      :class="withCss(styles.track, props.css?.track)"
    >
      <ProgressIndicator :class="withCss(styles.indicator, props.css?.indicator)" />
      <slot
        :model-value="modelValue"
        :max="max"
        :percentage="percentage"
      />
    </ProgressRoot>
  </div>
</template>
