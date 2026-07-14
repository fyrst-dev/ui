# Form field controls expansion

**Date**: 2026-07-12

## What's New

Expanded the Field/Form component families so CMS and product forms can use a consistent control set.

## Changelog

### Added
- `FormTextarea` / `FieldTextarea`
- `FormCheckbox` / `FieldCheckbox` (reka-ui Checkbox)
- `FormRadioGroup` / `FieldRadioGroup` (reka-ui RadioGroup)
- `FormSelect` / `FieldSelect` (reka-ui Select)
- Shared `Form/controlStyles.ts` for text-like controls
- Playground demos for number, date, textarea, select, checkbox, radio

### Changed
- `FormInput` / `FieldInput` `type` now includes `number` and `date`
- Extracted shared control styles from `FormInput`
- Form field context ARIA now uses `messageId` consistently

### Notes
- Checkbox `modelValue` is `boolean`
- Select/Radio options use `{ label, value, disabled? }[]`
