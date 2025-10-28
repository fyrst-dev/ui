import { defineComponent, h, computed } from 'vue'

import { getStackStyle } from '../patterns/stack.mjs';
import { styled } from './factory.mjs';

export const Stack = /* @__PURE__ */ defineComponent({
    name: 'Stack',
    inheritAttrs: false,
    props: ["align","justify","direction","gap"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getStackStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})