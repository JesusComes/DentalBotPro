import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageWidget from './LanguageWidget'

const Header = ({ onOpenAbout }) => {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'loesung', label: t('nav.solution') },
    { id: 'funktionen', label: t('nav.features') },
    { id: 'preise', label: t('nav.pricing') },
    { id: 'kontakt', label: t('nav.contact') },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-neutral-medium' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center mr-3 text-white text-xl">
              <i className="fas fa-robot"></i>
            </div>
            <span className="text-2xl font-bold gradient-text">DentalBotPro</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-neutral-dark font-medium hover:text-primary-blue transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              onClick={onOpenAbout}
              className="relative text-neutral-dark font-medium hover:text-primary-blue transition-colors duration-300 group"
            >
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-blue transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          </nav>

          {/* Language Widget */}
          <LanguageWidget />

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('kontakt')}
            className="hidden lg:block btn-primary shadow-lg hover:shadow-xl"
          >
            {t('nav.demo')}
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-neutral-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-neutral-medium"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 px-4 text-neutral-dark hover:text-primary-blue hover:bg-primary-light rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={onOpenAbout}
                  className="block w-full text-left py-2 px-4 text-neutral-dark hover:text-primary-blue hover:bg-primary-light rounded-lg transition-colors duration-200"
                >
                  {t('nav.about')}
                </button>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="w-full btn-primary mt-4"
                >
                  {t('nav.demo')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header