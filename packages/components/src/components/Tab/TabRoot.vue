<script setup lang="ts">
import { TabsList, TabsRoot } from 'reka-ui'
import { ref, watch } from 'vue'
import { tabStyles } from './styles'
import { withCss } from '../../internal/css'
import TabItem from './TabItem.vue'
import type { TabChangePayload, TabItemData, TabRootCss } from './types'

const props = withDefaults(defineProps<{
  modelValue?: string
  defaultValue?: string
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  items?: TabItemData[]
  /** Render item labels as HTML. Pass trusted strings only. An item's own `html` wins. */
  html?: boolean
  css?: TabRootCss
}>(), {
  orientation: 'horizontal',
  loop: true,
  items: () => [] as TabItemData[],
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'change': [payload: TabChangePayload]
}>()

const internalValue = ref<string | undefined>(props.modelValue ?? props.defaultValue ?? undefined)

watch(() => props.modelValue, (value) => {
  internalValue.value = value
})

const styles = tabStyles.raw()

const handleUpdate = (value: string | number) => {
  const stringValue = String(value)
  const oldValue = internalValue.value
  const oldIndex = props.items.findIndex(i => i.value === oldValue)
  const newIndex = props.items.findIndex(i => i.value === stringValue)
  const direction: 'prev' | 'next'
    = oldIndex !== -1 && newIndex !== -1 && newIndex < oldIndex ? 'prev' : 'next'
  internalValue.value = stringValue
  emit('update:modelValue', stringValue)
  emit('change', { value: stringValue, direction })
}
</script>

<template>
  <TabsRoot
    :model-value="internalValue"
    :orientation="orientation"
    @update:model-value="handleUpdate"
  >
    <TabsList
      :class="withCss(styles.root, props.css?.root)"
      :loop="loop"
    >
      <TabItem
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :label="item.label"
        :icon="item.icon"
        :disabled="item.disabled"
        :html="item.html ?? props.html"
      />
      <slot />
    </TabsList>
  </TabsRoot>
</template>
