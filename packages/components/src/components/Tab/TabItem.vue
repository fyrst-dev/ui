<script setup lang="ts">
import { TabsTrigger } from 'reka-ui'
import { fyTab } from 'styled-system/recipes'
import RichText from '../../internal/RichText.vue'
import { withCss } from '../../internal/css'
import type { TabItemCss, TabItemData } from './types'

const props = withDefaults(defineProps<TabItemData & {
  css?: TabItemCss
}>(), {
  html: false,
})

const classes = fyTab()
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="withCss(classes.item, props.css?.root)"
  >
    <slot name="icon">
      <span
        v-if="icon"
        :class="[`icon icon-${icon}`, withCss(classes.icon, props.css?.icon)]"
        aria-hidden="true"
      />
    </slot>
    <slot>
      <RichText
        :text="label"
        :html="html"
      />
    </slot>
  </TabsTrigger>
</template>
