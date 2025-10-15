'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { Clock, Globe, TrendingUp, Infinity } from 'lucide-react'

interface StatItem {
  number: string
  text: string
  icon: React.ElementType
  suffix?: string
  color: 'blue' | 'teal' | 'purple' | 'orange'
}

const StatsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  const stats: StatItem[] = [
    {
      number: '24/7',
      text: 'Zahnmedizin-Beratung',
      icon: Clock,
      color: 'blue',
    },
    {
      number: '100',
      text: 'Sprachen',
      icon: Globe,
      suffix: '+',
      color: 'teal',
    },
    {
      number: '90',
      text: 'Zeitersparnis',
      icon: TrendingUp,
      suffix: '%',
      color: 'purple',
    },
    {
      number: '∞',
      text: 'Lernfähig',
      icon: Infinity,
      color: 'orange',
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
      case 'orange':
        return 'gradient-text-orange'
      default:
        return 'gradient-text'
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

  return (
    <section className="section-padding bg-neutral-light-gray">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(stat.color)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${getGradientClass(stat.color)} shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className={`text-5xl font-bold mb-3 ${getTextGradientClass(stat.color)}`}>
                  <CountingNumber
                    target={stat.number === '∞' ? '∞' : parseInt(stat.number.replace(/[^0-9]/g, '')) || 0}
                    suffix={stat.suffix}
                    isVisible={isInView}
                    isInfinite={stat.number === '∞'}
                    originalNumber={stat.number}
                  />
                </div>

                {/* Text */}
                <p className="text-lg font-semibold text-neutral-text-gray leading-tight">
                  {stat.text}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface CountingNumberProps {
  target: number | string
  suffix?: string
  isVisible: boolean
  isInfinite?: boolean
  originalNumber?: string
}

const CountingNumber: React.FC<CountingNumberProps> = ({ 
  target, 
  suffix = '', 
  isVisible, 
  isInfinite = false,
  originalNumber 
}) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isVisible || isInfinite) return

    const numericTarget = typeof target === 'number' ? target : 0
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = numericTarget / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const newValue = Math.min(increment * currentStep, numericTarget)
      setCurrent(Math.round(newValue))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, target, isInfinite])

  if (isInfinite) {
    return <span>{originalNumber}</span>
  }

  // Handle special cases like "24/7"
  if (originalNumber === '24/7') {
    return <span>24/7</span>
  }

  return (
    <span>
      {current}{suffix}
    </span>
  )
}

export default StatsSection
