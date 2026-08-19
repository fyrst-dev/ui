import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const packageRoot = fileURLToPath(new URL('..', import.meta.url))
const styledSystemCss = fileURLToPath(new URL('../styled-system/css/index.mjs', import.meta.url))

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
