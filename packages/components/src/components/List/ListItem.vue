<template>
    <li :class="css(styles.item)">
        <span :class="css(styles.marker)" />
        <slot>
            <div
                v-if="content"
                v-html="content" />
        </slot>
    </li>
</template>

<script setup lang="ts">
import { css } from "styled-system/css";
import { inject, computed } from 'vue';
import { listStyles, ListStylesKey } from "./styles";

export interface ListItemProps {
    content?: string;
}

defineProps<ListItemProps>();

const styles = inject(
    ListStylesKey,
    computed(() => listStyles.raw({}))
);
</script>