<script setup lang="ts">
import { computed } from 'vue'
import { fyHeroLead } from 'styled-system/recipes'
import RichText from '../../internal/RichText.vue'
import { withCss, type CssMap } from '../../internal/css'

export type HeroLeadCss = CssMap<'root' | 'headline' | 'description'>

export interface Props {
  headline?: string
  headlineTag?: string
  description?: string
  /** Render `headline` and `description` as HTML. Pass trusted strings only. */
  html?: boolean
  alignItems?: 'start' | 'center' | 'end'
  alignSelf?: 'start' | 'center' | 'end'
  size?: 'sm' | 'md' | 'lg'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  css?: HeroLeadCss
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: 'h1',
  alignItems: 'start',
  alignSelf: 'start',
  size: 'md',
  gap: 'md',
})

const classes = computed(() => fyHeroLead({
  alignItems: props.alignItems,
  alignSelf: props.alignSelf,
  size: props.size,
  gap: props.gap,
}))
</script>

<template>
  <div :class="withCss(classes.root, props.css?.root)">
    <slot name="prepend" />
    <slot name="headline">
      <component
        :is="headlineTag"
        v-if="headline"
        :class="withCss(classes.headline, props.css?.headline)"
      >
        <RichText
          :text="headline"
          :html="html"
        />
      </component>
    </slot>
    <slot name="description">
      <RichText
        v-if="description"
        as="div"
        :class="withCss(classes.description, props.css?.description)"
        :text="description"
        :html="html"
      />
    </slot>
    <slot name="actions" />
    <slot name="append" />
  </div>
</template>
