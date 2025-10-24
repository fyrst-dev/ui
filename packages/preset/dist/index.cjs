"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  breakpoints: () => breakpoints,
  preset: () => preset
});
module.exports = __toCommonJS(index_exports);
var import_dev3 = require("@pandacss/dev");

// src/tokens/tokens.ts
var import_dev = require("@pandacss/dev");
var colors = import_dev.defineTokens.colors({
  white: {
    value: "#ffffff",
    description: "This is the primary white color used in our design system"
  },
  black: {
    value: "#000000",
    description: "This is the primary black color used in our design system"
  },
  brand: {
    100: {
      value: "#A3EFAC",
      description: "This is a light, pale brand color and is references as pale-brand"
    },
    300: {
      value: "#19bf56",
      description: "This is the fyrst brand color and is referenced as brand"
    },
    400: {
      value: "#05C260",
      description: "This is the fyrst brand color and is referenced as brand"
    },
    600: {
      value: "#0E8543",
      description: "This is a darker, bolder brand color and is referenced as dawn-brand"
    }
  },
  red: {
    50: {
      value: "#fef2f2"
    },
    100: {
      value: "#fee2e2"
    },
    200: {
      value: "#fecaca"
    },
    300: {
      value: "#fca5a5"
    },
    400: {
      value: "#f87171"
    },
    500: {
      value: "#ef4444"
    },
    600: {
      value: "#dc2626"
    },
    700: {
      value: "#b91c1c"
    },
    800: {
      value: "#991b1b"
    },
    900: {
      value: "#7f1d1d"
    },
    950: {
      value: "#450a0a"
    }
  },
  grey: {
    50: {
      value: "#fafafa"
    },
    100: {
      value: "#e5e5e5"
    },
    200: {
      value: "#d4d4d4"
    },
    300: {
      value: "#a3a3a3"
    },
    400: {
      value: "#737373"
    },
    500: {
      value: "#525252"
    },
    600: {
      value: "#404040"
    },
    700: {
      value: "#333333"
    },
    800: {
      value: "#262626"
    },
    900: {
      value: "#171717",
      description: "This is the darkest grey color in our design system and replaces black"
    }
  }
});
var spacing = import_dev.defineTokens.spacing({
  "3xs": { value: "2px" },
  "2xs": { value: "4px" },
  xs: { value: "8px" },
  sm: { value: "12px" },
  md: { value: "16px" },
  lg: { value: "20px" },
  xl: { value: "24px" },
  "2xl": { value: "32px" },
  "3xl": { value: "40px" },
  "4xl": { value: "48px" },
  "5xl": { value: "56px" },
  "6xl": { value: "64px" },
  "7xl": { value: "72px" },
  "8xl": { value: "80px" },
  "9xl": { value: "96px" },
  "10xl": { value: "128px" },
  "11xl": { value: "144px" },
  "12xl": { value: "160px" }
});
var radii = import_dev.defineTokens.radii({
  sm: { value: "4px" },
  md: { value: "6px" },
  lg: { value: "10px" },
  xl: { value: "16px" },
  "2xl": { value: "20px" },
  "3xl": { value: "24px" },
  "4xl": { value: "32px" },
  "5xl": { value: "40px" }
});
var fontSizes = import_dev.defineTokens.fontSizes({
  xs: { value: "12px" },
  sm: { value: "14px" },
  md: { value: "16px" },
  lg: { value: "20px" },
  xl: { value: "24px" },
  "2xl": { value: "32px" },
  "3xl": { value: "40px" },
  "4xl": { value: "48px" },
  "5xl": { value: "64px" }
});
var breakpoints = {
  "3xs": "360px",
  "2xs": "420px",
  "xs": "520px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
  "3xl": "1640px",
  "4xl": "1920px"
};

// src/tokens/semantic-tokens.ts
var import_dev2 = require("@pandacss/dev");
var colors2 = import_dev2.defineSemanticTokens.colors({
  brand: {
    pale: { value: "{colors.brand.100}" },
    day: { value: "{colors.brand.300}" },
    brand: { value: "{colors.brand.400}" },
    dawn: { value: "{colors.brand.600}" }
  },
  grey: {
    dawn: { value: "{colors.grey.300}" },
    dusk: { value: "{colors.grey.600}" },
    night: { value: "{colors.grey.800}" },
    black: { value: "{colors.grey.900}" }
  },
  primary: {
    value: { base: "{colors.brand.pale}", _light: "{colors.brand.day}" }
  },
  danger: {
    value: { base: "{colors.red.400}", _light: "{colors.red.600}" }
  },
  neutral: {
    value: { base: "{colors.white}", _light: "{colors.grey.night}" }
  },
  lucid: {
    50: { value: { base: "rgba(255, 255, 255, 0.1)", _light: "rgba(0, 0, 0, 0.1)" } },
    100: { value: { base: "rgba(255, 255, 255, 0.175)", _light: "rgba(0, 0, 0, 0.175)" } },
    200: { value: { base: "rgba(255, 255, 255, 0.25)", _light: "rgba(0, 0, 0, 0.25)" } },
    400: { value: { base: "rgba(255, 255, 255, 0.5)", _light: "rgba(0, 0, 0, 0.5)" } },
    600: { value: { base: "rgba(255, 255, 255, 0.75)", _light: "rgba(0, 0, 0, 0.75)" } }
  }
});

// src/index.ts
var preset = (0, import_dev3.definePreset)({
  name: "fyrst-design-preset",
  theme: {
    tokens: {
      colors,
      spacing,
      radii,
      fontSizes
    },
    semanticTokens: {
      colors: colors2
    },
    extend: {
      breakpoints,
      containerSizes: {
        xs: "320px",
        sm: "384px",
        md: "448px",
        lg: "512px",
        xl: "576px",
        "2xl": "672px",
        "3xl": "768px",
        "4xl": "896px",
        "5xl": "1024px",
        "6xl": "1152px",
        "7xl": "1280px",
        "8xl": "1440px"
      }
    }
  },
  conditions: {
    extend: {
      light: ".light &, .light&"
    }
  },
  patterns: {
    extend: {
      container: {
        transform({ maxWidth, px }) {
          return {
            position: "relative",
            maxWidth: {
              base: "360px",
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
        }
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  breakpoints,
  preset
});
