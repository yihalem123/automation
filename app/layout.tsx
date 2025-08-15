import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Automate Everything. Grow Faster.',
  description: 'We help businesses automate marketing, digital operations, and custom workflows with AI. Boost efficiency, reduce costs, and scale faster with our end-to-end automation solutions.',
  keywords: 'AI automation, marketing automation, digital operations, workflow automation, business automation, artificial intelligence, process automation',
  authors: [{ name: 'AI Automation Solutions' }],
  creator: 'AI Automation Solutions',
  publisher: 'AI Automation Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Automation Solutions | Automate Everything. Grow Faster.',
    description: 'We help businesses automate marketing, digital operations, and custom workflows with AI. Transform your business with intelligent automation.',
    siteName: 'AI Automation Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Solutions | Automate Everything. Grow Faster.',
    description: 'Transform your business with intelligent automation. Marketing, operations, and custom workflows powered by AI.',
    images: ['/twitter-image.png'],
    creator: '@yourtwitterhandle',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
