'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: 'fas fa-clock',
      title: t('features.availability.title'),
      description: t('features.availability.description')
    },
    {
      icon: 'fas fa-calendar-check',
      title: t('features.appointment_management.title'),
      description: t('features.appointment_management.description')
    },
    {
      icon: 'fas fa-globe',
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description')
    },
    {
      icon: 'fas fa-database',
      title: t('features.data_capture.title'),
      description: t('features.data_capture.description')
    },
    {
      icon: 'fas fa-bell',
      title: t('features.auto_reminders.title'),
      description: t('features.auto_reminders.description')
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: t('features.emergency_routing.title'),
      description: t('features.emergency_routing.description')
    },
    {
      icon: 'fas fa-stethoscope',
      title: t('features.dental_expertise.title'),
      description: t('features.dental_expertise.description')
    },
    {
      icon: 'fas fa-brain',
      title: t('features.deep_learning.title'),
      description: t('features.deep_learning.description')
    },
    {
      icon: 'fas fa-comments',
      title: t('features.dental_consulting.title'),
      description: t('features.dental_consulting.description')
    }
  ]

  return (
    <section id="funktionen" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-brutal group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-brutal flex items-center justify-center">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}