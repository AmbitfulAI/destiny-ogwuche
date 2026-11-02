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

const SITE_TITLE = 'Destiny Ogwuche | Deep Tech Engineer and Author of Towards Deep Tech in Africa'
const SITE_DESCRIPTION = 'Destiny Ogwuche (Destiny Innosuccess Ogwuche) is a Nigerian-born, Netherlands-based deep tech engineer, founder of Ambitful AI and author of Towards Deep Tech in Africa: Building the Ground We Stand On.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.destinyogwuche.com'),
  title: {
    default: SITE_TITLE,
    template: '%s | Destiny Ogwuche',
  },
  description: SITE_DESCRIPTION,
  keywords: ['Destiny Ogwuche', 'Destiny Innosuccess Ogwuche', 'Towards Deep Tech in Africa', 'Deep Tech', 'Deep tech in Africa', 'Entrepreneur', 'Venture Capital', 'MedTech', 'AI', 'Africa Innovation', 'Nigeria', 'Netherlands', 'Ambitful AI'],
  authors: [{ name: 'Destiny Ogwuche', url: 'https://www.destinyogwuche.com' }],
  creator: 'Destiny Ogwuche',
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: 'Destiny Ogwuche',
    images: [
      {
        url: '/images/platform/professional_portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Destiny Ogwuche, deep tech engineer and author',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/platform/professional_portrait.jpg'],
  },
}

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { JsonLd } from "@/components/json-ld"
import { personSchema, websiteSchema } from "@/lib/book/schema"

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
          <JsonLd data={[personSchema(), websiteSchema()]} />
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
