import { defineComponent, h, computed } from 'vue'

import { getCqStyle } from '../patterns/cq.mjs';
import { styled } from './factory.mjs';

export const Cq = /* @__PURE__ */ defineComponent({
    name: 'Cq',
    inheritAttrs: false,
    props: ["name","type"],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getCqStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})