<template>
  <header
    :class="css(styles.header)"
  >
    <slot name="icon" />
    <slot>
      <div
        :class="css(styles.headerBody)"
      >
        <slot name="title">
          <div
            v-if="title"
            :class="css(styles.headerTitle)"
            v-html="title"
          />
        </slot>
        <slot name="subtitle">
          <div
            v-if="subtitle"
            :class="css(styles.headerSubtitle)"
            v-html="subtitle"
          />
        </slot>
      </div>
    </slot>
  </header>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { css } from 'styled-system/css'
import { cardStyles, CardStylesKey } from './styles'

export interface CardHeaderProps {
  title?: string
  subtitle?: string
}

defineProps<CardHeaderProps>()

const styles = inject(
  CardStylesKey,
  computed(() => cardStyles.raw({})),
)
</script>
