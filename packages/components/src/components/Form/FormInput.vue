<script setup lang="ts">
/**
 * @component FormInput
 * @description A standalone text input component supporting text, email, and tel input types. 
 * Can be used independently or within a Field.Base composition for automatic ARIA linking.
 * Provides full v-model support with customizable styling and size variants.
 * 
 * @prop {'text'|'email'|'tel'} [type='text'] - The input type determining keyboard and validation behavior.
 * @prop {string|null} [modelValue=null] - The v-model value for two-way binding.
 * @prop {string} [id=''] - The id attribute for the input element. Auto-linked via Field context if used in composition.
 * @prop {string} [name=''] - The name attribute for form submission.
 * @prop {string|null} [placeholder=null] - Placeholder text shown when the input is empty.
 * @prop {boolean} [disabled=false] - When true, disables the input field.
 * @prop {boolean} [required=false] - When true, marks the field as required for form validation.
 * @prop {string|null} [autocomplete=null] - The autocomplete attribute for browser autofill behavior.
 * @prop {'sm'|'md'|'lg'} [size='md'] - Size variant affecting padding and font size.
 * @prop {boolean|'none'} [valid='none'] - Validation state: true (valid), false (invalid), or 'none' (no status).
 * @prop {any} [class] - Additional CSS classes to apply to the input element.
 * 
 * @example
 * <!-- Standalone usage -->
 * <Form.Input type="email" v-model="email" placeholder="Enter email" />
 * 
 * @example
 * <!-- Within Field composition -->
 * <Field.Base>
 *   <Field.Label for="phone">Phone Number</Field.Label>
 *   <Form.Input id="phone" type="tel" v-model="phone" />
 * </Field.Base>
 * 
 * @example
 * <!-- With size variant -->
 * <Form.Input type="text" size="lg" v-model="search" placeholder="Search..." />
 */
import { computed, inject } from 'vue'
import { cva } from 'styled-system/css'

const props = withDefaults(defineProps<{
    type?: 'text' | 'email' | 'tel'
    modelValue?: string | null
    id?: string
    name?: string
    placeholder?: string | null
    disabled?: boolean
    required?: boolean
    autocomplete?: string | null
    size?: 'sm' | 'md' | 'lg'
    valid?: true | false | 'none'
    class?: any
}>(), {
    type: 'text',
    modelValue: null,
    id: '',
    name: '',
    placeholder: null,
    disabled: false,
    required: false,
    autocomplete: null,
    size: 'md',
    valid: 'none',
    class: undefined,
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

// Inject field context if available (optional - works standalone)
const fieldContext = inject<{
    fieldId: string
    errorId: string | null
    helperId: string | null
    hasError: boolean
} | null>('fieldContext', null)

// Compute aria-describedby from context or props
const ariaDescribedBy = computed(() => {
    if (!fieldContext) return undefined
    
    const ids: string[] = []
    if (fieldContext.errorId) ids.push(fieldContext.errorId)
    if (fieldContext.helperId) ids.push(fieldContext.helperId)
    
    return ids.length > 0 ? ids.join(' ') : undefined
})

// Use context error state or explicit valid prop
const isInvalid = computed(() => {
    // If valid is explicitly set to true or false, use that
    if (props.valid === true) return false
    if (props.valid === false) return true
    
    // Otherwise, fall back to fieldContext error state
    return fieldContext?.hasError ?? false
})

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const inputStyles = cva({
    base: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minWidth: '200px',
        backgroundColor: 'grey.black',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'grey.dusk',
        borderRadius: 'lg',
        outlineWidth: '3px',
        outlineColor: 'transparent',
        outlineOffset: '0px',
        outlineStyle: 'solid',
        fontWeight: '450',
        lineHeight: '1.5',
        color: 'neutral',
        transition: 'all 300ms',
        _placeholder: {
            color: 'lucid.600',
        },
        _hover: {
            borderColor: 'grey.400',
        },
        _focus: {
            outlineColor: 'primary/50',
            borderColor: 'primary !important',
        },
        _disabled: {
            opacity: '0.5',
            cursor: 'not-allowed',
        },
        _light: {
            backgroundColor: 'white',
            borderColor: 'grey.200',
            color: 'grey.night',
            _hover: {
                borderColor: 'grey.300',
            },
        }
    },
    variants: {
        size: {
            sm: {
                paddingX: 'md',
                paddingY: 'xs',
                fontSize: 'sm',
            },
            md: {
                paddingX: 'lg',
                paddingY: 'sm',
                fontSize: 'md',
            },
            lg: {
                paddingX: 'xl',
                paddingY: 'md',
                fontSize: 'lg',
            }
        },
        valid: {
            true: {
                borderColor: 'success !important',
                _focus: {
                    borderColor: 'success !important',
                    outlineColor: 'success/50 !important',
                }
            },
            false: {
                borderColor: 'danger !important',
                _focus: {
                    borderColor: 'danger !important',
                    outlineColor: 'danger/50 !important',
                }
            },
            none: {}
        }
    },
    defaultVariants: {
        size: 'md',
        valid: 'none',
    }
})
</script>

<template>
    <input
        :id="id"
        :name="name"
        :class="[inputStyles({ size, valid: props.valid }), props.class]"
        :type="type"
        :placeholder="placeholder || undefined"
        :value="modelValue || ''"
        :disabled="disabled"
        :required="required"
        :autocomplete="autocomplete || undefined"
        :aria-invalid="isInvalid"
        :aria-describedby="ariaDescribedBy"
        @input="handleInput"
    />
</template>
