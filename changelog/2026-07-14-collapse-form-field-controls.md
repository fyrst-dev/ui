# Collapse Form/Field control layers

**Date**: 2026-07-14

## What's New

Form controls are no longer a second public API next to Field. **Field\*** is the product surface; bare controls live as **Control\*** under `src/internal/controls/`.

## Changelog

### Changed
- Moved `FormInput`, `FormTextarea`, `FormSelect`, `FormCheckbox`, `FormRadioGroup` → `internal/controls/*` as `Control*`
- `Form` namespace is Prompt-only: `Form.Prompt`, `Form.PromptFooter`
- Package root exports `Control` namespace + types `ControlSize`, `ControlValid`, `FieldOption`
- `FieldBase` provides **reactive** field context (ARIA IDs update when error/message change)
- Composed Field\* pass `error`/`message` into `FieldBase` and optional `size`/`class` to controls
- Shared `fieldContextKey` injection key; renamed `FormFieldOption` → `FieldOption`

### Removed (breaking)
| Removed | Use instead |
|---------|-------------|
| `Form.Input` / `FyrstFormInput` | `Field.Input` / `FyrstFieldInput` (or `Control.Input` for bare) |
| `Form.Textarea` / `FyrstFormTextarea` | `Field.Textarea` / `FyrstFieldTextarea` |
| `Form.Select` / `FyrstFormSelect` | `Field.Select` / `FyrstFieldSelect` |
| `Form.Checkbox` / `FyrstFormCheckbox` | `Field.Checkbox` / `FyrstFieldCheckbox` |
| `Form.RadioGroup` / `FyrstFormRadioGroup` | `Field.RadioGroup` / `FyrstFieldRadioGroup` |
| `FormFieldOption` type | `FieldOption` |

### Notes
- Control components are **not** registered by the Nuxt module (outside `components/` scan path)
- Prefer composed `Field*` in apps; use `Control` + `Field.Base` only for custom layouts
