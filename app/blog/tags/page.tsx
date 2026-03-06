import { getAllTags, getTagPostCount } from '@/lib/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Tags - Learning Recipes',
  description: 'Browse articles by tag',
}

export default async function TagsPage() {
  const tags = await getAllTags()
  const postsPerTag = await getTagPostCount()

  const sortedTags = tags.sort()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Tags</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Explore articles by topic tags
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {sortedTags.map(tag => (
          <Link
            key={tag}
            href={`/blog/tags/${encodeURIComponent(tag)}`}
            className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            title={`${postsPerTag[tag] || 0} articles with tag "${tag}"`}
          >
            #{tag}
            {postsPerTag[tag] && postsPerTag[tag] > 1 && (
              <span className="ml-2 text-xs opacity-75">({postsPerTag[tag]})</span>
            )}
          </Link>
        ))}
      </div>

      {tags.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 dark:text-slate-400">No tags found yet.</p>
        </div>
      )}
    </div>
  )
}
