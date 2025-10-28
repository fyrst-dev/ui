import { defineComponent, h, computed } from 'vue'

import { getGridStyle } from '../patterns/grid.mjs';
import { styled } from './factory.mjs';

export const Grid = /* @__PURE__ */ defineComponent({
    name: 'Grid',
    inheritAttrs: false,
    props: ["gap","columnGap","rowGap","columns","minChildWidth"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getGridStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})