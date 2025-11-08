import { defineComponent, h, computed } from 'vue'

import { getGridItemStyle } from '../patterns/grid-item.mjs';
import { styled } from './factory.mjs';

export const GridItem = /* @__PURE__ */ defineComponent({
    name: 'GridItem',
    inheritAttrs: false,
    props: ["colSpan","rowSpan","colStart","rowStart","colEnd","rowEnd"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getGridItemStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})