import type { AnimationStyles, CssKeyframes } from '@pandacss/types'
import { defineAnimationStyles, defineKeyframes } from '@pandacss/dev'

export const animationStyles: AnimationStyles = defineAnimationStyles({
  slideDown: {
    value: {
      animationName: 'slideDown',
      animationDuration: '300ms',
    },
  },
  slideUp: {
    value: {
      animationName: 'slideUp',
      animationDuration: '300ms',
    },
  },
  progressIndeterminate: {
    value: {
      animationName: 'progressIndeterminate',
      animationDuration: '1.4s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
    },
  },
})

export const keyframes: CssKeyframes = defineKeyframes({
  slideDown: {
    '0%': {
      height: '0',
      visibility: 'hidden',
    },
    '100%': {
      height: 'auto',
      visibility: 'visible',
    },
  },
  slideUp: {
    '0%': {
      height: 'auto',
      visibility: 'visible',
    },
    '100%': {
      height: '0',
      visibility: 'hidden',
    },
  },
  flyoutIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  flyoutOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  progressIndeterminate: {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(350%)',
    },
  },
})
