<script setup lang="ts">
import { computed } from 'vue'
import { css } from 'styled-system/css'
import { pricingCardStyles } from './styles'

export interface Props {
  title: string
  titleTag?: string
  subtitle?: string
  price: string
  features?: string[]
  badge?: boolean
  badgeLabel?: string
  highlight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  titleTag: 'div',
  subtitle: undefined,
  features: () => [],
  badge: false,
  badgeLabel: 'Featured',
  highlight: false,
})

const styles = computed(() =>
  pricingCardStyles.raw({ highlight: props.highlight }),
)

const hasFeatures = computed(() => props.features.length > 0)
</script>

<template>
  <article :class="css(styles.root)">
    <slot name="badge">
      <div
        v-if="props.highlight || props.badge"
        :class="css(styles.badge)"
        v-html="props.badgeLabel" />
    </slot>
    <slot name="header">
      <header :class="css(styles.header)">
        <slot name="package">
          <div>
            <component
              :is="props.titleTag"
              :class="css(styles.title)"
            >
              {{ props.title }}
            </component>
            <p
              v-if="props.subtitle"
              :class="css(styles.subtitle)"
            >
              {{ props.subtitle }}
            </p>
          </div>
        </slot>

        <slot name="pricing">
          <div :class="css(styles.pricing)">
            <slot name="price">
              <span :class="css(styles.price)">
                {{ props.price }}
              </span>
            </slot>
            <slot name="pricing-addon"/>
          </div>
        </slot>
      </header>
    </slot>

    <slot name="features">
      <ul
        v-if="hasFeatures"
        :class="css(styles.features)"
      >
        <li
          v-for="(feature, index) in props.features"
          :key="index"
          :class="css(styles.feature)"
        >
          <slot
            name="feature"
            :feature="feature"
            :index="index"
          >
            <span :class="css(styles.featureIcon)">
              <span class="icon icon-check-circle-bold" />
            </span>
            <span>{{ feature }}</span>
          </slot>
        </li>
      </ul>
    </slot>
  </article>
</template>
