'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Demo() {
  const { t } = useLanguage()

  const scrollToPricing = () => {
    const element = document.getElementById('preise')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="demo" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('demo.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-brutal text-center py-16">
            <i className="fas fa-robot text-6xl gradient-text-brutal mb-6"></i>
            <div className="text-2xl font-bold text-white mb-4">
              {t('demo.placeholder_text')}
            </div>
            <div className="text-gray-300 mb-2">
              {t('demo.placeholder_subtext')}
            </div>
            <div className="text-sm text-gray-500 mb-8">
              {t('demo.placeholder_dev')}
            </div>
            
            <button 
              onClick={scrollToPricing}
              className="btn-brutal inline-flex items-center"
            >
              <span className="mr-3">{t('demo.cta')}</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}