<script setup lang="ts">
/**
 * @component FieldSwitch
 * @description Switch with helper text and error. The label sits next to the switch.
 */
import FieldBase from './FieldBase.vue'
import FieldFooter from './FieldFooter.vue'
import ControlSwitch from '../../internal/controls/ControlSwitch.vue'
import type { FieldSharedProps } from './types'
import type { SwitchCss } from '../Switch/types'

const props = withDefaults(defineProps<FieldSharedProps & {
  css?: SwitchCss
}>(), {
  size: 'md',
})

const model = defineModel<boolean | null>()
</script>

<template>
  <FieldBase
    :id="id || undefined"
    :error="error"
    :message="message"
    :html="html"
  >
    <ControlSwitch
      v-model="model"
      :label="label"
      :css="props.css"
      :name="name"
      :disabled="disabled"
      :required="required"
      :size="size"
      :class="props.class"
    />

    <FieldFooter />
  </FieldBase>
</template>
