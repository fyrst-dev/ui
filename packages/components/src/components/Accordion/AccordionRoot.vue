<script setup lang="ts">
import { computed } from 'vue'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot as AccordionPrimitive, AccordionTrigger } from 'reka-ui'
import { accordionStyles } from './styles'
import { withCss } from '../../internal/css'
import type { AccordionCss, AccordionItem as AccordionItemData } from './types'

const props = withDefaults(defineProps<{
  type?: 'single' | 'multiple'
  orientation?: 'vertical' | 'horizontal'
  size?: 'md' | 'lg'
  items: AccordionItemData[]
  css?: AccordionCss
}>(), {
  type: 'multiple',
  orientation: 'vertical',
  size: 'md',
})

const styles = computed(() => accordionStyles.raw({
  orientation: props.orientation,
  size: props.size,
}))
</script>

<template>
  <AccordionPrimitive
    :type="type"
    :orientation="orientation"
    :class="withCss(styles.root, props.css?.root)"
  >
    <AccordionItem
      v-for="item in items"
      :key="item.id"
      :value="item.id"
      :class="withCss(styles.item, props.css?.item)"
    >
      <AccordionHeader>
        <AccordionTrigger :class="withCss(styles.trigger, props.css?.trigger)">
          <slot
            name="icon"
            :item="item"
          >
            <span
              v-if="item.icon"
              :class="[`icon icon-${item.icon}`, withCss(styles.icon, props.css?.icon)]"
              aria-hidden="true"
            />
          </slot>
          <span
            :class="withCss(styles.title, props.css?.title)"
            v-html="item.title"
          />
          <span
            :class="['icon icon-caret-down-bold', withCss(styles.indicator, props.css?.indicator)]"
            data-trigger="icon"
            aria-hidden="true"
          />
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent :class="withCss(styles.content, props.css?.content)">
        <slot
          name="content"
          :item="item"
        >
          <div
            v-html="item.content"
          />
        </slot>
      </AccordionContent>
    </AccordionItem>
  </AccordionPrimitive>
</template>
