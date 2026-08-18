# Copilot Instructions für @fyrst/ui

## Projektübersicht

Dies ist ein **Design System Monorepo** für fyrst.dev, das Design-Tokens und wiederverwendbare UI-Komponenten bereitstellt. Das Projekt ist als Monorepo strukturiert und stellt ein Panda CSS Preset zur Verfügung. Es nutzt konsistent die Javascript runtime "bun" und ist vollständig typisiert mit TypeScript.

### Hauptzweck
- Bereitstellung eines einheitlichen Design Systems für alle Fyrst-Projekte
- Zentrale Verwaltung von Design-Tokens (Farben, Abstände, Schriftgrößen, etc.)
- Integration mit Panda CSS für typsichere Styling-Lösungen
- Wiederverwendbare UI-Patterns und -Komponenten

## Technisches Setup

### Package Manager & Build System
- **Bun**: Verwendet als Package Manager und Build-Tool
- **TypeScript**: Vollständig typisiert mit modernen ES-Features
- **tsup**: Build-Tool für die Pakete (ESM + CJS + DTS Ausgabe)

### Monorepo-Struktur
```
@fyrst/ui/
├── packages/
│   └── preset/           # Panda CSS Design-Token Preset
│       ├── src/
│       │   ├── index.ts
│       │   └── tokens/
│       │       ├── tokens.ts          # Basis Design-Tokens
│       │       └── semantic-tokens.ts # Semantische Tokens
│       └── package.json (@fyrst/design-preset)
├── index.ts             # Hauptexport
└── package.json (@fyrst/ui)
```

### Architektur-Prinzipien

#### 1. Design-Token System
- **Basis-Tokens**: Primitive Werte (Farben, Abstände, etc.)
- **Semantische Tokens**: Kontextbezogene Tokens mit Light/Dark-Mode Support
- **Responsive Breakpoints**: Mobile-first Ansatz mit benannten Breakpoints

#### 2. Farbsystem
- **Fyrst Brand Colors**: Verschiedene Grüntöne als Hauptfarben
- **Neutrale Farben**: Umfassende Graustufen-Palette
- **Lucid Colors**: Transparente Overlay-Farben für Light/Dark-Mode
- **Semantische Farben**: `primary`, `neutral` mit automatischem Theme-Switching

#### 3. Responsive Design
- **Breakpoints**: `3xs` (360px) bis `4xl` (1920px)
- **Container Pattern**: Responsive Container mit automatischen Maximalbreiten
- **Mobile-First**: Basis-Styles für mobile Geräte, dann Desktop-Erweiterungen

### Wichtige Dateien und ihre Zwecke

#### `/packages/preset/src/index.ts`
- Hauptexport des Panda CSS Presets
- Definition von Theme-Tokens, semantischen Tokens und Patterns
- Container-Pattern mit responsiven Maximalbreiten

#### `/packages/preset/src/tokens/tokens.ts`
- Basis Design-Tokens (Farben, Abstände, Radien, Schriftgrößen)
- Dokumentation für jeden Token-Wert
- Breakpoint-Definitionen

#### `/packages/preset/src/tokens/semantic-tokens.ts`
- Semantische Token-Definitionen
- Light/Dark-Mode Unterstützung
- Aliasing von Basis-Tokens

### Verwendung des Presets

```typescript
import { defineConfig } from "@pandacss/dev";
import { preset } from "@fyrst/ui/preset";

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: ["./app/**/*.{js,jsx,ts,tsx,vue}"],
  outdir: "styled-system",
});
```

### Development Workflow

#### Build-Prozess
```bash
bun run build          # Alle Pakete bauen
bun run build:preset   # Nur Preset bauen
bun run dev            # Watch-Mode für alle Pakete
bun run dev:preset     # Watch-Mode für Preset
```

#### Paket-Exports
- **ESM**: Modern ES Module Format
- **CJS**: CommonJS für Legacy-Support
- **DTS**: TypeScript Definitionsdateien

### Code-Konventionen

#### Design-Token Naming
- Verwendung beschreibender Namen: `pale`, `day`, `brand`, `dawn`
- Semantische Gruppierung: `primary`, `neutral`, `lucid`
- Konsistente Skalierung: `3xs` bis `12xl` für Abstände

#### TypeScript-Patterns
- Strikte TypeScript-Konfiguration
- Pfad-Aliasing für saubere Imports
- Vollständige Typisierung aller Exports

#### Responsive Design-Patterns
- Mobile-first Breakpoint-System
- Automatische Container-Größenanpassung
- Konsistente Spacing-Verwendung

### Integration mit anderen Tools

#### Panda CSS
- Native Integration als Preset
- Typsichere Token-Verwendung
- Automatische CSS-Generierung

#### Theme-System
- Light/Dark-Mode Support über `_light` Conditions
- Automatisches Fallback auf Base-Werte
- Semantische Token-Mappings

### Erweiterungsmöglichkeiten

Das System ist darauf ausgelegt, erweitert zu werden:
- Zusätzliche Pakete im `packages/` Verzeichnis
- Neue Design-Tokens in bestehenden Token-Dateien
- Zusätzliche Panda CSS Patterns
- Weitere UI-Komponenten-Pakete

### Wichtige Hinweise für Entwickler

1. **Token-Änderungen**: Neue Tokens sollten sowohl in `tokens.ts` als auch in `semantic-tokens.ts` berücksichtigt werden
2. **Versionierung**: Das Preset-Paket hat eine eigene Versionsnummer (`0.1.5`)
3. **Build-Output**: Alle Build-Artefakte landen im `dist/` Verzeichnis
4. **Peer Dependencies**: Panda CSS und TypeScript sind Peer Dependencies
5. **Workspace-Struktur**: Neue Pakete müssen in der Hauptpackage.json unter `workspaces` registriert werden

### Performance-Überlegungen

- Tree-shaking-freundliche ES Module Exports
- Minimal Bundle-Size durch gezielte Imports
- Lazy-Loading von Token-Definitionen
- Optimierte Build-Pipeline mit tsup
