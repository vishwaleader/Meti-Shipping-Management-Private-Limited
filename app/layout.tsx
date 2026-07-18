import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Meti Shipping Management Private Limited | Global Shipping & Logistics Services',
  description:
    'Meti Shipping Management Private Limited — trusted shipping logistics, cargo transport, and warehousing storage services since 2008. Delivering excellence across international waters.',
  generator: 'v0.app',
  openGraph: {
    title: 'Meti Shipping Management Private Limited',
    description:
      'Trusted transport, logistics, and storage services since 2008.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1e3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
