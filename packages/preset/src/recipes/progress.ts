import { defineSlotRecipe } from '@pandacss/dev'

export const fyProgress = defineSlotRecipe({
  className: 'fy-progress',
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
      'width': '0%',
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
          bgColor: 'success.subtle',
        },
      },
      danger: {
        indicator: {
          bgColor: 'danger.subtle',
        },
      },
      info: {
        indicator: {
          bgColor: 'info.subtle',
        },
      },
    },
    percent: Object.fromEntries(
      Array.from({ length: 101 }, (_, percent) => [percent, { indicator: { width: `${percent}%` } }]),
    ),
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
