<template>
    <div 
        :class="cx(
            grid({
                gap: '0',
                columns: { base: 1, lg: 2 },
                alignItems: 'start',
                minHeight: '100vh',
                width: '100vw',
            })
        )">

        <div 
            v-for="theme in ['dark', 'light']" 
            :key="theme"
            :class="[theme,
                css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { base: '2xl', xl: '4xl' },
                    backgroundColor: theme === 'dark' ? 'grey.black' : 'white',
                    padding: { base: '2xl', xl: '4xl' },
                    minHeight: '100%',
                    height: 'fit-content',
                })
            ]">
            
            <slot />
        </div>
    </div>
</template>

<script setup>
import { css, cx } from "styled-system/css";
import { grid } from 'styled-system/patterns';
</script>
