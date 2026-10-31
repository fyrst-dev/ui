<script setup lang="ts">
import { TabsTrigger } from 'reka-ui'
import { tabStyles } from './styles'
import { withCss } from '../../internal/css'
import type { TabItemCss, TabItemData } from './types'

const props = defineProps<TabItemData & {
  css?: TabItemCss
}>()

const styles = tabStyles.raw()
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="withCss(styles.item, props.css?.root)"
  >
    <slot name="icon">
      <span
        v-if="icon"
        :class="[`icon icon-${icon}`, withCss(styles.icon, props.css?.icon)]"
        aria-hidden="true"
      />
    </slot>
    <slot>
      <span
        v-html="label"
      />
    </slot>
  </TabsTrigger>
</template>
