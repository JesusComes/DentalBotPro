'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Check, Star, Zap, Crown } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period: string
  setupFee: string
  setupTime: string
  features: string[]
  popular?: boolean
  icon: React.ElementType
  color: 'blue' | 'teal' | 'purple'
}

const PricingSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const scrollToContact = () => {
    const element = document.querySelector('#kontakt')
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      })
    }
  }

  const pricingTiers: PricingTier[] = [
    {
      name: 'Pro',
      price: '149€',
      period: 'monatlich',
      setupFee: 'Setup-Preis: 299€',
      setupTime: 'Einrichtungszeit: 72 Stunden',
      icon: Zap,
      color: 'blue',
      features: [
        'Website Chatbot',
        '24/7 Terminbuchung',
        'Grundlegende zahnmedizinische Fragen',
        'Mehrsprachiger Support',
        'E-Mail Integration',
        'Automatische Erinnerungen',
      ],
    },
    {
      name: 'Premium',
      price: '299€',
      period: 'monatlich',
      setupFee: 'Setup-Preis: 499€',
      setupTime: 'Einrichtungszeit: 1 Woche',
      icon: Star,
      color: 'teal',
      popular: true,
      features: [
        'Alles aus Pro Plan',
        'Voice-Enabled: AI kann sprechen',
        'Erweiterte zahnmedizinische Beratung',
        'Symptom-Erstbeurteilung',
        'Intelligente Notfall-Weiterleitung',
        'CRM Integration',
      ],
    },
    {
      name: 'Enterprise',
      price: '499€',
      period: 'monatlich',
      setupFee: 'Setup-Preis: 999€',
      setupTime: 'Einrichtungszeit: 2-4 Wochen',
      icon: Crown,
      color: 'purple',
      features: [
        'Alles aus Premium Plan',
        'Direkte Software-Integration',
        'Maßgeschneiderte AI-Persönlichkeit',
        'Priority Support',
        'Erweiterte Analytics',
        'Custom API Zugang',
      ],
    },
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

  const getTextGradientClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'gradient-text'
      case 'teal':
        return 'gradient-text-teal'
      case 'purple':
        return 'gradient-text-purple'
      default:
        return 'gradient-text'
    }
  }

  const getHoverGlowClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
      case 'teal':
        return 'hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]'
      case 'purple':
        return 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
      default:
        return 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
    }
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
    <section id="preise" className="section-padding bg-neutral-light-gray">
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
            Transparente{' '}
            <span className="gradient-text">Preise</span>{' '}
            - Keine versteckten Kosten
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            AI-Agents mit verschiedenen Zahnmedizin-Expertise-Stufen für jede Zahnarztpraxisgröße
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: tier.popular ? -5 : -8,
                scale: tier.popular ? 1.02 : 1.03,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`relative bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden ${getHoverGlowClass(tier.color)} ${
                tier.popular ? 'ring-2 ring-teal-500 transform scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-teal text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    BELIEBT
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`p-8 text-center ${tier.popular ? 'pt-12' : ''}`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${getGradientClass(tier.color)} shadow-lg`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-neutral-dark-gray mb-4">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-5xl font-bold ${getTextGradientClass(tier.color)} mb-2`}>
                    {tier.price}
                  </div>
                  <div className="text-neutral-text-gray font-medium">
                    {tier.period}
                  </div>
                </div>

                {/* Setup Info */}
                <div className="bg-neutral-light-gray rounded-lg p-4 mb-6">
                  <div className="text-sm text-neutral-text-gray mb-1">
                    {tier.setupFee}
                  </div>
                  <div className="text-sm text-neutral-text-gray">
                    {tier.setupTime}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-text-gray">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-br ${getGradientClass(tier.color)} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Jetzt kaufen
                </motion.button>
              </div>

              {/* Background Decoration */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${getGradientClass(tier.color)} opacity-5 rounded-full blur-xl`} />
              <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr ${getGradientClass(tier.color)} opacity-5 rounded-full blur-lg`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-dark-gray mb-4">
              Was ist in allen Paketen enthalten?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-neutral-text-gray">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                DSGVO-konform
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Deutsche Server
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Keine Vertragslaufzeit
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Monatlich kündbar
              </div>
            </div>
          </div>

          <p className="text-neutral-text-gray mt-6 max-w-2xl mx-auto">
            Alle Preise verstehen sich zzgl. MwSt. Setup-Gebühr wird einmalig beim Start berechnet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
