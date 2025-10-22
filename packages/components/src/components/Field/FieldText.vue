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
import FieldLabel from './FieldLabel.vue'

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
            gap: 'xs'
        },
        input: {
            display: 'flex',
            alignItems: 'start',
            minWidth: '200px',
            paddingX: 'lg',
            paddingY: 'sm',
            backgroundColor: 'grey.black',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'grey.dusk',
            borderRadius: 'lg',
            outlineWidth: '3px',
            outlineColor: 'transparent',
            outlineOffset: '0px',
            outlineStyle: 'solid',
            fontSize: 'md',
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
        }
    }
})

const classes = fieldStyle()
</script>

<template>
    <div :class="classes.root">
        <FieldLabel 
            v-if="label" 
            :label="label"
            :for="id" 
            :required="required"
            size="sm" />
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