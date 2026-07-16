<script setup lang="ts">
/**
 * @component ControlInput
 * @description Standalone text input control. Supports Field.Base composition via field context.
 */
import { computed, inject } from 'vue'
import { controlStyles } from './controlStyles'
import { fieldContextKey } from './context'
import type { ControlSize, ControlValid } from './types'

const props = withDefaults(defineProps<{
  type?: 'text' | 'email' | 'tel' | 'number' | 'date' | 'url'
  modelValue?: string | null
  id?: string
  name?: string
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  autocomplete?: string | null
  size?: ControlSize
  valid?: ControlValid
  class?: unknown
}>(), {
  type: 'text',
  modelValue: null,
  id: '',
  name: '',
  placeholder: null,
  disabled: false,
  required: false,
  autocomplete: null,
  size: 'md',
  valid: 'none',
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const fieldContext = inject(fieldContextKey, null)

const inputId = computed(() => props.id || fieldContext?.fieldId.value || undefined)

const ariaDescribedBy = computed(() => {
  if (!fieldContext) return undefined

  const ids: string[] = []
  if (fieldContext.errorId.value) ids.push(fieldContext.errorId.value)
  if (fieldContext.messageId.value) ids.push(fieldContext.messageId.value)

  return ids.length > 0 ? ids.join(' ') : undefined
})

const isInvalid = computed(() => {
  if (props.valid === true) return false
  if (props.valid === false) return true
  return fieldContext?.hasError.value ?? false
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :id="inputId"
    :name="name"
    :class="[controlStyles({ size, valid: props.valid }), props.class]"
    :type="type"
    :placeholder="placeholder || undefined"
    :value="modelValue || ''"
    :disabled="disabled"
    :required="required"
    :autocomplete="autocomplete || undefined"
    :aria-invalid="isInvalid"
    :aria-describedby="ariaDescribedBy"
    @input="handleInput"
  >
</template>
