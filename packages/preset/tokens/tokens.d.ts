/* eslint-disable */
export type Token = `colors.${ColorToken}` | `spacing.${SpacingToken}` | `radii.${RadiusToken}` | `fontSizes.${FontSizeToken}` | `fontWeights.${FontWeightToken}` | `lineHeights.${LineHeightToken}` | `breakpoints.${BreakpointToken}` | `sizes.${SizeToken}`

export type ColorPalette = "white" | "black" | "transparent" | "brand" | "red" | "green" | "blue" | "yellow" | "grey" | "brand.pale" | "primary" | "danger" | "danger.lucid" | "success" | "success.lucid" | "warning" | "warning.lucid" | "info" | "info.lucid" | "neutral" | "lucid"

export type ColorToken = "white" | "black" | "transparent" | "brand.100" | "brand.300" | "brand.400" | "brand.600" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "red.950" | "green.50" | "green.100" | "green.200" | "green.300" | "green.400" | "green.500" | "green.600" | "green.700" | "green.800" | "green.900" | "green.950" | "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "blue.950" | "yellow.50" | "yellow.100" | "yellow.200" | "yellow.300" | "yellow.400" | "yellow.500" | "yellow.600" | "yellow.700" | "yellow.800" | "yellow.900" | "yellow.950" | "grey.50" | "grey.75" | "grey.100" | "grey.200" | "grey.300" | "grey.400" | "grey.500" | "grey.600" | "grey.700" | "grey.800" | "grey.900" | "grey.950" | "brand.pale" | "brand.pale.lucid" | "brand.day" | "brand.brand" | "brand.dawn" | "grey.dawn" | "grey.dusk" | "grey.night" | "grey.deep" | "grey.black" | "primary" | "primary.lucid" | "danger" | "danger.lucid.700" | "danger.lucid.900" | "success" | "success.lucid.700" | "success.lucid.900" | "warning" | "warning.lucid.700" | "warning.lucid.900" | "info" | "info.lucid.700" | "info.lucid.900" | "neutral" | "neutral.light" | "lucid.50" | "lucid.100" | "lucid.200" | "lucid.400" | "lucid.600" | "colorPalette" | "colorPalette.100" | "colorPalette.300" | "colorPalette.400" | "colorPalette.600" | "colorPalette.50" | "colorPalette.200" | "colorPalette.500" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.950" | "colorPalette.75" | "colorPalette.pale" | "colorPalette.pale.lucid" | "colorPalette.lucid" | "colorPalette.day" | "colorPalette.brand" | "colorPalette.dawn" | "colorPalette.dusk" | "colorPalette.night" | "colorPalette.deep" | "colorPalette.black" | "colorPalette.lucid.700" | "colorPalette.lucid.900" | "colorPalette.light"

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