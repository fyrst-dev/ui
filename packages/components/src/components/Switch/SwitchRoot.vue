<script setup lang="ts">
/**
 * @component SwitchRoot
 * @description Public switch control (product UI). For form fields prefer FieldSwitch.
 */
import ControlSwitch from '../../internal/controls/ControlSwitch.vue'
import type { ControlSize } from '../../internal/controls/types'
import type { SwitchCss } from './types'

const props = withDefaults(defineProps<{
  modelValue?: boolean | null
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  css?: SwitchCss
  class?: unknown
}>(), {
  modelValue: false,
  id: '',
  name: '',
  label: null,
  disabled: false,
  required: false,
  size: 'md',
  css: undefined,
  class: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <ControlSwitch
    :id="props.id"
    :model-value="props.modelValue"
    :name="props.name"
    :label="props.label"
    :disabled="props.disabled"
    :required="props.required"
    :size="props.size"
    :css="props.css"
    :class="props.class"
    @update:model-value="handleUpdate"
  />
</template>
