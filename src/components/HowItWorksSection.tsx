'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Settings, Puzzle, Rocket } from 'lucide-react'

const HowItWorksSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const steps = [
    {
      number: 1,
      icon: Settings,
      title: 'Setup in 72 Stunden',
      description: 'Wir konfigurieren Ihren persönlichen KI-Assistenten speziell für Ihre Zahnarztpraxis und Ihre Arbeitsabläufe.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      number: 2,
      icon: Puzzle,
      title: 'Integration mit Ihrer Zahnarztpraxis',
      description: 'Anbindung an Telefon, Website und optional an Ihre bestehende Zahnarztpraxissoftware für nahtlose Workflows.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Sofort Einsatzbereit',
      description: 'Ihr KI-Assistent startet und entlastet Ihr Team ab Tag 1 - messbare Ergebnisse von der ersten Stunde an.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
  ]

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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    <section id="wie-es-funktioniert" className="section-padding bg-white">
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
            So{' '}
            <span className="gradient-text">einfach</span>{' '}
            geht's
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            In nur 3 Schritten zu Ihrem persönlichen KI-Assistenten
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-300 via-teal-300 to-purple-300 transform -translate-y-1/2 z-0" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                className="relative flex-1 max-w-sm z-10"
              >
                <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 text-center`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}>
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connection Line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-neutral-medium-gray to-transparent z-0" />
                )}

                <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-6 shadow-soft`}>
                  <div className="flex items-start">
                    {/* Step Number & Icon */}
                    <div className="relative mr-6 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-dark-gray mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-text-gray leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full shadow-soft">
            <Rocket className="w-6 h-6 text-green-600 mr-3" />
            <span className="text-green-700 font-semibold text-lg">
              Durchschnittliche Implementierungszeit: 72 Stunden
            </span>
          </div>

          <p className="text-neutral-text-gray mt-4 max-w-2xl mx-auto">
            Von der ersten Beratung bis zur vollständigen Integration - 
            wir sorgen für einen reibungslosen Start Ihres KI-Assistenten.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
