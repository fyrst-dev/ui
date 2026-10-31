<script setup lang="ts">
import { fyField } from 'styled-system/recipes'

const classes = fyField()
</script>

<template>
  <span
    :class="classes.required"
    aria-hidden="true"
  >*</span>
</template>
