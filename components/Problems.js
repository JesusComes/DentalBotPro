'use client'

import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

// Modern minimalistic SVG icons
const ModernIcons = {
  PhoneMissed: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 9 6-6m0 0-6-6m6 6H9" />
    </svg>
  ),
  Users: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  CalendarX: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 13 6 6m0-6-6 6" />
    </svg>
  ),
  Language: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11H8M16 15H8" />
    </svg>
  ),
  UserX: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 8 4-4m0 4-4-4" />
    </svg>
  ),
  PieChart: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  AlertCircle: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  )
}

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
      icon: ModernIcons.PhoneMissed,
      title: t('problems.missed_calls.title'),
      description: t('problems.missed_calls.description'),
      color: 'from-dental-blue-500 to-dental-blue-600'
    },
    {
      icon: ModernIcons.Users,
      title: t('problems.staff_shortage.title'),
      description: t('problems.staff_shortage.description'),
      color: 'from-dental-green-500 to-dental-green-600'
    },
    {
      icon: ModernIcons.Clock,
      title: t('problems.callback_delays.title'),
      description: t('problems.callback_delays.description'),
      color: 'from-dental-teal-500 to-dental-teal-600'
    },
    {
      icon: ModernIcons.CalendarX,
      title: t('problems.unnoticed_cancellations.title'),
      description: t('problems.unnoticed_cancellations.description'),
      color: 'from-dental-blue-600 to-dental-green-500'
    },
    {
      icon: ModernIcons.Language,
      title: t('problems.language_barriers.title'),
      description: t('problems.language_barriers.description'),
      color: 'from-dental-green-600 to-dental-teal-500'
    },
    {
      icon: ModernIcons.Calendar,
      title: t('problems.appointment_chaos.title'),
      description: t('problems.appointment_chaos.description'),
      color: 'from-dental-teal-600 to-dental-blue-500'
    },
    {
      icon: ModernIcons.UserX,
      title: t('problems.high_no_show.title'),
      description: t('problems.high_no_show.description'),
      color: 'from-dental-blue-700 to-dental-green-600'
    },
    {
      icon: ModernIcons.PieChart,
      title: t('problems.inefficient_time.title'),
      description: t('problems.inefficient_time.description'),
      color: 'from-dental-green-700 to-dental-teal-600'
    },
    {
      icon: ModernIcons.AlertCircle,
      title: t('problems.lost_emergency.title'),
      description: t('problems.lost_emergency.description'),
      color: 'from-dental-teal-700 to-dental-blue-600'
    }
  ]

  return (
    <section 
      id="probleme"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-dental-blue-50/30 via-dental-green-50/20 to-white/30 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-100/10 via-transparent to-dental-green-100/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 section-fade ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 gradient-text-brutal">
            {t('problems.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
                    <div className="text-white">
                      <problem.icon />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-dental-blue-600 transition-colors duration-300">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
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
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Kommen Ihnen diese Probleme bekannt vor?
            </h3>
            <p className="text-slate-600 mb-6">
              Jedes einzelne Problem kostet Sie täglich Geld und Patienten. Es ist Zeit für eine Lösung.
            </p>
            <button 
              onClick={() => document.getElementById('loesung')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-brutal inline-flex items-center"
            >
              <span className="mr-3">Zur Lösung</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating beautiful elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border-2 border-dental-blue-300/30 rotate-45 float-slow"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-dental-green-200/20 rounded-full float-medium"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-dental-teal-300/40 rotate-12 float-fast"></div>
    </section>
  )
}