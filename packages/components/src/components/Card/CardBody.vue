<script setup lang="ts">
import { inject, computed } from 'vue';
import { css } from 'styled-system/css'
import { cardStyles, CardStylesKey } from "./styles";

const styles = inject(
  CardStylesKey,
  computed(() => cardStyles.raw({}))
);
</script>

<template>
    <div 
        :class="css(styles.body)">
        <slot />
    </div>
</template>
