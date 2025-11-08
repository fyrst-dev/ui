import { defineComponent, h, computed } from 'vue'

import { getFlexStyle } from '../patterns/flex.mjs';
import { styled } from './factory.mjs';

export const Flex = /* @__PURE__ */ defineComponent({
    name: 'Flex',
    inheritAttrs: false,
    props: ["align","justify","direction","wrap","basis","grow","shrink"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getFlexStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})