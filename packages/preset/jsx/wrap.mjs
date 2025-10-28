import { defineComponent, h, computed } from 'vue'

import { getWrapStyle } from '../patterns/wrap.mjs';
import { styled } from './factory.mjs';

export const Wrap = /* @__PURE__ */ defineComponent({
    name: 'Wrap',
    inheritAttrs: false,
    props: ["gap","rowGap","columnGap","align","justify"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getWrapStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})