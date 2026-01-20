<script setup lang="ts">
import { css } from 'styled-system/css'
</script>

<template>
  <li
    :class="css({
      scrollSnapAlign: 'start',
      display: 'flex',
    })"
  >
    <slot />
  </li>
</template>
