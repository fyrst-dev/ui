<script setup lang="ts">
/**
 * @component FieldBase
 * @description Wrapper for composing a field from a label, a control, a message, and an error.
 * Provides the field context: generated ids, ARIA links, and validity.
 *
 * @example
 * <Field.Base :error="emailError" message="We'll never share your email">
 *   <Field.Label label="Email" />
 *   <Field.Input name="email" v-model="email" />
 * </Field.Base>
 */
import { provide, computed, useId } from 'vue'
import { fieldStyles } from './styles'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  id?: string
  error?: string | null
  message?: string | null
  /** Render `message` and `error` as HTML. Pass trusted strings only. */
  html?: boolean
  class?: unknown
}>(), {
  error: null,
  message: null,
  html: false,
})

const autoId = useId()
const fieldId = computed(() => props.id || `field-${autoId}`)

provide(fieldContextKey, {
  fieldId,
  errorId: computed(() => props.error ? `${fieldId.value}-error` : null),
  messageId: computed(() => props.message ? `${fieldId.value}-message` : null),
  hasError: computed(() => !!props.error),
  errorMessage: computed(() => props.error ?? null),
  message: computed(() => props.message ?? null),
  html: computed(() => props.html),
})

const classes = fieldStyles()
</script>

<template>
  <div :class="[classes.root, props.class]">
    <slot />
  </div>
</template>
