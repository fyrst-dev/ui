<script setup lang="ts">
/**
 * @component Alert
 * @description A versatile alert component for displaying important messages to users.
 * Supports multiple variants (danger, success, info, warning), dismissible functionality,
 * and can display multiple messages with optional titles.
 *
 * @prop {'danger'|'success'|'info'|'warning'} [variant='info'] - The visual variant of the alert.
 * @prop {AlertMessage[]} [messages=[]] - Array of message objects to display.
 * @prop {boolean} [dismissible=false] - Whether the alert can be dismissed.
 * @prop {'alert'|'status'} [role] - ARIA role. Defaults to 'alert' for danger/warning, 'status' for info/success.
 * @prop {Styles|null} [classRoot] - Custom classes for the root element.
 * @prop {Styles|null} [classIcon] - Custom classes for the icon wrapper.
 * @prop {Styles|null} [classContent] - Custom classes for the content wrapper.
 * @prop {Styles|null} [classClose] - Custom classes for the close button.
 *
 * @slot icon - Override the default variant icon.
 *
 * @emits dismiss - Emitted when the close button is clicked.
 *
 * @example
 * <Alert
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
 * <Alert variant="success" :messages="[{ description: 'Saved successfully!' }]">
 *   <template #icon>
 *     <CustomIcon />
 *   </template>
 * </Alert>
 */
import { computed, useSlots } from 'vue'
import { cx, type Styles } from 'styled-system/css'
import { alertStyles } from './styles'
import type { AlertMessage } from './types'

type Variant = 'danger' | 'success' | 'info' | 'warning'

export interface Props {
  variant?: Variant
  spacing?: 'md' | 'lg'
  iconSize?: 'md' | 'lg' | 'xl'
  textSize?: 'md' | 'lg'
  borderSize?: 'md' | 'lg' | 'xl'
  messages?: AlertMessage[]
  dismissible?: boolean
  role?: 'alert' | 'status'
  classRoot?: Styles | null
  classIcon?: Styles | null
  classContent?: Styles | null
  classClose?: Styles | null
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  spacing: 'lg',
  borderSize: 'md',
  iconSize: 'xl',
  textSize: 'lg',
  messages: () => [],
  dismissible: false,
  role: undefined,
  classRoot: null,
  classIcon: null,
  classContent: null,
  classClose: null,
})

const emit = defineEmits<{
  dismiss: []
}>()

const slots = useSlots()

const iconName = computed(() => {
  const mapping = {
    danger: 'circle-wavy-warning-bold',
    success: 'check-circle-bold',
    info: 'info-bold',
    warning: 'warning-bold',
  }

  return mapping[props.variant] || 'info-circle'
})

// Determine ARIA role based on variant if not explicitly set
const ariaRole = computed(() => {
  if (props.role) return props.role
  return props.variant === 'danger' || props.variant === 'warning' ? 'alert' : 'status'
})

// Check if component should render
const shouldRender = computed(() => {
  return props.messages.length > 0 || !!slots.icon
})

const classes = computed(() => alertStyles({
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
    :class="cx(classes.root, classRoot)"
    :role="ariaRole"
  >
    <slot name="icon">
      <span
        :class="[
          'icon',
          `icon-${iconName}`,
          cx(classes.icon, classIcon),
        ]"
        aria-hidden="true"
      />
    </slot>

    <!-- Content -->
    <div :class="cx(classes.content, classContent)">
      <!-- Messages -->
      <div
        v-for="(message, index) in messages"
        :key="`message-${index}`"
        :class="classes.message"
      >
        <div
          v-if="message.title"
          :class="classes.title"
        >
          {{ message.title }}
        </div>
        <p :class="classes.description">
          {{ message.description }}
        </p>
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="dismissible"
      type="button"
      :class="cx(classes.close, classClose)"
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
