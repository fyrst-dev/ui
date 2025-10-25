# Fyrst UI Design System Reference

Complete reference for the Fyrst UI design token system, semantic tokens, and styling patterns.

## 🎨 Token Architecture

### Base Tokens (`packages/preset/src/tokens/tokens.ts`)

#### Colors
- **White**: `#ffffff`
- **Black**: `#000000`
- **Brand**: 100 (pale `#A3EFAC`), 300 (`#19bf56`), 400 (`#05C260`), 600 (dawn `#0E8543`)
- **Red**: 50-950 full scale (50: `#fef2f2` → 950: `#450a0a`)
- **Grey**: 50-900 full scale (50: `#fafafa` → 900: `#171717`)

#### Spacing
- `3xs` to `12xl` (2px to 160px)
- Common: `xs: 8px`, `sm: 12px`, `md: 16px`, `lg: 20px`, `xl: 24px`, `2xl: 32px`

#### Radii
- `sm` to `5xl` (4px to 40px)
- Common: `sm: 4px`, `md: 6px`, `lg: 10px`, `xl: 16px`, `2xl: 20px`

#### Font Sizes
- `xs` to `5xl` (12px to 64px)
- Common: `xs: 12px`, `sm: 14px`, `md: 16px`, `lg: 20px`, `xl: 24px`

#### Breakpoints
- `3xs: 360px`, `2xs: 420px`, `xs: 520px`
- `sm: 640px`, `md: 768px`, `lg: 1024px`
- `xl: 1280px`, `2xl: 1440px`, `3xl: 1640px`, `4xl: 1920px`

#### Container Sizes
- `xs: 320px` through `8xl: 1440px`
- Used by container pattern for responsive max-width

---

## 🎭 Semantic Tokens (`packages/preset/src/tokens/semantic-tokens.ts`)

### Theme-Aware Tokens
Automatically adapt to light/dark mode:

- **`primary`**: `brand.pale` (dark) / `brand.day` (light)
- **`danger`**: `red.400` (dark) / `red.600` (light)
- **`neutral`**: `white` (dark) / `grey.night` (light)

### Lucid (Transparent Overlays)
Opacity variants with theme support:
- `lucid.50`: 10% opacity
- `lucid.100`: 17.5% opacity
- `lucid.200`: 25% opacity
- `lucid.400`: 50% opacity
- `lucid.600`: 75% opacity

### Color Aliases
Direct references to base tokens:
- **Brand**: `brand.pale`, `brand.day`, `brand.brand`, `brand.dawn`
- **Grey**: `grey.dawn`, `grey.dusk`, `grey.night`, `grey.black`

---

## 🎯 Conditions

### Light Mode Condition
Custom condition for light theme styling:
```typescript
light: '.light &, .light&'
```

**Usage:**
```typescript
{
  bg: 'grey.900',
  _light: { bg: 'white' }
}
```

Supports both descendant (`.light &`) and self-targeting (`.light&`).

---

## 📦 Container Pattern

Custom PandaCSS pattern with responsive behavior:

### Default Behavior
```typescript
{
  position: 'relative',
  maxWidth: { 
    base: '360px',
    '3xs': '360px',
    '2xs': '400px',
    'xs': '500px',
    'sm': '620px',
    'md': '740px',
    'lg': '1000px',
    'xl': '1200px',
    '2xl': '1400px',
    '3xl': '1600px'
  },
  mx: 'auto',
  px: { base: 'lg', ... },
  transition: 'max-width 200ms'
}
```

### Overrides
- **`maxWidth`**: Override responsive max-width values
- **`px`**: Override horizontal padding

**Example:**
```vue
<div :class="container({ maxWidth: { lg: '800px' } })">
```

---

## 🎨 Usage Guidelines

### Token Priority
1. Use **semantic tokens** first (`primary`, `danger`, `neutral`)
2. Use **color aliases** for specific needs (`brand.pale`, `grey.night`)
3. Use **base tokens** only when necessary (`brand.400`, `grey.800`)

### Responsive Design
Always use breakpoint objects for responsive behavior:
```typescript
{
  fontSize: { base: 'md', lg: 'lg', xl: 'xl' },
  padding: { base: 'md', md: 'lg', lg: 'xl' }
}
```

### Theme Compatibility
Test all styling in both light and dark modes. Use `_light` condition for theme-specific overrides.

### Never Use
- Hardcoded colors (e.g., `#ffffff`, `rgb(...)`)
- Hardcoded spacing values (e.g., `12px`, `1.5rem`)
- Inline CSS/SCSS
