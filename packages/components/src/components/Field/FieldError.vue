<script setup lang="ts">
/**
 * @component FieldError
 * @description Error text. Reads the Field.Base context when `message` is omitted.
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

const displayMessage = computed(() => props.message || fieldContext?.errorMessage.value || null)
const errorId = computed(() => props.id || fieldContext?.errorId.value || undefined)

const classes = fieldStyles()
</script>

<template>
  <span
    v-if="displayMessage"
    :id="errorId"
    :class="[classes.error, props.class]"
    role="alert"
    v-html="displayMessage"
  />
</template>
