import { getSortedPosts, getFeaturedPosts } from '@/lib/posts'
import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'

export const metadata = {
  title: 'Blog - Learning Recipes',
  description: 'Explore articles on data engineering, cloud computing, and AI development.',
}

export default async function BlogPage() {
  const allPosts = await getSortedPosts()
  const featuredPosts = await getFeaturedPosts()

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Practical insights and recipes for data engineering, cloud computing, and AI
        </p>
      </div>

      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="space-y-6 py-8 border-y border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <Link
              href="/blog/featured"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-6">
            {featuredPosts.map(post => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="space-y-6">
            {allPosts.length > 0 ? (
              allPosts.map(post => <BlogCard key={post.slug} post={post} />)
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-t border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="font-semibold mb-4">Explore by Category</h3>
          <Link
            href="/blog/categories"
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          >
            View All Categories →
          </Link>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Explore by Tag</h3>
          <Link
            href="/blog/tags"
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
          >
            View All Tags →
          </Link>
        </div>
      </div>
    </div>
  )
}
