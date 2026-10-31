<script setup lang="ts">
/**
 * @component FieldRadioGroup
 * @description Radio group with label, helper text, and error.
 */
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldFooter from './FieldFooter.vue'
import ControlRadioGroup from '../../internal/controls/ControlRadioGroup.vue'
import type { FieldSharedProps } from './types'
import type { FieldOption } from '../../internal/controls/types'

const props = withDefaults(defineProps<FieldSharedProps & {
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
  >
    <FieldLabel
      v-if="label"
      :label="label"
      :required="required"
      size="sm"
    />

    <ControlRadioGroup
      v-model="model"
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
