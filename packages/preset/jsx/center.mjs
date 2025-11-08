import { defineComponent, h, computed } from 'vue'

import { getCenterStyle } from '../patterns/center.mjs';
import { styled } from './factory.mjs';

export const Center = /* @__PURE__ */ defineComponent({
    name: 'Center',
    inheritAttrs: false,
    props: ["inline"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getCenterStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})