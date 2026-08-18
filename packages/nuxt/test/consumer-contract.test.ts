import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'

const styleCssPath = fileURLToPath(new URL('../../../dist/style.css', import.meta.url))
const buildinfoPath = fileURLToPath(new URL('../../../dist/panda.buildinfo.json', import.meta.url))

describe('consumer styling contract', () => {
  it('exports panda.buildinfo.json for the consuming app to include', () => {
    const buildinfo = JSON.parse(readFileSync(buildinfoPath, 'utf8')) as {
      styles?: { atomic?: unknown[] }
    }

    expect(buildinfo.styles?.atomic?.length).toBeGreaterThan(0)
  })

  it('ships icon CSS only, not compiled Panda styles or preflight', () => {
    const css = readFileSync(styleCssPath, 'utf8')

    expect(css).toContain('.icon')
    expect(css).not.toContain('@layer reset')
    expect(css).not.toContain('@layer tokens')
    expect(css).not.toContain('@layer recipes')
    expect(css).not.toContain('@layer utilities')
  })
})
