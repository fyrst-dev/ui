import type { Styles } from 'styled-system/css'
import { sva } from 'styled-system/css'

/**
 * Per-component `css` prop map. Keys are the component's public slot names,
 * where `root` always refers to the component's outermost element (regardless
 * of the underlying SVA slot name). Inner slots keep their SVA names.
 */
export type UrlCssMap<K extends string> = Partial<Record<K, Styles>>

export type UrlCss = UrlCssMap<'root' | 'protocol' | 'input'>

export type UrlStyles = ReturnType<typeof urlStyles.raw>

export const urlStyles = sva({
  slots: ['root', 'protocol', 'input'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      minWidth: '200px',
      paddingX: '0',
      paddingY: '0',
      gap: '0',
      overflow: 'hidden',
      backgroundColor: 'grey.black',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'grey.dusk',
      borderRadius: 'lg',
      outlineWidth: '3px',
      outlineColor: 'transparent',
      outlineOffset: '0px',
      outlineStyle: 'solid',
      fontWeight: '450',
      lineHeight: '1.5',
      color: 'neutral',
      transition: 'all 300ms',
      _hover: {
        borderColor: 'grey.400',
      },
      _focus: {
        outlineColor: 'transparent',
      },
      _focusWithin: {
        outlineColor: 'primary/50',
        borderColor: 'primary !important',
      },
      _disabled: {
        opacity: '0.5',
        cursor: 'not-allowed',
      },
      _light: {
        backgroundColor: 'white',
        borderColor: 'grey.200',
        color: 'grey.night',
        _hover: {
          borderColor: 'grey.300',
        },
      },
    },
    protocol: {
      'display': 'inline-flex',
      'alignItems': 'center',
      'gap': '2xs',
      'flexShrink': 0,
      'margin': '0',
      'border': 'none',
      'borderRadius': '0',
      'backgroundColor': 'grey.night',
      'color': 'inherit',
      'font': 'inherit',
      'fontWeight': '450',
      'lineHeight': '1.5',
      'whiteSpace': 'nowrap',
      'cursor': 'pointer',
      '_hover': {
        opacity: '0.9',
      },
      '_focusVisible': {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'primary',
        outlineOffset: '-2px',
        borderRadius: 'md',
      },
      '_disabled': {
        cursor: 'not-allowed',
        opacity: '1',
      },
      '& .icon': {
        fontSize: '0.9em',
      },
    },
    input: {
      flex: '1',
      minWidth: '0',
      width: '100%',
      margin: '0',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      color: 'inherit',
      font: 'inherit',
      fontWeight: '450',
      lineHeight: '1.5',
      _placeholder: {
        color: 'lucid.600',
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          fontSize: 'sm',
        },
        protocol: {
          // paddingInlineStart: 'md',
          // paddingInlineEnd: 'sm',
          paddingInline: 'sm',
          paddingBlock: 'xs',
        },
        input: {
          paddingInlineStart: 'sm',
          paddingInlineEnd: 'md',
          paddingBlock: 'xs',
        },
      },
      md: {
        root: {
          fontSize: 'md',
        },
        protocol: {
          // paddingInlineStart: 'lg',
          // paddingInlineEnd: 'sm',
          paddingInline: 'sm',
          paddingBlock: 'sm',
        },
        input: {
          paddingInlineStart: 'sm',
          paddingInlineEnd: 'lg',
          paddingBlock: 'sm',
        },
      },
      lg: {
        root: {
          fontSize: 'lg',
        },
        protocol: {
          // paddingInlineStart: 'xl',
          // paddingInlineEnd: 'md',
          paddingInline: 'md',
          paddingBlock: 'md',
        },
        input: {
          paddingInlineStart: 'md',
          paddingInlineEnd: 'xl',
          paddingBlock: 'md',
        },
      },
    },
    valid: {
      true: {
        root: {
          borderColor: 'success !important',
          _focusWithin: {
            borderColor: 'success !important',
            outlineColor: 'success/50 !important',
          },
        },
      },
      false: {
        root: {
          borderColor: 'danger !important',
          _focusWithin: {
            borderColor: 'danger !important',
            outlineColor: 'danger/50 !important',
          },
        },
      },
      none: {},
    },
    secure: {
      true: {
        protocol: {
          '& .icon': {
            color: 'success',
          },
        },
      },
      false: {
        protocol: {
          '& .icon': {
            color: 'lucid.600',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    valid: 'none',
    secure: true,
  },
})
