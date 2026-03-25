import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallNowButton from '@/components/CallNowButton'

export const metadata: Metadata = {
  title: 'Fish Finder Installation Harned KY | Cpt Chris',
  description: 'Professional boat electronics installation, fish finder setup, trolling motor installation, and marine wiring services in Harned, Kentucky. Serving Rough River Lake, Nolin Lake, and surrounding areas.',
  metadataBase: new URL('https://boatingadventureswithcaptainchris.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Boating Adventures With Captain Chris',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallNowButton />
      </body>
    </html>
  )
}
