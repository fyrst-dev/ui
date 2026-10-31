<script setup lang="ts">
import { computed } from 'vue'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot as AccordionPrimitive, AccordionTrigger } from 'reka-ui'
import { accordionStyles } from './styles'
import RichText from '../../internal/RichText.vue'
import { withCss } from '../../internal/css'
import type { AccordionCss, AccordionItem as AccordionItemData } from './types'

const props = withDefaults(defineProps<{
  type?: 'single' | 'multiple'
  orientation?: 'vertical' | 'horizontal'
  size?: 'md' | 'lg'
  items: AccordionItemData[]
  /** Render item `title` and `content` as HTML. Pass trusted strings only. */
  html?: boolean
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
          <RichText
            :class="withCss(styles.title, props.css?.title)"
            :text="item.title"
            :html="html"
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
          <RichText
            as="div"
            :text="item.content"
            :html="html"
          />
        </slot>
      </AccordionContent>
    </AccordionItem>
  </AccordionPrimitive>
</template>
