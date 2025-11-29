import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ryan Leskiw — UX Researcher & Designer',
  description: 'Portfolio showcasing UX research and design case studies.',
  openGraph: {
    title: 'Ryan Leskiw — UX Researcher & Designer',
    description: 'Portfolio showcasing UX research and design case studies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-dark text-text-light font-sans">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
