<script setup lang="ts">
import { fieldStyles } from './styles'

const classes = fieldStyles()
</script>

<template>
  <span
    :class="classes.required"
    aria-hidden="true"
  >*</span>
</template>
