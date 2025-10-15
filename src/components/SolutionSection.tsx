'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { 
  Zap, 
  Calendar, 
  Stethoscope, 
  Users, 
  Clock, 
  Globe, 
  AlertTriangle, 
  Bell, 
  Plug, 
  Brain, 
  Phone, 
  Star 
} from 'lucide-react'

interface SolutionFeature {
  icon: React.ElementType
  title: string
  color: 'blue' | 'teal' | 'purple' | 'orange' | 'pink'
}

const SolutionSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const features: SolutionFeature[] = [
    {
      icon: Zap,
      title: 'Sofortige Antworten auf alle Patientenanfragen',
      color: 'blue',
    },
    {
      icon: Calendar,
      title: 'Automatische Terminbuchungen rund um die Uhr',
      color: 'teal',
    },
    {
      icon: Stethoscope,
      title: 'Tiefes Zahnmedizin-Fachwissen und Behandlungserklärungen',
      color: 'purple',
    },
    {
      icon: Users,
      title: 'Komplette Entlastung Ihres Zahnarztpraxisteams',
      color: 'orange',
    },
    {
      icon: Clock,
      title: 'Mehr Zeit für hochwertige Patientenbehandlung',
      color: 'pink',
    },
    {
      icon: Globe,
      title: 'Mehrsprachige Kommunikation (100+ Sprachen)',
      color: 'blue',
    },
    {
      icon: AlertTriangle,
      title: 'Intelligente Triage und Notfall-Weiterleitung',
      color: 'teal',
    },
    {
      icon: Bell,
      title: 'Automatische Patientenerinnerungen',
      color: 'purple',
    },
    {
      icon: Plug,
      title: 'Integration mit bestehenden Zahnarztpraxissystemen',
      color: 'orange',
    },
    {
      icon: Brain,
      title: 'Lernfähige AI - passt sich Ihrer Zahnarztpraxis an',
      color: 'pink',
    },
    {
      icon: Phone,
      title: 'Nachverfolgung verpasster Anrufe',
      color: 'blue',
    },
    {
      icon: Star,
      title: 'Automatische Zahnarztpraxis-Bewertungen sammeln',
      color: 'teal',
    },
  ]

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-gradient-blue'
      case 'teal':
        return 'bg-gradient-teal'
      case 'purple':
        return 'bg-gradient-purple'
      case 'orange':
        return 'bg-gradient-orange'
      case 'pink':
        return 'bg-gradient-pink'
      default:
        return 'bg-gradient-blue'
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
      case 'orange':
        return 'gradient-text-orange'
      case 'pink':
        return 'gradient-text-pink'
      default:
        return 'gradient-text'
    }
  }

  const getHoverGlowClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'hover:shadow-glow-blue'
      case 'teal':
        return 'hover:shadow-glow-teal'
      case 'purple':
        return 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
      case 'orange':
        return 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
      case 'pink':
        return 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
      default:
        return 'hover:shadow-glow-blue'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <section className="section-padding bg-white">
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
            Die Lösung: Ihr intelligenter{' '}
            <span className="gradient-text">Zahnarztpraxis-Assistent</span>
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Unser KI-Agent mit tiefem Zahnmedizin-Fachwissen übernimmt sofort alle Patientenanfragen - 
            telefonisch und per Chat auf Ihrer Website.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`group bg-white rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-500 text-center ${getHoverGlowClass(feature.color)}`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${getGradientClass(feature.color)} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-neutral-dark-gray leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-neutral-dark-gray group-hover:to-neutral-text-gray group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 ${getGradientClass(feature.color)} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full shadow-soft">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
            <span className="text-green-700 font-semibold">
              Alle Funktionen arbeiten nahtlos zusammen für maximale Effizienz
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
