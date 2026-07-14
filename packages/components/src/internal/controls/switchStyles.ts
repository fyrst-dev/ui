import { sva } from 'styled-system/css'

export type SwitchStyles = ReturnType<typeof switchStyles.raw>

export const switchStyles = sva({
  slots: ['root', 'track', 'thumb', 'label'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'sm',
      cursor: 'pointer',
      userSelect: 'none',
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
    track: {
      'transition': 'all 300ms',
      'overflow': 'hidden',
      'display': 'flex',
      'flexDir': 'row',
      'cursor': 'pointer',
      'justifyContent': 'start',
      'borderWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'grey.dawn/75',
      'padding': '2px',
      'borderRadius': 'pill',
      'bgColor': 'grey.black',
      'flexShrink': '0',
      '_hover': {
        borderColor: 'grey.400',
      },
      '&[data-state="checked"]': {
        bgColor: 'primary',
      },
      '&[data-disabled]': {
        cursor: 'not-allowed',
      },
      '&[data-invalid]': {
        borderColor: 'danger',
      },
      '_light': {
        'borderColor': 'grey.300',
        'bgColor': 'grey.100',
        '&[data-state="checked"]': {
          bgColor: 'primary',
        },
        '&[data-invalid]': {
          borderColor: 'danger',
        },
      },
    },
    thumb: {
      transition: 'all 300ms',
      aspectRatio: '1',
      display: 'block',
      borderRadius: 'pill',
      bgColor: 'neutral',
      translate: 'auto',
      translateX: '0',
      shadow: '0 0 16px var(--shadow-color)',
      shadowColor: 'grey.black',
      _light: {
        bgColor: 'white',
        shadowColor: 'grey.400',
      },
    },
    label: {
      fontWeight: '500',
      color: 'neutral',
      lineHeight: '1.4',
      _light: {
        color: 'grey.night',
      },
    },
  },
  variants: {
    size: {
      sm: {
        track: {
          width: '32px',
        },
        thumb: {
          'width': '12px',
          '[data-state="checked"] &': {
            translateX: '14px',
          },
        },
        label: {
          fontSize: 'sm',
        },
      },
      md: {
        track: {
          width: '40px',
        },
        thumb: {
          'width': '16px',
          '[data-state="checked"] &': {
            translateX: '18px',
          },
        },
        label: {
          fontSize: 'md',
        },
      },
      lg: {
        track: {
          width: '48px',
        },
        thumb: {
          'width': '20px',
          '[data-state="checked"] &': {
            translateX: '22px',
          },
        },
        label: {
          fontSize: 'lg',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
