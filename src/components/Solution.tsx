'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Calendar, 
  Brain, 
  Users, 
  Clock, 
  Globe,
  Shield,
  Bell,
  Settings,
  TrendingUp,
  Phone,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface SolutionProps {
  language: Language;
}

export default function Solution({ language }: SolutionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: getTranslation('solution.feature1', language),
      gradient: 'from-yellow-400 to-orange-500',
      delay: 0
    },
    {
      icon: Calendar,
      title: getTranslation('solution.feature2', language),
      gradient: 'from-blue-400 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Brain,
      title: getTranslation('solution.feature3', language),
      gradient: 'from-purple-400 to-pink-500',
      delay: 0.2
    },
    {
      icon: Users,
      title: getTranslation('solution.feature4', language),
      gradient: 'from-green-400 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Clock,
      title: getTranslation('solution.feature5', language),
      gradient: 'from-red-400 to-pink-500',
      delay: 0.4
    },
    {
      icon: Globe,
      title: getTranslation('solution.feature6', language),
      gradient: 'from-indigo-400 to-purple-500',
      delay: 0.5
    },
    {
      icon: Shield,
      title: getTranslation('solution.feature7', language),
      gradient: 'from-teal-400 to-blue-500',
      delay: 0.6
    },
    {
      icon: Bell,
      title: getTranslation('solution.feature8', language),
      gradient: 'from-orange-400 to-red-500',
      delay: 0.7
    },
    {
      icon: Settings,
      title: getTranslation('solution.feature9', language),
      gradient: 'from-cyan-400 to-teal-500',
      delay: 0.8
    },
    {
      icon: TrendingUp,
      title: getTranslation('solution.feature10', language),
      gradient: 'from-emerald-400 to-green-500',
      delay: 0.9
    },
    {
      icon: Phone,
      title: getTranslation('solution.feature11', language),
      gradient: 'from-violet-400 to-purple-500',
      delay: 1.0
    },
    {
      icon: Star,
      title: getTranslation('solution.feature12', language),
      gradient: 'from-pink-400 to-rose-500',
      delay: 1.1
    }
  ];

  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-primary-blue via-accent-teal to-accent-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold text-sm mb-6 border border-white/30"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Die intelligente Lösung</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {getTranslation('solution.title', language)}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            {getTranslation('solution.subtitle', language)}
          </p>
        </motion.div>

        {/* Main Solution Showcase */}
        <div ref={ref} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                {/* AI Brain Visual */}
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-white/20 to-transparent rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Central AI Icon */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <Brain className="w-12 h-12 text-primary-blue" />
                    </motion.div>

                    {/* Floating Icons */}
                    {[Phone, Calendar, Globe, Shield, Bell, Star].map((Icon, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                        style={{
                          left: `${20 + (index % 3) * 30}%`,
                          top: `${20 + Math.floor(index / 3) * 60}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        <Icon className="w-6 h-6 text-primary-blue" />
                      </motion.div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                        </linearGradient>
                      </defs>
                      {[...Array(6)].map((_, i) => (
                        <motion.line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${20 + (i % 3) * 30 + 6}%`}
                          y2={`${20 + Math.floor(i / 3) * 60 + 6}%`}
                          stroke="url(#connectionGradient)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          animate={inView ? { pathLength: 1 } : {}}
                          transition={{ duration: 2, delay: i * 0.2 }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-medium">24/7 Aktiv</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-medium">Lernfähig</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Sofortige Vorteile für Ihre Praxis</h3>
                
                <div className="space-y-4">
                  {[
                    "Keine verpassten Anrufe mehr - 24/7 Erreichbarkeit",
                    "80% weniger Telefonzeit für Ihr Personal",
                    "Professionelle Patientenberatung rund um die Uhr",
                    "Automatische Terminbuchung ohne Wartezeit",
                    "Mehrsprachiger Support für alle Patienten",
                    "Intelligente Notfallerkennung und Weiterleitung"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('features');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group w-full bg-white text-primary-blue font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Alle Features entdecken</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Komplette KI-Lösung für Ihre Zahnarztpraxis
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: feature.delay,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <p className="text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
