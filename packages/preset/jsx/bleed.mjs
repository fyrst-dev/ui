import { defineComponent, h, computed } from 'vue'

import { getBleedStyle } from '../patterns/bleed.mjs';
import { styled } from './factory.mjs';

export const Bleed = /* @__PURE__ */ defineComponent({
    name: 'Bleed',
    inheritAttrs: false,
    props: ["inline","block"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getBleedStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})