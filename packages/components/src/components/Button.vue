<script setup lang="ts">
/**
 * @component Button
 * @description A versatile button component that can render as either a button or anchor tag.
 *
 * @prop {string|null} label - The text content of the button. If null, no text will be displayed.
 * @prop {string|null} [icon] - Optional CSS class name for an icon to display within the button.
 * @prop {string|null} [to] - When provided, renders as an anchor (<a>) with this value as href. Otherwise renders as <button>.
 * @prop {'button'|'submit'|'reset'|null} [type] - HTML button type attribute (e.g. 'button', 'submit', 'reset'). Only applies when rendered as a button.
 * @prop {'secondary'|'primary'} [color='secondary'] - The color theme of the button.
 * @prop {'sm'|'md'|'lg'} [size='md'] - The size variant of the button.
 * @prop {boolean} [external=false] - When true and rendered as a link, opens in a new tab with appropriate security attributes.
 * @prop {boolean} [disabled=false] - When true, disables the button preventing user interaction.
 *
 * @example
 * <Button label="Click me" />
 * <Button label="Submit" type="submit" />
 * <Button label="Visit Site" to="https://example.com" external />
 * <Button icon="icon-class" label="Icon Button" />
 * <Button color="primary" size="lg" label="Large Primary Button" />
 */
import { computed } from 'vue'
import { cva, css } from 'styled-system/css'

defineOptions({ name: 'FyButton' })

const props = withDefaults(defineProps<{
  label?: string | null
  icon?: string | null
  to?: string | null
  type?: 'button' | 'submit' | 'reset' | null
  color?: 'secondary' | 'primary' | 'transparent'
  size?: 'sm' | 'md' | 'lg'
  order?: 'regular' | 'inverse'
  external?: boolean
  disabled?: boolean
}>(), {
  label: null,
  icon: null,
  to: null,
  type: null,
  color: 'secondary',
  size: 'md',
  order: 'regular',
  external: false,
  disabled: false,
})
const tag = computed(() => {
  if (props.to) {
    return 'a'
  }
  return 'button'
})
const type = computed(() => {
  if (tag.value === 'button' && props.type) {
    return props.type
  }
  else if (tag.value === 'button') {
    return 'button'
  }
  return null
})
const target = computed(() => {
  return props.external && tag.value === 'a' ? '_blank' : null
})
const rel = computed(() => {
  return props.external && tag.value === 'a' ? 'noopener noreferrer' : null
})

const buttonStyle = cva({
  base: {
    display: 'inline flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    lineHeight: '1.5',
    borderRadius: 'lg',
    borderStyle: 'solid',
    borderWidth: '1px',
    userSelect: 'none',
    transition: 'all 300ms',
    cursor: 'pointer',
    _disabled: {
      pointerEvents: 'none',
      opacity: '0.5',
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'primary',
        color: 'grey.night',
        borderColor: 'primary',
        _hover: {
          backgroundColor: '#C5F6CB', // @todo replace with token
        },
        _active: {
          backgroundColor: '#78E284', // @todo replace with token
        },
        _light: {
          color: 'white',
        },
      },
      secondary: {
        'bg': 'grey.night',
        'color': 'neutral',
        'borderColor': 'grey.600',
        '& .btn-icon': {
          color: 'primary',
        },
        '_hover': {
          backgroundColor: 'grey.700',
        },
        '_active': {
          backgroundColor: 'grey.black',
        },
        '_light': {
          'bg': 'brand.pale',
          'borderColor': 'brand.pale',
          'color': 'grey.night',
          '& .btn-icon': {
            color: 'grey.night',
          },
          '_hover': {
            backgroundColor: '#C5F6CB', // @todo replace with token
          },
          '_active': {
            backgroundColor: '#78E284', // @todo replace with token
            borderColor: '#78E284', // @todo replace with token
          },
        },
      },
      transparent: {
        'backgroundColor': 'transparent',
        'borderColor': 'transparent',
        'color': 'neutral',
        '& .btn-icon': {
          color: 'primary',
        },
        '& .btn-label': {
          textDecoration: 'underline',
          textDecorationColor: 'lucid.400',
          textDecorationThickness: '1px',
          textUnderlineOffset: '25%',
        },
        '_hover': {
          backgroundColor: 'grey.night',
        },
        '_active': {
          backgroundColor: 'black',
        },
        '_light': {
          _hover: {
            backgroundColor: 'brand.pale/25',
          },
          _active: {
            backgroundColor: 'brand.pale/40',
          },
        },
      },
    },
    size: {
      sm: {
        fontSize: 'sm',
        gap: 'sm',
        paddingBlock: 'xs',
        paddingInline: 'lg',
      },
      md: {
        'fontSize': 'md',
        'gap': 'sm',
        'paddingBlock': 'sm',
        'paddingInline': 'lg',
        '& .btn-icon': {
          fontSize: 'lg',
        },
      },
      lg: {
        fontSize: 'lg',
        gap: 'md',
        paddingBlock: 'md',
        paddingInline: 'xl',
      },
    },
    order: {
      regular: {
        '& .btn-icon': {
          order: '1',
        },
        '& .btn-label': {
          order: '2',
        },
      },
      inverse: {
        '& .btn-icon': {
          order: '2',
        },
        '& .btn-label': {
          order: '1',
        },
      },
    },
  },
  defaultVariants: {
    color: 'secondary',
    size: 'md',
    order: 'regular',
  },
})

const buttonClass = computed(() => css(
  buttonStyle.raw({ color: props.color, size: props.size, order: props.order }),
))
</script>

<template>
  <component
    :is="tag"
    :class="['btn', buttonClass]"
    :type="type"
    :href="props.to"
    :title="props.label"
    :target="target"
    :rel="rel"
    :disabled="props.disabled === true ? true : null"
  >
    <span
      v-if="props.icon"
      :class="[
        'btn-icon',
        'icon',
        `icon-${props.icon}`,
      ]"
    />

    <span
      v-if="props.label"
      class="btn-label"
      v-html="props.label"
    />
  </component>
</template>
