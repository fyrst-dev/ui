<script setup lang="ts">
import { inject, computed } from 'vue'
import { cardStyles } from './styles'
import { withCss } from '../../internal/css'
import { CardStylesKey, type CardHeaderCss } from './types'

export interface CardHeaderProps {
  title?: string | null
  subtitle?: string | null
  css?: CardHeaderCss
}

const props = defineProps<CardHeaderProps>()

const styles = inject(CardStylesKey, computed(() => cardStyles.raw()))
</script>

<template>
  <header :class="withCss(styles.header, props.css?.root)">
    <slot name="icon" />

    <slot>
      <div :class="withCss(styles.headerBody, props.css?.body)">
        <slot name="title">
          <div
            v-if="title"
            :class="withCss(styles.headerTitle, props.css?.title)"
            v-html="title"
          />
        </slot>
        <slot name="subtitle">
          <div
            v-if="subtitle"
            :class="withCss(styles.headerSubtitle, props.css?.subtitle)"
            v-html="subtitle"
          />
        </slot>
      </div>
    </slot>
  </header>
</template>
