<script setup lang="ts">
/**
 * Internal: message and error row under a composed field's control.
 * Renders nothing when the field has neither.
 */
import { inject } from 'vue'
import { fyField } from 'styled-system/recipes'
import FieldMessage from './FieldMessage.vue'
import FieldError from './FieldError.vue'
import { fieldContextKey } from '../../internal/controls/context'

const fieldContext = inject(fieldContextKey, null)

const classes = fyField()
</script>

<template>
  <div
    v-if="fieldContext?.message.value || fieldContext?.errorMessage.value"
    :class="classes.footer"
  >
    <FieldMessage />
    <FieldError />
  </div>
</template>
