import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'

const styleCssPath = fileURLToPath(new URL('../../../dist/style.css', import.meta.url))
const buildinfoPath = fileURLToPath(new URL('../../../dist/panda.buildinfo.json', import.meta.url))
const rootPackagePath = fileURLToPath(new URL('../../../package.json', import.meta.url))

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

describe('published package contract', () => {
  const pkg = JSON.parse(readFileSync(rootPackagePath, 'utf8')) as {
    dependencies?: Record<string, string>
    peerDependencies: Record<string, string>
    peerDependenciesMeta?: Record<string, { optional?: boolean }>
    scripts: Record<string, string>
  }

  it('does not install @nuxt/kit for Vue-only consumers', () => {
    expect(pkg.dependencies?.['@nuxt/kit']).toBeUndefined()
    expect(pkg.peerDependencies['@nuxt/kit']).toBeDefined()
    expect(pkg.peerDependenciesMeta?.['@nuxt/kit']?.optional).toBe(true)
  })

  it('declares required Vue peers', () => {
    expect(pkg.peerDependencies.vue).toBeDefined()
    expect(pkg.peerDependencies['reka-ui']).toBeDefined()
    expect(pkg.peerDependencies['@pandacss/dev']).toBeDefined()
    expect(pkg.peerDependenciesMeta?.vue?.optional).toBeUndefined()
    expect(pkg.peerDependenciesMeta?.['reka-ui']?.optional).toBeUndefined()
  })

  it('builds the Nuxt module without the playground', () => {
    expect(pkg.scripts['build:nuxt']).toContain('prepack')
    expect(pkg.scripts['build:nuxt']).not.toContain('dev:build')
    expect(pkg.scripts['build:nuxt']).not.toContain('dev:prepare')
    expect(pkg.scripts['dev:nuxt:build']).toContain('dev:build')
  })
})
