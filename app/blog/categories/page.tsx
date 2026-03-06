import { getAllCategories, getCategoryPostCount } from '@/lib/posts'
import Link from 'next/link'

export const metadata = {
  title: 'Categories - Learning Recipes',
  description: 'Browse articles by category',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()
  const postsPerCategory = await getCategoryPostCount()

  const sortedCategories = categories.sort()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Categories</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Explore articles organized by topic
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedCategories.map(category => (
          <Link
            key={category}
            href={`/blog/categories/${encodeURIComponent(category)}`}
            className="group p-6 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-900/50 transition-all"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {category}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {postsPerCategory[category] || 0} {postsPerCategory[category] === 1 ? 'article' : 'articles'}
            </p>
          </Link>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 dark:text-slate-400">No categories found yet.</p>
        </div>
      )}
    </div>
  )
}
