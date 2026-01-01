<template>
    <ul
        :class="css(styles.list)">
        <slot />
    </ul>
</template>

<script setup lang="ts">
import { listStyles, ListStylesKey } from "./styles";
import { computed, provide } from "vue";
import { css, type Styles } from "styled-system/css";

const styles = computed(() => listStyles.raw());
provide(ListStylesKey, styles);
</script>