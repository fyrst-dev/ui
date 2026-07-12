<script setup lang="ts">
/**
 * @component FormTextarea
 * @description A standalone textarea control with Field.Base composition support.
 */
import { computed, inject } from 'vue'
import { controlStyles, type ControlSize, type ControlValid } from './controlStyles'
import { css } from 'styled-system/css'

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

const isInvalid = computed(() => {
  if (props.valid === true) return false
  if (props.valid === false) return true
  return fieldContext?.hasError ?? false
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
    :id="id"
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
