import { getAllCategories, getPostsByCategory } from '@/lib/posts'
import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  return {
    title: `${decodedCategory} - Learning Recipes`,
    description: `Articles and insights about ${decodedCategory}`,
  }
}

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map(category => ({
    category: encodeURIComponent(category),
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  const posts = await getPostsByCategory(decodedCategory)
  const categories = await getAllCategories()

  if (posts.length === 0 && !categories.includes(decodedCategory)) {
    notFound()
  }

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <nav className="flex items-center gap-2 text-sm ">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
          Blog
        </Link>
        <span className="text-slate-400">/</span>
        <Link href="/blog/categories" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
          Categories
        </Link>
        <span className="text-slate-400">/</span>
        <span className="text-slate-900 dark:text-white font-semibold">{decodedCategory}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Category: {decodedCategory}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
        </p>
      </header>

      {/* Posts */}
      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map(post => <BlogCard key={post.slug} post={post} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Related Categories */}
      <aside className="border-t border-slate-200 dark:border-slate-800 pt-8">
        <h2 className="font-semibold text-lg mb-4">Other Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories
            .filter(cat => cat !== decodedCategory)
            .map(category => (
              <Link
                key={category}
                href={`/blog/categories/${encodeURIComponent(category)}`}
                className="inline-block bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded transition-colors"
              >
                {category}
              </Link>
            ))}
        </div>
      </aside>
    </div>
  )
}
