<script setup lang="ts">
/**
 * @component FieldMessage
 * @description Helper text. Reads the Field.Base context when `message` is omitted.
 * Rendered as HTML.
 */
import { inject, computed } from 'vue'
import { fieldStyles } from './styles'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  message?: string | null
  id?: string
  class?: unknown
}>(), {
  message: null,
})

const fieldContext = inject(fieldContextKey, null)

const displayMessage = computed(() => props.message || fieldContext?.message.value || null)
const messageId = computed(() => props.id || fieldContext?.messageId.value || undefined)

const classes = fieldStyles()
</script>

<template>
  <span
    v-if="displayMessage"
    :id="messageId"
    :class="[classes.message, props.class]"
    v-html="displayMessage"
  />
</template>
