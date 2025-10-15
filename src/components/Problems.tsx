'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PhoneOff, 
  Users, 
  Clock, 
  CalendarX, 
  Languages, 
  Calendar,
  TrendingDown,
  Timer,
  AlertTriangle
} from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface ProblemsProps {
  language: Language;
}

export default function Problems({ language }: ProblemsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: PhoneOff,
      title: getTranslation('problems.missed.title', language),
      description: getTranslation('problems.missed.description', language),
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50',
      iconColor: 'text-red-500'
    },
    {
      icon: Users,
      title: getTranslation('problems.staff.title', language),
      description: getTranslation('problems.staff.description', language),
      gradient: 'from-orange-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-yellow-50',
      iconColor: 'text-orange-500'
    },
    {
      icon: Clock,
      title: getTranslation('problems.wait.title', language),
      description: getTranslation('problems.wait.description', language),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: CalendarX,
      title: getTranslation('problems.cancellations.title', language),
      description: getTranslation('problems.cancellations.description', language),
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: Languages,
      title: getTranslation('problems.language.title', language),
      description: getTranslation('problems.language.description', language),
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-500'
    },
    {
      icon: Calendar,
      title: getTranslation('problems.chaos.title', language),
      description: getTranslation('problems.chaos.description', language),
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      iconColor: 'text-indigo-500'
    },
    {
      icon: TrendingDown,
      title: getTranslation('problems.noShow.title', language),
      description: getTranslation('problems.noShow.description', language),
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      iconColor: 'text-pink-500'
    },
    {
      icon: Timer,
      title: getTranslation('problems.inefficient.title', language),
      description: getTranslation('problems.inefficient.description', language),
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      iconColor: 'text-teal-500'
    },
    {
      icon: AlertTriangle,
      title: getTranslation('problems.emergency.title', language),
      description: getTranslation('problems.emergency.description', language),
      gradient: 'from-red-600 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      iconColor: 'text-red-600'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-light-gray via-white to-light-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(10, 102, 194, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
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
            className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-6 py-3 rounded-full font-semibold text-sm mb-6"
          >
            <AlertTriangle className="w-5 h-5" />
            <span>Typische Zahnarztpraxis-Probleme</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
            {getTranslation('problems.title', language)}
          </h2>
          
          <p className="text-xl md:text-2xl text-text-gray leading-relaxed">
            {getTranslation('problems.subtitle', language)}
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className={`relative h-full bg-gradient-to-br ${problem.bgGradient} rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden`}>
                  {/* Background Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-text-dark mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {problem.title}
                    </h3>
                    
                    <p className="text-text-gray leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {problem.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark mb-4">
              Erkennen Sie sich wieder?
            </h3>
            <p className="text-text-gray mb-6 text-lg">
              Diese Probleme kosten Zahnarztpraxen täglich wertvolle Patienten und reduzieren die Effizienz erheblich. 
              Zeit für eine intelligente Lösung.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('solution');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg"
            >
              Jetzt die Lösung entdecken
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-red-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />
    </section>
  );
}
