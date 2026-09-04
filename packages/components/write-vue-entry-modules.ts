import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { nuxtComposables, vueLibEntries } from './vue-entries.ts'

const vueDir = join(import.meta.dirname, 'src/vue')
const composableNames = new Set<string>(nuxtComposables)

function toVueEntrySpecifier(file: string): string {
  return `../${file.replace(/^src\//, '').replace(/\.ts$/, '')}`
}

export function writeVueEntryModules() {
  mkdirSync(vueDir, { recursive: true })

  const keep = new Set(Object.keys(vueLibEntries).map(name => `${name}.ts`))
  for (const name of readdirSync(vueDir)) {
    if (!keep.has(name)) {
      rmSync(join(vueDir, name))
    }
  }

  for (const [name, file] of Object.entries(vueLibEntries)) {
    const specifier = toVueEntrySpecifier(file)
    const source = composableNames.has(name)
      ? `export { ${name} } from '${specifier}'\n`
      : `export { default } from '${specifier}'\n`
    writeFileSync(join(vueDir, `${name}.ts`), source)
  }
}

if (import.meta.main) {
  writeVueEntryModules()
}
