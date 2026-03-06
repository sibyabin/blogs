import { getAllTags, getPostsByTag } from '@/lib/posts'
import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  return {
    title: `#${decodedTag} - Learning Recipes`,
    description: `Articles tagged with ${decodedTag}`,
  }
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map(tag => ({
    tag: encodeURIComponent(tag),
  }))
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = await getPostsByTag(decodedTag)
  const tags = await getAllTags()

  if (posts.length === 0 && !tags.includes(decodedTag)) {
    notFound()
  }

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/blog" className="text-accent-600 hover:text-accent-700 dark:text-accent-400 font-medium">
          Blog
        </Link>
        <span className="text-slate-400">/</span>
        <Link href="/blog/tags" className="text-accent-600 hover:text-accent-700 dark:text-accent-400 font-medium">
          Tags
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-slate-900 dark:text-white font-semibold">#{decodedTag}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-5xl md:text-6xl font-serif font-bold">
          #{decodedTag}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} with this tag
        </p>
      </header>

      {/* Posts */}
      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map(post => <BlogCard key={post.slug} post={post} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No posts found with this tag.
            </p>
          </div>
        )}
      </div>

      {/* Related Tags */}
      <aside className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <h2 className="font-semibold text-lg mb-4">Other Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags
            .filter(tag => tag !== decodedTag)
            .map(tag => (
              <Link
                key={tag}
                href={`/blog/tags/${encodeURIComponent(tag)}`}
                className="inline-block bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded text-sm transition-colors"
              >
                #{tag}
              </Link>
            ))}
        </div>
      </aside>
    </div>
  )
}
