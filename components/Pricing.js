'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      period: t('pricing.pro.period'),
      setupPrice: t('pricing.pro.setup_price'),
      setupTime: t('pricing.pro.setup_time'),
      features: t('pricing.pro.features'),
      popular: false
    },
    {
      name: t('pricing.premium.name'),
      price: t('pricing.premium.price'),
      period: t('pricing.premium.period'),
      setupPrice: t('pricing.premium.setup_price'),
      setupTime: t('pricing.premium.setup_time'),
      features: t('pricing.premium.features'),
      popular: true,
      popularText: t('pricing.premium.popular')
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      period: t('pricing.enterprise.period'),
      setupPrice: t('pricing.enterprise.setup_price'),
      setupTime: t('pricing.enterprise.setup_time'),
      features: t('pricing.enterprise.features'),
      popular: false
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="preise" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card-brutal group hover:scale-105 transition-all duration-500 relative ${
                plan.popular ? 'pricing-card-popular' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-brutal text-white px-6 py-2 rounded-full text-sm font-bold">
                    {plan.popularText}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-black gradient-text-brutal mb-2">
                    {plan.price}
                  </div>
                  <div className="text-gray-400">{plan.period}</div>
                  <div className="mt-4 space-y-1">
                    <div className="text-sm text-gray-300">{plan.setupPrice}</div>
                    <div className="text-sm text-gray-400">{plan.setupTime}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {Array.isArray(plan.features) && plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <i className="fas fa-check text-dental-teal-400 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className="btn-brutal w-full justify-center"
                >
                  {t('pricing.buy_now')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            {t('pricing.note')}
          </p>
        </div>
      </div>
    </section>
  )
}