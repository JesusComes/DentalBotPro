import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (formData.name && formData.email && formData.phone && formData.practice) {
      setShowSuccess(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        message: ''
      })
      
      // Scroll to success message
      setTimeout(() => {
        const successElement = document.getElementById('success-message')
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      alert('Bitte füllen Sie alle Pflichtfelder aus.')
    }
  }

  return (
    <section className="relative py-20 overflow-hidden" id="kontakt">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Dental office background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-blue"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Starten Sie noch heute
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Vereinbaren Sie Ihre kostenlose 30-minütige Demo und sehen Sie DentalBotPro live in Aktion. 
            Erfahren Sie, wie Sie Ihre Zahnarztpraxis revolutionieren können.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-4">Demo Termin vereinbaren</h3>
              <p className="text-lg text-neutral-text">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen
              </p>
            </div>

            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr vollständiger Name"
                      className="w-full px-4 py-3 border-2 border-neutral-medium rounded-xl focus:border-primary-blue focus:outline-none focus:ring-4 focus:ring-primary-blue/10 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                      E-Mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Ihre E-Mail-Adresse"
                      className="w-full px-4 py-3 border-2 border-neutral-medium rounded-xl focus:border-primary-blue focus:outline-none focus:ring-4 focus:ring-primary-blue/10 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Ihre Telefonnummer"
                      className="w-full px-4 py-3 border-2 border-neutral-medium rounded-xl focus:border-primary-blue focus:outline-none focus:ring-4 focus:ring-primary-blue/10 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="practice" className="block text-sm font-semibold text-neutral-dark mb-2">
                      Zahnarztpraxisname <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="practice"
                      name="practice"
                      value={formData.practice}
                      onChange={handleChange}
                      required
                      placeholder="Name Ihrer Zahnarztpraxis"
                      className="w-full px-4 py-3 border-2 border-neutral-medium rounded-xl focus:border-primary-blue focus:outline-none focus:ring-4 focus:ring-primary-blue/10 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Ihre Nachricht (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Besondere Anforderungen oder Fragen..."
                    className="w-full px-4 py-3 border-2 border-neutral-medium rounded-xl focus:border-primary-blue focus:outline-none focus:ring-4 focus:ring-primary-blue/10 transition-all duration-300 resize-vertical"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto btn-secondary text-lg px-12 py-4 shadow-lg hover:shadow-2xl"
                  >
                    <span className="mr-2">Jetzt Demo buchen</span>
                    <i className="fas fa-calendar-check"></i>
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-center text-sm text-neutral-text"
                >
                  <p>Ihre Daten werden vertraulich behandelt und nach deutschen Datenschutzstandards verarbeitet.</p>
                </motion.div>
              </form>
            ) : (
              <motion.div
                id="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check-circle text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-lg text-neutral-text mb-4">
                  Wir haben Ihre Demo-Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                </p>
                <p className="text-neutral-text">
                  Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Details.
                </p>
                <motion.button
                  onClick={() => setShowSuccess(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 btn-primary"
                >
                  Weitere Anfrage senden
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact