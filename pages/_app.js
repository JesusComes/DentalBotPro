import '../styles/globals.css'
import '../styles/custom.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </LanguageProvider>
  )
}