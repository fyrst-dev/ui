<script setup lang="ts">
/**
 * @component FormCheckbox
 * @description Checkbox control built on reka-ui Checkbox primitives.
 */
import { computed, inject } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { css } from 'styled-system/css'
import type { ControlSize } from './controlStyles'

const props = withDefaults(defineProps<{
  modelValue?: boolean | null
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  class?: unknown
}>(), {
  modelValue: false,
  id: '',
  name: '',
  label: null,
  disabled: false,
  required: false,
  size: 'md',
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const fieldContext = inject<{
  fieldId: string
  errorId: string | null
  messageId: string | null
  hasError: boolean
} | null>('fieldContext', null)

const inputId = computed(() => props.id || fieldContext?.fieldId || undefined)

const ariaDescribedBy = computed(() => {
  if (!fieldContext) return undefined

  const ids: string[] = []
  if (fieldContext.errorId) ids.push(fieldContext.errorId)
  if (fieldContext.messageId) ids.push(fieldContext.messageId)

  return ids.length > 0 ? ids.join(' ') : undefined
})

const checked = computed(() => Boolean(props.modelValue))

const rootClass = computed(() => [
  css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'sm',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    opacity: props.disabled ? '0.5' : '1',
  }),
  props.class,
])

const boxClass = computed(() =>
  css({
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': props.size === 'sm' ? '1rem' : props.size === 'lg' ? '1.375rem' : '1.125rem',
    'height': props.size === 'sm' ? '1rem' : props.size === 'lg' ? '1.375rem' : '1.125rem',
    'borderWidth': '1px',
    'borderStyle': 'solid',
    'borderColor': fieldContext?.hasError ? 'danger' : 'grey.dusk',
    'borderRadius': 'sm',
    'backgroundColor': 'grey.black',
    'color': 'neutral',
    'transition': 'all 200ms',
    'flexShrink': '0',
    '_hover': {
      borderColor: props.disabled ? undefined : 'grey.400',
    },
    '&[data-state="checked"]': {
      backgroundColor: 'primary',
      borderColor: 'primary',
      color: 'grey.night',
    },
    '_light': {
      'backgroundColor': 'white',
      'borderColor': fieldContext?.hasError ? 'danger' : 'grey.200',
      'color': 'grey.night',
      '&[data-state="checked"]': {
        backgroundColor: 'primary',
        borderColor: 'primary',
        color: 'grey.night',
      },
    },
  }),
)

const labelClass = computed(() =>
  css({
    fontWeight: '500',
    fontSize: props.size === 'sm' ? 'sm' : props.size === 'lg' ? 'lg' : 'md',
    color: 'neutral',
    lineHeight: '1.4',
    _light: {
      color: 'grey.night',
    },
  }),
)

const handleUpdate = (value: boolean | 'indeterminate') => {
  emit('update:modelValue', value === true)
}
</script>

<template>
  <label :class="rootClass">
    <CheckboxRoot
      :id="inputId"
      :name="name"
      :required="required"
      :disabled="disabled"
      :model-value="checked"
      :aria-invalid="fieldContext?.hasError ?? false"
      :aria-describedby="ariaDescribedBy"
      :class="boxClass"
      @update:model-value="handleUpdate"
    >
      <CheckboxIndicator
        :class="css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        })"
      >
        <span class="icon icon-check-bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span
      v-if="label"
      :class="labelClass"
    >{{ label }}</span>
  </label>
</template>
