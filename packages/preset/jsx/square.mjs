import { defineComponent, h, computed } from 'vue'

import { getSquareStyle } from '../patterns/square.mjs';
import { styled } from './factory.mjs';

export const Square = /* @__PURE__ */ defineComponent({
    name: 'Square',
    inheritAttrs: false,
    props: ["size"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getSquareStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})