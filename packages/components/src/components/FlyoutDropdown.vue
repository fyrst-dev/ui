<script lang="ts" setup>
    import { css } from '../../styled-system/css'
    const props = withDefaults(defineProps<{
        direction?: 'left' | 'right'
    }>(), {
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