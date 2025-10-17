'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Integration() {
  const { t } = useLanguage()

  const systems = [
    "CGM LIFE", "DocCirrus", "MediDent", "Albis", 
    "ELGA", "Vivendi", "DENT-X", "CompuGroup", "+ alle anderen"
  ]

  return (
    <section id="integration" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('integration.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('integration.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="card-brutal text-center">
            <div className="text-4xl font-bold text-dental-blue-400 mb-4">1</div>
            <h3 className="text-xl font-bold text-white mb-4">{t('integration.step1.title')}</h3>
            <p className="text-gray-300">{t('integration.step1.description')}</p>
          </div>
          <div className="card-brutal text-center">
            <div className="text-4xl font-bold text-dental-teal-400 mb-4">2</div>
            <h3 className="text-xl font-bold text-white mb-4">{t('integration.step2.title')}</h3>
            <p className="text-gray-300">{t('integration.step2.description')}</p>
          </div>
          <div className="card-brutal text-center">
            <div className="text-4xl font-bold text-dental-purple-400 mb-4">3</div>
            <h3 className="text-xl font-bold text-white mb-4">{t('integration.step3.title')}</h3>
            <p className="text-gray-300">{t('integration.step3.description')}</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">{t('integration.standard_integration')}</h3>
          <p className="text-gray-300 mb-8">{t('integration.compatible_systems')}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {systems.map((system, index) => (
              <div key={index} className="glass-brutal rounded-lg py-3 px-4 text-center">
                <span className="text-white font-medium">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}