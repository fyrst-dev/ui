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
var import_dev4 = require("@pandacss/dev");

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
  transparent: {
    value: "transparent",
    description: "This is the transparent color used in our design system"
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
  green: {
    50: {
      value: "#f0fdf4"
    },
    100: {
      value: "#dcfce7"
    },
    200: {
      value: "#bbf7d0"
    },
    300: {
      value: "#86efac"
    },
    400: {
      value: "#4ade80"
    },
    500: {
      value: "#22c55e"
    },
    600: {
      value: "#16a34a"
    },
    700: {
      value: "#15803d"
    },
    800: {
      value: "#166534"
    },
    900: {
      value: "#14532d"
    },
    950: {
      value: "#052e16"
    }
  },
  blue: {
    50: {
      value: "#eff6ff"
    },
    100: {
      value: "#dbeafe"
    },
    200: {
      value: "#bfdbfe"
    },
    300: {
      value: "#93c5fd"
    },
    400: {
      value: "#60a5fa"
    },
    500: {
      value: "#3b82f6"
    },
    600: {
      value: "#2563eb"
    },
    700: {
      value: "#1d4ed8"
    },
    800: {
      value: "#1e40af"
    },
    900: {
      value: "#1e3a8a"
    },
    950: {
      value: "#172554"
    }
  },
  yellow: {
    50: {
      value: "#fffbeb"
    },
    100: {
      value: "#fef3c7"
    },
    200: {
      value: "#fde68a"
    },
    300: {
      value: "#fcd34d"
    },
    400: {
      value: "#fbbf24"
    },
    500: {
      value: "#f59e0b"
    },
    600: {
      value: "#d97706"
    },
    700: {
      value: "#b45309"
    },
    800: {
      value: "#92400e"
    },
    900: {
      value: "#78350f"
    },
    950: {
      value: "#451a03"
    }
  },
  grey: {
    50: {
      value: "#fafafa"
    },
    75: {
      value: "#f4f4f4"
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
      value: "#1d1d1d"
    },
    950: {
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
    pale: {
      DEFAULT: { value: "{colors.brand.100}" },
      lucid: { value: "{colors.brand.100/25}" }
    },
    day: { value: "{colors.brand.300}" },
    brand: { value: "{colors.brand.400}" },
    dawn: { value: "{colors.brand.600}" }
  },
  grey: {
    dawn: { value: "{colors.grey.300}" },
    dusk: { value: "{colors.grey.600}" },
    night: { value: "{colors.grey.800}" },
    deep: { value: "{colors.grey.900}" },
    black: { value: "{colors.grey.950}" }
  },
  primary: {
    DEFAULT: { value: { base: "{colors.brand.pale}", _light: "{colors.brand.day}" } },
    lucid: { value: { base: "{colors.brand.pale/25}", _light: "{colors.brand.day/25}" } }
  },
  danger: {
    DEFAULT: { value: { base: "{colors.red.400}", _light: "{colors.red.600}" } },
    lucid: {
      700: { value: { base: "{colors.red.400/25}", _light: "{colors.red.600/40}" } },
      900: { value: { base: "{colors.red.400/10}", _light: "{colors.red.600/25}" } }
    }
  },
  success: {
    DEFAULT: { value: { base: "{colors.green.400}", _light: "{colors.green.600}" } },
    lucid: {
      700: { value: { base: "{colors.green.400/25}", _light: "{colors.green.600/40}" } },
      900: { value: { base: "{colors.green.400/10}", _light: "{colors.green.600/25}" } }
    }
  },
  warning: {
    DEFAULT: { value: { base: "{colors.yellow.400}", _light: "{colors.yellow.600}" } },
    lucid: {
      700: { value: { base: "{colors.yellow.400/25}", _light: "{colors.yellow.600/40}" } },
      900: { value: { base: "{colors.yellow.400/10}", _light: "{colors.yellow.600/25}" } }
    }
  },
  info: {
    DEFAULT: { value: { base: "{colors.blue.400}", _light: "{colors.blue.600}" } },
    lucid: {
      700: { value: { base: "{colors.blue.400/25}", _light: "{colors.blue.600/40}" } },
      900: { value: { base: "{colors.blue.400/10}", _light: "{colors.blue.600/25}" } }
    }
  },
  neutral: {
    DEFAULT: { value: { base: "{colors.white}", _light: "{colors.grey.night}" } },
    light: { value: { base: "{colors.grey.300}", _light: "{colors.grey.400}" } }
  },
  lucid: {
    50: { value: { base: "rgba(255, 255, 255, 0.1)", _light: "rgba(0, 0, 0, 0.1)" } },
    100: { value: { base: "rgba(255, 255, 255, 0.175)", _light: "rgba(0, 0, 0, 0.175)" } },
    200: { value: { base: "rgba(255, 255, 255, 0.25)", _light: "rgba(0, 0, 0, 0.25)" } },
    400: { value: { base: "rgba(255, 255, 255, 0.5)", _light: "rgba(0, 0, 0, 0.5)" } },
    600: { value: { base: "rgba(255, 255, 255, 0.75)", _light: "rgba(0, 0, 0, 0.75)" } }
  }
});

// src/animation.ts
var import_dev3 = require("@pandacss/dev");
var animationStyles = (0, import_dev3.defineAnimationStyles)({
  "slideDown": {
    value: {
      animationName: "slideDown",
      animationDuration: "300ms"
    }
  },
  "slideUp": {
    value: {
      animationName: "slideUp",
      animationDuration: "300ms"
    }
  }
});
var keyframes = (0, import_dev3.defineKeyframes)({
  slideDown: {
    "0%": {
      height: "0",
      visibility: "hidden"
    },
    "100%": {
      height: "auto",
      visibility: "visible"
    }
  },
  slideUp: {
    "0%": {
      height: "auto",
      visibility: "visible"
    },
    "100%": {
      height: "0",
      visibility: "hidden"
    }
  }
});

// src/index.ts
var preset = (0, import_dev4.definePreset)({
  name: "fyrst-design-preset",
  theme: {
    tokens: {
      colors,
      spacing,
      radii,
      fontSizes,
      fontWeights: {
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" }
      },
      lineHeights: {
        normal: { value: "1.5" }
      }
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
      },
      keyframes,
      animationStyles
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
