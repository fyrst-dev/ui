import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeVueEntryTypeDeclarations } from './write-vue-entry-types.ts'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const distDir = join(rootDir, 'dist')

function copyDirContents(from: string, to: string) {
  if (!existsSync(from)) {
    throw new Error(`Missing build output: ${from}`)
  }

  mkdirSync(to, { recursive: true })

  for (const name of readdirSync(from)) {
    cpSync(join(from, name), join(to, name), { recursive: true })
  }
}

function removeMatching(dir: string, shouldRemove: (name: string, absolutePath: string) => boolean) {
  if (!existsSync(dir)) {
    return
  }

  for (const name of readdirSync(dir)) {
    const absolutePath = join(dir, name)
    const stats = statSync(absolutePath)

    if (stats.isDirectory()) {
      removeMatching(absolutePath, shouldRemove)
      if (readdirSync(absolutePath).length === 0) {
        rmSync(absolutePath, { recursive: true })
      }
      continue
    }

    if (shouldRemove(name, absolutePath)) {
      rmSync(absolutePath)
    }
  }
}

copyDirContents(join(rootDir, 'packages/components/dist'), distDir)
copyDirContents(join(rootDir, 'packages/preset/dist'), join(distDir, 'preset'))

const nuxtDist = join(rootDir, 'packages/nuxt/dist')
if (existsSync(nuxtDist)) {
  copyDirContents(nuxtDist, join(distDir, 'nuxt'))
}

const nuxtEntriesPath = join(distDir, 'nuxt-entries.json')
if (!existsSync(nuxtEntriesPath)) {
  throw new Error(`Missing build output: ${nuxtEntriesPath}`)
}

const nuxtEntries = JSON.parse(readFileSync(nuxtEntriesPath, 'utf8')) as {
  components: Record<string, string>
  composables: string[]
}
writeVueEntryTypeDeclarations(distDir, nuxtEntries)

removeMatching(distDir, (name, absolutePath) => {
  if (name.endsWith('.d.ts.map')) {
    return true
  }
  return absolutePath.endsWith(join('nuxt', 'runtime', 'server', 'tsconfig.json'))
})
