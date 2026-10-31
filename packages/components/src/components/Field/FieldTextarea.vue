<script setup lang="ts">
/**
 * @component FieldTextarea
 * @description Textarea with label, helper text, and error.
 */
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldFooter from './FieldFooter.vue'
import ControlTextarea from '../../internal/controls/ControlTextarea.vue'
import type { FieldSharedProps } from './types'

const props = withDefaults(defineProps<FieldSharedProps & {
  placeholder?: string | null
  rows?: number
}>(), {
  size: 'md',
  rows: 5,
})

const model = defineModel<string | null>()
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
      v-model="model"
      :placeholder="placeholder"
      :rows="rows"
      :name="name"
      :disabled="disabled"
      :required="required"
      :size="size"
      :class="props.class"
    />

    <FieldFooter />
  </FieldBase>
</template>
