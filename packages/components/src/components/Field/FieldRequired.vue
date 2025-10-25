<script setup lang="ts">
import { css } from 'styled-system/css';
</script>

<template>
    <span 
        :class="css({
            color: 'danger',
            fontWeight: '800'
        })"
    >
        *
    </span>
</template>