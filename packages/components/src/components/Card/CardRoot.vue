<script setup lang="ts">
import { cx } from 'styled-system/css'
import { cardStyles } from './styles'
import { computed } from 'vue'

type BorderRadius = 'sm' | 'md' | 'lg' | 'xl'

export interface Props {
    colorStrategy?: 'default' | 'image'
    color?: 'default' | 'danger' | 'success' | 'warning' | 'info' | 'none'
    borderSize?: number
    borderRadius?: BorderRadius
    classRoot?: any
}

const props = withDefaults(defineProps<Props>(), {
    colorStrategy: 'default',
    color: 'default',
    borderRadius: 'md',
    classRoot: null,
    borderSize: 1,
})

const cardClasses = cardStyles({
    borderRadius: props.borderRadius,
    colorStrategy: props.colorStrategy,
    color: props.color,
})

const styleMap = {
    'border-color': {
        default: 'grey-700',
        danger: 'danger-lucid-700',
        success: 'success-lucid-700',
        warning: 'warning-lucid-700',
        info: 'info-lucid-700',
        none: 'transparent'
    }
} as const

const inlineStyles = computed(() => {

    const styles: any = {
        '--card-border-size': `${props.borderSize}px`,
    }

    Object.entries(styleMap).forEach(([key, config]) => {
        const colorToken = (config as any)[props.color]
        const colorValue = `var(--colors-${colorToken})`

        if (key === 'border-color' && props.colorStrategy === 'image') {
            styles[`--card-${key}`] = `linear-gradient(${colorValue}, ${colorValue})`
        } else {
            styles[`--card-${key}`] = colorValue
        }
    })

    return styles
})
</script>

<template>
    <div 
        :class="cx(cardClasses.root, props.classRoot)"
        :style="inlineStyles">
        <slot name="before" />
        <slot />
        <slot name="after" />
    </div>
</template>
