import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, PostFrontmatter } from './types'

const postsDirectory = path.join(process.cwd(), 'content/posts')
const draftsDirectory = path.join(process.cwd(), 'content/drafts')

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

function parsePostFile(filePath: string, fileName: string): Post | null {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const frontmatter = data as PostFrontmatter

    // Extract slug from filename (remove date and .mdx extension)
    const slug = fileName
      .replace(/^\d{4}-\d{2}-\d{2}-/, '')
      .replace(/\.mdx$/, '')

    return {
      slug,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      image: frontmatter.image,
      date: frontmatter.date || extractDateFromFilename(fileName),
      lastModified: frontmatter.lastModified,
      published: frontmatter.published !== false,
      featured: frontmatter.featured || false,
      author: frontmatter.author || 'Siby Abin Thomas',
      tags: frontmatter.tags || [],
      categories: frontmatter.categories || [],
      content,
      readingTime: calculateReadingTime(content),
    }
  } catch (error) {
    console.error(`Error parsing post ${filePath}:`, error)
    return null
  }
}

function extractDateFromFilename(filename: string): string {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : new Date().toISOString().split('T')[0]
}

async function getAllPosts(includeUnpublished = false): Promise<Post[]> {
  const posts: Post[] = []

  // Read published posts
  if (fs.existsSync(postsDirectory)) {
    const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'))

    for (const file of files) {
      const filePath = path.join(postsDirectory, file)
      const post = parsePostFile(filePath, file)

      if (post && post.published) {
        posts.push(post)
      }
    }
  }

  // Read drafts if includeUnpublished
  if (includeUnpublished && fs.existsSync(draftsDirectory)) {
    const files = fs.readdirSync(draftsDirectory).filter(file => file.endsWith('.mdx'))

    for (const file of files) {
      const filePath = path.join(draftsDirectory, file)
      const post = parsePostFile(filePath, file)

      if (post) {
        posts.push(post)
      }
    }
  }

  return posts
}

export async function getSortedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()

  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getSortedPosts()
  return posts.filter(post => post.featured).slice(0, 3)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts(true) // Include drafts for slug lookup

  const post = posts.find(p => p.slug === slug)
  return post || null
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getSortedPosts()
  return posts.filter(post =>
    post.categories.some(
      cat => cat.toLowerCase() === category.toLowerCase()
    )
  )
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getSortedPosts()
  return posts.filter(post =>
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getSortedPosts()
  const categories = new Set<string>()

  posts.forEach(post => {
    post.categories.forEach(cat => categories.add(cat))
  })

  return Array.from(categories).sort()
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getSortedPosts()
  const tags = new Set<string>()

  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })

  return Array.from(tags).sort()
}

export async function getCategoryPostCount(): Promise<Record<string, number>> {
  const posts = await getSortedPosts()
  const counts: Record<string, number> = {}

  posts.forEach(post => {
    post.categories.forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1
    })
  })

  return counts
}

export async function getTagPostCount(): Promise<Record<string, number>> {
  const posts = await getSortedPosts()
  const counts: Record<string, number> = {}

  posts.forEach(post => {
    post.tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1
    })
  })

  return counts
}

export async function searchPosts(query: string): Promise<Post[]> {
  const posts = await getSortedPosts()
  const lowerQuery = query.toLowerCase()

  return posts.filter(
    post =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      post.categories.some(cat => cat.toLowerCase().includes(lowerQuery))
  )
}

export async function getPostsForSitemap(): Promise<Post[]> {
  return await getAllPosts(true)
}
