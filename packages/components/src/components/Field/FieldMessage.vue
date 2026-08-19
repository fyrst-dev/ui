<script setup lang="ts">
/* eslint-disable vue/no-v-html -- author-controlled rich text */
/**
 * @component FieldMessage
 * @description Helper/hint text for form fields. Reads from Field.Base context when message prop is omitted.
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
  return props.message || fieldContext?.message.value || null
})

const messageId = computed(() => {
  return props.id || fieldContext?.messageId.value || undefined
})

const messageStyles = css({
  display: 'block',
  paddingX: 'xs',
  fontSize: 'sm',
  fontWeight: '400',
  color: 'grey.300',
  wordBreak: 'break-word',
  _light: {
    color: 'grey.500',
  },
})
</script>

<template>
  <span
    v-if="displayMessage"
    :id="messageId"
    :class="[messageStyles, props.class]"
    v-html="displayMessage"
  />
</template>
