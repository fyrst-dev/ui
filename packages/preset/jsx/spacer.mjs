import { defineComponent, h, computed } from 'vue'

import { getSpacerStyle } from '../patterns/spacer.mjs';
import { styled } from './factory.mjs';

export const Spacer = /* @__PURE__ */ defineComponent({
    name: 'Spacer',
    inheritAttrs: false,
    props: ["size"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getSpacerStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})