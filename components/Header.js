'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageWidget from './LanguageWidget'

export default function Header() {
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
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const openAboutModal = () => {
    const modal = document.getElementById('about-modal')
    if (modal) {
      modal.classList.remove('hidden')
      modal.classList.add('flex')
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToDemo = () => {
    scrollToSection('kontakt')
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-brutal shadow-2xl py-4' 
          : 'bg-white/80 backdrop-blur-xl py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gradient-brutal rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold gradient-text-brutal">
                DentalBotPro
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="nav-link"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('loesung')}
                className="nav-link"
              >
                {t('nav.solution')}
              </button>
              <button 
                onClick={() => scrollToSection('funktionen')}
                className="nav-link"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('preise')}
                className="nav-link"
              >
                {t('nav.pricing')}
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="nav-link"
              >
                {t('nav.contact')}
              </button>
              <button 
                onClick={openAboutModal}
                className="nav-link"
              >
                {t('nav.about')}
              </button>
            </nav>

            {/* Right side - Demo Button + Language Widget */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={scrollToDemo}
                className="btn-brutal text-sm px-6 py-3"
              >
                {t('header.demo')}
              </button>
              <LanguageWidget />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageWidget />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-dental-blue-400 transition-colors duration-200 p-2"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-white/10">
              <nav className="flex flex-col space-y-4 mt-6">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="mobile-nav-link"
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => scrollToSection('loesung')}
                  className="mobile-nav-link"
                >
                  {t('nav.solution')}
                </button>
                <button 
                  onClick={() => scrollToSection('funktionen')}
                  className="mobile-nav-link"
                >
                  {t('nav.features')}
                </button>
                <button 
                  onClick={() => scrollToSection('preise')}
                  className="mobile-nav-link"
                >
                  {t('nav.pricing')}
                </button>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="mobile-nav-link"
                >
                  {t('nav.contact')}
                </button>
                <button 
                  onClick={openAboutModal}
                  className="mobile-nav-link"
                >
                  {t('nav.about')}
                </button>
                <button 
                  onClick={scrollToDemo}
                  className="btn-brutal text-sm mt-4 w-full justify-center"
                >
                  {t('header.demo')}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <style jsx>{`
        .nav-link {
          @apply text-white font-medium text-base transition-all duration-300 relative;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3B82F6, #00B4A6);
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: #60A5FA;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-link {
          @apply text-white font-medium text-base py-3 px-4 rounded-lg transition-all duration-300;
          @apply hover:bg-white/10 hover:text-dental-blue-400;
        }
      `}</style>
    </>
  )
}