'use client'

import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Modern minimalistic SVG icons for solutions
const SolutionIcons = {
  Lightning: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  CalendarCheck: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  UserGroup: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Bell: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Connector: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

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
      icon: SolutionIcons.Lightning,
      title: t('solution.features.instant_answers'),
      color: 'from-dental-blue-500 to-dental-blue-600'
    },
    {
      icon: SolutionIcons.CalendarCheck,
      title: t('solution.features.auto_booking'),
      color: 'from-dental-teal-500 to-dental-teal-600'
    },
    {
      icon: SolutionIcons.Heart,
      title: t('solution.features.dental_knowledge'),
      color: 'from-dental-purple-500 to-dental-purple-600'
    },
    {
      icon: SolutionIcons.UserGroup,
      title: t('solution.features.team_relief'),
      color: 'from-dental-orange-500 to-dental-orange-600'
    },
    {
      icon: SolutionIcons.Clock,
      title: t('solution.features.more_time'),
      color: 'from-dental-pink-500 to-dental-pink-600'
    },
    {
      icon: SolutionIcons.Globe,
      title: t('solution.features.multilingual'),
      color: 'from-dental-blue-500 to-dental-teal-500'
    },
    {
      icon: SolutionIcons.Shield,
      title: t('solution.features.intelligent_triage'),
      color: 'from-dental-teal-500 to-dental-purple-500'
    },
    {
      icon: SolutionIcons.Bell,
      title: t('solution.features.auto_reminders'),
      color: 'from-dental-purple-500 to-dental-orange-500'
    },
    {
      icon: SolutionIcons.Connector,
      title: t('solution.features.integration'),
      color: 'from-dental-orange-500 to-dental-pink-500'
    },
    {
      icon: SolutionIcons.Brain,
      title: t('solution.features.learning_ai'),
      color: 'from-dental-pink-500 to-dental-blue-500'
    },
    {
      icon: SolutionIcons.Phone,
      title: t('solution.features.call_followup'),
      color: 'from-dental-blue-600 to-dental-teal-600'
    },
    {
      icon: SolutionIcons.Star,
      title: t('solution.features.review_collection'),
      color: 'from-dental-teal-600 to-dental-purple-600'
    }
  ]

  return (
    <section 
      id="loesung"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-green-50/40 via-teal-50/30 to-blue-50/40 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue-100/10 via-dental-teal-100/10 to-dental-purple-100/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 gradient-text-brutal">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
                    <div className="text-white">
                      <feature.icon />
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-800 leading-tight group-hover:text-dental-blue-600 transition-colors duration-300">
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
            <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-100/20 via-dental-teal-100/20 to-dental-purple-100/20 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold gradient-text-brutal mb-6">
                Ihre intelligente Lösung ist bereit
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Alle diese Funktionen arbeiten nahtlos zusammen, um Ihre Zahnarztpraxis zu transformieren. 
                Starten Sie noch heute und erleben Sie den Unterschied.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-brutal inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m5-9v18l-5-3-5 3V1h10z" />
                  </svg>
                  <span>Live Demo ansehen</span>
                </button>
                <button 
                  onClick={() => document.getElementById('preise')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 font-bold text-slate-700 border-2 border-dental-blue-500 rounded-xl hover:bg-dental-blue-500/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span>Preise anzeigen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating solution elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-dental-blue-300/30 rotate-45 float-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-dental-teal-200/20 to-dental-purple-200/20 rounded-2xl rotate-12 float-medium"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-dental-orange-300/40 rounded-full float-fast"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-dental-pink-200/10 rounded-full blur-xl float-slow"></div>
    </section>
  )
}