<script setup lang="ts">
import { css, cx, type Styles } from "styled-system/css";
import { cardStyles } from "./styles";
import { computed } from "vue";
import type { SystemStyleObject } from "@pandacss/dev";

type BorderRadius = "sm" | "md" | "lg" | "xl";

export interface Props {
  as?: "div" | "li";
  colorStrategy?: "default" | "image";
  color?:
    | "default"
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "none"
    | "lucid-deep";
  borderSize?: number;
  borderRadius?: BorderRadius;
  borderColor?: string;
  classRoot?: Styles & SystemStyleObject;
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  colorStrategy: "default",
  color: "default",
  borderRadius: "md",
  borderSize: 1,
});

const { root } = cardStyles.raw({
  borderRadius: props.borderRadius,
  colorStrategy: props.colorStrategy,
  color: props.color,
});

// const classes = css(root)

const styleMap = {
  "border-color": {
    default: "grey-700",
    primary: "primary-lucid-700",
    danger: "danger-lucid-700",
    success: "success-lucid-700",
    warning: "warning-lucid-700",
    info: "info-lucid-700",
    none: "transparent",
  },
} as const;

const inlineStyles = computed(() => {
  const styles: any = {
    "--card-border-size": `${props.borderSize}px`,
  };

  if (typeof props.borderColor === "string") {
    styles["--card-border-color"] = props.borderColor;
  }

  // Object.entries(styleMap).forEach(([key, config]) => {
  //   const colorToken = (config as any)[props.color];
  //   const colorValue = `var(--colors-${colorToken})`;

  //   if (key === "border-color" && typeof props.borderColor === "string") {
  //     styles[`--card-${key}`] = props.borderColor;
  //   } else if (key === "border-color" && props.colorStrategy === "image") {
  //     styles[`--card-${key}`] = "transparent";
  //   } else {
  //     styles[`--card-${key}`] = colorValue;
  //   }
  // });

  return styles;
});
</script>

<template>
  <component
    :is="props.as"
    :class="css(root, props.classRoot)"
    :style="inlineStyles"
  >
    <slot name="before" />
    <slot />
    <slot name="after" />
  </component>
</template>
