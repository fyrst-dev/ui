<script setup lang="ts">
/**
 * @component FieldInput
 * @description Text input with label, helper text, and error. Native input attributes fall through to the input.
 */
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldFooter from './FieldFooter.vue'
import ControlInput from '../../internal/controls/ControlInput.vue'
import type { FieldSharedProps } from './types'
import type { ControlInputType } from '../../internal/controls/types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<FieldSharedProps & {
  type?: ControlInputType
  placeholder?: string | null
  autocomplete?: string | null
}>(), {
  size: 'md',
  type: 'text',
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

    <ControlInput
      v-model="model"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :name="name"
      :disabled="disabled"
      :required="required"
      :size="size"
      :class="props.class"
    />

    <FieldFooter />
  </FieldBase>
</template>
