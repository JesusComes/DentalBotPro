import { useState, useEffect } from 'react'
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
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openAboutModal = () => setIsAboutModalOpen(true)
  const closeAboutModal = () => setIsAboutModalOpen(false)

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-blue">
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <i className="fas fa-robot text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold mb-2">DentalBotPro</h2>
          <p className="text-white/80">Wird geladen...</p>
        </div>
      </div>
    )
  }

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

          {/* Features Section - includes Problems, Solution, and Main Features */}
          <Features />

          {/* Benefits/Testimonials Section */}
          <Testimonials />

          {/* Pricing Demo Section - Not explicitly shown in original but can be added */}
          <section className="py-20 bg-neutral-light" id="preise">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-2xl p-12 shadow-large border border-neutral-medium/20">
                  <div className="w-20 h-20 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-8">
                    <i className="fas fa-play text-3xl text-white"></i>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                    Erleben Sie DentalBotPro live in Aktion
                  </h2>
                  
                  <p className="text-xl text-neutral-text mb-8 leading-relaxed">
                    Sehen Sie in einer persönlichen Demo, wie unser KI-Assistent Ihre Zahnarztpraxis 
                    revolutioniert und Ihnen dabei hilft, mehr Patienten zu gewinnen und zu betreuen.
                  </p>
                  
                  <div className="bg-neutral-light rounded-xl p-8 mb-8 border-2 border-dashed border-neutral-medium">
                    <i className="fas fa-video text-4xl text-primary-blue mb-4 block"></i>
                    <p className="text-lg text-neutral-text">
                      Hier wird Ihr personalisiertes DentalBotPro Demo-Video angezeigt
                    </p>
                  </div>
                  
                  <button
                    onClick={() => {
                      const element = document.getElementById('kontakt')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="btn-primary text-lg px-10 py-4"
                  >
                    <span className="mr-2">Jetzt kostenlose Demo buchen</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>

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