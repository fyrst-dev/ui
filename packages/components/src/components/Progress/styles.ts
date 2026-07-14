import { sva } from 'styled-system/css'

export type ProgressStyles = ReturnType<typeof progressStyles.raw>

export const progressStyles = sva({
  slots: ['root', 'track', 'indicator', 'value'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'xs',
      width: '100%',
    },
    track: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      borderRadius: 'pill',
      bgColor: 'grey.700',
    },
    indicator: {
      'height': '100%',
      'borderRadius': 'pill',
      'transition': 'width 300ms ease',
      'width': 'var(--progress-value)',
      '&[data-state="indeterminate"]': {
        width: '40%',
        animationStyle: 'progressIndeterminate',
      },
    },
    value: {
      fontWeight: '600',
      lineHeight: '1.2',
      color: 'grey.dawn',
    },
  },
  variants: {
    size: {
      sm: {
        track: {
          height: '3px',
        },
        value: {
          paddingInline: '2xs',
          fontSize: 'sm',
        },
      },
      md: {
        track: {
          height: '6px',
        },
        value: {
          paddingInline: '2xs',
          fontSize: 'sm',
        },
      },
      lg: {
        track: {
          height: '12px',
        },
        value: {
          paddingInline: '2xs',
          fontSize: 'md',
        },
      },
    },
    color: {
      primary: {
        indicator: {
          bgColor: 'primary',
        },
      },
      success: {
        indicator: {
          bgColor: 'success',
        },
      },
      danger: {
        indicator: {
          bgColor: 'danger',
        },
      },
      info: {
        indicator: {
          bgColor: 'info',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
