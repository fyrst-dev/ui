<script setup lang="ts">
import { css } from '../../../styled-system/css'
</script>

<template>
    <div 
        :class="css({
            padding: 'xl'
        })">
        <slot />
    </div>
</template>
