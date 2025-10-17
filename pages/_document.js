import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="DentalBotPro - Ihr intelligenter KI-Assistent für Zahnarztpraxen. 24/7 Patientenbetreuung, automatische Terminbuchung und mehrsprachiger Support." />
        <meta name="keywords" content="Zahnarztpraxis, KI-Assistent, Terminbuchung, Patientenbetreuung, DentalBot, AI, Zahnmedizin" />
        <meta name="author" content="DentalBotPro" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="DentalBotPro | KI-Assistent für Zahnarztpraxen" />
        <meta property="og:description" content="Verpassen Sie nie wieder einen Patientenanruf! Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dentalbotpro.com" />
        <meta property="og:image" content="/logo.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DentalBotPro | KI-Assistent für Zahnarztpraxen" />
        <meta name="twitter:description" content="Verpassen Sie nie wieder einen Patientenanruf! Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen." />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DentalBotPro",
              "description": "KI-Assistent für moderne Zahnarztpraxen",
              "url": "https://dentalbotpro.com",
              "telephone": "+49 (0) 30 120 844 30",
              "email": "info@dentalbotpro.com",
              "logo": "https://dentalbotpro.com/logo.png",
              "sameAs": [
                "https://dentalbotpro.com"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}