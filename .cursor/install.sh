#!/usr/bin/env bash
set -euo pipefail

# Idempotent bootstrap for the @fyrst/ui Bun workspace.
# Safe to run repeatedly and against cached/partial state.

cd "$(dirname "$0")/.."

# 1. Install Bun (the repo's package manager + build tool) if missing.
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
if ! command -v bun >/dev/null 2>&1; then
  curl -fsSL https://bun.sh/install | bash
fi

# Expose bun/bunx on the system PATH so every phase (install, start,
# terminals) and interactive shell can find it regardless of shell profile.
if command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
  sudo ln -sf "$BUN_INSTALL/bin/bun" /usr/local/bin/bun
  sudo ln -sf "$BUN_INSTALL/bin/bunx" /usr/local/bin/bunx
fi

# 2. Install workspace dependencies from the committed lockfile.
bun install --frozen-lockfile

# 3. Generate the Nuxt module + playground types (.nuxt). These are required
#    before the Nuxt module can be built and before the playground can run,
#    because packages/nuxt/tsconfig.json extends the generated .nuxt/tsconfig.json.
bun run dev:nuxt:prepare

# 4. Build the publishable packages (preset, components, Nuxt module). This also
#    emits the root dist/ assets (style.css, panda.buildinfo.json) that the Nuxt
#    module injects and the playground dev server serves.
bun run build

# 5. Generate the playground's Panda styled-system codegen so the dev server can
#    resolve `styled-system/*` imports.
(cd packages/nuxt/playground && bun run prepare)
