<script setup lang="ts">
/**
 * @component FieldUrl
 * @description Composed URL field with protocol toggle, label, message, and error support.
 */
import { computed } from 'vue'
import FieldBase from './FieldBase.vue'
import FieldLabel from './FieldLabel.vue'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldFooterStyles } from './fieldFooterStyles'
import ControlUrl from '../../internal/controls/ControlUrl.vue'
import type { ControlSize } from '../../internal/controls/types'
import type { UrlCss } from '../../internal/controls/urlStyles'
import type { UrlProtocol } from '../../internal/controls/urlUtils'

const props = withDefaults(defineProps<{
  name?: string
  label?: string | null
  placeholder?: string | null
  modelValue?: string | null
  id?: string
  disabled?: boolean
  required?: boolean
  autocomplete?: string | null
  size?: ControlSize
  message?: string | null
  error?: string | null
  defaultProtocol?: UrlProtocol
  css?: UrlCss
  class?: unknown
}>(), {
  name: undefined,
  label: null,
  placeholder: null,
  modelValue: null,
  id: '',
  disabled: false,
  required: false,
  autocomplete: 'url',
  size: 'md',
  message: null,
  error: null,
  defaultProtocol: 'https',
  css: undefined,
  class: undefined,
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
  <FieldBase
    :id="id || undefined"
    :error="error"
    :message="message"
  >
    <FieldLabel
      v-if="label"
      :label="label"
      :required="required"
      size="sm"
    />

    <ControlUrl
      :name="name"
      :placeholder="placeholder"
      :model-value="modelValue"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      :size="size"
      :valid="isValid"
      :default-protocol="defaultProtocol"
      :css="props.css"
      :class="props.class"
      @update:model-value="handleInput"
    />

    <div
      v-if="message || error"
      :class="fieldFooterStyles"
    >
      <FieldMessage />
      <FieldError />
    </div>
  </FieldBase>
</template>
