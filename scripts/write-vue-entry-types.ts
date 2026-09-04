import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export function writeVueEntryTypeDeclarations(
  distDir: string,
  entries: {
    components: Record<string, string>
    composables: readonly string[]
  },
) {
  const vueDir = join(distDir, 'vue')
  mkdirSync(vueDir, { recursive: true })

  for (const name of new Set(Object.values(entries.components))) {
    writeFileSync(
      join(vueDir, `${name}.d.ts`),
      `export { ${name} as default } from '../index'\n`,
    )
  }

  for (const name of entries.composables) {
    writeFileSync(
      join(vueDir, `${name}.d.ts`),
      `export { ${name} } from '../index'\n`,
    )
  }
}
