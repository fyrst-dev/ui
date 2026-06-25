<script setup lang="ts">
import { TabsTrigger } from 'reka-ui'
import { computed, inject } from 'vue'
import { css } from 'styled-system/css'
import { tabStyles } from './styles'
import { TabContextKey, type TabItemData } from './types'

const props = defineProps<TabItemData>()

const context = inject(TabContextKey)

const isActive = computed(() => context?.modelValue.value === props.value)

const styles = computed(() =>
  tabStyles.raw({ state: isActive.value ? 'active' : 'inactive' }),
)
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="css(styles.item)"
  >
    <slot name="icon"><span v-if="icon" :class="`icon icon-${icon}`" /></slot>
    <slot><span v-html="label"/></slot>
  </TabsTrigger>
</template>
