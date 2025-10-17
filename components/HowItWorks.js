'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="wie-es-funktioniert" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('how_it_works.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('how_it_works.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-brutal text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-dental-blue-500 to-dental-blue-600 flex items-center justify-center text-2xl font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t('how_it_works.step1.title')}</h3>
            <p className="text-gray-300">{t('how_it_works.step1.description')}</p>
          </div>
          <div className="card-brutal text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-dental-teal-500 to-dental-teal-600 flex items-center justify-center text-2xl font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t('how_it_works.step2.title')}</h3>
            <p className="text-gray-300">{t('how_it_works.step2.description')}</p>
          </div>
          <div className="card-brutal text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-dental-purple-500 to-dental-purple-600 flex items-center justify-center text-2xl font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t('how_it_works.step3.title')}</h3>
            <p className="text-gray-300">{t('how_it_works.step3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}