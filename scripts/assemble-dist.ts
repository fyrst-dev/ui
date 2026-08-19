import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

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
copyDirContents(join(rootDir, 'packages/nuxt/dist'), join(distDir, 'nuxt'))

removeMatching(distDir, (name, absolutePath) => {
  if (name.endsWith('.d.ts.map')) {
    return true
  }
  return absolutePath.endsWith(join('nuxt', 'runtime', 'server', 'tsconfig.json'))
})
