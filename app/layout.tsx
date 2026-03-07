import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Data & AI in the Cloud - Learning Recipes',
  description: 'Master Cloud Computing, Data Engineering, and AI through practical recipes and real-world insights from real-world industry practice.',
  metadataBase: new URL('https://blogs.sibyabin.tech'),
  alternates: {
    canonical: 'https://blogs.sibyabin.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blogs.sibyabin.tech',
    title: 'Data & AI in the Cloud - Learning Recipes',
    description: 'Master Cloud Computing, Data Engineering, and AI through practical recipes and real-world insights',
    siteName: 'Learning Recipes',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sibyoncloud',
    title: 'Data & AI in the Cloud - Learning Recipes',
    description: 'Master Cloud Computing, Data Engineering, and AI through practical recipes',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
