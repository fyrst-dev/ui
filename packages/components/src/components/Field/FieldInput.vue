<script setup lang="ts">
/**
 * @component FieldInput
 * @description Composed text input field with label, message, and error support.
 */
import { computed } from 'vue'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldFooterStyles } from './fieldFooterStyles'
import ControlInput from '../../internal/controls/ControlInput.vue'
import type { ControlSize } from '../../internal/controls/types'

const props = withDefaults(defineProps<{
  name?: string
  type?: 'text' | 'email' | 'tel' | 'number' | 'date'
  label?: string | null
  placeholder?: string | null
  modelValue?: string | null
  id?: string
  disabled?: boolean
  required?: boolean
  autocomplete?: string | null
  size?: ControlSize
  message?: string | null
  error?: string | null
  class?: unknown
}>(), {
  name: undefined,
  type: 'text',
  label: null,
  placeholder: null,
  modelValue: null,
  id: '',
  disabled: false,
  required: false,
  autocomplete: null,
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

    <ControlInput
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
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
