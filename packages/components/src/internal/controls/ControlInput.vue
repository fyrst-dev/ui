<script setup lang="ts">
/**
 * @component ControlInput
 * @description Text input. Reads id, ARIA links, and validity from Field.Base.
 */
import { fyControl } from 'styled-system/recipes'
import { useFieldControl } from './useFieldControl'
import type { ControlInputType, ControlSize, ControlValid } from './types'

const props = withDefaults(defineProps<{
  type?: ControlInputType
  id?: string
  name?: string
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  autocomplete?: string | null
  size?: ControlSize
  valid?: ControlValid
  class?: unknown
}>(), {
  type: 'text',
  size: 'md',
  valid: 'none',
})

const model = defineModel<string | null>()

const { id, describedBy, valid, invalid } = useFieldControl(props)

const handleInput = (event: Event) => {
  model.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <input
    :id="id"
    :name="name || undefined"
    :class="[fyControl({ size, valid }), props.class]"
    :type="type"
    :placeholder="placeholder || undefined"
    :value="model ?? ''"
    :disabled="disabled"
    :required="required"
    :autocomplete="autocomplete || undefined"
    :aria-invalid="invalid"
    :aria-describedby="describedBy"
    @input="handleInput"
  >
</template>
