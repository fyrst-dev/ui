<script setup lang="ts">
/**
 * @component FieldText
 * @todo Use this component as a full wrapper around Input.Text with Field.Base, Field.Label, Field.Error, and Field.Message. Implement the missing Field components.
 * @description A text input field component with label support. Provides a styled input with customizable placeholder, label, and value.
 * 
 * This component is deprecated in favor of the composition pattern:
 * ```vue
 * <Field.Base :error="error" :helper="helper">
 *   <Field.Label>{{ label }}</Field.Label>
 *   <Input.Text v-model="value" />
 *   <Field.Error />
 *   <Field.Message />
 * </Field.Base>
 * ```
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
import { onMounted } from 'vue'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import InputText from '../Input/InputText.vue'

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

// Emit deprecation warning in development
onMounted(() => {
    if (import.meta.env.DEV) {
        console.warn(
            '[FieldText] This component is deprecated. Use Input.Text with Field.Base composition instead:\n' +
            '<Field.Base>\n' +
            '  <Field.Label>{{ label }}</Field.Label>\n' +
            '  <Input.Text v-model="value" />\n' +
            '</Field.Base>'
        )
    }
})

const handleInput = (value: string) => {
    emit('update:modelValue', value)
}
</script>

<template>
    <FieldBase>
        <FieldLabel 
            v-if="label" 
            :label="label"
            :for="id" 
            :required="required"
            size="sm" 
        />
        <InputText
            :id="id"
            :name="name"
            type="text"
            :placeholder="placeholder"
            :model-value="modelValue"
            :disabled="disabled"
            :required="required"
            :autocomplete="autocomplete"
            @update:model-value="handleInput"
        />
    </FieldBase>
</template>