import { ReactNode } from 'react'

export interface PostFrontmatter {
  title: string
  excerpt: string
  image?: string
  date: string
  lastModified?: string
  published: boolean
  featured?: boolean
  author: string
  tags: string[]
  categories: string[]
  [key: string]: any
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  image?: string
  date: string
  lastModified?: string
  published: boolean
  featured?: boolean
  author: string
  tags: string[]
  categories: string[]
  content: string
  readingTime: number
}

export interface ProcessedPost extends Post {
  body: ReactNode
}

export interface SearchIndex {
  documents: Array<{
    id: string
    title: string
    excerpt: string
    slug: string
  }>
  index: Record<string, any>
}
