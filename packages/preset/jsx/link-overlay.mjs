import { defineComponent, h, computed } from 'vue'

import { getLinkOverlayStyle } from '../patterns/link-overlay.mjs';
import { styled } from './factory.mjs';

export const LinkOverlay = /* @__PURE__ */ defineComponent({
    name: 'LinkOverlay',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getLinkOverlayStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.a, mergedProps, slots)
}
    }
})