import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'

const styleCssPath = fileURLToPath(new URL('../../../dist/style.css', import.meta.url))
const buildinfoPath = fileURLToPath(new URL('../../../dist/panda.buildinfo.json', import.meta.url))
const rootDir = fileURLToPath(new URL('../../..', import.meta.url))
const rootPackagePath = join(rootDir, 'package.json')

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
    files: string[]
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

  it('does not pack preset codegen folders', () => {
    expect(pkg.files).toEqual([
      'dist',
      'packages/preset/dist',
      'packages/components/dist',
      'packages/nuxt/dist',
      'LICENSE',
      'README.md',
    ])
    expect(pkg.files.some(entry => entry.startsWith('packages/preset/css'))).toBe(false)
  })
})

describe('packed install exports', () => {
  it('resolves public subpaths from an installed tarball', () => {
    expect(existsSync(join(rootDir, 'dist/style.css'))).toBe(true)
    expect(existsSync(join(rootDir, 'packages/nuxt/dist/module.mjs'))).toBe(true)

    const dir = mkdtempSync(join(tmpdir(), 'fyrst-ui-pack-'))

    try {
      execFileSync('npm', ['pack', '--ignore-scripts', `--pack-destination=${dir}`], {
        cwd: rootDir,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      })

      const tarball = join(dir, 'fyrst-ui-0.1.0.tgz')
      expect(existsSync(tarball)).toBe(true)

      const packedFiles = execFileSync('tar', ['-tzf', tarball], { encoding: 'utf8' })
        .split('\n')
        .filter(Boolean)

      expect(packedFiles).toContain('package/dist/style.css')
      expect(packedFiles).toContain('package/dist/panda.buildinfo.json')
      expect(packedFiles).toContain('package/packages/preset/dist/index.js')
      expect(packedFiles).toContain('package/packages/nuxt/dist/module.mjs')
      expect(packedFiles).not.toContain('package/packages/components/dist/panda.buildinfo.json')
      expect(packedFiles).not.toContain('package/packages/components/dist/ui-components.css')
      expect(packedFiles.some(file => file.includes('packages/preset/types/csstype'))).toBe(false)
      expect(packedFiles.some(file => file.startsWith('package/packages/preset/css/'))).toBe(false)

      const consumer = join(dir, 'consumer')
      mkdirSync(consumer)
      writeFileSync(join(consumer, 'package.json'), JSON.stringify({
        name: 'fyrst-ui-consumer',
        private: true,
        type: 'module',
      }))

      execFileSync('npm', ['install', '--ignore-scripts', '--omit=dev', '--no-audit', '--no-fund', tarball], {
        cwd: consumer,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      })

      const require = createRequire(join(consumer, 'package.json'))
      expect(require.resolve('@fyrst/ui/style.css')).toMatch(/style\.css$/)
      expect(require.resolve('@fyrst/ui/panda.buildinfo.json')).toMatch(/panda\.buildinfo\.json$/)
      expect(require.resolve('@fyrst/ui/design-preset')).toMatch(/index\.(js|cjs)$/)
      expect(require.resolve('@fyrst/ui/preset')).toMatch(/index\.(js|cjs)$/)
      expect(require.resolve('@fyrst/ui/nuxt')).toMatch(/module\.mjs$/)
      expect(require.resolve('@fyrst/ui')).toMatch(/index\.(js|cjs)$/)
      expect(require.resolve('@fyrst/ui/components')).toMatch(/index\.(js|cjs)$/)
    }
    finally {
      rmSync(dir, { recursive: true, force: true })
    }
  }, 120_000)
})
