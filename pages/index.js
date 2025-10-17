import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutModal from '../components/AboutModal'

export default function Home() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  const openAboutModal = () => setIsAboutModalOpen(true)
  const closeAboutModal = () => setIsAboutModalOpen(false)

  return (
    <>
      <Head>
        <title>DentalBotPro | KI-Assistent für Zahnarztpraxen</title>
        <meta name="description" content="Verpassen Sie nie wieder einen Patientenanruf! Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen und bucht Termine." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header onOpenAbout={openAboutModal} />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Features Section - includes Problems, Solution, Features, Integration, How it Works, Pricing, and Benefits */}
          <Features />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* About Modal */}
        <AboutModal 
          isOpen={isAboutModalOpen} 
          onClose={closeAboutModal} 
        />
      </div>
    </>
  )
}