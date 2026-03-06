import { getFeaturedPosts, getSortedPosts } from '@/lib/posts'
import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'

export const metadata = {
  title: 'Featured Articles - Learning Recipes',
  description: 'Curated collection of the best articles',
}

export default async function FeaturedPage() {
  const featuredPosts = await getFeaturedPosts()
  const allPosts = await getSortedPosts()

  return (
    <div className="space-y-12">
      {/* Navigation */}
      <nav className="text-sm">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
          ← Back to Blog
        </Link>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Featured Articles</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Handpicked articles that showcase practical insights and real-world solutions
        </p>
      </header>

      {/* Featured Posts */}
      <section className="space-y-8">
        {featuredPosts.length > 0 ? (
          featuredPosts.map(post => <BlogCard key={post.slug} post={post} featured />)
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              No featured articles yet.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Check back soon for curated content!
            </p>
          </div>
        )}
      </section>

      {/* All Posts Section */}
      <section className="border-t border-slate-200 dark:border-slate-800 pt-12">
        <h2 className="text-2xl font-bold mb-6">All Articles</h2>
        <div className="space-y-6">
          {allPosts.length > 0 ? (
            allPosts.map(post => <BlogCard key={post.slug} post={post} />)
          ) : (
            <p className="text-slate-600 dark:text-slate-400">No articles available.</p>
          )}
        </div>
      </section>
    </div>
  )
}
