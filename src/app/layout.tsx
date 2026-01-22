import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono, Courier_Prime, Kalam, Michroma, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

// Optimize fonts with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
  display: 'swap',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kalam',
  display: 'swap',
})

const michroma = Michroma({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ryan Leskiw — UX Researcher & Designer',
  description: 'Ryan Leskiw is a UX researcher and designer passionate about understanding user needs and creating thoughtful solutions through research-driven design.',
  keywords: ['Ryan Leskiw', 'UX Researcher', 'UX Designer', 'User Experience', 'UX Research', 'Portfolio'],
  authors: [{ name: 'Ryan Leskiw' }],
  creator: 'Ryan Leskiw',
  openGraph: {
    title: 'Ryan Leskiw — UX Researcher & Designer',
    description: 'Portfolio showcasing UX research and design case studies by Ryan Leskiw.',
    type: 'website',
    siteName: 'Ryan Leskiw Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Leskiw — UX Researcher & Designer',
    description: 'Portfolio showcasing UX research and design case studies.',
  },
  metadataBase: new URL('https://rleskiw.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${courierPrime.variable} ${kalam.variable} ${michroma.variable} ${lora.variable}`}>
      <body className="bg-bg-dark text-text-light font-sans">
        <StructuredData />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
