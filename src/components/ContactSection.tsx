'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Send, CheckCircle, User, Mail, Phone, Building, MessageCircle, Calendar } from 'lucide-react'

const ContactSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
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
        message: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-section mb-6 text-neutral-dark-gray"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            Starten Sie{' '}
            <span className="gradient-text">noch heute</span>
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Vereinbaren Sie Ihre kostenlose 30-minütige Demo und sehen Sie DentalBotPro live in Aktion. 
            Erfahren Sie, wie Sie Ihre Zahnarztpraxis revolutionieren können.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <motion.div
                key="form"
                variants={itemVariants}
                exit={{ opacity: 0, y: -30 }}
                className="bg-gradient-to-br from-white to-neutral-light-gray rounded-2xl shadow-large p-8 lg:p-12"
              >
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-blue rounded-xl shadow-lg mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark-gray mb-2">
                    Demo Termin vereinbaren
                  </h3>
                  <p className="text-neutral-text-gray">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark-gray mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Ihr vollständiger Name"
                        className="form-input"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark-gray mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Ihre E-Mail-Adresse"
                        className="form-input"
                      />
                    </motion.div>
                  </div>

                  {/* Second Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark-gray mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Ihre Telefonnummer"
                        className="form-input"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="practice" className="block text-sm font-semibold text-neutral-dark-gray mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Zahnarztpraxisname *
                      </label>
                      <input
                        type="text"
                        id="practice"
                        name="practice"
                        value={formData.practice}
                        onChange={handleInputChange}
                        required
                        placeholder="Name Ihrer Zahnarztpraxis"
                        className="form-input"
                      />
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-dark-gray mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Ihre Nachricht (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Besondere Anforderungen oder Fragen..."
                      className="form-textarea"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants} className="text-center">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center text-lg px-8 py-4 shadow-lg hover:shadow-glow-blue"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Jetzt Demo buchen
                    </motion.button>
                  </motion.div>

                  {/* Privacy Notice */}
                  <motion.div variants={itemVariants} className="text-center">
                    <p className="text-sm text-neutral-text-gray">
                      Ihre Daten werden vertraulich behandelt und nach deutschen Datenschutzstandards verarbeitet.
                    </p>
                  </motion.div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                id="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-2xl shadow-large p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 10 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-green-700 mb-4"
                >
                  Vielen Dank für Ihre Anfrage!
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2 text-green-600"
                >
                  <p className="text-lg">
                    Wir haben Ihre Demo-Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                  </p>
                  <p>
                    Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Details.
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSuccess(false)}
                  className="mt-8 btn-secondary"
                >
                  Weitere Anfrage senden
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-neutral-light-gray rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-dark-gray mb-4">
              Oder kontaktieren Sie uns direkt
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-text-gray">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2 text-primary-blue" />
                <a href="mailto:info@dentalbotpro.com" className="hover:text-primary-blue transition-colors">
                  info@dentalbotpro.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 text-primary-blue" />
                <a href="tel:+4930120844300" className="hover:text-primary-blue transition-colors">
                  +49 (0) 30 120 844 30
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
