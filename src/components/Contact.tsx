'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Building,
  MessageSquare,
  CheckCircle,
  Clock,
  Shield,
  Sparkles
} from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        message: ''
      });
    }, 2000);
  };

  const benefits = [
    {
      icon: Clock,
      title: '30-minütige Demo',
      description: 'Persönliche Präsentation aller Features'
    },
    {
      icon: Shield,
      title: 'Kostenlos & unverbindlich',
      description: 'Keine versteckten Kosten oder Verpflichtungen'
    },
    {
      icon: Sparkles,
      title: 'Individuelle Beratung',
      description: 'Maßgeschneiderte Lösung für Ihre Praxis'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-blue via-accent-teal to-accent-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
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
            <Calendar className="w-5 h-5" />
            <span>Kostenlose Demo vereinbaren</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {getTranslation('contact.title', language)}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            {getTranslation('contact.subtitle', language)}
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {getTranslation('contact.form.title', language)}
                    </h3>
                    <p className="text-white/80">
                      {getTranslation('contact.form.subtitle', language)}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-white font-medium">
                          <User className="w-4 h-4" />
                          <span>{getTranslation('contact.form.name', language)} *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder={getTranslation('contact.form.namePlaceholder', language)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-white font-medium">
                          <Mail className="w-4 h-4" />
                          <span>{getTranslation('contact.form.email', language)} *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder={getTranslation('contact.form.emailPlaceholder', language)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone and Practice Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-white font-medium">
                          <Phone className="w-4 h-4" />
                          <span>{getTranslation('contact.form.phone', language)} *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder={getTranslation('contact.form.phonePlaceholder', language)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-white font-medium">
                          <Building className="w-4 h-4" />
                          <span>{getTranslation('contact.form.practice', language)} *</span>
                        </label>
                        <input
                          type="text"
                          name="practice"
                          value={formData.practice}
                          onChange={handleInputChange}
                          required
                          placeholder={getTranslation('contact.form.practicePlaceholder', language)}
                          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 text-white font-medium">
                        <MessageSquare className="w-4 h-4" />
                        <span>{getTranslation('contact.form.message', language)}</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder={getTranslation('contact.form.messagePlaceholder', language)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-primary-blue font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-primary-blue border-t-transparent rounded-full animate-spin" />
                          <span>Wird gesendet...</span>
                        </div>
                      ) : (
                        <>
                          <span>{getTranslation('contact.form.submit', language)}</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </motion.button>

                    {/* Privacy Note */}
                    <p className="text-sm text-white/70 text-center">
                      {getTranslation('contact.form.privacy', language)}
                    </p>
                  </form>
                </>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {getTranslation('contact.success.title', language)}
                  </h3>
                  
                  <p className="text-white/90 mb-4">
                    {getTranslation('contact.success.message1', language)}
                  </p>
                  
                  <p className="text-white/80 text-sm">
                    {getTranslation('contact.success.message2', language)}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200"
                  >
                    Weitere Demo buchen
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right: Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-white/80">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <h4 className="text-xl font-bold text-white mb-4">
                Direkte Kontaktaufnahme
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">info@dentalbotpro.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">+49 (0) 30 120 844 30</span>
                </div>
              </div>
              
              <p className="text-white/70 text-sm mt-4">
                Montag bis Freitag: 9:00 - 18:00 Uhr
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
