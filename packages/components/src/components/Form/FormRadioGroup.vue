<script setup lang="ts">
/**
 * @component FormRadioGroup
 * @description Radio group control built on reka-ui RadioGroup primitives.
 */
import { computed, inject } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { css } from 'styled-system/css'
import type { ControlSize, FormFieldOption } from './controlStyles'

const props = withDefaults(defineProps<{
  modelValue?: string | null
  id?: string
  name?: string
  options?: FormFieldOption[]
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  class?: unknown
}>(), {
  modelValue: null,
  id: '',
  name: '',
  options: () => [],
  disabled: false,
  required: false,
  size: 'md',
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const fieldContext = inject<{
  fieldId: string
  errorId: string | null
  messageId: string | null
  hasError: boolean
} | null>('fieldContext', null)

const ariaDescribedBy = computed(() => {
  if (!fieldContext) return undefined

  const ids: string[] = []
  if (fieldContext.errorId) ids.push(fieldContext.errorId)
  if (fieldContext.messageId) ids.push(fieldContext.messageId)

  return ids.length > 0 ? ids.join(' ') : undefined
})

const rootClass = computed(() => [
  css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'sm',
    border: 'none',
    p: 0,
    m: 0,
    minWidth: '0',
  }),
  props.class,
])

const itemLabelClass = computed(() =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: 'sm',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    opacity: props.disabled ? '0.5' : '1',
  }),
)

const itemClass = computed(() =>
  css({
    'display': 'inline-flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': props.size === 'sm' ? '1rem' : props.size === 'lg' ? '1.375rem' : '1.125rem',
    'height': props.size === 'sm' ? '1rem' : props.size === 'lg' ? '1.375rem' : '1.125rem',
    'borderWidth': '1px',
    'borderStyle': 'solid',
    'borderColor': fieldContext?.hasError ? 'danger' : 'grey.dusk',
    'borderRadius': 'full',
    'backgroundColor': 'grey.black',
    'transition': 'all 200ms',
    'flexShrink': '0',
    '_hover': {
      borderColor: props.disabled ? undefined : 'grey.400',
    },
    '&[data-state="checked"]': {
      borderColor: 'primary',
    },
    '_light': {
      'backgroundColor': 'white',
      'borderColor': fieldContext?.hasError ? 'danger' : 'grey.200',
      '&[data-state="checked"]': {
        borderColor: 'primary',
      },
    },
  }),
)

const indicatorClass = css({
  display: 'block',
  width: '55%',
  height: '55%',
  borderRadius: 'full',
  backgroundColor: 'primary',
})

const textClass = computed(() =>
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

const handleUpdate = (value: unknown) => {
  if (value == null) return
  emit('update:modelValue', String(value))
}
</script>

<template>
  <RadioGroupRoot
    :id="id || undefined"
    :name="name"
    :required="required"
    :disabled="disabled"
    :model-value="modelValue || undefined"
    :aria-invalid="fieldContext?.hasError ?? false"
    :aria-describedby="ariaDescribedBy"
    :class="rootClass"
    @update:model-value="handleUpdate"
  >
    <label
      v-for="option in options"
      :key="option.value"
      :class="itemLabelClass"
    >
      <RadioGroupItem
        :value="option.value"
        :disabled="disabled || option.disabled"
        :class="itemClass"
      >
        <RadioGroupIndicator :class="indicatorClass" />
      </RadioGroupItem>
      <span :class="textClass">{{ option.label }}</span>
    </label>
  </RadioGroupRoot>
</template>
