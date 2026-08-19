import { cva } from 'styled-system/css'

export const buttonStyles = cva({
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
