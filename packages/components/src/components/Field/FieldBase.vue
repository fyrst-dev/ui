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
 *   <Input.Text type="email" v-model="email" />
 * </Field.Base>
 * 
 * @example
 * <!-- With error and helper -->
 * <Field.Base 
 *   :error="emailError" 
 *   helper="We'll never share your email"
 * >
 *   <Field.Label for="email">Email</Field.Label>
 *   <Input.Text id="email" type="email" v-model="email" />
 *   <Field.Error />
 *   <Field.Helper />
 * </Field.Base>
 * 
 * @example
 * <!-- Full composition with all elements -->
 * <Field.Base id="phone-field" error="Invalid phone number">
 *   <Field.Label for="phone">Phone Number</Field.Label>
 *   <Input.Text id="phone" type="tel" v-model="phone" />
 *   <Field.Error />
 * </Field.Base>
 */
import { provide, computed } from 'vue'
import { css } from '../../../styled-system/css'

const props = withDefaults(defineProps<{
    id?: string
    error?: string | null
    helper?: string | null
    class?: any
}>(), {
    id: undefined,
    error: null,
    helper: null,
    class: undefined,
})

// Generate unique IDs for ARIA relationships
const generateId = () => {
    // Use crypto.randomUUID if available, otherwise fallback
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return `field-${crypto.randomUUID()}`
    }
    // Fallback for environments without crypto.randomUUID
    return `field-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

const fieldId = computed(() => props.id || generateId())
const errorId = computed(() => props.error ? `${fieldId.value}-error` : null)
const helperId = computed(() => props.helper ? `${fieldId.value}-helper` : null)
const hasError = computed(() => !!props.error)

// Provide field context for child components
provide('fieldContext', {
    fieldId: fieldId.value,
    errorId: errorId.value,
    helperId: helperId.value,
    hasError: hasError.value,
    errorMessage: props.error,
    helperMessage: props.helper,
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