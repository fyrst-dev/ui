import { sva } from 'styled-system/css'

export const accordion = sva({
  slots: ['root', 'item', 'trigger', 'content'],
  base: {
    root: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'clip',
      color: 'neutral',
    },
    item: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'grey.dusk',
      transition: 'all 300ms',
      overflow: 'clip',
      _open: {
        // bg: 'grey.night'
      },
      _closed: {
        _hover: {
          borderColor: 'grey.400',
        },
      },
    },
    trigger: {
      'width': '100%',
      'display': 'flex',
      'flexWrap': 'nowrap',
      'flexDirection': 'row',
      'cursor': 'pointer',
      'fontWeight': 'semibold',
      'lineHeight': 'normal',
      'alignItems': 'center',
      'userSelect': 'none',
      '_open': {
        'backgroundColor': 'grey.night',
        '& [data-trigger="icon"]': {
          transform: 'rotate(180deg)',
        },
      },
      '& [data-trigger="icon"]': {
        marginLeft: 'auto',
        transition: 'transform 0.2s ease-in-out',
      },
    },
    content: {
      display: 'block !important',
      interpolateSize: 'allow-keywords',
      overflow: 'clip',
      lineHeight: '1.75',
      _open: {
        'animationStyle': 'slideDown',
        '& [data-trigger="icon"]': {
          transform: 'rotate(180deg)',
          transition: 'transform 0.2s ease-in-out',
        },
      },
      _closed: {
        animationStyle: 'slideUp',
      },
    },
  },
  variants: {
    orientation: {
      horizontal: {
        root: {
          flexDirection: 'row',
        },
      },
      vertical: {
        root: {
          flexDirection: 'column',
        },
      },
    },
    size: {
      md: {
        root: {
          gap: 'md',
        },
        item: {
          borderRadius: 'lg',
        },
        trigger: {
          'paddingY': 'md',
          'paddingX': 'lg',
          'gap': 'md',
          'fontSize': {
            base: 'md',
            // md: 'lg'
          },
          '& [data-trigger="icon"]': {
            fontSize: {
              base: 'sm',
              md: 'md',
            },
          },
        },
        content: {
          '& > div': {
            padding: 'lg',
          },
        },
      },
      lg: {
        root: {
          gap: 'lg',
        },
        item: {
          borderRadius: 'xl',
        },
        trigger: {
          'paddingY': 'lg',
          'paddingX': 'xl',
          'gap': 'lg',
          'fontSize': {
            base: 'lg',
          },
          '& [data-trigger="icon"]': {
            fontSize: {
              base: 'md',
            },
          },
        },
        content: {
          '& > div': {
            padding: 'xl',
          },
        },
      },
    },
  },
})
