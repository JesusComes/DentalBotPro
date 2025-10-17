import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: ''
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
        practice: ''
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
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-green-600 via-blue-600 to-purple-600"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-accent-green/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(34,197,94,0.5)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Gradient Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-green-500/10 to-blue-500/10"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1))",
                  "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(34,197,94,0.1))",
                  "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  className="text-5xl mb-6 text-accent-green-500"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <i className="fas fa-calendar-check"></i>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Demo Termin vereinbaren
                </h3>
                <p className="text-lg text-gray-600">
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
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.name')} <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ihr vollständiger Name"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-accent-green-500 focus:outline-none focus:ring-4 focus:ring-accent-green-500/10 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.email')} <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Ihre E-Mail-Adresse"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-accent-green-500 focus:outline-none focus:ring-4 focus:ring-accent-green-500/10 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
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
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.phone')} <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Ihre Telefonnummer"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-accent-green-500 focus:outline-none focus:ring-4 focus:ring-accent-green-500/10 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="practice" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.practice')} <span className="text-red-500">*</span>
                      </label>
                      <motion.input
                        type="text"
                        id="practice"
                        name="practice"
                        value={formData.practice}
                        onChange={handleChange}
                        required
                        placeholder="Name Ihrer Praxis"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-accent-green-500 focus:outline-none focus:ring-4 focus:ring-accent-green-500/10 transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-accent-green-500 hover:bg-accent-green-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center group"
                    >
                      <span className="mr-3">{t('contact.form.submit')}</span>
                      <motion.i 
                        className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-gray-600"
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
                  <motion.div 
                    className="w-20 h-20 bg-accent-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <i className="fas fa-check-circle text-3xl text-accent-green-600"></i>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-accent-green-600 mb-4">
                    {t('contact.form.success')}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Wir haben Ihre Demo-Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                  </p>
                  <p className="text-gray-600">
                    Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Details.
                  </p>
                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-accent-green-500 hover:bg-accent-green-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Weitere Anfrage senden
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact