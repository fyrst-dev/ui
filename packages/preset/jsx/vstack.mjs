import { defineComponent, h, computed } from 'vue'

import { getVstackStyle } from '../patterns/vstack.mjs';
import { styled } from './factory.mjs';

export const VStack = /* @__PURE__ */ defineComponent({
    name: 'VStack',
    inheritAttrs: false,
    props: ["justify","gap"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getVstackStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})