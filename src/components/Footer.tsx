'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Mail, Phone, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'Über uns', href: '#about' },
      { label: 'Karriere', href: '#careers' },
      { label: 'Blog', href: '#blog' },
      { label: 'Presse', href: '#press' },
    ],
    legal: [
      { label: 'Datenschutz', href: '#privacy' },
      { label: 'Impressum', href: '#imprint' },
      { label: 'AGB', href: '#terms' },
      { label: 'Cookies', href: '#cookies' },
    ],
    features: [
      { label: '24/7 KI-Assistent', href: '#funktionen' },
      { label: 'Mehrsprachiger Support', href: '#funktionen' },
      { label: 'Automatische Terminbuchung', href: '#funktionen' },
      { label: 'Deutsche Server', href: '#funktionen' },
    ],
    support: [
      { label: 'Hilfe Center', href: '#help' },
      { label: 'API Dokumentation', href: '#api' },
      { label: 'System Status', href: '#status' },
      { label: 'Community', href: '#community' },
    ],
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-neutral-dark-gray text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-blue rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">DentalBotPro</span>
              </div>

              <p className="text-neutral-light-gray mb-6 leading-relaxed">
                Ihr KI-Assistent für moderne Zahnarztpraxen. 24/7 Patientenbetreuung auf höchstem Niveau 
                mit tiefem Zahnmedizin-Fachwissen und intelligenter Automatisierung.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:info@dentalbotpro.com"
                  className="flex items-center text-neutral-light-gray hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 mr-3 text-primary-blue group-hover:text-accent-teal transition-colors" />
                  info@dentalbotpro.com
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="tel:+4930120844300"
                  className="flex items-center text-neutral-light-gray hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 mr-3 text-primary-blue group-hover:text-accent-teal transition-colors" />
                  +49 (0) 30 120 844 30
                </motion.a>
              </div>

              {/* Quality Badges */}
              <div className="flex items-center space-x-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium">
                  🇩🇪 Made in Germany
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium">
                  🔒 DSGVO-konform
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Features</h3>
              <ul className="space-y-3">
                {footerLinks.features.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-light-gray hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Rechtliches</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-neutral-light-gray hover:text-white transition-colors flex items-center group"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-neutral-light-gray hover:text-white transition-colors flex items-center group"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-light-gray">
              &copy; {currentYear} DentalBotPro. Alle Rechte vorbehalten.
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-neutral-light-gray">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                99.9% Uptime
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                SSL Verschlüsselt
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                24/7 Überwacht
              </div>
            </div>

            {/* Social Links - Placeholder */}
            <div className="flex items-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-xs">📧</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-xs">💼</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  )
}

export default Footer
