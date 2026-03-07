/** @type {import('next').NextConfig} */
const { execSync } = require('node:child_process')
const path = require('node:path')

function inferRepoName() {
  if (process.env.GITHUB_REPOSITORY) {
    const [, repo] = process.env.GITHUB_REPOSITORY.split('/')
    return repo || ''
  }

  try {
    const remoteUrl = execSync('git config --get remote.origin.url', { stdio: 'pipe' })
      .toString()
      .trim()

    // Supports:
    // - git@github.com:owner/repo.git
    // - https://github.com/owner/repo.git
    // - https://github.com/owner/repo
    const normalized = remoteUrl.replace(/\.git$/, '')
    const parts = normalized.split(/[/:]/).filter(Boolean)
    return parts[parts.length - 1] || ''
  } catch {
    return ''
  }
}

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPO_NAME || inferRepoName()
const basePath =
  isGithubPages && repoName && !repoName.endsWith('.github.io') ? `/${repoName}` : ''

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: false,
  },
  turbopack: {},
  productionBrowserSourceMaps: false,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 30 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  webpack(config, { isServer }) {
    // ensure all packages resolve to the same React copy to avoid React version
    // mismatches during prerendering with Turbopack/webpack workers. Note: when
    // using Turbopack, this config is mostly ignored but we keep it for
    // compatibility with webpack builds.
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react')
    config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom')
    return config
  },
  ...(isGithubPages
    ? {
        output: 'export',
        trailingSlash: true,
        basePath: basePath || undefined,
        assetPrefix: basePath ? `${basePath}/` : undefined,
        images: {
          unoptimized: true,
        },
      }
    : {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            },
            {
              protocol: 'http',
              hostname: '**',
            },
          ],
        },
        headers: async () => {
          return [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=3600, stale-while-revalidate=86400',
                },
              ],
            },
          ]
        },
      }),
}

module.exports = nextConfig
