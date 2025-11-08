import { defineComponent, h, computed } from 'vue'

import { getDividerStyle } from '../patterns/divider.mjs';
import { styled } from './factory.mjs';

export const Divider = /* @__PURE__ */ defineComponent({
    name: 'Divider',
    inheritAttrs: false,
    props: ["orientation","thickness","color"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getDividerStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})