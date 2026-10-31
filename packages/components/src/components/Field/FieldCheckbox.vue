<script setup lang="ts">
/**
 * @component FieldCheckbox
 * @description Checkbox with helper text and error. The label sits next to the box.
 */
import FieldBase from './FieldBase.vue'
import FieldFooter from './FieldFooter.vue'
import ControlCheckbox from '../../internal/controls/ControlCheckbox.vue'
import type { FieldSharedProps } from './types'

const props = withDefaults(defineProps<FieldSharedProps>(), {
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
    <ControlCheckbox
      v-model="model"
      :label="label"
      :name="name"
      :disabled="disabled"
      :required="required"
      :size="size"
      :class="props.class"
    />

    <FieldFooter />
  </FieldBase>
</template>
