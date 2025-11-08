import { defineComponent, h, computed } from 'vue'

import { getFloatStyle } from '../patterns/float.mjs';
import { styled } from './factory.mjs';

export const Float = /* @__PURE__ */ defineComponent({
    name: 'Float',
    inheritAttrs: false,
    props: ["offsetX","offsetY","offset","placement"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getFloatStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})