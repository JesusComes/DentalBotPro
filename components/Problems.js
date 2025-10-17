'use client'

import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Problems() {
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

  const problems = [
    {
      icon: 'fas fa-phone-slash',
      title: t('problems.missed_calls.title'),
      description: t('problems.missed_calls.description'),
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'fas fa-users',
      title: t('problems.staff_shortage.title'),
      description: t('problems.staff_shortage.description'),
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'fas fa-clock',
      title: t('problems.callback_delays.title'),
      description: t('problems.callback_delays.description'),
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: 'fas fa-calendar-times',
      title: t('problems.unnoticed_cancellations.title'),
      description: t('problems.unnoticed_cancellations.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-language',
      title: t('problems.language_barriers.title'),
      description: t('problems.language_barriers.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: t('problems.appointment_chaos.title'),
      description: t('problems.appointment_chaos.description'),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'fas fa-user-times',
      title: t('problems.high_no_show.title'),
      description: t('problems.high_no_show.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-chart-pie',
      title: t('problems.inefficient_time.title'),
      description: t('problems.inefficient_time.description'),
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: 'fas fa-exclamation-circle',
      title: t('problems.lost_emergency.title'),
      description: t('problems.lost_emergency.description'),
      color: 'from-red-600 to-red-700'
    }
  ]

  return (
    <section 
      id="probleme"
      ref={sectionRef}
      className="py-24 bg-slate-800/30 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 gradient-text-brutal">
            {t('problems.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('problems.subtitle')}
          </p>
        </div>

        {/* Problems Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container ${
          isVisible ? 'visible' : ''
        }`}>
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="stagger-item"
            >
              <div className="card-brutal group hover:scale-105 transition-all duration-500 h-full relative overflow-hidden">
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500`}>
                    <i className={`${problem.icon} text-2xl text-white`}></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-dental-blue-300 transition-colors duration-300">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  {problem.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>

                {/* Bottom corner accent */}
                <div className={`absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl ${problem.color} opacity-20 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <div className="glass-brutal rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Kommen Ihnen diese Probleme bekannt vor?
            </h3>
            <p className="text-gray-300 mb-6">
              Jedes einzelne Problem kostet Sie täglich Geld und Patienten. Es ist Zeit für eine Lösung.
            </p>
            <button 
              onClick={() => document.getElementById('loesung')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brutal inline-flex items-center"
            >
              <span className="mr-3">Zur Lösung</span>
              <i className="fas fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Floating warning elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-red-500/20 rotate-45 float-slow"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-orange-500/10 rounded-full float-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-yellow-500/30 rotate-12 float-fast"></div>
    </section>
  )
}