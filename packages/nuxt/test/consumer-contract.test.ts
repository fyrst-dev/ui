import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { describe, it, expect } from 'vitest'

const require = createRequire(import.meta.url)

describe('consumer styling contract', () => {
  it('exports panda.buildinfo.json for the consuming app to include', () => {
    const buildinfoPath = require.resolve('@fyrst/ui-components/panda.buildinfo.json')
    const buildinfo = JSON.parse(readFileSync(buildinfoPath, 'utf8')) as {
      styles?: { atomic?: unknown[] }
    }

    expect(buildinfo.styles?.atomic?.length).toBeGreaterThan(0)
  })

  it('ships icon CSS only, not compiled Panda styles or preflight', () => {
    const cssPath = require.resolve('@fyrst/ui-components/style.css')
    const css = readFileSync(cssPath, 'utf8')

    expect(css).toContain('.icon')
    expect(css).not.toContain('@layer reset')
    expect(css).not.toContain('@layer tokens')
    expect(css).not.toContain('@layer recipes')
    expect(css).not.toContain('@layer utilities')
  })
})
