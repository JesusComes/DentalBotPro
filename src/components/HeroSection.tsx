'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

const HeroSection: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingElements = [
    { icon: Sparkles, delay: 0, x: 20, y: 30 },
    { icon: Zap, delay: 2, x: -30, y: 50 },
    { icon: Sparkles, delay: 4, x: 40, y: 20 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/90 via-primary-blue/85 to-accent-teal/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-white/20"
            style={{
              left: `${20 + element.x}%`,
              top: `${30 + element.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <element.icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom text-center text-white"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Revolutionäre KI-Technologie für Zahnarztpraxen</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-hero mb-6 max-w-4xl mx-auto leading-tight"
        >
          Verpassen Sie{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              nie wieder
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
          </span>{' '}
          einen Patientenanruf! Auch nach Feierabend
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-large mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed"
        >
          Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, 
          erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="group bg-white text-primary-blue font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center"
          >
            <span>Jetzt DentalBotPro live testen</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-center text-white/80 text-sm"
          >
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                >
                  ★
                </div>
              ))}
            </div>
            <span>Über 500+ zufriedene Zahnarztpraxen</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
