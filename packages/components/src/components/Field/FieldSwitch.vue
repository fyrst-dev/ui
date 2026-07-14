<script setup lang="ts">
/**
 * @component FieldSwitch
 * @description Composed switch field with message and error support.
 */
import FieldBase from './FieldBase.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldFooterStyles } from './fieldFooterStyles'
import ControlSwitch from '../../internal/controls/ControlSwitch.vue'
import type { ControlSize } from '../../internal/controls/types'
import type { SwitchCss } from '../Switch/types'

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
  css?: SwitchCss
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
  css: undefined,
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
    <ControlSwitch
      :name="name"
      :label="label"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      :size="size"
      :css="props.css"
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
