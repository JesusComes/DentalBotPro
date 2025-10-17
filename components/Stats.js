'use client'

import { useEffect, useState, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Stats() {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: 'fas fa-clock',
      number: '24/7',
      text: t('stats.dental_consulting'),
      color: 'from-dental-blue-500 to-dental-teal-500'
    },
    {
      icon: 'fas fa-globe',
      number: '100+',
      text: t('stats.languages'),
      color: 'from-dental-teal-500 to-dental-purple-500'
    },
    {
      icon: 'fas fa-chart-line',
      number: '90%',
      text: t('stats.time_savings'),
      color: 'from-dental-purple-500 to-dental-orange-500'
    },
    {
      icon: 'fas fa-infinity',
      number: '∞',
      text: t('stats.learning'),
      color: 'from-dental-orange-500 to-dental-pink-500'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue-900/10 via-transparent to-dental-teal-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container ${
          isVisible ? 'visible' : ''
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stagger-item"
            >
              <div className="card-brutal text-center group hover:scale-105 transition-all duration-500">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-glow group-hover:shadow-neon transition-all duration-500`}>
                    <i className={`${stat.icon} text-2xl text-white`}></i>
                  </div>
                </div>

                {/* Number */}
                <div className={`text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>

                {/* Text */}
                <p className="text-gray-300 font-medium text-lg leading-tight">
                  {stat.text}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-dental-blue-400/20 rotate-45 float-slow"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-dental-teal-500/10 rounded-full float-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-dental-purple-400/30 rotate-12 float-fast"></div>
    </section>
  )
}