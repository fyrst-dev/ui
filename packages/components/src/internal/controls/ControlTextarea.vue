<script setup lang="ts">
/**
 * @component ControlTextarea
 * @description Standalone textarea control. Supports Field.Base composition via field context.
 */
import { computed, inject } from 'vue'
import { css } from 'styled-system/css'
import { controlStyles } from './controlStyles'
import { fieldContextKey } from './context'
import type { ControlSize, ControlValid } from './types'

const props = withDefaults(defineProps<{
  modelValue?: string | null
  id?: string
  name?: string
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  rows?: number
  size?: ControlSize
  valid?: ControlValid
  class?: unknown
}>(), {
  modelValue: null,
  id: '',
  name: '',
  placeholder: null,
  disabled: false,
  required: false,
  rows: 5,
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

const textareaClass = computed(() => [
  controlStyles({ size: props.size, valid: props.valid }),
  css({
    alignItems: 'flex-start',
    resize: 'vertical',
    minHeight: '6rem',
  }),
  props.class,
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <textarea
    :id="inputId"
    :name="name"
    :class="textareaClass"
    :placeholder="placeholder || undefined"
    :value="modelValue || ''"
    :disabled="disabled"
    :required="required"
    :rows="rows"
    :aria-invalid="isInvalid"
    :aria-describedby="ariaDescribedBy"
    @input="handleInput"
  />
</template>
