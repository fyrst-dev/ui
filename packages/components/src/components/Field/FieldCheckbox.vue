<script setup lang="ts">
/**
 * @component FieldCheckbox
 * @description Composed checkbox field with message and error support.
 */
import { css } from 'styled-system/css'
import FieldBase from './FieldBase.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import FormCheckbox from '../Form/FormCheckbox.vue'

withDefaults(defineProps<{
  name?: string
  label?: string | null
  modelValue?: boolean | null
  id?: string
  disabled?: boolean
  required?: boolean
  message?: string | null
  error?: string | null
}>(), {
  name: undefined,
  label: null,
  modelValue: false,
  id: '',
  disabled: false,
  required: false,
  message: null,
  error: null,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const handleInput = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <FieldBase>
    <FormCheckbox
      :id="id"
      :name="name"
      :label="label"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
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
