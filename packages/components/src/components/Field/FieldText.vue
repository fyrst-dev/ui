<script setup lang="ts">
/**
 * @component FieldText
 * @description A text input field component with label support. Provides a styled input with customizable placeholder, label, and value.
 * 
 * @prop {string|null} [label=null] - The label text to display above the input field.
 * @prop {string|null} [placeholder=null] - Placeholder text shown when the input is empty.
 * @prop {string|null} [modelValue=null] - The v-model value for two-way binding.
 * @prop {string} [name=''] - The name attribute for the input element.
 * @prop {string} [id=''] - The id attribute for the input element.
 * @prop {boolean} [disabled=false] - When true, disables the input field.
 * @prop {boolean} [required=false] - When true, marks the field as required.
 * @prop {string|null} [autocomplete=null] - The autocomplete attribute for the input.
 * 
 * @example
 * <FieldText label="Email" placeholder="Enter your email" v-model="email" />
 * <FieldText placeholder="Search..." />
 * <FieldText label="Username" name="username" required />
 */
import { sva } from '../../../styled-system/css'

const props = withDefaults(defineProps<{
    label?: string | null
    placeholder?: string | null
    modelValue?: string | null
    name?: string
    id?: string
    disabled?: boolean
    required?: boolean
    autocomplete?: string | null
}>(), {
    label: null,
    placeholder: null,
    modelValue: null,
    name: '',
    id: '',
    disabled: false,
    required: false,
    autocomplete: null,
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const fieldStyle = sva({
    slots: ['root', 'label', 'input'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            gap: 'xs',
            width: 'full',
        },
        label: {
            display: 'flex',
            alignItems: 'center',
            gap: 'xs',
            paddingX: 'xs',
            fontSize: 'sm',
            fontWeight: 'medium',
            lineHeight: 'none',
            color: 'neutral',
        },
        input: {
            display: 'flex',
            alignItems: 'start',
            width: 'full',
            minWidth: '200px',
            paddingX: 'lg',
            paddingY: 'sm',
            backgroundColor: 'grey.black',
            border: '1px solid',
            borderColor: 'primary',
            borderRadius: 'lg',
            fontSize: 'md',
            fontWeight: 'medium',
            lineHeight: '1.5',
            color: 'neutral',
            outline: 'none',
            transition: 'all 300ms',
            _placeholder: {
                color: 'lucid.600',
            },
            _focus: {
                borderColor: 'primary',
            },
            _disabled: {
                opacity: '0.5',
                cursor: 'not-allowed',
            },
            _light: {
                backgroundColor: 'white',
                borderColor: 'green.day',
                color: 'grey.night',
                _focus: {
                    borderColor: 'green.day',
                },
            }
        }
    }
})

const classes = fieldStyle()
</script>

<template>
    <div :class="classes.root">
        <label 
            v-if="label" 
            :for="id"
            :class="classes.label"
        >
            {{ label }}
        </label>
        <input
            :id="id"
            :name="name"
            :class="classes.input"
            type="text"
            :placeholder="placeholder || undefined"
            :value="modelValue || ''"
            :disabled="disabled"
            :required="required"
            :autocomplete="autocomplete || undefined"
            @input="handleInput"
        />
    </div>
</template>