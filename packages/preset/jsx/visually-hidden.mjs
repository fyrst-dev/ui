import { defineComponent, h, computed } from 'vue'

import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs';
import { styled } from './factory.mjs';

export const VisuallyHidden = /* @__PURE__ */ defineComponent({
    name: 'VisuallyHidden',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getVisuallyHiddenStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})