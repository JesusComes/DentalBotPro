import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
  description: 'Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis. 24/7 Patientenbetreuung auf höchstem Niveau.',
  keywords: 'Zahnarzt, KI, AI, Chatbot, Terminbuchung, Zahnarztpraxis, künstliche Intelligenz, Patientenbetreuung',
  authors: [{ name: 'DentalBotPro' }],
  creator: 'MiniMax Agent',
  publisher: 'DentalBotPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dentalbotpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
    description: 'Intelligenter AI-Assistent für moderne Zahnarztpraxen. 24/7 Patientenbetreuung, Terminbuchung und Zahnmedizin-Beratung.',
    url: 'https://dentalbotpro.com',
    siteName: 'DentalBotPro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DentalBotPro - KI für Zahnarztpraxen',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
    description: 'Intelligenter AI-Assistent für moderne Zahnarztpraxen. 24/7 Patientenbetreuung und Terminbuchung.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0A66C2" />
        <meta name="msapplication-TileColor" content="#0A66C2" />
        <meta name="theme-color" content="#0A66C2" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-neutral-text-dark`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
