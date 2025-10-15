'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { PhoneOff, Clock, Users, AlertTriangle } from 'lucide-react'

interface Problem {
  icon: React.ElementType
  title: string
  description: string
  color: 'red' | 'orange' | 'yellow' | 'purple'
}

const ProblemsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const problems: Problem[] = [
    {
      icon: PhoneOff,
      title: 'Verpasste Anrufe nach Feierabend',
      description: 'Das Problem: Jeder nicht angenommene Anruf nach 18 Uhr bedeutet potenziell einen verlorenen Neupatienten. Studien zeigen, dass 70% der Patienten bei nicht erreichter Zahnarztpraxis direkt zur Konkurrenz weiterwählen.',
      color: 'red',
    },
    {
      icon: Clock,
      title: 'Zeitaufwändige Terminkoordination',
      description: 'Ihr Team verbringt Stunden täglich mit Terminabsprachen, Verschiebungen und Erinnerungen - Zeit, die für die Patientenbehandlung fehlt. Durchschnittlich 2-3 Stunden täglich nur für Terminmanagement.',
      color: 'orange',
    },
    {
      icon: Users,
      title: 'Überlastetes Praxisteam',
      description: 'Ständige Unterbrechungen durch Anrufe während der Behandlung führen zu Stress und verminderter Behandlungsqualität. Ihr Team kann sich nicht voll auf die Patienten konzentrieren.',
      color: 'yellow',
    },
    {
      icon: AlertTriangle,
      title: 'Sprach- und Kommunikationsbarrieren',
      description: 'Fremdsprachige Patienten können ihre Anliegen nicht verständlich kommunizieren, was zu Missverständnissen und verlorenen Terminen führt. Über 25% der Bevölkerung spricht nicht Deutsch als Muttersprache.',
      color: 'purple',
    },
  ]

  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'text-red-500'
      case 'orange':
        return 'text-orange-500'
      case 'yellow':
        return 'text-yellow-500'
      case 'purple':
        return 'text-purple-500'
      default:
        return 'text-red-500'
    }
  }

  const getBorderColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'border-red-500'
      case 'orange':
        return 'border-orange-500'
      case 'yellow':
        return 'border-yellow-500'
      case 'purple':
        return 'border-purple-500'
      default:
        return 'border-red-500'
    }
  }

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'from-red-500/10 to-red-600/5'
      case 'orange':
        return 'from-orange-500/10 to-orange-600/5'
      case 'yellow':
        return 'from-yellow-500/10 to-yellow-600/5'
      case 'purple':
        return 'from-purple-500/10 to-purple-600/5'
      default:
        return 'from-red-500/10 to-red-600/5'
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
    <section className="section-padding bg-neutral-light-gray">
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
            Kennen Sie diese Probleme in Ihrer{' '}
            <span className="gradient-text">Zahnarztpraxis</span>?
          </motion.h2>
          <motion.p 
            className="text-large text-neutral-text-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Diese typischen Herausforderungen kosten Sie täglich Patienten und Umsatz
          </motion.p>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden"
            >
              {/* Left Border Indicator */}
              <motion.div
                className={`absolute left-0 top-0 w-1 h-0 ${getBorderColorClass(problem.color)} transition-all duration-500 group-hover:h-full`}
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              />

              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(problem.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <problem.icon className={`w-12 h-12 ${getIconColorClass(problem.color)} transition-all duration-300 group-hover:scale-110`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-dark-gray mb-4 leading-tight">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-text-gray leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-full">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700 font-medium">
              Jedes dieser Probleme kostet Sie täglich potenzielle Patienten
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemsSection
