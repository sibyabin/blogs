'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-10 w-10" />
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors ${
        theme === 'dark' ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      }`}
      aria-label="Toggle dark mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.39 0l.707.707a1 1 0 01-1.39 1.39L14.63 3.93a1 1 0 010-1.39zm2.93 2.93a1 1 0 011.39 0l.707.707a1 1 0 01-1.39 1.39l-.707-.707a1 1 0 010-1.39zM10 7a3 3 0 100 6 3 3 0 000-6zm-4.22-1.78a1 1 0 011.39 0l.707.707a1 1 0 01-1.39 1.39l-.707-.707a1 1 0 010-1.39zM3.07 9.22a1 1 0 011.39 0L5.177 10.5a1 1 0 01-1.39 1.39l-.707-.707a1 1 0 010-1.39zM3 13a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm1.22-5.22a1 1 0 011.39 0l.707.707a1 1 0 01-1.39 1.39L3.63 8.93a1 1 0 010-1.39zm8 8a1 1 0 011.39 0l.707.707a1 1 0 11-1.39 1.39l-.707-.707a1 1 0 010-1.39zm4.22-1.78a1 1 0 011.39 0l.707.707a1 1 0 01-1.39 1.39l-.707-.707a1 1 0 010-1.39z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}
