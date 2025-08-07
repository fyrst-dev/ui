<script lang="ts" setup>
import { ref } from "vue";
import { useFlyout } from "../composables/flyout";
import { css } from "../../styled-system/css";
import FlyoutDropdown from "./FlyoutDropdown.vue";
const el = ref<HTMLElement>();

const props = defineProps<{
  icon?: string;
  label?: string;
  ariaLabel?: string;
  classTrigger?: any;
}>();

const { open, toggle } = useFlyout({ el });
</script>

<template>
  <div
    ref="el"
    :class="
      css(
        css.raw({
          position: 'relative',
          zIndex: 20,
        })
      )
    "
  >
    <slot name="trigger" v-bind="{ open }">
      <button
        type="button"
        :class="[
          css(
            css.raw({
              cursor: 'pointer',
            }),
            props.classTrigger
          ),
          open ? 'active' : null,
        ]"
        aria-haspopup="true"
        :aria-label="ariaLabel || label"
        :aria-expanded="open"
        @click="toggle"
      >
        <span v-if="props.icon" :class="props.icon" />
        <slot name="trigger-label">
          <span v-html="label" />
        </slot>
        <slot name="trigger-icon" v-bind="{ open }" />
      </button>
    </slot>

    <slot name="dropdown" v-bind="{ open }">
      <Transition name="flyout">
        <FlyoutDropdown v-if="open">
          <slot />
        </FlyoutDropdown>
      </Transition>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.flyout-enter-active,
.flyout-leave-active {
  transition: all 200ms;
}
.flyout-enter-from, .flyout-leave-to /* .flyout-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
