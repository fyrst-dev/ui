<script setup lang="ts">
/**
 * @component FieldBase
 * @description A wrapper component for composing form fields with labels, inputs, errors, and helper text.
 * Provides context to child components for automatic ID generation and ARIA linking.
 * Handles layout and state management for field composition pattern.
 * 
 * @prop {string} [id] - Base ID for the field. Auto-generated if not provided. Used for ARIA relationships.
 * @prop {string|null} [error=null] - Error message to display. Automatically passed to Field.Error via context.
 * @prop {string|null} [helper=null] - Helper text to display. Automatically passed to Field.Helper via context.
 * @prop {any} [class] - Additional CSS classes to apply to the wrapper element.
 * 
 * @example
 * <!-- Basic composition -->
 * <Field.Base>
 *   <Field.Label>Email Address</Field.Label>
 *   <Form.Input type="email" v-model="email" />
 * </Field.Base>
 * 
 * @example
 * <!-- With error and message -->
 * <Field.Base 
 *   :error="emailError" 
 *   message="We'll never share your email"
 * >
 *   <Field.Label for="email">Email</Field.Label>
 *   <Form.Input id="email" type="email" v-model="email" />
 *   <Field.Error />
 *   <Field.Message />
 * </Field.Base>
 * 
 * @example
 * <!-- Full composition with all elements -->
 * <Field.Base id="phone-field" error="Invalid phone number">
 *   <Field.Label for="phone">Phone Number</Field.Label>
 *   <Form.Input id="phone" type="tel" v-model="phone" />
 *   <Field.Error />
 * </Field.Base>
 */
import { provide, computed } from 'vue'
// @ts-ignore - useId is available in Vue 3.3+
import { useId } from 'vue'
import { css } from 'styled-system/css'

const props = withDefaults(defineProps<{
    id?: string
    error?: string | null
    message?: string | null
    class?: any
}>(), {
    id: undefined,
    error: null,
    message: null,
    class: undefined,
})

// Use Vue's useId() for SSR-safe ID generation
// This ensures consistent IDs across server rendering and client hydration
const autoId = useId()
const fieldId = computed(() => props.id || `field-${autoId}`)
const errorId = computed(() => props.error ? `${fieldId.value}-error` : null)
const messageId = computed(() => props.message ? `${fieldId.value}-message` : null)
const hasError = computed(() => !!props.error)

// Provide field context for child components
provide('fieldContext', {
    fieldId: fieldId.value,
    errorId: errorId.value,
    messageId: messageId.value,
    hasError: hasError.value,
    errorMessage: props.error,
    message: props.message,
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