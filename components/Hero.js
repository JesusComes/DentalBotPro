'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center particles-bg overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(10, 102, 194, 0.95) 0%, rgba(0, 180, 166, 0.9) 100%),
          url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-900/50 via-dental-teal-800/40 to-dental-purple-900/50 opacity-80"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-dental-teal-400/50 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-dental-purple-400/40 rounded-full float-medium"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-white/40 rounded-full float-fast"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-dental-orange-400/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-80 right-1/3 w-1 h-1 bg-dental-pink-400/40 rounded-full float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 hero-text">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-12 text-blue-100 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-10 py-5 text-xl font-bold text-dental-blue-900 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 group"
            >
              <span className="mr-3">{t('hero.cta')}</span>
              <i className="fas fa-rocket text-dental-blue-600 group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-dental-teal-400/20 to-dental-blue-400/20 rounded-full blur-xl float-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-dental-purple-400/20 to-dental-pink-400/20 rounded-full blur-xl float-medium"></div>
          <div className="absolute top-1/2 -left-20 w-16 h-16 bg-gradient-to-br from-dental-orange-400/20 to-dental-teal-400/20 rounded-full blur-xl float-fast"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Brutal geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/10 rotate-45 float-slow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-dental-teal-500/10 to-dental-blue-500/10 rotate-12 float-medium"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-dental-purple-400/20 rounded-full float-fast"></div>
    </section>
  )
}