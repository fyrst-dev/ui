<template>
  <div :class="css({
    display: 'flex',
    width: '100%'
  })">
    <NuxtPage />
  </div>
</template>

<script setup>
import { css } from "styled-system/css";
</script>
