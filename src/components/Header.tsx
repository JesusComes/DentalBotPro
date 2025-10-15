'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Tooth, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTranslation, Language } from '@/lib/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'nav.solution', href: 'solution' },
    { key: 'nav.features', href: 'features' },
    { key: 'nav.pricing', href: 'pricing' },
    { key: 'nav.contact', href: 'contact' },
  ];

  const languages = [
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
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
                <span className="text-xs text-text-gray font-medium">
                  KI-Assistent
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-text-dark hover:text-primary-blue font-medium transition-colors duration-200 py-2 group"
                >
                  {getTranslation(item.key, language)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </nav>

            {/* Language Switcher & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white shadow-soft border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <Globe className="w-4 h-4 text-primary-blue" />
                  <span className="text-sm font-medium text-text-dark">
                    {languages.find(lang => lang.code === language)?.flag}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-text-gray transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-large border border-gray-100 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ backgroundColor: '#F3F4F6' }}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLanguageMenuOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 ${
                            language === lang.code ? 'bg-primary-light text-primary-blue' : 'text-text-dark hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm whitespace-nowrap"
              >
                {getTranslation('nav.demo', language)}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-text-dark" />
              ) : (
                <Menu className="w-5 h-5 text-text-dark" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute top-0 right-0 h-full w-80 bg-white shadow-large"
            >
              <div className="p-6 pt-24">
                {/* Mobile Navigation */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-lg font-medium text-text-dark hover:text-primary-blue transition-colors duration-200 py-3 border-b border-gray-100"
                    >
                      {getTranslation(item.key, language)}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Language Switcher */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-gray mb-3">Language</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                          language === lang.code ? 'bg-primary-light text-primary-blue' : 'text-text-dark hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-primary w-full text-center"
                >
                  {getTranslation('nav.demo', language)}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside handler */}
      {isLanguageMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsLanguageMenuOpen(false)}
        />
      )}
    </>
  );
}
