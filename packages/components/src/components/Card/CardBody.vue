<script setup lang="ts">
import { inject, computed } from 'vue'
import { cardStyles } from './styles'
import { withCss } from '../../internal/css'
import { CardStylesKey, type CardBodyCss } from './types'

const props = defineProps<{
  css?: CardBodyCss
}>()

const styles = inject(CardStylesKey, computed(() => cardStyles.raw()))
</script>

<template>
  <div :class="withCss(styles.body, props.css?.root)">
    <slot />
  </div>
</template>
