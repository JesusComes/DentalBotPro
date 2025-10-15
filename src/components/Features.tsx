'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Clock, 
  Calendar, 
  Globe, 
  Database,
  Bell,
  Shield,
  Brain,
  TrendingUp,
  MessageCircle,
  Star
} from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface FeaturesProps {
  language: Language;
}

export default function Features({ language }: FeaturesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Clock,
      title: getTranslation('features.availability.title', language),
      description: getTranslation('features.availability.description', language),
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      icon: Calendar,
      title: getTranslation('features.scheduling.title', language),
      description: getTranslation('features.scheduling.description', language),
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      borderColor: 'border-purple-200'
    },
    {
      icon: Globe,
      title: getTranslation('features.multilingual.title', language),
      description: getTranslation('features.multilingual.description', language),
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      borderColor: 'border-green-200'
    },
    {
      icon: Database,
      title: getTranslation('features.data.title', language),
      description: getTranslation('features.data.description', language),
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-200'
    },
    {
      icon: Bell,
      title: getTranslation('features.reminders.title', language),
      description: getTranslation('features.reminders.description', language),
      gradient: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-500',
      borderColor: 'border-teal-200'
    },
    {
      icon: Shield,
      title: getTranslation('features.emergency.title', language),
      description: getTranslation('features.emergency.description', language),
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      borderColor: 'border-red-200'
    },
    {
      icon: Brain,
      title: getTranslation('features.knowledge.title', language),
      description: getTranslation('features.knowledge.description', language),
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-500',
      borderColor: 'border-indigo-200'
    },
    {
      icon: TrendingUp,
      title: getTranslation('features.learning.title', language),
      description: getTranslation('features.learning.description', language),
      gradient: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      icon: MessageCircle,
      title: getTranslation('features.consultation.title', language),
      description: getTranslation('features.consultation.description', language),
      gradient: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-500',
      borderColor: 'border-cyan-200'
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
    <section id="features" className="section-padding bg-gradient-to-b from-white via-light-gray to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(10, 102, 194, 0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(10, 102, 194, 0.1) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(10, 102, 194, 0.1) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(10, 102, 194, 0.1) 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
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
            className="inline-flex items-center space-x-2 bg-primary-light text-primary-blue px-6 py-3 rounded-full font-semibold text-sm mb-6"
          >
            <Star className="w-5 h-5" />
            <span>Premium Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
            {getTranslation('features.title', language)}
          </h2>
          
          <p className="text-xl md:text-2xl text-text-gray leading-relaxed">
            {getTranslation('features.subtitle', language)}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className={`relative h-full ${feature.bgColor} rounded-3xl p-8 border-2 ${feature.borderColor} hover:border-opacity-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer overflow-hidden`}>
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Animated Background Orb */}
                  <motion.div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-text-gray leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-6 flex items-center space-x-2 text-primary-blue font-semibold"
                    >
                      <span>Mehr erfahren</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 right-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      className={`w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full`}
                    />
                  </div>
                  
                  <div className="absolute bottom-6 left-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                      className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-blue to-accent-teal rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px), 
                                 radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Bereit für die Zukunft der Zahnarztpraxis?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Entdecken Sie, wie DentalBotPro Ihre Praxis revolutioniert und Ihnen mehr Zeit für das Wesentliche gibt: 
                die bestmögliche Patientenversorgung.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-primary-blue font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Preise ansehen
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-primary-blue transition-all duration-300"
                >
                  Demo vereinbaren
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-purple/10 rounded-full blur-2xl" />
    </section>
  );
}
