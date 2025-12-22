import { sva } from 'styled-system/css'

export const cardStyles = sva({
    slots: ['root'],
    base: {
        root: {
            display: 'block',
            borderWidth: 'var(--card-border-size)',
            borderStyle: 'solid',
            borderColor: 'transparent',
            position: 'relative',
            zIndex: '1',
            maxWidth: '100%',
        },
    },
    variants: {
        colorStrategy: {
            default: {
                root: {
                    backgroundImage: 'var(--card-bg)',
                    borderColor: 'var(--card-border-color)'
                }
            },
            image: {
                root: {
                    background: 'var(--card-bg) padding-box, var(--card-border-color) border-box'
                }
            }
        },
        color: {
            none: {
                root: {
                    '--card-bg': 'transparent',
                    '--card-border-color': 'transparent',
                }
            },
            default: {
                root: {
                    '--card-bg': 'linear-gradient(var(--colors-grey-deep))',
                }
            },
            danger: {
                root: {
                    '--card-bg': 'linear-gradient(var(--colors-danger-lucid-900))',
                }
            },
            success: {
                root: {
                    '--card-bg': 'linear-gradient(var(--colors-success-lucid-900))',
                }
            },
            warning: {
                root: {
                    '--card-bg': 'linear-gradient(var(--colors-warning-lucid-900))',
                }
            },
            info: {
                root: {
                    '--card-bg': 'linear-gradient(var(--colors-info-lucid-900))',
                }
            },
        },
        borderRadius: {
            sm: {
                root: {
                    borderRadius: 'lg',
                },
            },
            md: {
                root: {
                    borderRadius: 'xl',
                },
            },
            lg: {
                root: {
                    borderRadius: '2xl',
                },
            },
            xl: {
                root: {
                    borderRadius: '4xl',
                },
            },
        }
    },
    defaultVariants: {
        borderRadius: 'md',
        color: 'default',
        colorStrategy: 'default'
    }
})