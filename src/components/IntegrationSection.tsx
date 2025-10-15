'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { FileText, Eye, CheckCircle, Zap, Shield, Clock } from 'lucide-react'

const IntegrationSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'KI-Agent erfasst perfekt',
      description: 'Ihr intelligenter Assistent sammelt alle wichtigen Informationen: Name, Kontaktdaten, Terminwunsch, bevorzugter Zahnarzt und Behandlungsgrund - strukturiert und vollständig.',
      color: 'blue',
    },
    {
      number: 2,
      icon: Eye,
      title: 'Zentrale Übersicht für Ihr Team',
      description: 'Alle Terminanfragen erscheinen übersichtlich in Ihrem Dashboard, werden per E-Mail zugestellt oder landen direkt in Ihrem CRM (Google Calendar, HubSpot, Excel).',
      color: 'teal',
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Sie behalten die Kontrolle',
      description: 'Ihr Team prüft die Anfragen und bestätigt Termine mit einem Klick in Ihrer gewohnten Zahnarztpraxissoftware.',
      color: 'purple',
    },
  ]

  const systems = [
    'CGM LIFE', 'DocCirrus', 'MediDent', 'Albis', 'ELGA', 
    'Vivendi', 'DENT-X', 'CompuGroup', '+ alle anderen'
  ]

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600'
      case 'teal':
        return 'from-teal-500 to-teal-600'
      case 'purple':
        return 'from-purple-500 to-purple-600'
      default:
        return 'from-blue-500 to-blue-600'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="integration" className="section-padding bg-neutral-light-gray">
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
            Arbeitet mit{' '}
            <span className="gradient-text">JEDER</span>{' '}
            Zahnarztpraxis-Software -{' '}
            <span className="gradient-text-teal">Garantiert</span>
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Kein Systemwechsel. Keine komplizierten Schnittstellen. Sofort einsatzbereit.
          </motion.p>
        </motion.div>

        {/* Integration Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connection Line (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-neutral-medium-gray to-transparent transform -translate-y-1/2 z-0" />
                )}

                <motion.div
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 text-center z-10"
                >
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${getGradientClass(step.color)} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${getGradientClass(step.color)} rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-dark-gray mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-text-gray leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compatible Systems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-dark-gray mb-4">
            Kompatibel mit allen Praxisverwaltungssystemen
          </h3>
          <p className="text-neutral-text-gray mb-8 max-w-2xl mx-auto">
            Keine komplizierte Integration nötig. DentalBotPro arbeitet mit Ihrer bestehenden Software.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-6 py-3 bg-white rounded-full shadow-soft border border-neutral-light-gray text-neutral-dark-gray font-medium hover:shadow-medium transition-shadow duration-300"
              >
                {system}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center bg-gradient-to-br from-primary-blue to-primary-teal rounded-3xl p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Shield className="w-8 h-8" />
                  <span className="text-lg font-semibold">100% DSGVO-konform</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Clock className="w-8 h-8" />
                  <span className="text-lg font-semibold">5 Minuten Setup</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Zap className="w-8 h-8" />
                  <span className="text-lg font-semibold">Sofort einsatzbereit</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-2xl font-bold mb-4">
                Bereit für die Zukunft Ihrer Praxis?
              </h4>
              <p className="text-lg opacity-90 mb-6">
                Sie sparen 90% der Zeit bei voller Kontrolle.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntegrationSection
