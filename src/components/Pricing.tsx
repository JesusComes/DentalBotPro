'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  MessageCircle,
  Phone,
  Mic,
  Brain
} from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface PricingProps {
  language: Language;
}

export default function Pricing({ language }: PricingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: getTranslation('pricing.pro.name', language),
      price: '199',
      originalPrice: '299',
      period: getTranslation('pricing.monthly', language),
      setup: getTranslation('pricing.setup', language),
      setupTime: getTranslation('pricing.setupTime', language),
      icon: MessageCircle,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      popular: false,
      features: [
        getTranslation('pricing.pro.feature1', language),
        getTranslation('pricing.pro.feature2', language),
        getTranslation('pricing.pro.feature3', language),
        getTranslation('pricing.pro.feature4', language),
        getTranslation('pricing.pro.feature5', language),
        getTranslation('pricing.pro.feature6', language),
      ]
    },
    {
      name: getTranslation('pricing.premium.name', language),
      price: '399',
      originalPrice: '499',
      period: getTranslation('pricing.monthly', language),
      setup: getTranslation('pricing.setup', language),
      setupTime: getTranslation('pricing.setupTimePremium', language),
      icon: Mic,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      popular: true,
      features: [
        getTranslation('pricing.premium.feature1', language),
        getTranslation('pricing.premium.feature2', language),
        getTranslation('pricing.premium.feature3', language),
        getTranslation('pricing.premium.feature4', language),
        getTranslation('pricing.premium.feature5', language),
        getTranslation('pricing.premium.feature6', language),
      ]
    },
    {
      name: getTranslation('pricing.enterprise.name', language),
      price: '699',
      originalPrice: '899',
      period: getTranslation('pricing.monthly', language),
      setup: getTranslation('pricing.setup', language),
      setupTime: getTranslation('pricing.setupTimeEnterprise', language),
      icon: Phone,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      popular: false,
      features: [
        getTranslation('pricing.enterprise.feature1', language),
        getTranslation('pricing.enterprise.feature2', language),
        getTranslation('pricing.enterprise.feature3', language),
        getTranslation('pricing.enterprise.feature4', language),
        getTranslation('pricing.enterprise.feature5', language),
        getTranslation('pricing.enterprise.feature6', language),
        getTranslation('pricing.enterprise.feature7', language),
        getTranslation('pricing.enterprise.feature8', language),
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-light-gray via-white to-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-accent-teal rounded-full blur-3xl"
        />
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
            className="inline-flex items-center space-x-2 bg-green-100 text-green-600 px-6 py-3 rounded-full font-semibold text-sm mb-6"
          >
            <Crown className="w-5 h-5" />
            <span>Transparente Preisgestaltung</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
            {getTranslation('pricing.title', language)}
          </h2>
          
          <p className="text-xl md:text-2xl text-text-gray leading-relaxed">
            {getTranslation('pricing.subtitle', language)}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-accent-teal to-primary-blue text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{getTranslation('pricing.popular', language)}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className={`relative h-full bg-white rounded-3xl shadow-lg border-2 ${plan.popular ? 'border-accent-teal shadow-glow-teal scale-105' : 'border-gray-200'} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`} />
                  
                  {/* Header */}
                  <div className="relative z-10 p-8 text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${plan.gradient} rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <plan.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-text-dark mb-2">
                      {plan.name}
                    </h3>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-lg text-text-gray line-through">
                          €{plan.originalPrice}
                        </span>
                        <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          SAVE €{parseInt(plan.originalPrice) - parseInt(plan.price)}
                        </div>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-text-dark">
                          €{plan.price}
                        </span>
                        <span className="text-text-gray ml-2">
                          /{plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Setup Info */}
                    <div className={`bg-gradient-to-r ${plan.gradient} bg-opacity-10 rounded-xl p-4 mb-6`}>
                      <div className="text-sm font-semibold text-text-dark mb-1">
                        {plan.setup}
                      </div>
                      <div className="text-xs text-text-gray">
                        {plan.setupTime}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 px-8 pb-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.7 + index * 0.2 + featureIndex * 0.1 
                          }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-text-gray leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-accent-teal to-primary-blue text-white shadow-glow-teal' 
                          : `bg-gradient-to-r ${plan.gradient} text-white`
                      } font-bold text-lg py-4 rounded-2xl transition-all duration-300 hover:shadow-xl group flex items-center justify-center space-x-2`}
                    >
                      <span>{getTranslation('pricing.buy', language)}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-text-gray">
            {getTranslation('pricing.note', language)}
          </p>
        </motion.div>

        {/* Additional Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-primary-blue to-accent-teal rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), 
                               radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Brain className="w-8 h-8" />
              <h3 className="text-3xl font-bold">Alle Pläne enthalten</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">KI-Technologie</h4>
                <p className="text-sm opacity-90">Neueste AI-Modelle für natürliche Gespräche</p>
              </div>
              <div className="text-center">
                <Crown className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">DSGVO-konform</h4>
                <p className="text-sm opacity-90">Deutsche Server und Datenschutz-Standards</p>
              </div>
              <div className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Schnelle Einrichtung</h4>
                <p className="text-sm opacity-90">In 72 Stunden einsatzbereit</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
