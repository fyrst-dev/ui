<script setup lang="ts">
/**
 * @component ControlSelect
 * @description Select built on reka-ui Select primitives.
 */
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { fyControl, fySelect } from 'styled-system/recipes'
import { useFieldControl } from './useFieldControl'
import type { ControlSize, ControlValid, FieldOption } from './types'

const props = withDefaults(defineProps<{
  id?: string
  name?: string
  options?: FieldOption[]
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  size?: ControlSize
  valid?: ControlValid
  class?: unknown
}>(), {
  options: () => [],
  size: 'md',
  valid: 'none',
})

const model = defineModel<string | null>()

const { id, describedBy, valid, invalid } = useFieldControl(props)

const classes = fySelect()

const handleUpdate = (value: unknown) => {
  if (value == null) return
  model.value = String(value)
}
</script>

<template>
  <SelectRoot
    :model-value="model || undefined"
    :name="name || undefined"
    :required="required"
    :disabled="disabled"
    @update:model-value="handleUpdate"
  >
    <SelectTrigger
      :id="id"
      :class="[fyControl({ element: 'select', size, valid }), props.class]"
      :aria-invalid="invalid"
      :aria-describedby="describedBy"
    >
      <SelectValue :placeholder="placeholder || undefined" />
      <SelectIcon as-child>
        <span class="icon icon-caret-down-bold" />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        position="popper"
        :side-offset="4"
        :class="classes.content"
      >
        <SelectViewport :class="classes.viewport">
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            :class="classes.item"
          >
            <span :class="classes.itemIndicator">
              <SelectItemIndicator>
                <span class="icon icon-check-bold" />
              </SelectItemIndicator>
            </span>
            <SelectItemText>{{ option.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
