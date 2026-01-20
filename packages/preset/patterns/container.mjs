import { getPatternStyles, patternFns } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const containerConfig = {
transform({ maxWidth, px }) {
  return {
    position: "relative",
    maxWidth: {
      "base": "360px",
      "3xs": "360px",
      "2xs": "400px",
      "xs": "500px",
      "sm": "620px",
      "md": "740px",
      "lg": "1000px",
      "xl": "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      ...maxWidth
    },
    mx: "auto",
    px: { base: "lg", ...px },
    transition: "max-width 200ms"
  };
}}

export const getContainerStyle = (styles = {}) => {
  const _styles = getPatternStyles(containerConfig, styles)
  return containerConfig.transform(_styles, patternFns)
}

export const container = (styles) => css(getContainerStyle(styles))
container.raw = getContainerStyle