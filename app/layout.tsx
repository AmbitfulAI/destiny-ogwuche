import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://destinyogwuche.com'),
  title: 'Destiny Innosuccess Ogwuche | Deep Tech Engineer, Entrepreneur & Venture Capital Fellow',
  description: 'Nigerian-born, Netherlands-based deep tech engineer, entrepreneur, venture capital fellow and doctoral researcher. Operating at the intersection of science, business and impact.',
  keywords: ['Deep Tech', 'Entrepreneur', 'Venture Capital', 'MedTech', 'AI', 'Africa Innovation', 'Netherlands', 'Ambitful AI'],
  authors: [{ name: 'Destiny Innosuccess Ogwuche' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Destiny Innosuccess Ogwuche | Deep Tech Engineer, Entrepreneur & Venture Capital Fellow',
    description: 'Nigerian-born, Netherlands-based deep tech engineer, entrepreneur, venture capital fellow and doctoral researcher.',
    url: 'https://destinyogwuche.com',
    siteName: 'Destiny Ogwuche',
    images: [
      {
        url: '/apple-icon.png',
        width: 180,
        height: 180,
        alt: 'Destiny Ogwuche Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Destiny Innosuccess Ogwuche | Deep Tech Engineer, Entrepreneur & Venture Capital Fellow',
    description: 'Nigerian-born, Netherlands-based deep tech engineer, entrepreneur, venture capital fellow and doctoral researcher.',
    images: ['/apple-icon.png'],
  },
}

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />

        </ThemeProvider>
      </body>
    </html>
  )
}
