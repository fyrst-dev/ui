<script setup lang="ts">
/**
 * @component ProgressRoot
 * @description Progress bar built on reka-ui Progress primitives.
 */
import { computed } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import { css as pandaCss } from 'styled-system/css'
import { progressStyles } from './styles'
import type { ProgressColor, ProgressCss, ProgressSize } from './types'

type ProgressPercent = NonNullable<NonNullable<Parameters<typeof progressStyles.raw>[0]>['percent']>

function resolvePercent(value: number): ProgressPercent {
  return Math.min(100, Math.max(0, Math.round(value))) as ProgressPercent
}

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

const styles = computed(() => progressStyles.raw({
  size: props.size,
  color: props.color,
  percent: resolvePercent(isIndeterminate.value ? 0 : percentage.value),
}))

const displayValue = computed(() => {
  if (isIndeterminate.value)
    return undefined
  return `${percentage.value}%`
})
</script>

<template>
  <div
    :class="[pandaCss(styles.root, props.css?.root), props.class]"
  >
    <div
      v-if="showValue"
      :class="pandaCss(styles.value, props.css?.value)"
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
      :class="pandaCss(styles.track, props.css?.track)"
    >
      <ProgressIndicator :class="pandaCss(styles.indicator, props.css?.indicator)" />
      <slot
        :model-value="modelValue"
        :max="max"
        :percentage="percentage"
      />
    </ProgressRoot>
  </div>
</template>
