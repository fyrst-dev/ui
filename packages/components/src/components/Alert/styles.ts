import { sva } from 'styled-system/css'

export const alertStyles = sva({
  slots: ['root', 'icon', 'content', 'message', 'title', 'description', 'close'],
  base: {
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    icon: {
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minWidth: 0,
    },
    message: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2xs',
    },
    title: {
      fontWeight: '700',
      lineHeight: '1.25',
    },
    description: {
      fontWeight: '500',
      lineHeight: '1.5',
    },
    close: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 'lg',
      height: 'lg',
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'neutral.light',
      borderRadius: 'sm',
      transition: 'all 200ms',
      _hover: {
        color: 'neutral',
        bg: 'lucid.100',
      },
      _active: {
        bg: 'lucid.200',
      },
    },
  },
  variants: {
    variant: {
      danger: {
        root: {
          bg: 'danger/15',
          borderColor: 'danger/20',
        },
        icon: {
          color: 'red.300',
          _light: {
            color: 'red.700',
          },
        },
        title: {
          color: 'red.200',
          _light: {
            color: 'red.800',
          },
        },
        description: {
          color: 'red.200',
          _light: {
            color: 'red.800',
          },
        },
      },
      success: {
        root: {
          bg: 'success/15',
          borderColor: 'success/20',
        },
        icon: {
          color: 'green.300',
          _light: {
            color: 'green.700',
          },
        },
        title: {
          color: 'green.200',
          _light: {
            color: 'green.800',
          },
        },
        description: {
          color: 'green.200',
          _light: {
            color: 'green.800',
          },
        },
      },
      info: {
        root: {
          bg: 'info/15',
          borderColor: 'info/20',
        },
        icon: {
          color: 'blue.300',
          _light: {
            color: 'blue.700',
          },
        },
        title: {
          color: 'blue.200',
          _light: {
            color: 'blue.800',
          },
        },
        description: {
          color: 'blue.200',
          _light: {
            color: 'blue.800',
          },
        },
      },
      warning: {
        root: {
          bg: 'warning/15',
          borderColor: 'warning/20',
        },
        icon: {
          color: 'yellow.300',
          _light: {
            color: 'yellow.700',
          },
        },
        title: {
          color: 'yellow.200',
          _light: {
            color: 'yellow.800',
          },
        },
        description: {
          color: 'yellow.200',
          _light: {
            color: 'yellow.800',
          },
        },
      },
    },
    borderSize: {
      md: {
        root: {
          borderRadius: 'md',
        },
      },
      lg: {
        root: {
          borderRadius: 'lg',
        },
      },
      xl: {
        root: {
          borderRadius: '2xl',
        },
      },
    },
    iconSize: {
      md: {},
      lg: {
        icon: {
          fontSize: 'lg',
        },
      },
      xl: {
        icon: {
          fontSize: 'xl',
        },
      },
    },
    textSize: {
      md: {
        title: {
          fontSize: 'md',
        },
        description: {
          fontSize: 'sm',
        },
      },
      lg: {
        title: {
          fontSize: 'lg',
        },
        description: {
          fontSize: 'md',
        },
      },
    },
    spacing: {
      md: {
        root: {
          gap: 'sm',
          padding: 'md',
        },
        content: {
          gap: 'sm',
        },
      },
      lg: {
        root: {
          gap: 'lg',
          padding: 'xl',
        },
        content: {
          gap: 'sm',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'info',
    textSize: 'md',
    borderSize: 'md',
    spacing: 'md',
    iconSize: 'xl',
  },
})
