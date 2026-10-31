<script setup lang="ts">
/**
 * @component ControlRadioGroup
 * @description Radio group built on reka-ui RadioGroup primitives.
 */
import { computed } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { radioGroupStyles } from './choiceStyles'
import { useFieldControl } from './useFieldControl'
import type { ControlSize, FieldOption } from './types'

const props = withDefaults(defineProps<{
  id?: string
  name?: string
  options?: FieldOption[]
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  class?: unknown
}>(), {
  options: () => [],
  size: 'md',
})

const model = defineModel<string | null>()

const { id, describedBy, invalid } = useFieldControl(props)

const classes = computed(() => radioGroupStyles({ size: props.size }))

const handleUpdate = (value: unknown) => {
  if (value == null) return
  model.value = String(value)
}
</script>

<template>
  <RadioGroupRoot
    :id="id"
    :name="name || undefined"
    :required="required"
    :disabled="disabled"
    :model-value="model || undefined"
    :aria-invalid="invalid"
    :aria-describedby="describedBy"
    :class="[classes.root, props.class]"
    @update:model-value="handleUpdate"
  >
    <label
      v-for="option in options"
      :key="option.value"
      :class="classes.item"
      :data-disabled="disabled || option.disabled ? '' : undefined"
    >
      <RadioGroupItem
        :value="option.value"
        :disabled="disabled || option.disabled"
        :aria-invalid="invalid"
        :class="classes.control"
      >
        <RadioGroupIndicator :class="classes.indicator" />
      </RadioGroupItem>
      <span :class="classes.label">{{ option.label }}</span>
    </label>
  </RadioGroupRoot>
</template>
