import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'

const styleCssPath = fileURLToPath(new URL('../../../dist/style.css', import.meta.url))
const buildinfoPath = fileURLToPath(new URL('../../../dist/panda.buildinfo.json', import.meta.url))
const rootDir = fileURLToPath(new URL('../../..', import.meta.url))
const rootPackagePath = join(rootDir, 'package.json')

function readBuiltVueModule(entryName: string): string {
  const entryDir = join(rootDir, 'packages/components/dist/vue')
  const entry = readFileSync(join(entryDir, `${entryName}.js`), 'utf8')
  const parts = [entry]

  for (const match of entry.matchAll(/from\s+["'](\.\.?\/[^"']+)["']/g)) {
    const specifier = match[1]
    if (!specifier) {
      continue
    }
    parts.push(readFileSync(join(entryDir, specifier), 'utf8'))
  }

  return parts.join('\n')
}

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

  it('keeps root scripts to orchestration and daily commands', () => {
    expect(Object.keys(pkg.scripts)).toEqual([
      'lint',
      'lint:fix',
      'build',
      'build:preset',
      'build:components',
      'build:nuxt',
      'link:package',
      'watch:preset',
      'dev:components',
      'dev:nuxt',
      'dev:nuxt:prepare',
      'dev:nuxt:build',
      'test',
      'prepublishOnly',
      'clean',
    ])
  })

  it('builds the Nuxt module without the playground', () => {
    expect(pkg.scripts['build:nuxt']).toContain('prepack')
    expect(pkg.scripts['build:nuxt']).not.toContain('dev:build')
    expect(pkg.scripts['build:nuxt']).not.toContain('dev:prepare')
    expect(pkg.scripts['dev:nuxt:build']).toContain('dev:build')
    expect(pkg.scripts['build:components']).toContain('dist/style.css')
    expect(pkg.scripts['build:components']).toContain('dist/panda.buildinfo.json')

    const nuxtPkg = JSON.parse(readFileSync(join(rootDir, 'packages/nuxt/package.json'), 'utf8')) as {
      scripts: Record<string, string>
    }
    expect(nuxtPkg.scripts.prepack).toContain('nuxt-module-build prepare')
    expect(nuxtPkg.scripts.prepack).toContain('nuxt-module-build build')
  })

  it('playground dogfoods the public preset import', () => {
    const pandaConfig = readFileSync(
      join(rootDir, 'packages/nuxt/playground/panda.config.ts'),
      'utf8',
    )

    expect(pandaConfig).toContain("@fyrst/ui/design-preset")
    expect(pandaConfig).not.toContain('@fyrst/design-preset')
  })

  it('emits per-component Vue entries for Nuxt auto-imports', () => {
    const buttonPath = join(rootDir, 'packages/components/dist/vue/Button.js')
    const accordionPath = join(rootDir, 'packages/components/dist/vue/AccordionRoot.js')
    const entriesPath = join(rootDir, 'packages/components/dist/nuxt-entries.json')

    expect(existsSync(buttonPath)).toBe(true)
    expect(existsSync(accordionPath)).toBe(true)
    expect(existsSync(entriesPath)).toBe(true)

    const buttonJs = readFileSync(buttonPath, 'utf8')
    expect(buttonJs).not.toContain('AccordionRoot')

    const entries = JSON.parse(readFileSync(entriesPath, 'utf8')) as {
      components: Record<string, string>
    }
    expect(entries.components.Button).toBe('Button')
    expect(entries.components.AlertRoot).toBe('Alert')
    expect(entries.components.TabRoot).toBe('Tab')
  })

  it('does not minify vue lib identifiers that collide with Vue auto-imports', () => {
    const viteConfig = readFileSync(join(rootDir, 'packages/components/vite.config.ts'), 'utf8')
    expect(viteConfig).toMatch(/minify:\s*false/)

    const heroLead = readBuiltVueModule('HeroLead')
    expect(heroLead).toContain('defineComponent')
    expect(heroLead).not.toMatch(/\bh\s*=/)
  })

  it('publishes from GitHub Actions with npm trusted publishing', () => {
    const workflow = readFileSync(
      join(rootDir, '.github/workflows/publish.yml'),
      'utf8',
    )

    expect(workflow).toContain('id-token: write')
    expect(workflow).toContain('npm publish --access public --ignore-scripts')
    expect(workflow).not.toContain('NPM_TOKEN')
    expect(workflow).not.toContain('_authToken')
    expect(workflow).not.toContain('bun publish')
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
      expect(packedFiles).toContain('package/packages/components/dist/vue/Button.js')
      expect(packedFiles).toContain('package/packages/components/dist/nuxt-entries.json')
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

      const specifiers = [
        '@fyrst/ui',
        '@fyrst/ui/components',
        '@fyrst/ui/design-preset',
        '@fyrst/ui/preset',
        '@fyrst/ui/nuxt',
        '@fyrst/ui/style.css',
        '@fyrst/ui/panda.buildinfo.json',
      ]
      writeFileSync(
        join(consumer, 'resolve.mjs'),
        `${specifiers.map(specifier => `console.log(${JSON.stringify(specifier)} + '\\t' + import.meta.resolve(${JSON.stringify(specifier)}))`).join('\n')}\n`,
      )

      const resolved = Object.fromEntries(
        execFileSync(process.execPath, ['resolve.mjs'], {
          cwd: consumer,
          encoding: 'utf8',
        })
          .trim()
          .split('\n')
          .map((line) => {
            const [specifier, url] = line.split('\t')
            return [specifier, url]
          }),
      ) as Record<string, string>

      expect(resolved['@fyrst/ui']).toMatch(/index\.(js|cjs)$/)
      expect(resolved['@fyrst/ui/components']).toMatch(/index\.(js|cjs)$/)
      expect(resolved['@fyrst/ui/design-preset']).toMatch(/index\.(js|cjs)$/)
      expect(resolved['@fyrst/ui/preset']).toMatch(/index\.(js|cjs)$/)
      expect(resolved['@fyrst/ui/nuxt']).toMatch(/module\.mjs$/)
      expect(resolved['@fyrst/ui/style.css']).toMatch(/style\.css$/)
      expect(resolved['@fyrst/ui/panda.buildinfo.json']).toMatch(/panda\.buildinfo\.json$/)
    }
    finally {
      rmSync(dir, { recursive: true, force: true })
    }
  }, 120_000)
})
