'use client'

import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/95 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-serif font-bold text-xl text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
          <span>📚</span>
          <span className="hidden sm:inline">Recipes</span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors underline-animate">
              Blog
            </Link>
            <Link href="/blog/featured" className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors underline-animate">
              Featured
            </Link>
            <Link href="/about" className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-600 dark:hover:text-accent-400 transition-colors underline-animate">
              About
            </Link>
          </div>

          <DarkModeToggle />
        </div>
      </nav>
    </header>
  )
}
