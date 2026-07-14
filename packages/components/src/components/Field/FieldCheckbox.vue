<script setup lang="ts">
/**
 * @component FieldCheckbox
 * @description Composed checkbox field with message and error support.
 */
import FieldBase from './FieldBase.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldFooterStyles } from './fieldFooterStyles'
import ControlCheckbox from '../../internal/controls/ControlCheckbox.vue'
import type { ControlSize } from '../../internal/controls/types'

const props = withDefaults(defineProps<{
  name?: string
  label?: string | null
  modelValue?: boolean | null
  id?: string
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  message?: string | null
  error?: string | null
  class?: unknown
}>(), {
  name: undefined,
  label: null,
  modelValue: false,
  id: '',
  disabled: false,
  required: false,
  size: 'md',
  message: null,
  error: null,
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const handleInput = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <FieldBase
    :id="id || undefined"
    :error="error"
    :message="message"
  >
    <ControlCheckbox
      :name="name"
      :label="label"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      :size="size"
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
