'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  Clock, 
  Calendar, 
  Globe, 
  Database, 
  Bell, 
  AlertTriangle, 
  Stethoscope, 
  Brain, 
  MessageCircle 
} from 'lucide-react'

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  color: 'blue' | 'teal' | 'purple' | 'orange' | 'pink' | 'green'
}

const FeaturesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const features: Feature[] = [
    {
      icon: Clock,
      title: '24/7 Erreichbarkeit',
      description: 'Beantwortet Anrufe und Chats rund um die Uhr, auch nachts und am Wochenende. Ihre Patienten erreichen Sie immer.',
      color: 'blue',
    },
    {
      icon: Calendar,
      title: 'Intelligente Terminverwaltung',
      description: 'Bucht, ändert und bestätigt Termine automatisch - Integration mit Ihrem bestehenden Kalender- und Zahnarztpraxissystem.',
      color: 'teal',
    },
    {
      icon: Globe,
      title: 'Vollständig Mehrsprachig',
      description: 'Kommuniziert perfekt in jeder Sprache - Deutsch, Englisch, Türkisch, Arabisch, Russisch, Polnisch und über 100 weitere Sprachen für maximale Patientenreichweite.',
      color: 'purple',
    },
    {
      icon: Database,
      title: 'Patientendaten erfassen',
      description: 'Speichert Name, Kontaktdaten und Terminwünsche automatisch in Ihrem CRM oder Zahnarztpraxissystem.',
      color: 'orange',
    },
    {
      icon: Bell,
      title: 'Automatische Erinnerungen',
      description: 'Versendet Termin-SMS und E-Mails automatisch - Reduziert No-Shows um bis zu 70%.',
      color: 'pink',
    },
    {
      icon: AlertTriangle,
      title: 'Notfall-Weiterleitung',
      description: 'Erkennt echte Zahnnotfälle intelligent und leitet sofort an Ihre Notfallnummer oder den Bereitschaftsdienst weiter.',
      color: 'blue',
    },
    {
      icon: Stethoscope,
      title: 'Zahnmedizin-Fachwissen',
      description: 'Beantwortet komplexe Fragen zu Zahnbehandlungen, Nachsorge und Prävention - basierend auf aktuellsten zahnmedizinischen Datenbanken und Leitlinien.',
      color: 'teal',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Lernt kontinuierlich die spezifischen Abläufe, Behandlungsmethoden und Terminierungslogiken Ihrer Zahnarztpraxis - wird jeden Tag präziser.',
      color: 'purple',
    },
    {
      icon: MessageCircle,
      title: 'Zahnmedizinische Beratung',
      description: 'Erklärt Zahnbehandlungsabläufe, beantwortet Fragen zu Kosten und bereitet Patienten optimal auf ihren Zahnarzttermin vor - menschlich und empathisch.',
      color: 'green',
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
      case 'orange':
        return 'from-orange-500 to-orange-600'
      case 'pink':
        return 'from-pink-500 to-pink-600'
      case 'green':
        return 'from-green-500 to-green-600'
      default:
        return 'from-blue-500 to-blue-600'
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
      case 'orange':
        return 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
      case 'pink':
        return 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
      case 'green':
        return 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'
      default:
        return 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
    }
  }

  const getBgGradientClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500/10 to-blue-600/5'
      case 'teal':
        return 'from-teal-500/10 to-teal-600/5'
      case 'purple':
        return 'from-purple-500/10 to-purple-600/5'
      case 'orange':
        return 'from-orange-500/10 to-orange-600/5'
      case 'pink':
        return 'from-pink-500/10 to-pink-600/5'
      case 'green':
        return 'from-green-500/10 to-green-600/5'
      default:
        return 'from-blue-500/10 to-blue-600/5'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="funktionen" className="section-padding bg-white">
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
            Alles, was Ihre{' '}
            <span className="gradient-text">Zahnarztpraxis</span>{' '}
            braucht
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Umfassende KI-Funktionen für moderne Zahnarztpraxen
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden ${getHoverGlowClass(feature.color)}`}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getBgGradientClass(feature.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${getGradientClass(feature.color)} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-dark-gray mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-text-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Subtle Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-neutral-text-gray">Zufriedene Praxen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text-teal mb-2">99.9%</div>
            <div className="text-neutral-text-gray">Verfügbarkeit</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text-purple mb-2">24/7</div>
            <div className="text-neutral-text-gray">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
