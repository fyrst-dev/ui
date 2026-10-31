<script setup lang="ts">
/**
 * @component SwitchRoot
 * @description Standalone switch for product UI. Inside forms prefer FieldSwitch.
 */
import ControlSwitch from '../../internal/controls/ControlSwitch.vue'
import type { ControlSize } from '../../internal/controls/types'
import type { SwitchCss } from './types'

const props = withDefaults(defineProps<{
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  css?: SwitchCss
  class?: unknown
}>(), {
  size: 'md',
})

const model = defineModel<boolean | null>({ default: false })
</script>

<template>
  <ControlSwitch
    :id="props.id"
    v-model="model"
    :name="props.name"
    :label="props.label"
    :disabled="props.disabled"
    :required="props.required"
    :size="props.size"
    :css="props.css"
    :class="props.class"
  />
</template>
