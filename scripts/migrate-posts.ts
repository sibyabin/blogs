import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const jekyllPostsDir = path.join(process.cwd(), '_posts')
const jekyllDraftsDir = path.join(process.cwd(), '_drafts')
const nextPostsDir = path.join(process.cwd(), 'content/posts')
const nextDraftsDir = path.join(process.cwd(), 'content/drafts')

interface JekyllFrontmatter {
  title?: string
  excerpt?: string
  image?: string
  categories?: string[]
  tags?: string[]
  last_modified_at?: string
  [key: string]: any
}

function extractDateFromFilename(filename: string): string {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : new Date().toISOString().split('T')[0]
}

function normalizeFrontmatter(jekyllData: JekyllFrontmatter, filename: string) {
  return {
    title: jekyllData.title || 'Untitled',
    excerpt: jekyllData.excerpt || '',
    image: jekyllData.image || null,
    categories: jekyllData.categories || [],
    tags: jekyllData.tags || [],
    date: extractDateFromFilename(filename),
    lastModified: jekyllData.last_modified_at || new Date().toISOString(),
    published: true,
    featured: false,
    author: 'Siby Abin Thomas',
  }
}

function cleanMarkdownContent(content: string): string {
  // Remove Jekyll-specific image attributes like {:style="float: right"}
  let cleaned = content.replace(/!\[([^\]]*)\]\(([^)]+)\)\s*\{:[^}]*\}/g, '![$1]($2)')

  // Remove other Jekyll-specific attributes
  cleaned = cleaned.replace(/\{:[^}]*\}/g, '')

  return cleaned.trim()
}

function writePostFile(filePath: string, frontmatter: any, content: string) {
  // Create directory if it doesn't exist
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // Format frontmatter
  const frontmatterStr = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:\n${value.map(v => `  - ${v}`).join('\n')}`
      }
      if (typeof value === 'string') {
        // Escape quotes in strings
        const escapedValue = value.replace(/"/g, '\\"')
        return `${key}: "${escapedValue}"`
      }
      if (value === null) {
        return `${key}: null`
      }
      return `${key}: ${value}`
    })
    .join('\n')

  const mdxContent = `---\n${frontmatterStr}\n---\n\n${content}`

  fs.writeFileSync(filePath, mdxContent, 'utf-8')
  console.log(`✓ Migrated: ${path.basename(filePath)}`)
}

async function migratePosts() {
  console.log('🚀 Starting Jekyll to Next.js migration...\n')

  let migratedCount = 0
  let errorCount = 0

  // Migrate published posts
  if (fs.existsSync(jekyllPostsDir)) {
    console.log('📝 Migrating published posts...')
    const files = fs
      .readdirSync(jekyllPostsDir)
      .filter(file => file.endsWith('.md'))

    for (const file of files) {
      try {
        const jekyllPath = path.join(jekyllPostsDir, file)
        const content = fs.readFileSync(jekyllPath, 'utf-8')
        const { data: jekyllData, content: jekyllContent } = matter(content)

        const frontmatter = normalizeFrontmatter(jekyllData as JekyllFrontmatter, file)
        const cleanedContent = cleanMarkdownContent(jekyllContent)
        const newFileName = file.replace('.md', '.mdx')
        const nextPath = path.join(nextPostsDir, newFileName)

        writePostFile(nextPath, frontmatter, cleanedContent)
        migratedCount++
      } catch (error) {
        console.error(`✗ Error migrating ${file}:`, error)
        errorCount++
      }
    }

    console.log(`✓ Published posts migrated: ${migratedCount}\n`)
  }

  // Migrate drafts
  if (fs.existsSync(jekyllDraftsDir)) {
    console.log('📝 Migrating draft posts...')
    const files = fs
      .readdirSync(jekyllDraftsDir)
      .filter(file => file.endsWith('.md'))

    const draftCount = files.length
    for (const file of files) {
      try {
        const jekyllPath = path.join(jekyllDraftsDir, file)
        const content = fs.readFileSync(jekyllPath, 'utf-8')
        const { data: jekyllData, content: jekyllContent } = matter(content)

        const frontmatter = normalizeFrontmatter(jekyllData as JekyllFrontmatter, file)
        frontmatter.published = false // Mark drafts as unpublished
        const cleanedContent = cleanMarkdownContent(jekyllContent)
        const newFileName = file.replace('.md', '.mdx')
        const nextPath = path.join(nextDraftsDir, newFileName)

        writePostFile(nextPath, frontmatter, cleanedContent)
        migratedCount++
      } catch (error) {
        console.error(`✗ Error migrating ${file}:`, error)
        errorCount++
      }
    }

    console.log(`✓ Draft posts migrated: ${draftCount}\n`)
  }

  console.log(`✅ Migration complete!`)
  console.log(`📊 Summary:`)
  console.log(`   - Total migrated: ${migratedCount}`)
  console.log(`   - Errors: ${errorCount}`)
  console.log(`\n📋 Next steps:`)
  console.log(`   1. Review migrated posts in content/posts/ and content/drafts/`)
  console.log(`   2. Update publish status for draft posts (change published: false to true)`)
  console.log(`   3. Add featured: true to your best posts`)
  console.log(`   4. Run 'npm run dev' to preview`)
}

migratePosts().catch(console.error)
