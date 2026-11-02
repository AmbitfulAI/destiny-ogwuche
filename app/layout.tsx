import type { Metadata } from 'next'
import { Newsreader } from 'next/font/google'
import './globals.css'

// Newsreader: an editorial serif for headings. IBM Plex Sans (self-hosted in public/fonts, see globals.css):
// a sans with engineering roots for text.
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  axes: ['opsz'],
  style: ['normal', 'italic'],
  display: 'swap',
})

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
  verification: {
    // Google Search Console ownership check for https://www.destinyogwuche.com/
    google: 'JZqLlTRN33e5dAGpNWqcXVXHCgnhFshfT3H2bodX02o',
  },
  // Only site-wide values here: each page sets its own share title, description and address.
  openGraph: {
    siteName: 'Destiny Ogwuche',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"
import { JsonLd } from "@/components/json-ld"
import { personSchema, websiteSchema } from "@/lib/book/schema"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/ibm-plex-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${newsreader.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd data={[personSchema(), websiteSchema()]} />
          {children}
          <Toaster position="top-right" richColors />
          {/* Vercel Web Analytics and Speed Insights: cookie-free visitor and performance statistics.
              Switch them on in the Vercel project under Analytics and Speed Insights. */}
          <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
          <Script src="/_vercel/speed-insights/script.js" strategy="afterInteractive" />
        </ThemeProvider>
      </body>
    </html>
  )
}
