<template>
    <ul
        :class="css(styles.list)">
        <slot>
            <ListItem
                v-for="(item, index) in items"
                :key="index"
                v-bind="item" />
        </slot>
    </ul>
</template>
 
<script setup lang="ts">
import { listStyles, ListStylesKey } from "./styles";
import { computed, provide } from "vue";
import { css, type Styles } from "styled-system/css";
import ListItem, { type ListItemProps } from "./ListItem.vue";

defineProps<{
    items?: ListItemProps[];
}>();

const styles = computed(() => listStyles.raw());
provide(ListStylesKey, styles);
</script>