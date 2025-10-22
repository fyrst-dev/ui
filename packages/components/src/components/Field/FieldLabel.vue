<script setup lang="ts">
/**
 * @component FieldLabel
 * @description A label component for form fields with theme-aware styling and size variants.
 * 
 * @prop {string} label - The text content of the label.
 * @prop {string} [for] - The ID of the associated form control. Links the label to its input element.
 * @prop {'sm'|'md'|'lg'} [size='md'] - The size variant of the label affecting font size and spacing.
 * @prop {boolean} [required=false] - When true, displays a visual indicator (asterisk) that the field is required.
 * @prop {boolean} [disabled=false] - When true, applies disabled styling to indicate the associated field is disabled.
 * @prop {any} [class] - Additional CSS classes to apply to the label element.
 * 
 * @example
 * <FieldLabel label="Email Address" for="email" />
 * <FieldLabel label="Password" for="password" required />
 * <FieldLabel label="Username" for="username" size="lg" />
 * <FieldLabel label="Disabled Field" for="disabled" disabled />
 */
import { css } from 'styled-system/css';
import { cva } from 'styled-system/css';
import FieldRequired from './FieldRequired.vue'

const props = withDefaults(defineProps<{
    label: string
    for?: string
    size?: 'sm' | 'md' | 'lg'
    required?: boolean
    disabled?: boolean
    class?: any
}>(), {
    for: undefined,
    size: 'md',
    required: false,
    disabled: false,
    class: undefined,
})

const labelStyles = cva({
    base: {
        display: 'block',
        fontWeight: '500',
        paddingX: 'xs',
        color: { base: 'neutral' },
        lineHeight: '1',
        userSelect: 'none',
        cursor: 'pointer',
        transition: 'color 0.2s ease-in-out',
        _disabled: {
            color: { base: 'grey.600', _light: 'grey.400' },
            cursor: 'not-allowed',
        }
    },
    variants: {
        size: {
            sm: {
                fontSize: 'sm',
            },
            md: {
                fontSize: 'md',
            },
            lg: {
                fontSize: 'lg',
            }
        },
        disabled: {
            true: {},
            false: {}
        }
    },
    defaultVariants: {
        size: 'md',
        disabled: false,
    }
})
</script>

<template>
    <label 
        :for="props.for" 
        :class="[
            labelStyles({ 
                size: props.size, 
                disabled: props.disabled 
            }),
            props.class
        ]"
        :aria-disabled="props.disabled"
    >
        {{ props.label }}
        <FieldRequired v-if="props.required" />
    </label>
</template>