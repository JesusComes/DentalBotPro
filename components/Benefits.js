'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Benefits() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: 'fas fa-user-plus',
      title: t('benefits.more_patients.title'),
      description: t('benefits.more_patients.description')
    },
    {
      icon: 'fas fa-graduation-cap',
      title: t('benefits.dental_expertise.title'),
      description: t('benefits.dental_expertise.description')
    },
    {
      icon: 'fas fa-chart-line',
      title: t('benefits.higher_efficiency.title'),
      description: t('benefits.higher_efficiency.description')
    },
    {
      icon: 'fas fa-clock',
      title: t('benefits.available_247.title'),
      description: t('benefits.available_247.description')
    },
    {
      icon: 'fas fa-brain',
      title: t('benefits.deep_learning.title'),
      description: t('benefits.deep_learning.description')
    },
    {
      icon: 'fas fa-comments',
      title: t('benefits.human_empathic.title'),
      description: t('benefits.human_empathic.description')
    },
    {
      icon: 'fas fa-euro-sign',
      title: t('benefits.cost_savings.title'),
      description: t('benefits.cost_savings.description')
    },
    {
      icon: 'fas fa-stethoscope',
      title: t('benefits.dental_competence.title'),
      description: t('benefits.dental_competence.description')
    }
  ]

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-brutal group hover:scale-105 transition-all duration-500 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-brutal flex items-center justify-center">
                <i className={`${benefit.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}