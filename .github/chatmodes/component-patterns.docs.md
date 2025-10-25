# Fyrst UI Component Patterns Reference

Complete reference for Vue component patterns, styling approaches, and architectural conventions.

## 🎨 Styling Approaches

### CVA (Class Variance Authority)
**For single-element components with variants**

```typescript
import { cva } from 'styled-system/css'

const button = cva({
  base: {
    display: 'flex',
    padding: 'md',
    // ... base styles
  },
  variants: {
    color: {
      primary: { bg: 'primary' },
      secondary: { bg: 'grey.600' }
    },
    size: {
      sm: { fontSize: 'sm' },
      md: { fontSize: 'md' }
    }
  },
  defaultVariants: {
    color: 'secondary',
    size: 'md'
  }
})

// Usage in template
<button :class="button({ color, size })">
```

**Example:** `Button.vue`

---

### SVA (Slot Variance Authority)
**For multi-element components**

```typescript
import { sva } from 'styled-system/css'

const card = sva({
  slots: ['root', 'container', 'header', 'body'],
  base: {
    root: { padding: '3xs' },
    container: { display: 'flex' },
    header: { fontWeight: 'bold' },
    body: { padding: 'lg' }
  },
  variants: {
    borderColor: {
      default: { root: { bg: 'lucid.50' } },
      primary: { root: { bg: 'primary' } }
    }
  }
})

const classes = card({ borderColor: 'primary' })

// Usage in template
<div :class="classes.root">
  <div :class="classes.container">
    <div :class="classes.header">...</div>
    <div :class="classes.body">...</div>
  </div>
</div>
```

**Example:** `Card.vue`

---

### Inline CSS
**For dynamic or one-off styles**

```typescript
import { css } from 'styled-system/css'

// Simple usage
<div :class="css({ padding: 'lg', bg: 'primary' })">

// Merge with props
<div :class="css(css.raw({ padding: 'lg' }), props.customClass)">

// Dynamic values
<div :class="css({ width: computedWidth.value })">
```

**Example:** `Carousel.vue`

---

## 🧩 Component Props Patterns

### TypeScript Interface
```typescript
interface Props {
  label: string | null          // Nullable with null default
  size?: 'sm' | 'md' | 'lg'     // Union type variant
  disabled?: boolean            // Optional boolean
  customClass?: any             // PandaCSS Styles compatibility
}

const props = withDefaults(defineProps<Props>(), {
  label: null,
  size: 'md',
  disabled: false,
  customClass: null
})
```

### Key Patterns
- **Nullable props**: `string | null` type + `null` default
- **Variant props**: Union types (`'sm' | 'md' | 'lg'`)
- **Custom classes**: Use `any` type for PandaCSS compatibility
- **Dynamic tags**: Use computed properties (see `Button.vue`)

---

## 🪝 Composables Pattern

### Structure
```typescript
export function useExample(props: Props, element: Ref<HTMLElement | null>) {
  // Internal state
  const state = ref(false)
  
  // Computed values
  const computed = computed(() => state.value ? 'active' : 'inactive')
  
  // Methods
  const handleAction = () => { state.value = !state.value }
  
  // Lifecycle
  onUnmounted(() => {
    // Cleanup
  })
  
  // Return readonly refs for external consumption
  return {
    state: readonly(state),
    computed: readonly(computed),
    handleAction
  }
}
```

### Guidelines
- Located in `packages/components/src/composables/`
- Return `readonly()` refs for external state
- Use `provide/inject` for parent-child communication
- Clean up side effects in `onUnmounted`
- Document all parameters and return values

### Available Composables
- **`carousel.ts`** - Scroll logic, visibility tracking, navigation
- **`flyout.ts`** - Hover state management for overlays
- **`form.ts`** - Form data extraction (`useFormData` returns FormData + JSON)

---

## 🎰 Slot Patterns

### Best Practices
- Prefer **named slots** over default slot
- Use `wrapper-before` / `wrapper-after` for decorators
- Provide fallback default slot with nested named slots
- Allow slot composition for flexibility

### Example
```vue
<template>
  <div>
    <slot name="header" />
    <slot name="wrapper-before" />
    <slot>
      <!-- Fallback content -->
      <slot name="default-content" />
    </slot>
    <slot name="wrapper-after" />
    <slot name="footer" />
  </div>
</template>
```

**Reference:** `Card.vue`

---

## 📝 Component Documentation

### Required JSDoc
```vue
<script setup lang="ts">
/**
 * @component ComponentName
 * @description Brief description of component purpose.
 * 
 * @prop {string|null} [label=null] - The label text (optional)
 * @prop {'sm'|'md'|'lg'} [size='md'] - Size variant
 * @prop {boolean} [disabled=false] - Disable state
 * 
 * @example
 * <ComponentName label="Hello" size="lg" />
 * 
 * @example
 * <ComponentName>
 *   <template #header>Custom Header</template>
 * </ComponentName>
 * 
 * @todo Add loading state support
 */
```

### Standards
- JSDoc block above `<script setup>` is **required**
- Include: `@component`, `@description`, all `@prop`, `@example`
- Document types, optional status, defaults
- Provide multiple usage examples
- Use `@todo` for known issues/improvements

**Reference:** `Button.vue`

---

## 📦 Component Organization

### Single Components
Direct file in `components/`:
```
components/
├── Button.vue
├── Card.vue
└── Loader.vue
```

### Component Families
Subdirectory with namespace export pattern:

```
components/
└── Field/
    ├── FieldBase.vue
    ├── FieldInput.vue
    ├── FieldLabel.vue
    ├── FieldError.vue
    └── index.ts
```

**index.ts:**
```typescript
import FieldBase from './FieldBase.vue'
import FieldInput from './FieldInput.vue'
import FieldLabel from './FieldLabel.vue'
import FieldError from './FieldError.vue'

// Named exports for direct imports
export { FieldBase, FieldInput, FieldLabel, FieldError }

// Default export for namespaced usage
export default {
  Base: FieldBase,
  Input: FieldInput,
  Label: FieldLabel,
  Error: FieldError
}
```

### Usage Patterns
```vue
<!-- Named import -->
<script setup>
import { FieldInput } from '@fyrst/ui-components'
</script>
<template>
  <FieldInput />
</template>

<!-- Namespace import -->
<script setup>
import Field from '@fyrst/ui-components'
</script>
<template>
  <Field.Input />
</template>
```

### Context Sharing
Use `provide/inject` for parent-child communication:

```typescript
// FieldBase.vue (parent)
provide('fieldContext', {
  id: fieldId,
  error: props.error,
  message: props.message
})

// FieldError.vue (child)
const context = inject('fieldContext')
```

**Example:** Field family components

---

## 🏗️ Component Families

### Field/* (Form Field Composition)
Namespace: `Field.*`
- **FieldBase** - Wrapper with context (ID, ARIA, state)
- **FieldInput** - Complete field with label/input/error/message
- **FieldLabel** - Accessible label with required indicator
- **FieldError** - Error message display
- **FieldMessage** - Helper text display
- **FieldRequired** - Required field indicator

### Form/* (Form Inputs)
Namespace: `Form.*`
- **FormInput** - Base text input with styling
- **FormPrompt** - Form container with textarea
- **FormPromptFooter** - Footer section for FormPrompt
