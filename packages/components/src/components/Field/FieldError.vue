<script setup lang="ts">
/**
 * @component FieldError
 * @description Error text. Reads the Field.Base context when `message` is omitted.
 * Renders text unless `html` is set (here or on Field.Base).
 */
import { inject, computed } from 'vue'
import { fyField } from 'styled-system/recipes'
import RichText from '../../internal/RichText.vue'
import { fieldContextKey } from '../../internal/controls/context'

const props = withDefaults(defineProps<{
  message?: string | null
  id?: string
  /** Render the error as HTML. Pass trusted strings only. */
  html?: boolean
  class?: unknown
}>(), {
  message: null,
  html: undefined,
})

const fieldContext = inject(fieldContextKey, null)

const displayMessage = computed(() => props.message || fieldContext?.errorMessage.value || null)
const errorId = computed(() => props.id || fieldContext?.errorId.value || undefined)
const isHtml = computed(() => props.html ?? fieldContext?.html.value ?? false)

const classes = fyField()
</script>

<template>
  <RichText
    v-if="displayMessage"
    :id="errorId"
    :class="[classes.error, props.class]"
    :text="displayMessage"
    :html="isHtml"
    role="alert"
  />
</template>
