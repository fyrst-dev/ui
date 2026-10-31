<script setup lang="ts">
import { inject, computed } from 'vue'
import { cardStyles } from './styles'
import RichText from '../../internal/RichText.vue'
import { withCss } from '../../internal/css'
import { CardStylesKey, type CardHeaderCss } from './types'

export interface CardHeaderProps {
  title?: string | null
  subtitle?: string | null
  /** Render `title` and `subtitle` as HTML. Pass trusted strings only. */
  html?: boolean
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
          <RichText
            v-if="title"
            as="div"
            :class="withCss(styles.headerTitle, props.css?.title)"
            :text="title"
            :html="html"
          />
        </slot>
        <slot name="subtitle">
          <RichText
            v-if="subtitle"
            as="div"
            :class="withCss(styles.headerSubtitle, props.css?.subtitle)"
            :text="subtitle"
            :html="html"
          />
        </slot>
      </div>
    </slot>
  </header>
</template>
