<template>
    <li :class="css(styles.item)">
        <div
            data-list-item>
            <slot />
        </div>
    </li>
</template>

<script setup lang="ts">
import { css, type Styles } from "styled-system/css";
import { inject, computed } from 'vue';
import { listStyles, ListStylesKey } from "./styles";
const styles = inject(
    ListStylesKey,
    computed(() => listStyles.raw({}))
);
</script>