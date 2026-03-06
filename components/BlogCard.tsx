import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/types'

interface BlogCardProps {
  post: Post
  featured?: boolean
}

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    dataengineering: 'from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-700 dark:text-blue-300',
    development: 'from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 text-purple-700 dark:text-purple-300',
    cloud: 'from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 text-emerald-700 dark:text-emerald-300',
    learning: 'from-amber-100 to-amber-50 dark:from-amber-900/30 dark:to-amber-800/20 text-amber-700 dark:text-amber-300',
  }

  return colors[category.toLowerCase()] || 'from-slate-100 to-slate-50 dark:from-slate-900/30 dark:to-slate-800/20 text-slate-700 dark:text-slate-300'
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group hover-lift ${
        featured
          ? 'card-featured md:flex gap-6 overflow-hidden'
          : 'card'
      } stagger-item`}
    >
      {featured && post.image && (
        <div className="relative h-48 w-full md:h-auto md:w-2/5 flex-shrink-0 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className={featured ? 'flex-1 p-6' : ''}>
        {post.featured && (
          <div className="mb-3">
            <span className="featured-badge">⭐ Featured</span>
          </div>
        )}

        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          <Link
            href={`/blog/${post.slug}`}
            className="text-slate-900 dark:text-white"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-base mb-4 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-4">
          <time dateTime={post.date} className="font-medium">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600" />
          <span className="reading-time">📖 {post.readingTime} min</span>
        </div>

        {(post.tags.length > 0 || post.categories.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map(category => {
              const colors = getCategoryColor(category)
              return (
                <Link
                  key={category}
                  href={`/blog/categories/${encodeURIComponent(category)}`}
                  className={`category-badge ${colors}`}
                >
                  <span className="text-accent-600 dark:text-accent-300 font-bold">●</span>
                  {category}
                </Link>
              )
            })}
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tags/${encodeURIComponent(tag)}`}
                className="tag-badge"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
