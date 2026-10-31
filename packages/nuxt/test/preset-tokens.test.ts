import { describe, expect, it } from 'vitest'
import presetBase from '@pandacss/preset-base'
import { preset } from '../../preset/src/index.ts'
import { fonts } from '../../preset/src/tokens/tokens.ts'
import { colors, fonts as semanticFonts } from '../../preset/src/tokens/semantic-tokens.ts'

describe('preset tokens', () => {
  it('nests preset-base as a module so designSystem apps do not resolve the package name', () => {
    expect(preset.presets).toEqual([presetBase])
    expect(preset.presets?.some(entry => entry === '@pandacss/preset-base')).toBe(false)
  })

  it('defines Figtree sans plus system serif and mono', () => {
    expect(fonts.sans?.value).toMatch(/^Figtree,/)
    expect(fonts.serif?.value).toMatch(/^ui-serif,/)
    expect(fonts.mono?.value).toMatch(/^ui-monospace,/)
    expect(semanticFonts.body?.value).toBe('{fonts.sans}')
  })

  it('keeps status lucid steps, brand.pale.lucid, and primary.subtle', () => {
    expect(colors.brand.pale).toMatchObject({
      DEFAULT: { value: '{colors.brand.100}' },
      lucid: { value: '{colors.brand.100/25}' },
    })
    expect(colors.primary).toMatchObject({
      subtle: {
        DEFAULT: { value: expect.objectContaining({ base: expect.stringContaining('brand.100') }) },
      },
      lucid: {
        700: { value: { base: '{colors.brand.pale/25}', _light: '{colors.brand.pale/40}' } },
        900: { value: { base: '{colors.brand.pale/10}', _light: '{colors.brand.pale/25}' } },
      },
    })

    for (const name of ['danger', 'success', 'warning', 'info'] as const) {
      expect(colors[name].lucid).toMatchObject({
        700: { value: expect.objectContaining({ base: expect.any(String), _light: expect.any(String) }) },
        900: { value: expect.objectContaining({ base: expect.any(String), _light: expect.any(String) }) },
      })
      expect(colors[name].subtle).toBeTruthy()
    }
  })
})
