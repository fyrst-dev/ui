/* eslint-disable */
export type Token = `colors.${ColorToken}` | `spacing.${SpacingToken}` | `radii.${RadiusToken}` | `fontSizes.${FontSizeToken}` | `fontWeights.${FontWeightToken}` | `lineHeights.${LineHeightToken}` | `breakpoints.${BreakpointToken}` | `sizes.${SizeToken}`

export type ColorPalette = "white" | "black" | "brand" | "red" | "grey" | "primary" | "danger" | "neutral" | "lucid"

export type ColorToken = "white" | "black" | "brand.100" | "brand.300" | "brand.400" | "brand.600" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "red.950" | "grey.50" | "grey.100" | "grey.200" | "grey.300" | "grey.400" | "grey.500" | "grey.600" | "grey.700" | "grey.800" | "grey.900" | "brand.pale" | "brand.day" | "brand.brand" | "brand.dawn" | "grey.dawn" | "grey.dusk" | "grey.night" | "grey.black" | "primary" | "danger" | "neutral" | "lucid.50" | "lucid.100" | "lucid.200" | "lucid.400" | "lucid.600" | "colorPalette" | "colorPalette.100" | "colorPalette.300" | "colorPalette.400" | "colorPalette.600" | "colorPalette.50" | "colorPalette.200" | "colorPalette.500" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.950" | "colorPalette.pale" | "colorPalette.day" | "colorPalette.brand" | "colorPalette.dawn" | "colorPalette.dusk" | "colorPalette.night" | "colorPalette.black"

export type SpacingToken = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "10xl" | "11xl" | "12xl" | "-3xs" | "-2xs" | "-xs" | "-sm" | "-md" | "-lg" | "-xl" | "-2xl" | "-3xl" | "-4xl" | "-5xl" | "-6xl" | "-7xl" | "-8xl" | "-9xl" | "-10xl" | "-11xl" | "-12xl"

export type RadiusToken = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"

export type FontSizeToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"

export type FontWeightToken = "normal" | "medium" | "semibold" | "bold"

export type LineHeightToken = "normal"

export type BreakpointToken = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export type SizeToken = "breakpoint-3xs" | "breakpoint-2xs" | "breakpoint-xs" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl" | "breakpoint-3xl" | "breakpoint-4xl"

export type Tokens = {
		colors: ColorToken
		spacing: SpacingToken
		radii: RadiusToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		breakpoints: BreakpointToken
		sizes: SizeToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"