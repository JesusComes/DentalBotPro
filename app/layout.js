import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DentalBot Pro - AI-Powered Dental Assistant',
  description: 'Streamline patient communication, appointment scheduling, and treatment recommendations with our advanced AI technology designed specifically for dental professionals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}