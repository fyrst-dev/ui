<script setup lang="ts">
/**
 * @component FieldTextarea
 * @description Composed textarea field with label, message, and error support.
 */
import { computed } from 'vue'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldFooterStyles } from './fieldFooterStyles'
import ControlTextarea from '../../internal/controls/ControlTextarea.vue'
import type { ControlSize } from '../../internal/controls/types'

const props = withDefaults(defineProps<{
  name?: string
  label?: string | null
  placeholder?: string | null
  modelValue?: string | null
  id?: string
  disabled?: boolean
  required?: boolean
  rows?: number
  size?: ControlSize
  message?: string | null
  error?: string | null
  class?: unknown
}>(), {
  name: undefined,
  label: null,
  placeholder: null,
  modelValue: null,
  id: '',
  disabled: false,
  required: false,
  rows: 5,
  size: 'md',
  message: null,
  error: null,
  class: undefined,
})

const isValid = computed(() => {
  if (props.error) return false
  return 'none' as const
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInput = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <FieldBase
    :id="id || undefined"
    :error="error"
    :message="message"
  >
    <FieldLabel
      v-if="label"
      :label="label"
      :required="required"
      size="sm"
    />

    <ControlTextarea
      :name="name"
      :placeholder="placeholder"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :size="size"
      :valid="isValid"
      :class="props.class"
      @update:model-value="handleInput"
    />

    <div
      v-if="message || error"
      :class="fieldFooterStyles"
    >
      <FieldMessage />
      <FieldError />
    </div>
  </FieldBase>
</template>
