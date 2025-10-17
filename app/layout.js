import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
  description: 'Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis. Verpassen Sie nie wieder einen Patientenanruf!',
  keywords: 'DentalBot, KI-Assistent, Zahnarztpraxis, AI Agent, Terminbuchung, Zahnmedizin, Patientenkommunikation',
  authors: [{ name: 'MiniMax Agent' }],
  creator: 'MiniMax Agent',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
    description: 'Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentalBotPro | KI-Assistent für Zahnarztpraxen',
    description: 'Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}