<template>
  <div :class="cssClasses.root">
    <slot name="headline">
      <component v-if="headline" :is="headlineTag" :class="cssClasses.headline">
        <span v-html="headline" />
      </component>
    </slot>
    <slot name="description">
      <div
        v-if="description"
        v-html="description"
        :class="cssClasses.description"
      />
    </slot>
    <slot name="actions" />
  </div>
</template>

<script setup lang="ts">
import { heroLead } from "./styles"
import { computed } from "vue"

export interface Props {
  headline?: string;
  headlineTag?: string;
  description?: string;
  alignItems?: "start" | "center" | "end";
  alignSelf?: "start" | "center" | "end";
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  headlineTag: "h1",
  alignItems: "start",
  alignSelf: "start",
  size: "md",
});

const cssClasses = computed(() => {
  return heroLead({
    alignItems: props.alignItems || "start",
    alignSelf: props.alignSelf || "start",
    size: props.size || "md",
  });
});
</script>
