import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
  description: 'Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis.',
  keywords: 'DentalBot, AI, Zahnarztpraxis, KI-Assistent, Terminbuchung, Dental AI, Praxisautomatisierung',
  authors: [{ name: 'MiniMax Agent' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A66C2',
  openGraph: {
    title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
    description: 'Revolutionieren Sie Ihre Zahnarztpraxis mit unserem intelligenten KI-Assistenten.',
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US', 'fr_FR'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
    description: 'Revolutionieren Sie Ihre Zahnarztpraxis mit unserem intelligenten KI-Assistenten.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0A66C2" />
        <meta name="theme-color" content="#0A66C2" />
      </head>
      <body className={`${inter.className} font-inter antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
