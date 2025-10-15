'use client';

import { motion } from 'framer-motion';
import { 
  Tooth, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Shield,
  Globe,
  Calendar,
  Star,
  ArrowUp
} from 'lucide-react';
import { getTranslation, Language } from '@/lib/translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    company: [
      { name: getTranslation('footer.privacy', language), href: '#privacy' },
      { name: getTranslation('footer.imprint', language), href: '#imprint' },
      { name: getTranslation('footer.terms', language), href: '#terms' },
    ],
    features: [
      { name: getTranslation('footer.feature1', language), href: '#features' },
      { name: getTranslation('footer.feature2', language), href: '#features' },
      { name: getTranslation('footer.feature3', language), href: '#features' },
      { name: getTranslation('footer.feature4', language), href: '#features' },
    ]
  };

  const stats = [
    { icon: Clock, label: '24/7', description: 'Verfügbarkeit' },
    { icon: Globe, label: '100+', description: 'Sprachen' },
    { icon: Shield, label: 'DSGVO', description: 'Konform' },
    { icon: Star, label: '99%', description: 'Uptime' },
  ];

  return (
    <footer className="bg-gradient-to-br from-dark-gray via-text-dark to-dark-gray text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats Section */}
        <div className="py-16 border-b border-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center shadow-lg">
                    <Tooth className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-teal rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-blue bg-clip-text text-transparent">
                    DentalBotPro
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    KI-Assistent für Zahnarztpraxen
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {getTranslation('footer.description', language)}
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">E-Mail</div>
                    <a href="mailto:info@dentalbotpro.de" className="text-white hover:text-accent-teal transition-colors duration-200">
                      info@dentalbotpro.de
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Telefon</div>
                    <a href="tel:+4930120844" className="text-white hover:text-accent-teal transition-colors duration-200">
                      +49 (0) 30 120 844 30
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <MapPin className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Standort</div>
                    <div className="text-white">Berlin, Deutschland</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                {getTranslation('footer.links', language)}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent-teal transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-accent-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                {getTranslation('footer.features', language)}
              </h3>
              <ul className="space-y-3">
                {footerLinks.features.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent-teal transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-2 h-2 bg-accent-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-gradient-blue text-white font-semibold py-3 px-6 rounded-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Demo buchen</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="w-full bg-white/10 border border-white/20 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ArrowUp className="w-4 h-4" />
                  <span>Nach oben</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              &copy; 2024 DentalBotPro. {getTranslation('footer.rights', language)}
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Deutsche Server</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent-teal" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-blue rounded-full shadow-glow flex items-center justify-center z-50 hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
