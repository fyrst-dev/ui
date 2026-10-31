<script setup lang="ts">
/**
 * @component FieldLabel
 * @description Field label with size variants and a required mark.
 * Points at the control through `for` or the Field.Base context.
 */
import { inject, computed } from 'vue'
import { fyField } from 'styled-system/recipes'
import FieldRequired from './FieldRequired.vue'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  label: string
  for?: string
  size?: 'sm' | 'md' | 'lg'
  required?: boolean
  disabled?: boolean
  class?: unknown
}>(), {
  size: 'md',
})

const fieldContext = inject(fieldContextKey, null)

const htmlFor = computed(() => props.for || fieldContext?.fieldId.value || undefined)

const classes = computed(() => fyField({ size: props.size }))
</script>

<template>
  <label
    :for="htmlFor"
    :class="[classes.label, props.class]"
    :aria-disabled="props.disabled || undefined"
  >
    {{ props.label }}
    <FieldRequired v-if="props.required" />
  </label>
</template>
