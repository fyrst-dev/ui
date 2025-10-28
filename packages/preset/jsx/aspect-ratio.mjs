import { defineComponent, h, computed } from 'vue'

import { getAspectRatioStyle } from '../patterns/aspect-ratio.mjs';
import { styled } from './factory.mjs';

export const AspectRatio = /* @__PURE__ */ defineComponent({
    name: 'AspectRatio',
    inheritAttrs: false,
    props: ["ratio"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getAspectRatioStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})