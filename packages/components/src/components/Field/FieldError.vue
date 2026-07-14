<script setup lang="ts">
/**
 * @component FieldError
 * @description Error message for form fields. Reads from Field.Base context when message prop is omitted.
 */
import { inject, computed } from 'vue'
import { css } from 'styled-system/css'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  message?: string | null
  id?: string
  class?: unknown
}>(), {
  message: null,
  id: undefined,
  class: undefined,
})

const fieldContext = inject(fieldContextKey, null)

const displayMessage = computed(() => {
  return props.message || fieldContext?.errorMessage.value || null
})

const errorId = computed(() => {
  return props.id || fieldContext?.errorId.value || undefined
})

const errorStyles = css({
  display: 'block',
  paddingX: 'xs',
  fontSize: 'sm',
  fontWeight: '500',
  color: 'danger',
  wordBreak: 'break-word',
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
