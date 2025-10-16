import { motion } from 'framer-motion'

const Testimonials = () => {
  const benefits = [
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Umsatzsteigerung',
      description: 'Durch 24/7-Erreichbarkeit verpassen Sie keine Neupatienten mehr. Unsere Kunden berichten von 30-50% mehr Terminbuchungen.'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Personalentlastung',
      description: 'Ihr Team kann sich auf wichtige Aufgaben konzentrieren, während der KI-Assistent Routineanfragen übernimmt.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Patientenzufriedenheit',
      description: 'Sofortige, kompetente Antworten rund um die Uhr führen zu deutlich zufriedeneren Patienten und besseren Bewertungen.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Effizientere Praxis',
      description: 'Automatisierte Terminplanung und intelligente Triage optimieren Ihre Praxisabläufe nachhaltig.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'DSGVO-Konform',
      description: 'Alle Daten werden auf deutschen Servern gespeichert und nach höchsten Datenschutzstandards verarbeitet.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Schnelle Implementierung',
      description: 'In nur 72 Stunden ist Ihr persönlicher KI-Assistent einsatzbereit und lernt die Besonderheiten Ihrer Praxis.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white" id="vorteile">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Ihre Vorteile mit DentalBotPro</h2>
          <p>Erleben Sie die Transformation Ihrer Zahnarztpraxis</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-teal opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-dark">{benefit.title}</h3>
                <p className="text-neutral-text leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-light rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                  Bereit für den nächsten Schritt?
                </h3>
                <p className="text-lg text-neutral-text">
                  Erleben Sie DentalBotPro live in einer persönlichen Demo und entdecken Sie das Potenzial für Ihre Praxis.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('kontakt')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary text-lg px-8 py-4 whitespace-nowrap"
              >
                <span className="mr-2">Demo vereinbaren</span>
                <i className="fas fa-arrow-right"></i>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials