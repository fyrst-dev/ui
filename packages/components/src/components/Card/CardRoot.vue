<script setup lang="ts">
import { sva, cx } from 'styled-system/css'

type BorderColor = 'default' | 'primary' | 'none'
type BorderRadius = 'md' | 'lg' | 'xl'

export interface Props {
  borderColor?: BorderColor
  borderRadius?: BorderRadius
  classRoot?: any
  classContainer?: any
}

const props = withDefaults(defineProps<Props>(), {
  borderColor: 'default',
  borderRadius: 'md',
  classRoot: null,
  classContainer: null,
})

const card = sva({
    slots: ['root', 'container'],
    base: {
        root: {
            display: 'flex',
            position: 'relative',
            zIndex: '1',
            maxWidth: '100%',
            padding: '3xs',
        },
        container: {
            display: 'flex',
            position: 'relative',
            zIndex: '5',
            flexDirection: 'column',
            flexGrow: '1',
            bg: 'grey.black',
            gap: 'lg',
            _light: {
                bg: 'white',
            },
        }
    },
    variants: {
        borderColor: {
            default: {
                root: {
                    bg: 'lucid.50',
                },
            },
            primary: {
                root: {
                    bg: 'primary',
                },
            },
            none: {
                root: {
                    bg: 'transparent',
                },
            },
        },
        borderRadius: {
            md: {
                root: {
                    borderRadius: 'xl',
                },
                container: {
                    borderRadius: 'calc( var(--radii-xl) - 2px )',
                },
            },
            lg: {
                root: {
                    borderRadius: '2xl',
                },
                container: {
                    borderRadius: 'calc( var(--radii-2xl) - 2px )',
                },
            },
            xl: {
                root: {
                    borderRadius: '4xl',
                },
                container: {
                    borderRadius: 'calc( var(--radii-4xl) - 2px )',
                },
            },
        }
    },
    defaultVariants: {
        borderColor: 'default',
        borderRadius: 'md'
    }
})

const classes = card({
    borderColor: props.borderColor,
    borderRadius: props.borderRadius,
})

</script>

<template>
    <div :class="cx(classes.root, props.classRoot)">
        <slot name="container-before" />
        <div :class="[cx(classes.container, props.classContainer), 'CardContainer']">
            <slot>
                <slot name="header" />
                <slot name="body" />
                <slot name="footer" />
            </slot>
        </div>
        <slot name="container-after" />
    </div>
</template>
