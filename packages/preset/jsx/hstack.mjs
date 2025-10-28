import { defineComponent, h, computed } from 'vue'

import { getHstackStyle } from '../patterns/hstack.mjs';
import { styled } from './factory.mjs';

export const HStack = /* @__PURE__ */ defineComponent({
    name: 'HStack',
    inheritAttrs: false,
    props: ["justify","gap"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getHstackStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})