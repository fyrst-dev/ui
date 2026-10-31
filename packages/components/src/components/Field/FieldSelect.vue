<script setup lang="ts">
/**
 * @component FieldSelect
 * @description Select with label, helper text, and error.
 */
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldFooter from './FieldFooter.vue'
import ControlSelect from '../../internal/controls/ControlSelect.vue'
import type { FieldSharedProps } from './types'
import type { FieldOption } from '../../internal/controls/types'

const props = withDefaults(defineProps<FieldSharedProps & {
  placeholder?: string | null
  options?: FieldOption[]
}>(), {
  size: 'md',
  options: () => [],
})

const model = defineModel<string | null>()
</script>

<template>
  <FieldBase
    :id="id || undefined"
    :error="error"
    :message="message"
    :html="html"
  >
    <FieldLabel
      v-if="label"
      :label="label"
      :required="required"
      size="sm"
    />

    <ControlSelect
      v-model="model"
      :placeholder="placeholder"
      :options="options"
      :name="name"
      :disabled="disabled"
      :required="required"
      :size="size"
      :class="props.class"
    />

    <FieldFooter />
  </FieldBase>
</template>
