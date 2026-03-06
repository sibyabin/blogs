import { spawnSync } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'

const repoRoot = process.cwd()
const outDir = path.join(repoRoot, 'out')
const docsDir = path.join(repoRoot, 'docs')

async function pathExists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function main() {
  // Clean docs/
  await fs.rm(docsDir, { recursive: true, force: true })

  // Build static export (Next writes to out/ when output: 'export')
  const env = { ...process.env, GITHUB_PAGES: 'true' }
  const result = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', env })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }

  if (!(await pathExists(outDir))) {
    console.error('Expected "out/" directory was not created. Check Next.js export configuration.')
    process.exit(1)
  }

  // Copy out/ -> docs/
  await fs.cp(outDir, docsDir, { recursive: true })

  // Required for GitHub Pages (prevents Jekyll from ignoring _next/)
  await fs.writeFile(path.join(docsDir, '.nojekyll'), '')

  console.log('\nExport complete.')
  console.log('Next step:')
  console.log('  git add docs && git commit -m "Export site to docs" && git push')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
