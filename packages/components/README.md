# @fyrst/ui-components

Vue.js Komponenten-Bibliothek für das Fyrst Design System.

## Installation

```bash
bun add @fyrst/ui-components
```

## Verwendung

### Als Plugin (empfohlen)

```typescript
import { createApp } from 'vue'
import FyrstUI from '@fyrst/ui-components'
import '@fyrst/ui-components/style.css'

const app = createApp({})
app.use(FyrstUI)
```

### Einzelne Komponenten

```vue
<template>
  <Button variant="primary" size="md" @click="handleClick">
    Klick mich!
  </Button>
</template>

<script setup>
import { Button } from '@fyrst/ui-components'
import '@fyrst/ui-components/style.css'

const handleClick = () => {
  console.log('Button wurde geklickt!')
}
</script>
```

## Komponenten

### Button

Eine vielseitige Button-Komponente mit verschiedenen Varianten und Größen.

#### Props

- `variant`: `'primary' | 'secondary' | 'ghost'` (Standard: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (Standard: `'md'`)
- `disabled`: `boolean` (Standard: `false`)

#### Events

- `click`: Wird ausgelöst, wenn der Button geklickt wird

#### Beispiele

```vue
<template>
  <!-- Verschiedene Varianten -->
  <Button variant="primary">Primary Button</Button>
  <Button variant="secondary">Secondary Button</Button>
  <Button variant="ghost">Ghost Button</Button>
  
  <!-- Verschiedene Größen -->
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  
  <!-- Deaktiviert -->
  <Button disabled>Disabled Button</Button>
</template>
```

## Development

```bash
# Entwicklung starten
bun run dev

# Build erstellen
bun run build

# Aufräumen
bun run clean
```
