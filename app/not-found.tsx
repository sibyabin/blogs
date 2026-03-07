import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-slate-950">
      <main className="container py-20 md:py-32 flex flex-col items-center justify-center">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="text-6xl md:text-8xl font-serif font-bold text-accent-600 dark:text-accent-400">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Link
              href="/"
              className="button button-primary"
            >
              ← Back to Home
            </Link>
            <Link
              href="/blog"
              className="button button-secondary"
            >
              Browse Blog →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
