import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getFeaturedPosts } from '@/lib/posts'
import { BlogCard } from '@/components/BlogCard'
import Link from 'next/link'

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient pattern-overlay relative py-24 md:py-40">
          <div className="container relative z-10 space-y-8 text-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">
                Data & AI <span className="text-accent-600 dark:text-accent-400">in the Cloud</span>
              </h1>
              <p className="text-2xl font-light text-slate-600 dark:text-slate-400">
                Learning Recipes
              </p>
            </div>
            <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed animate-slide-up">
              Master cloud computing, data engineering, and AI development through practical
              recipes and real-world insights from deep industry experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/blog"
                className="button button-primary shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>✨ Read Articles</span>
              </Link>
              <Link
                href="/about"
                className="button button-secondary"
              >
                <span>👤 About Me</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="container py-20 md:py-24">
          <div className="space-y-12">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-semibold">
                ⭐ Curated
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Articles</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Start with our most popular and insightful content
              </p>
            </div>

            {featuredPosts.length > 0 ? (
              <div className="space-y-6">
                {featuredPosts.map((post, idx) => (
                  <div key={post.slug} style={{ animationDelay: `${idx * 0.1}s` }} className="stagger-item">
                    <BlogCard post={post} featured />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-slate-600 dark:text-slate-400 text-lg">
                  Featured articles coming soon! Start with the latest articles below.
                </div>
              </div>
            )}

            <div className="text-center pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-lg font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors underline-animate"
              >
                <span>Explore all articles</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="container py-20 md:py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-12">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold">
                📚 Topics
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Explore by Topic</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                Browse articles organized by subject area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/blog/categories/dataengineering"
                className="group card hover-lift"
              >
                <div className="mb-4 text-4xl">📊</div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  Data Engineering
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Apache Spark, Airflow, dbt, and modern data architecture patterns
                </p>
              </Link>

              <Link
                href="/blog/categories/development"
                className="group card hover-lift"
              >
                <div className="mb-4 text-4xl">💻</div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  Development
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Python, Scala, programming best practices, and tools
                </p>
              </Link>

              <Link
                href="/blog/categories/cloud"
                className="group card hover-lift"
              >
                <div className="mb-4 text-4xl">☁️</div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  Cloud Computing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  AWS, Azure, GCP, and cloud-native architecture
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Stay Connected</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Get notified about new articles on data engineering, cloud computing, and AI development
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="https://twitter.com/sibyoncloud"
                className="button button-primary hover:shadow-xl shadow-lg"
              >
                <span>𝕏 Follow on Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/sibyabin"
                className="button button-primary hover:shadow-xl shadow-lg"
              >
                <span>💼 Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
