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
                  <div className="mb-6 mt-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${getGradientClass(step.color)} shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
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
            Standard-Integration (Sofort verfügbar)
          </h3>
          <p className="text-neutral-text-gray mb-8">
            Kompatibel mit allen gängigen Zahnarztpraxissystemen:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-xl py-4 px-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-medium text-neutral-dark-gray">{system}</span>
              </motion.div>
            ))}
          </div>

          {/* Premium Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-8"
          >
            <h4 className="text-xl font-bold gradient-text mb-4">
              Premium-Option: Direkt-Integration
            </h4>
            <p className="text-neutral-text-gray max-w-3xl mx-auto">
              Für moderne Cloud-Systeme (CGM LIFE, DocCirrus) bieten wir auf Wunsch vollautomatische 
              Synchronisation - Termine erscheinen direkt in Ihrer Zahnarztpraxissoftware ohne manuelle Übertragung.
            </p>
          </div>
        </motion.div>

        {/* Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4 }}
          className="bg-white rounded-2xl p-8 shadow-soft"
        >
          <div className="flex items-start mb-6">
            <Zap className="w-8 h-8 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
            <h3 className="text-2xl font-bold text-neutral-dark-gray">
              Der Vorteil unseres Ansatzes
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-text-gray leading-relaxed mb-4">
                Während andere Lösungen an veralteten Schnittstellen scheitern, funktioniert DentalBotPro 
                universell - unabhängig davon, wie alt oder modern Ihre Zahnarztpraxissoftware ist. Sie erhalten 
                strukturierte, hochwertige Patientendaten ohne technisches Risiko oder IT-Projekte.
              </p>
              <div className="flex items-center text-green-700 font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                <span>100% Risikofrei & Sofort einsatzbereit</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Clock className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-bold text-green-700">Typischer Zeitgewinn:</span>
              </div>
              <p className="text-neutral-text-gray">
                Eine Terminanfrage in Ihrer Software zu bestätigen dauert <strong>10 Sekunden</strong> - 
                das Telefonat hätte <strong>5 Minuten</strong> gedauert.
              </p>
              <div className="text-green-700 font-bold text-lg mt-2">
                Sie sparen 90% der Zeit bei voller Kontrolle.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntegrationSection
