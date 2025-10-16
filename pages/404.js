import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Seite nicht gefunden | DentalBotPro</title>
        <meta name="description" content="Die angeforderte Seite wurde nicht gefunden." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-lg">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <i className="fas fa-exclamation-triangle text-4xl"></i>
          </div>
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Seite nicht gefunden</h2>
          <p className="text-white/80 mb-8">
            Die angeforderte Seite existiert nicht oder wurde verschoben.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-home mr-2"></i>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </>
  )
}
