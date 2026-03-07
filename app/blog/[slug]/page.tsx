import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getPostBySlug, getSortedPosts } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const url = `https://blogs.sibyabin.tech/blog/${post.slug}`

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: [...post.tags, ...post.categories],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      images: post.image ? [post.image] : undefined,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
      creator: '@sibyoncloud',
    },
  }
}

export async function generateStaticParams() {
  const posts = await getSortedPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX<any>({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  })

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        {/* Navigation */}
        <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <span>/</span>
          {post.categories.length > 0 && (
            <>
              <Link
                href={`/blog/categories/${post.categories[0]}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {post.categories[0]}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-slate-900 dark:text-white">{post.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div>
            <span className="font-semibold text-slate-900 dark:text-white">{post.author}</span>
          </div>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>

        {/* Categories & Tags */}
        <div className="flex flex-wrap gap-2">
          {post.categories.map(category => (
            <Link
              key={category}
              href={`/blog/categories/${category}`}
              className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-3 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {category}
            </Link>
          ))}
          {post.tags.map(tag => (
            <Link
              key={tag}
              href={`/blog/tags/${tag}`}
              className="inline-block text-slate-600 dark:text-slate-400 text-xs hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="relative h-96 w-full -mx-4 md:mx-0 md:rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-xl text-slate-600 dark:text-slate-400 italic border-l-4 border-blue-500 pl-4">
          {post.excerpt}
        </p>
      )}

      {/* Content */}
      <div className="post-content">{content}</div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 space-y-8">
        {/* Share & More */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Share this article
            </p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?url=https://blogs.sibyabin.tech/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`https://linkedin.com/sharing/share-offsite/?url=https://blogs.sibyabin.tech/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=https://blogs.sibyabin.tech/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-400">
            {post.lastModified && (
              <p>
                Last updated:{' '}
                {new Date(post.lastModified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            )}
          </div>
        </div>

        {/* Author */}
        <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">About the author</h3>
          <p className="text-slate-600 dark:text-slate-400">
            {post.author} has extensive experience in data engineering and cloud computing.
            This article is part of the Learning Recipes series.
          </p>
        </div>
      </footer>
    </article>
  )
}
