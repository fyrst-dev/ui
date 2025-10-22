<script setup lang="ts">
/**
 * @component FieldHelper
 * @description Displays helper/hint text for form fields with theme-aware styling.
 * Automatically integrates with Field.Base context for ARIA linking.
 * Provides supplementary information to guide users.
 * 
 * @prop {string|null} [message=null] - The helper text to display. Component only renders if message is provided.
 * @prop {string} [id] - The id attribute for the helper element. Auto-generated from Field.Base context if not provided.
 * @prop {any} [class] - Additional CSS classes to apply to the helper element.
 * 
 * @example
 * <!-- Within Field composition -->
 * <Field.Base helper="We'll never share your email">
 *   <Field.Label>Email</Field.Label>
 *   <Input.Text type="email" v-model="email" />
 *   <Field.Message />
 * </Field.Base>
 * 
 * @example
 * <!-- Standalone with explicit message -->
 * <Field.Message message="Password must contain at least 8 characters" />
 * 
 * @example
 * <!-- Conditional display -->
 * <Field.Message v-if="showHint" :message="hintText" />
 */
import { inject, computed } from 'vue'
import { css } from '../../../styled-system/css'

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
    helperMessage?: string | null
} | null>('fieldContext', null)

// Use context helper message or prop
const displayMessage = computed(() => {
    return props.message || fieldContext?.helperMessage || null
})

// Use context helperId or prop id
const helperId = computed(() => {
    return props.id || fieldContext?.helperId || undefined
})

const helperStyles = css({
    display: 'block',
    paddingX: 'xs',
    fontSize: 'sm',
    fontWeight: '400',
    color: 'lucid.600',
    lineHeight: '1.4',
    marginTop: '2xs',
    _light: {
        color: 'grey.500',
    }
})
</script>

<template>
    <span 
        v-if="displayMessage"
        :id="helperId"
        :class="[helperStyles, props.class]"
    >
        {{ displayMessage }}
    </span>
</template>
