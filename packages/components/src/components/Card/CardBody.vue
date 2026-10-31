<script setup lang="ts">
import { inject, computed } from 'vue'
import { fyCard } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import { CardClassesKey, type CardBodyCss } from './types'

const props = defineProps<{
  css?: CardBodyCss
}>()

const classes = inject(CardClassesKey, computed(() => fyCard()))
</script>

<template>
  <div :class="withCss(classes.body, props.css?.root)">
    <slot />
  </div>
</template>
