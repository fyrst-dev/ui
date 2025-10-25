# Field & Form Components Implementation

**Branch**: `feat/7-add-field-components`  
**Date**: 2025-10-25

## What's New

Complete field and form component system with validation support and form state management.

## Changelog

### Added
- Field component family (FieldBase, FieldInput, FieldLabel, FieldError, FieldMessage, FieldRequired)
- Form component family (FormInput, FormPrompt, FormPromptFooter)
- `useFormData` composable for form state management
- Composables export from Nuxt package

### Changed
- Renamed `FieldText` to `FieldInput` for better naming consistency
- Enhanced `FormPrompt` with improved form handling
- Exported composables from main package index

### Removed
- Deprecated `Input/*` components (replaced by Field component family)

### Fixed
- Hover border colors in FieldText component

## Breaking Changes

- **`FieldText` renamed to `FieldInput`**: Update all references from `<FyrstFieldText>` to `<FyrstFieldInput>`
- **`Input/*` components removed**: Migrate to the new Field component family (e.g., use `FieldInput` instead of legacy Input components)
