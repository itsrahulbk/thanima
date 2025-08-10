import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thanima - Cultural Club | Where Creativity Meets Culture',
  description: 'Join Thanima Cultural Club - a vibrant community of artists, musicians, and performers celebrating the rich tapestry of arts and culture. Discover events, become a member, and showcase your talents.',
  keywords: 'cultural club, arts, music, dance, theater, cultural events, student organization, creativity, performance arts, thanima, cultural activities, student life, college activities',
  authors: [{ name: 'Thanima Cultural Club' }],
  creator: 'Thanima Cultural Club',
  publisher: 'Thanima Cultural Club',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Thanima - Cultural Club | Where Creativity Meets Culture',
    description: 'Join Thanima Cultural Club - a vibrant community of artists, musicians, and performers celebrating the rich tapestry of arts and culture.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thanima Cultural Club',
    url: 'https://thanima.club',
    images: [
      {
        url: '/images/new-background.png',
        width: 1200,
        height: 630,
        alt: 'Thanima Cultural Club - Where Creativity Meets Culture',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thanima - Cultural Club | Where Creativity Meets Culture',
    description: 'Join Thanima Cultural Club - a vibrant community of artists, musicians, and performers celebrating the rich tapestry of arts and culture.',
    images: ['/images/new-background.png'],
    creator: '@thanima.club',
    site: '@thanima.club',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#162E1C',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#162E1C',
      },
    ],
  },
  alternates: {
    canonical: 'https://thanima.club',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'msapplication-TileColor': '#162E1C',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
