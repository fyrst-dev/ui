const tokens = {
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--colors-black)"
  },
  "colors.brand.100": {
    "value": "#A3EFAC",
    "variable": "var(--colors-brand-100)"
  },
  "colors.brand.300": {
    "value": "#19bf56",
    "variable": "var(--colors-brand-300)"
  },
  "colors.brand.400": {
    "value": "#05C260",
    "variable": "var(--colors-brand-400)"
  },
  "colors.brand.600": {
    "value": "#0E8543",
    "variable": "var(--colors-brand-600)"
  },
  "colors.red.50": {
    "value": "#fef2f2",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.100": {
    "value": "#fee2e2",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#fecaca",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#fca5a5",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f87171",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#ef4444",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#dc2626",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#b91c1c",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#991b1b",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#7f1d1d",
    "variable": "var(--colors-red-900)"
  },
  "colors.red.950": {
    "value": "#450a0a",
    "variable": "var(--colors-red-950)"
  },
  "colors.grey.50": {
    "value": "#fafafa",
    "variable": "var(--colors-grey-50)"
  },
  "colors.grey.100": {
    "value": "#e5e5e5",
    "variable": "var(--colors-grey-100)"
  },
  "colors.grey.200": {
    "value": "#d4d4d4",
    "variable": "var(--colors-grey-200)"
  },
  "colors.grey.300": {
    "value": "#a3a3a3",
    "variable": "var(--colors-grey-300)"
  },
  "colors.grey.400": {
    "value": "#737373",
    "variable": "var(--colors-grey-400)"
  },
  "colors.grey.500": {
    "value": "#525252",
    "variable": "var(--colors-grey-500)"
  },
  "colors.grey.600": {
    "value": "#404040",
    "variable": "var(--colors-grey-600)"
  },
  "colors.grey.700": {
    "value": "#333333",
    "variable": "var(--colors-grey-700)"
  },
  "colors.grey.800": {
    "value": "#262626",
    "variable": "var(--colors-grey-800)"
  },
  "colors.grey.900": {
    "value": "#171717",
    "variable": "var(--colors-grey-900)"
  },
  "spacing.3xs": {
    "value": "2px",
    "variable": "var(--spacing-3xs)"
  },
  "spacing.2xs": {
    "value": "4px",
    "variable": "var(--spacing-2xs)"
  },
  "spacing.xs": {
    "value": "8px",
    "variable": "var(--spacing-xs)"
  },
  "spacing.sm": {
    "value": "12px",
    "variable": "var(--spacing-sm)"
  },
  "spacing.md": {
    "value": "16px",
    "variable": "var(--spacing-md)"
  },
  "spacing.lg": {
    "value": "20px",
    "variable": "var(--spacing-lg)"
  },
  "spacing.xl": {
    "value": "24px",
    "variable": "var(--spacing-xl)"
  },
  "spacing.2xl": {
    "value": "32px",
    "variable": "var(--spacing-2xl)"
  },
  "spacing.3xl": {
    "value": "40px",
    "variable": "var(--spacing-3xl)"
  },
  "spacing.4xl": {
    "value": "48px",
    "variable": "var(--spacing-4xl)"
  },
  "spacing.5xl": {
    "value": "56px",
    "variable": "var(--spacing-5xl)"
  },
  "spacing.6xl": {
    "value": "64px",
    "variable": "var(--spacing-6xl)"
  },
  "spacing.7xl": {
    "value": "72px",
    "variable": "var(--spacing-7xl)"
  },
  "spacing.8xl": {
    "value": "80px",
    "variable": "var(--spacing-8xl)"
  },
  "spacing.9xl": {
    "value": "96px",
    "variable": "var(--spacing-9xl)"
  },
  "spacing.10xl": {
    "value": "128px",
    "variable": "var(--spacing-10xl)"
  },
  "spacing.11xl": {
    "value": "144px",
    "variable": "var(--spacing-11xl)"
  },
  "spacing.12xl": {
    "value": "160px",
    "variable": "var(--spacing-12xl)"
  },
  "radii.sm": {
    "value": "4px",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "6px",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "10px",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "16px",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "20px",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "24px",
    "variable": "var(--radii-3xl)"
  },
  "radii.4xl": {
    "value": "32px",
    "variable": "var(--radii-4xl)"
  },
  "radii.5xl": {
    "value": "40px",
    "variable": "var(--radii-5xl)"
  },
  "fontSizes.xs": {
    "value": "12px",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "14px",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "16px",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "20px",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "24px",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "32px",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "40px",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "48px",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "64px",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "breakpoints.3xs": {
    "value": "360px",
    "variable": "var(--breakpoints-3xs)"
  },
  "breakpoints.2xs": {
    "value": "420px",
    "variable": "var(--breakpoints-2xs)"
  },
  "breakpoints.xs": {
    "value": "520px",
    "variable": "var(--breakpoints-xs)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1440px",
    "variable": "var(--breakpoints-2xl)"
  },
  "breakpoints.3xl": {
    "value": "1640px",
    "variable": "var(--breakpoints-3xl)"
  },
  "breakpoints.4xl": {
    "value": "1920px",
    "variable": "var(--breakpoints-4xl)"
  },
  "sizes.breakpoint-3xs": {
    "value": "360px",
    "variable": "var(--sizes-breakpoint-3xs)"
  },
  "sizes.breakpoint-2xs": {
    "value": "420px",
    "variable": "var(--sizes-breakpoint-2xs)"
  },
  "sizes.breakpoint-xs": {
    "value": "520px",
    "variable": "var(--sizes-breakpoint-xs)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1440px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "sizes.breakpoint-3xl": {
    "value": "1640px",
    "variable": "var(--sizes-breakpoint-3xl)"
  },
  "sizes.breakpoint-4xl": {
    "value": "1920px",
    "variable": "var(--sizes-breakpoint-4xl)"
  },
  "colors.brand.pale": {
    "value": "var(--colors-brand-100)",
    "variable": "var(--colors-brand-pale)"
  },
  "colors.brand.day": {
    "value": "var(--colors-brand-300)",
    "variable": "var(--colors-brand-day)"
  },
  "colors.brand.brand": {
    "value": "var(--colors-brand-400)",
    "variable": "var(--colors-brand-brand)"
  },
  "colors.brand.dawn": {
    "value": "var(--colors-brand-600)",
    "variable": "var(--colors-brand-dawn)"
  },
  "colors.grey.dawn": {
    "value": "var(--colors-grey-300)",
    "variable": "var(--colors-grey-dawn)"
  },
  "colors.grey.dusk": {
    "value": "var(--colors-grey-600)",
    "variable": "var(--colors-grey-dusk)"
  },
  "colors.grey.night": {
    "value": "var(--colors-grey-800)",
    "variable": "var(--colors-grey-night)"
  },
  "colors.grey.black": {
    "value": "var(--colors-grey-900)",
    "variable": "var(--colors-grey-black)"
  },
  "colors.primary": {
    "value": "var(--colors-primary)",
    "variable": "var(--colors-primary)"
  },
  "colors.danger": {
    "value": "var(--colors-danger)",
    "variable": "var(--colors-danger)"
  },
  "colors.neutral": {
    "value": "var(--colors-neutral)",
    "variable": "var(--colors-neutral)"
  },
  "colors.lucid.50": {
    "value": "var(--colors-lucid-50)",
    "variable": "var(--colors-lucid-50)"
  },
  "colors.lucid.100": {
    "value": "var(--colors-lucid-100)",
    "variable": "var(--colors-lucid-100)"
  },
  "colors.lucid.200": {
    "value": "var(--colors-lucid-200)",
    "variable": "var(--colors-lucid-200)"
  },
  "colors.lucid.400": {
    "value": "var(--colors-lucid-400)",
    "variable": "var(--colors-lucid-400)"
  },
  "colors.lucid.600": {
    "value": "var(--colors-lucid-600)",
    "variable": "var(--colors-lucid-600)"
  },
  "spacing.-3xs": {
    "value": "calc(var(--spacing-3xs) * -1)",
    "variable": "var(--spacing-3xs)"
  },
  "spacing.-2xs": {
    "value": "calc(var(--spacing-2xs) * -1)",
    "variable": "var(--spacing-2xs)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-sm": {
    "value": "calc(var(--spacing-sm) * -1)",
    "variable": "var(--spacing-sm)"
  },
  "spacing.-md": {
    "value": "calc(var(--spacing-md) * -1)",
    "variable": "var(--spacing-md)"
  },
  "spacing.-lg": {
    "value": "calc(var(--spacing-lg) * -1)",
    "variable": "var(--spacing-lg)"
  },
  "spacing.-xl": {
    "value": "calc(var(--spacing-xl) * -1)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.-2xl": {
    "value": "calc(var(--spacing-2xl) * -1)",
    "variable": "var(--spacing-2xl)"
  },
  "spacing.-3xl": {
    "value": "calc(var(--spacing-3xl) * -1)",
    "variable": "var(--spacing-3xl)"
  },
  "spacing.-4xl": {
    "value": "calc(var(--spacing-4xl) * -1)",
    "variable": "var(--spacing-4xl)"
  },
  "spacing.-5xl": {
    "value": "calc(var(--spacing-5xl) * -1)",
    "variable": "var(--spacing-5xl)"
  },
  "spacing.-6xl": {
    "value": "calc(var(--spacing-6xl) * -1)",
    "variable": "var(--spacing-6xl)"
  },
  "spacing.-7xl": {
    "value": "calc(var(--spacing-7xl) * -1)",
    "variable": "var(--spacing-7xl)"
  },
  "spacing.-8xl": {
    "value": "calc(var(--spacing-8xl) * -1)",
    "variable": "var(--spacing-8xl)"
  },
  "spacing.-9xl": {
    "value": "calc(var(--spacing-9xl) * -1)",
    "variable": "var(--spacing-9xl)"
  },
  "spacing.-10xl": {
    "value": "calc(var(--spacing-10xl) * -1)",
    "variable": "var(--spacing-10xl)"
  },
  "spacing.-11xl": {
    "value": "calc(var(--spacing-11xl) * -1)",
    "variable": "var(--spacing-11xl)"
  },
  "spacing.-12xl": {
    "value": "calc(var(--spacing-12xl) * -1)",
    "variable": "var(--spacing-12xl)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  },
  "colors.colorPalette.pale": {
    "value": "var(--colors-color-palette-pale)",
    "variable": "var(--colors-color-palette-pale)"
  },
  "colors.colorPalette.day": {
    "value": "var(--colors-color-palette-day)",
    "variable": "var(--colors-color-palette-day)"
  },
  "colors.colorPalette.brand": {
    "value": "var(--colors-color-palette-brand)",
    "variable": "var(--colors-color-palette-brand)"
  },
  "colors.colorPalette.dawn": {
    "value": "var(--colors-color-palette-dawn)",
    "variable": "var(--colors-color-palette-dawn)"
  },
  "colors.colorPalette.dusk": {
    "value": "var(--colors-color-palette-dusk)",
    "variable": "var(--colors-color-palette-dusk)"
  },
  "colors.colorPalette.night": {
    "value": "var(--colors-color-palette-night)",
    "variable": "var(--colors-color-palette-night)"
  },
  "colors.colorPalette.black": {
    "value": "var(--colors-color-palette-black)",
    "variable": "var(--colors-color-palette-black)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar