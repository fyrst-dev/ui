<script setup lang="ts">
/**
 * @component ControlTextarea
 * @description Textarea. Reads id, ARIA links, and validity from Field.Base.
 */
import { controlStyles } from './controlStyles'
import { useFieldControl } from './useFieldControl'
import type { ControlSize, ControlValid } from './types'

const props = withDefaults(defineProps<{
  id?: string
  name?: string
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  rows?: number
  size?: ControlSize
  valid?: ControlValid
  class?: unknown
}>(), {
  rows: 5,
  size: 'md',
  valid: 'none',
})

const model = defineModel<string | null>()

const { id, describedBy, valid, invalid } = useFieldControl(props)

const handleInput = (event: Event) => {
  model.value = (event.target as HTMLTextAreaElement).value
}
</script>

<template>
  <textarea
    :id="id"
    :name="name || undefined"
    :class="[controlStyles({ element: 'textarea', size, valid }), props.class]"
    :placeholder="placeholder || undefined"
    :value="model ?? ''"
    :disabled="disabled"
    :required="required"
    :rows="rows"
    :aria-invalid="invalid"
    :aria-describedby="describedBy"
    @input="handleInput"
  />
</template>
