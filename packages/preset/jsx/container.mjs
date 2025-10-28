import { defineComponent, h, computed } from 'vue'

import { getContainerStyle } from '../patterns/container.mjs';
import { styled } from './factory.mjs';

export const Container = /* @__PURE__ */ defineComponent({
    name: 'Container',
    inheritAttrs: false,
    props: [],
    setup(props, { attrs, slots }) {
      const styleProps = computed(() => getContainerStyle(props))

return () => {
  const mergedProps = { ...styleProps.value, ...attrs }
  return h(styled.div, mergedProps, slots)
}
    }
})