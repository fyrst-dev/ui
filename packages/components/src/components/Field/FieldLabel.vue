<script setup lang="ts">
/**
 * @component FieldLabel
 * @description Label for form fields with size variants and required indicator.
 * Links to the control via prop `for` or Field.Base context fieldId.
 */
import { inject, computed } from 'vue'
import { cva } from 'styled-system/css'
import FieldRequired from './FieldRequired.vue'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  label: string
  for?: string
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
  disabled?: boolean
  class?: unknown
}>(), {
  for: undefined,
  size: 'md',
  required: false,
  disabled: false,
  class: undefined,
})

const fieldContext = inject(fieldContextKey, null)

const htmlFor = computed(() => {
  return props.for || fieldContext?.fieldId.value || undefined
})

const labelStyles = cva({
  base: {
    display: 'block',
    fontWeight: '500',
    paddingX: 'xs',
    color: { base: 'neutral' },
    lineHeight: '1',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease-in-out',
    _disabled: {
      color: { base: 'grey.600', _light: 'grey.400' },
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
      },
      md: {
        fontSize: 'md',
      },
      lg: {
        fontSize: 'lg',
      },
    },
    disabled: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
})
</script>

<template>
  <label
    :for="htmlFor"
    :class="[
      labelStyles({
        size: props.size,
        disabled: props.disabled,
      }),
      props.class,
    ]"
    :aria-disabled="props.disabled"
  >
    {{ props.label }}
    <FieldRequired v-if="props.required" />
  </label>
</template>
