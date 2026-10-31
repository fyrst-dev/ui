<script setup lang="ts">
/**
 * @component ControlCheckbox
 * @description Checkbox built on reka-ui Checkbox primitives.
 */
import { computed } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { checkboxStyles } from './choiceStyles'
import { useFieldControl } from './useFieldControl'
import type { ControlSize } from './types'

const props = withDefaults(defineProps<{
  id?: string
  name?: string
  label?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  class?: unknown
}>(), {
  size: 'md',
})

const model = defineModel<boolean | null>({ default: false })

const { id, describedBy, invalid } = useFieldControl(props)

const classes = computed(() => checkboxStyles({ size: props.size }))

const handleUpdate = (value: boolean | 'indeterminate') => {
  model.value = value === true
}
</script>

<template>
  <label
    :class="[classes.root, props.class]"
    :data-disabled="disabled ? '' : undefined"
  >
    <CheckboxRoot
      :id="id"
      :name="name || undefined"
      :required="required"
      :disabled="disabled"
      :model-value="Boolean(model)"
      :aria-invalid="invalid"
      :aria-describedby="describedBy"
      :class="classes.control"
      @update:model-value="handleUpdate"
    >
      <CheckboxIndicator :class="classes.indicator">
        <span class="icon icon-check-bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span
      v-if="label"
      :class="classes.label"
    >{{ label }}</span>
  </label>
</template>
