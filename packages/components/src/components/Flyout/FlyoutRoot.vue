<script lang="ts" setup>
/**
 * @component FlyoutRoot
 * @description Dropdown panel built on reka-ui Popover. Opens on mouse hover and on click;
 * Escape and an outside click close it. A click while it is hover-open pins it open.
 *
 * @slot trigger - Replaces the trigger button. Render exactly one element; it becomes
 * the Popover trigger. Slot props: `{ open, toggle }`.
 * @slot trigger-label - Replaces the label inside the default trigger.
 * @slot trigger-icon - Appended inside the default trigger. Slot props: `{ open }`.
 * @slot dropdown - Replaces the default `Flyout.Dropdown`. Keep the panel inside a
 * `Flyout.Dropdown` so Escape, outside clicks, and positioning still work.
 * @slot default - Panel content.
 */
import { computed, provide, toRef, useId, useSlots } from 'vue'
import { PopoverRoot, PopoverTrigger } from 'reka-ui'
import { flyoutStyles } from './styles'
import { useFlyout } from '../../composables/flyout'
import RichText from '../../internal/RichText.vue'
import { withCss } from '../../internal/css'
import FlyoutDropdown from './FlyoutDropdown.vue'
import { FlyoutContextKey, type FlyoutRootCss } from './types'

export interface Props {
  /** Icon class(es) rendered before the label, e.g. `icon icon-caret-down`. */
  icon?: string
  label?: string
  /** Render `label` as HTML. Pass trusted strings only. */
  html?: boolean
  ariaLabel?: string
  /** Side the panel aligns to. @default 'left' */
  direction?: 'left' | 'right'
  /** Open while a mouse hovers the flyout. @default true */
  openOnHover?: boolean
  css?: FlyoutRootCss
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'left',
  openOnHover: true,
})

const slots = useSlots()

const { open, openedBy, setOpen, toggle, pin, onPointerEnter, onPointerLeave } = useFlyout({
  openOnHover: () => props.openOnHover,
})

provide(FlyoutContextKey, {
  openedBy,
  direction: toRef(props, 'direction'),
})

const triggerId = useId()
let clickOnTrigger = false

/** Runs before PopoverTrigger's own click handler toggles the popover. */
const onClickCapture = (event: MouseEvent) => {
  const target = event.target as Element | null
  clickOnTrigger = Boolean(target?.closest?.(`[data-flyout-trigger="${triggerId}"]`))
}

const onOpenChange = (value: boolean) => {
  const fromTrigger = clickOnTrigger
  clickOnTrigger = false
  if (!value && fromTrigger && openedBy.value === 'hover') {
    pin()
    return
  }
  setOpen(value, 'click')
}

const styles = computed(() => flyoutStyles.raw())
const hasCustomTrigger = computed(() => Boolean(slots.trigger))
</script>

<template>
  <PopoverRoot
    :open="open"
    @update:open="onOpenChange"
  >
    <div
      :class="withCss(styles.root, props.css?.root)"
      @pointerenter="onPointerEnter"
      @pointerleave="onPointerLeave"
      @click.capture="onClickCapture"
    >
      <PopoverTrigger
        v-if="hasCustomTrigger"
        as-child
        :data-flyout-trigger="triggerId"
      >
        <slot
          name="trigger"
          :open="open"
          :toggle="toggle"
        />
      </PopoverTrigger>
      <PopoverTrigger
        v-else
        :data-flyout-trigger="triggerId"
        :class="[withCss(styles.trigger, props.css?.trigger), open ? 'active' : null]"
        :aria-label="ariaLabel || label"
      >
        <span
          v-if="props.icon"
          :class="props.icon"
          aria-hidden="true"
        />
        <slot name="trigger-label">
          <RichText
            :text="label"
            :html="html"
          />
        </slot>
        <slot
          name="trigger-icon"
          :open="open"
        />
      </PopoverTrigger>

      <slot
        name="dropdown"
        :open="open"
      >
        <FlyoutDropdown :css="{ root: props.css?.content }">
          <slot />
        </FlyoutDropdown>
      </slot>
    </div>
  </PopoverRoot>
</template>
