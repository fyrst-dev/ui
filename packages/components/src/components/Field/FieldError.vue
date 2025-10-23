<script setup lang="ts">
/**
 * @component FieldError
 * @description Displays error messages for form fields with theme-aware styling. 
 * Automatically integrates with Field.Base context for ARIA linking.
 * Only renders when a message is provided.
 * 
 * @prop {string|null} [message=null] - The error message to display. Component only renders if message is provided.
 * @prop {string} [id] - The id attribute for the error element. Auto-generated from Field.Base context if not provided.
 * @prop {any} [class] - Additional CSS classes to apply to the error element.
 * 
 * @example
 * <!-- Within Field composition -->
 * <Field.Base error="Email is required">
 *   <Field.Label>Email</Field.Label>
 *   <Input.Text type="email" v-model="email" />
 *   <Field.Error />
 * </Field.Base>
 * 
 * @example
 * <!-- Standalone with explicit message -->
 * <Field.Error message="Password must be at least 8 characters" />
 * 
 * @example
 * <!-- Conditional display -->
 * <Field.Error v-if="validationError" :message="validationError" />
 */
import { inject, computed } from 'vue'
import { css } from 'styled-system/css'

const props = withDefaults(defineProps<{
    message?: string | null
    id?: string
    class?: any
}>(), {
    message: null,
    id: undefined,
    class: undefined,
})

// Inject field context if available
const fieldContext = inject<{
    fieldId: string
    errorId: string | null
    helperId: string | null
    hasError: boolean
    errorMessage?: string | null
} | null>('fieldContext', null)

// Use context error message or prop
const displayMessage = computed(() => {
    return props.message || fieldContext?.errorMessage || null
})

// Use context errorId or prop id
const errorId = computed(() => {
    return props.id || fieldContext?.errorId || undefined
})

const errorStyles = css({
    display: 'block',
    paddingX: 'xs',
    fontSize: 'sm',
    fontWeight: '500',
    color: 'danger',
    wordBreak: 'break-word'
})
</script>

<template>
    <span 
        v-if="displayMessage"
        :id="errorId"
        :class="[errorStyles, props.class]"
        role="alert"
        aria-live="polite"
        v-html="displayMessage"
    />
</template>
