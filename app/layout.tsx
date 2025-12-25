import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Мөнгөнсүх | Full-Stack Web Developer',
  description:
    'Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Building modern, scalable web applications.',
  keywords: [
    'portfolio',
    'web developer',
    'full-stack',
    'developer',
    'Мөнгөнсүх',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'TypeScript',
  ],
  authors: [{ name: 'Мөнгөнсүх' }],
  creator: 'Мөнгөнсүх',
  openGraph: {
    type: 'website',
    locale: 'mn_MN',
    title: 'Мөнгөнсүх | Full-Stack Web Developer',
    description:
      'Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB.',
    siteName: 'Мөнгөнсүх Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Мөнгөнсүх | Full-Stack Web Developer',
    description:
      'Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mn" className="dark">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  )
}
