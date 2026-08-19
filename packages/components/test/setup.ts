import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'

const packageRoot = process.cwd()
const styledSystemCss = resolve(packageRoot, 'styled-system/css/index.mjs')

if (!existsSync(styledSystemCss)) {
  execFileSync('bun', ['run', 'codegen'], {
    cwd: packageRoot,
    stdio: 'inherit',
  })
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  } as typeof IntersectionObserver
}
