'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">{children}</main>
      <Footer />
    </div>
  )
}
