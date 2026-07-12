<script setup lang="ts">
/**
 * @component FieldTextarea
 * @description Composed textarea field with label, message, and error support.
 */
import { computed } from 'vue'
import { css } from 'styled-system/css'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import FormTextarea from '../Form/FormTextarea.vue'

const props = withDefaults(defineProps<{
  name?: string
  label?: string | null
  placeholder?: string | null
  modelValue?: string | null
  id?: string
  disabled?: boolean
  required?: boolean
  rows?: number
  message?: string | null
  error?: string | null
}>(), {
  name: undefined,
  label: null,
  placeholder: null,
  modelValue: null,
  id: '',
  disabled: false,
  required: false,
  rows: 5,
  message: null,
  error: null,
})

const isValid = computed(() => {
  if (props.error) return false
  return 'none' as const
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

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

    <FormTextarea
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :valid="isValid"
      @update:model-value="handleInput"
    />

    <div
      v-if="message || error"
      :class="css({
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 'md',
      })"
    >
      <FieldMessage
        v-if="message"
        :message="message"
      />

      <FieldError
        v-if="error"
        :message="error"
      />
    </div>
  </FieldBase>
</template>
