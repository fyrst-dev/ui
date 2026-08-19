<script setup lang="ts">
/**
 * @component FieldBase
 * @description Wrapper for composing form fields with labels, controls, errors, and helper text.
 * Provides reactive context for automatic ID generation and ARIA linking.
 *
 * @prop {string} [id] - Base ID for the field. Auto-generated if not provided.
 * @prop {string|null} [error=null] - Error message. Available to Field.Error via context.
 * @prop {string|null} [message=null] - Helper text. Available to Field.Message via context.
 * @prop {any} [class] - Additional CSS classes for the wrapper.
 *
 * @example
 * <Field.Input
 *   name="email"
 *   label="Email"
 *   type="email"
 *   v-model="email"
 *   :error="emailError"
 *   message="We'll never share your email"
 * />
 */
import { provide, computed, useId } from 'vue'
import { css } from 'styled-system/css'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  id?: string
  error?: string | null
  message?: string | null
  class?: unknown
}>(), {
  id: undefined,
  error: null,
  message: null,
  class: undefined,
})

const autoId = useId()
const fieldId = computed(() => props.id || `field-${autoId}`)
const errorId = computed(() => props.error ? `${fieldId.value}-error` : null)
const messageId = computed(() => props.message ? `${fieldId.value}-message` : null)
const hasError = computed(() => !!props.error)
const errorMessage = computed(() => props.error ?? null)
const message = computed(() => props.message ?? null)

provide(fieldContextKey, {
  fieldId,
  errorId,
  messageId,
  hasError,
  errorMessage,
  message,
})

const baseStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'xs',
})
</script>

<template>
  <div :class="[baseStyles, props.class]">
    <slot />
  </div>
</template>
