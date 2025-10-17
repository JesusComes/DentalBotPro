'use client'

import { useLanguage } from '../contexts/LanguageContext'

// Modern minimalistic SVG icons for features
const FeatureIcons = {
  Clock: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  CalendarCheck: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Database: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Bell: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  Emergency: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  Medical: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Comments: () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: FeatureIcons.Clock,
      title: t('features.availability.title'),
      description: t('features.availability.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FeatureIcons.CalendarCheck,
      title: t('features.appointment_management.title'),
      description: t('features.appointment_management.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FeatureIcons.Globe,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FeatureIcons.Database,
      title: t('features.data_capture.title'),
      description: t('features.data_capture.description'),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FeatureIcons.Bell,
      title: t('features.auto_reminders.title'),
      description: t('features.auto_reminders.description'),
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: FeatureIcons.Emergency,
      title: t('features.emergency_routing.title'),
      description: t('features.emergency_routing.description'),
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FeatureIcons.Medical,
      title: t('features.dental_expertise.title'),
      description: t('features.dental_expertise.description'),
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: FeatureIcons.Brain,
      title: t('features.deep_learning.title'),
      description: t('features.deep_learning.description'),
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FeatureIcons.Comments,
      title: t('features.dental_consulting.title'),
      description: t('features.dental_consulting.description'),
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  return (
    <section id="funktionen" className="py-24 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('features.title')}
          </h2>
          <p className="text-xl text-slate-600">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-brutal group hover:scale-105 transition-all duration-500">
              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500`}>
                <div className="text-white">
                  <feature.icon />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-dental-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}