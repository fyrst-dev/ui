<script setup lang="ts">
/**
 * @component FieldRadioGroup
 * @description Composed radio group field with label, message, and error support.
 */
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldFooterStyles } from './fieldFooterStyles'
import ControlRadioGroup from '../../internal/controls/ControlRadioGroup.vue'
import type { ControlSize, FieldOption } from '../../internal/controls/types'

const props = withDefaults(defineProps<{
  name?: string
  label?: string | null
  modelValue?: string | null
  id?: string
  options?: FieldOption[]
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  message?: string | null
  error?: string | null
  class?: unknown
}>(), {
  name: undefined,
  label: null,
  modelValue: null,
  id: '',
  options: () => [],
  disabled: false,
  required: false,
  size: 'md',
  message: null,
  error: null,
  class: undefined,
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

    <ControlRadioGroup
      :name="name"
      :model-value="modelValue"
      :options="options"
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
