<script setup lang="ts">
/**
 * @component AlertRoot
 * @description A versatile alert component for displaying important messages to users.
 * Supports multiple variants (danger, success, info, warning), dismissible functionality,
 * and can display multiple messages with optional titles.
 *
 * @prop {'danger'|'success'|'info'|'warning'} [variant='info'] - The visual variant of the alert.
 * @prop {AlertMessage[]} [messages=[]] - Array of message objects to display.
 * @prop {boolean} [dismissible=false] - Whether the alert can be dismissed.
 * @prop {boolean} [hideIcon=false] - When true, the alert renders without an icon and without the icon gap.
 * @prop {'alert'|'status'} [role] - ARIA role. Defaults to 'alert' for danger/warning, 'status' for info/success.
 * @prop {AlertCss} [css] - Style overrides per slot: root, icon, content, message, title, description, close. Wrap values in `css.raw()`.
 *
 * @slot icon - Override the default variant icon.
 *
 * @emits dismiss - Emitted when the close button is clicked.
 *
 * @example
 * <AlertRoot
 *   variant="danger"
 *   :messages="[
 *     { title: 'Error occurred', description: 'Please try again later.' },
 *     { description: 'Check your network connection.' }
 *   ]"
 *   dismissible
 *   @dismiss="handleDismiss"
 * />
 *
 * @example
 * <Alert.Root variant="success" :messages="[{ description: 'Saved successfully!' }]">
 *   <template #icon>
 *     <CustomIcon />
 *   </template>
 * </Alert.Root>
 *
 * <AlertRoot hide-icon :messages="[{ description: 'No icon.' }]" />
 */
import { computed, useSlots } from 'vue'
import { fyAlert } from 'styled-system/recipes'
import { withCss } from '../../internal/css'
import type { AlertCss, AlertMessage } from './types'

type Variant = 'danger' | 'success' | 'info' | 'warning'

export interface Props {
  variant?: Variant
  spacing?: 'md' | 'lg'
  iconSize?: 'md' | 'lg' | 'xl'
  textSize?: 'md' | 'lg'
  borderSize?: 'md' | 'lg' | 'xl'
  messages?: AlertMessage[]
  dismissible?: boolean
  hideIcon?: boolean
  role?: 'alert' | 'status'
  css?: AlertCss
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  spacing: 'lg',
  borderSize: 'md',
  iconSize: 'xl',
  textSize: 'lg',
  messages: () => [],
})

const emit = defineEmits<{
  dismiss: []
}>()

const slots = useSlots()

const variantIcons: Record<Variant, string> = {
  danger: 'circle-wavy-warning-bold',
  success: 'check-circle-bold',
  info: 'info-bold',
  warning: 'warning-bold',
}

// Determine ARIA role based on variant if not explicitly set
const ariaRole = computed(() => {
  if (props.role) return props.role
  return props.variant === 'danger' || props.variant === 'warning' ? 'alert' : 'status'
})

// Check if component should render
const shouldRender = computed(() => {
  return props.messages.length > 0 || (!props.hideIcon && !!slots.icon)
})

const classes = computed(() => fyAlert({
  variant: props.variant,
  spacing: props.spacing,
  borderSize: props.borderSize,
  iconSize: props.iconSize,
  textSize: props.textSize,
}))

const handleDismiss = () => {
  emit('dismiss')
}
</script>

<template>
  <div
    v-if="shouldRender"
    :class="withCss(classes.root, props.css?.root)"
    :role="ariaRole"
  >
    <slot
      v-if="!hideIcon"
      name="icon"
    >
      <span
        :class="[
          'icon',
          `icon-${variantIcons[props.variant]}`,
          withCss(classes.icon, props.css?.icon),
        ]"
        aria-hidden="true"
      />
    </slot>

    <!-- Content -->
    <div :class="withCss(classes.content, props.css?.content)">
      <!-- Messages -->
      <div
        v-for="(message, index) in messages"
        :key="`message-${index}`"
        :class="withCss(classes.message, props.css?.message)"
      >
        <div
          v-if="message.title"
          :class="withCss(classes.title, props.css?.title)"
        >
          {{ message.title }}
        </div>
        <p :class="withCss(classes.description, props.css?.description)">
          {{ message.description }}
        </p>
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="dismissible"
      type="button"
      :class="withCss(classes.close, props.css?.close)"
      aria-label="Dismiss alert"
      @click="handleDismiss"
    >
      <span
        class="icon icon-x-bold"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
