<script setup lang="ts">
/* eslint-disable vue/no-v-html -- author-controlled rich text */
import { TabsTrigger } from 'reka-ui'
import { computed } from 'vue'
import { css } from 'styled-system/css'
import { tabStyles } from './styles'
import type { TabItemData } from './types'

defineProps<TabItemData>()

const styles = computed(() =>
  tabStyles.raw({}),
)
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="css(styles.item)"
  >
    <slot name="icon">
      <span
        v-if="icon"
        :class="[`icon icon-${icon}`, css(styles.icon)]"
      />
    </slot>
    <slot><span v-html="label" /></slot>
  </TabsTrigger>
</template>
