import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'AlphaGRID | One Group. Infinite Ambition.',
  description: 'AlphaGRID is a multi-brand holding company built around bold ideas — from data intelligence and spatial analytics to creative content. Home of AlphaDATA and AlphaTALK.',
  keywords: ['AlphaGRID', 'AlphaDATA', 'AlphaTALK', 'data science', 'GIS', 'spatial analysis', 'content creation', 'Sri Lanka', 'data analytics'],
  authors: [{ name: 'AlphaGRID' }],
  creator: 'AlphaGRID',
  publisher: 'AlphaGRID',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alphagridglobal.com',
    title: 'AlphaGRID | One Group. Infinite Ambition.',
    description: 'AlphaGRID is a multi-brand holding company built around bold ideas.',
    siteName: 'AlphaGRID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlphaGRID | One Group. Infinite Ambition.',
    description: 'AlphaGRID is a multi-brand holding company built around bold ideas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bricolage.variable} ${dmSans.variable} font-sans antialiased`}>
        <Script
          id="ensure-visibility"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof document !== 'undefined') {
                document.documentElement.style.visibility = 'visible';
              }
            `,
          }}
        />
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
