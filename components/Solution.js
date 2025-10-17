'use client'

import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Solution() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const solutionFeatures = [
    {
      icon: 'fas fa-bolt',
      title: t('solution.features.instant_answers'),
      color: 'from-dental-blue-500 to-dental-blue-600'
    },
    {
      icon: 'fas fa-calendar-check',
      title: t('solution.features.auto_booking'),
      color: 'from-dental-teal-500 to-dental-teal-600'
    },
    {
      icon: 'fas fa-stethoscope',
      title: t('solution.features.dental_knowledge'),
      color: 'from-dental-purple-500 to-dental-purple-600'
    },
    {
      icon: 'fas fa-user-friends',
      title: t('solution.features.team_relief'),
      color: 'from-dental-orange-500 to-dental-orange-600'
    },
    {
      icon: 'fas fa-clock',
      title: t('solution.features.more_time'),
      color: 'from-dental-pink-500 to-dental-pink-600'
    },
    {
      icon: 'fas fa-globe',
      title: t('solution.features.multilingual'),
      color: 'from-dental-blue-500 to-dental-teal-500'
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: t('solution.features.intelligent_triage'),
      color: 'from-dental-teal-500 to-dental-purple-500'
    },
    {
      icon: 'fas fa-bell',
      title: t('solution.features.auto_reminders'),
      color: 'from-dental-purple-500 to-dental-orange-500'
    },
    {
      icon: 'fas fa-plug',
      title: t('solution.features.integration'),
      color: 'from-dental-orange-500 to-dental-pink-500'
    },
    {
      icon: 'fas fa-brain',
      title: t('solution.features.learning_ai'),
      color: 'from-dental-pink-500 to-dental-blue-500'
    },
    {
      icon: 'fas fa-phone-alt',
      title: t('solution.features.call_followup'),
      color: 'from-dental-blue-600 to-dental-teal-600'
    },
    {
      icon: 'fas fa-star',
      title: t('solution.features.review_collection'),
      color: 'from-dental-teal-600 to-dental-purple-600'
    }
  ]

  return (
    <section 
      id="loesung"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue-900/10 via-dental-teal-900/10 to-dental-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 gradient-text-brutal">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('solution.subtitle')}
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-container ${
          isVisible ? 'visible' : ''
        }`}>
          {solutionFeatures.map((feature, index) => (
            <div 
              key={index}
              className="stagger-item"
            >
              <div className="card-brutal group hover:scale-105 transition-all duration-500 h-full text-center relative overflow-hidden">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 transform group-hover:scale-110`}>
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white leading-tight group-hover:text-dental-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 section-fade ${isVisible ? 'visible' : ''}`}>
          <div className="glass-brutal rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-500/5 via-dental-teal-500/5 to-dental-purple-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold gradient-text-brutal mb-6">
                Ihre intelligente Lösung ist bereit
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Alle diese Funktionen arbeiten nahtlos zusammen, um Ihre Zahnarztpraxis zu transformieren. 
                Starten Sie noch heute und erleben Sie den Unterschied.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-brutal inline-flex items-center"
                >
                  <i className="fas fa-play mr-3"></i>
                  <span>Live Demo ansehen</span>
                </button>
                <button 
                  onClick={() => document.getElementById('preise')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 font-bold text-white border-2 border-dental-blue-500 rounded-xl hover:bg-dental-blue-500/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <i className="fas fa-euro-sign mr-3"></i>
                  <span>Preise anzeigen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating solution elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-dental-blue-400/20 rotate-45 float-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-dental-teal-500/10 to-dental-purple-500/10 rounded-2xl rotate-12 float-medium"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-dental-orange-400/30 rounded-full float-fast"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-dental-pink-500/5 rounded-full blur-xl float-slow"></div>
    </section>
  )
}