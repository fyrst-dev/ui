<script setup lang="ts">
    import { css } from 'styled-system/css'
    
    export interface Props {
        direction?: 'left' | 'right'
    }
    
    const props = withDefaults(defineProps<Props>(), {
        direction: 'left'
    })
</script>

<template>
    <div
        :class="css(
            css.raw({ 
                position: 'absolute',
                zIndex: 50,
                top: '100%',
                left: props.direction === 'left' ? '0' : 'auto',
                right: props.direction === 'right' ? '0' : 'auto',
                paddingTop: 'sm'
            })
        )">

        <slot />
    </div>
</template>
