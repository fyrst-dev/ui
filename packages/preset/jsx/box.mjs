import { defineComponent, h, computed } from 'vue'

import { getBoxStyle } from '../patterns/box.mjs';
import { styled } from './factory.mjs';

export const Box = /* @__PURE__ */ defineComponent({
    name: 'Box',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getBoxStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})