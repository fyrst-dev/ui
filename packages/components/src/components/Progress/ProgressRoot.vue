<script setup lang="ts">
/**
 * @component ProgressRoot
 * @description Progress bar built on reka-ui Progress primitives.
 */
import { computed } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import { css } from 'styled-system/css'
import { progressStyles } from './styles'
import type { ProgressColor, ProgressCss, ProgressSize } from './types'

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
  modelValue: null,
  max: 100,
  size: 'md',
  color: 'primary',
  showValue: false,
  getValueLabel: undefined,
  getValueText: undefined,
  css: undefined,
  class: undefined,
})

const styles = computed(() => progressStyles.raw({
  size: props.size,
  color: props.color,
}))

const isIndeterminate = computed(() => props.modelValue == null)

const percentage = computed(() => {
  if (props.modelValue == null || props.max <= 0)
    return 0
  return Math.min(100, Math.max(0, Math.round((props.modelValue / props.max) * 100)))
})

const displayValue = computed(() => {
  if (isIndeterminate.value)
    return undefined
  return `${percentage.value}%`
})
</script>

<template>
  <div
    :class="[css(styles.root, props.css?.root), props.class]"
  >
    <div
      v-if="showValue"
      :class="css(styles.value, props.css?.value)"
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
      :class="css(styles.track, props.css?.track)"
      :style="{
        '--progress-value': isIndeterminate ? undefined : `${percentage}%`,
      }"
    >
      <ProgressIndicator :class="css(styles.indicator, props.css?.indicator)" />
      <slot
        :model-value="modelValue"
        :max="max"
        :percentage="percentage"
      />
    </ProgressRoot>
  </div>
</template>
