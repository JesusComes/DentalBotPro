import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const AboutModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const scrollToSection = (sectionId) => {
    onClose()
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 300)
  }

  const expertise = [
    {
      icon: 'fas fa-robot',
      title: 'AI-Agent-Entwicklung',
      description: 'Maßgeschneiderte Lösungen für jeden Anwendungsfall'
    },
    {
      icon: 'fas fa-comments',
      title: 'Voice & Chat AI',
      description: 'Natürliche Kommunikationsfähigkeiten in über 100 Sprachen'
    },
    {
      icon: 'fas fa-plug',
      title: 'System-Integration',
      description: 'Nahtlose Anbindung an bestehende Software und Workflows'
    },
    {
      icon: 'fas fa-brain',
      title: 'Deep Learning',
      description: 'Kontinuierlich lernende AI-Systeme mit branchenspezifischem Fachwissen'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Zuverlässiger Betrieb und kontinuierliche Optimierung'
    }
  ]

  const industries = [
    { icon: 'fas fa-tooth', title: 'Zahnarztpraxen & Kliniken' },
    { icon: 'fas fa-shopping-cart', title: 'E-Commerce & Retail' },
    { icon: 'fas fa-home', title: 'Immobilien & Makler' },
    { icon: 'fas fa-briefcase', title: 'Beratung & Services' }
  ]

  const benefits = [
    {
      icon: 'fas fa-flag',
      title: 'Deutsche Entwicklung',
      description: 'Höchste Qualitätsstandards und DSGVO-Konformität'
    },
    {
      icon: 'fas fa-industry',
      title: 'Branchenexpertise',
      description: 'Tiefes Verständnis für spezifische Geschäftsprozesse'
    },
    {
      icon: 'fas fa-expand',
      title: 'Skalierbare Lösungen',
      description: 'Von kleinen Automatisierungen bis zu Enterprise-Systemen'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Persönlicher Support',
      description: 'Dedicated Success Manager für jeden Kunden'
    }
  ]

  const highlights = [
    {
      icon: 'fas fa-bolt',
      title: 'Schnelle Implementierung',
      description: 'Ihr KI-Assistent in nur 72 Stunden einsatzbereit'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'GDPR-konform',
      description: 'Datenschutz nach deutschen und europäischen Standards'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Maßgeschneidert',
      description: 'Individuelle Anpassung an Ihre Zahnarztpraxisabläufe'
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-primary-blue-50 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-primary-blue-200 hover:bg-primary-blue-300 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <i className="fas fa-times text-primary-blue-800"></i>
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-12"
              >
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-rocket text-3xl text-white"></i>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-blue-800 mb-4">
                  Ihr Partner für professionelle AI-Agent-Entwicklung
                </h2>
                <p className="text-lg text-primary-blue-600 max-w-3xl mx-auto leading-relaxed">
                  Unsere Firma DentalBotPro ist ein führender Spezialist für die professionelle Erstellung, 
                  Programmierung und Erweiterung von AI-Agenten aller Art. Wir entwickeln intelligente 
                  Automatisierungslösungen, die Unternehmen revolutionieren und ihre Effizienz drastisch steigern.
                </p>
              </motion.div>

              {/* Expertise Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-blue-800 mb-2">Unsere Expertise</h3>
                  <p className="text-primary-blue-600">Maßgeschneiderte Lösungen für jeden Anwendungsfall</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-white border border-primary-blue-200 rounded-xl p-6 text-center"
                    >
                      <i className={`${item.icon} text-3xl gradient-text mb-4 block`}></i>
                      <h4 className="font-semibold text-primary-blue-800 mb-2">{item.title}</h4>
                      <p className="text-sm text-primary-blue-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Industries Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-16"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-blue-800 mb-2">Für wen wir arbeiten</h3>
                  <p className="text-primary-blue-600">Unsere AI-Agenten unterstützen Unternehmen jeder Größe</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white border-2 border-primary-blue-200 rounded-xl p-6 text-center hover:border-accent-green transition-colors duration-300"
                    >
                      <i className={`${industry.icon} text-3xl gradient-text mb-3 block`}></i>
                      <h4 className="font-semibold text-primary-blue-800 text-sm">{industry.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-16"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-blue-800 mb-2">Warum DentalBotPro?</h3>
                  <p className="text-primary-blue-600">Die Vorteile unserer Lösungen</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-white border border-primary-blue-200 rounded-xl p-6 flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className={`${benefit.icon} text-lg text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-blue-800 mb-2">{benefit.title}</h4>
                        <p className="text-sm text-primary-blue-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary-blue-800 mb-2">Unsere Highlights</h3>
                  <p className="text-primary-blue-600">Was uns besonders macht</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="bg-white border border-primary-blue-200 rounded-xl p-6 text-center"
                    >
                      <i className={`${highlight.icon} text-3xl gradient-text mb-4 block`}></i>
                      <h4 className="font-semibold text-primary-blue-800 mb-2">{highlight.title}</h4>
                      <p className="text-sm text-primary-blue-600">{highlight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-center bg-primary-blue-100 border border-primary-blue-200 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-primary-blue-800 mb-4">
                  Bereit für Ihren AI-Agenten?
                </h3>
                <p className="text-primary-blue-600 mb-6 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam die perfekte AI-Lösung für Ihr Unternehmen entwickeln.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('kontakt')}
                    className="btn-primary"
                  >
                    Jetzt Beratung anfragen
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('kontakt')}
                    className="btn-secondary"
                  >
                    Live Demo testen!
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AboutModal