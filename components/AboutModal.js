'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function AboutModal() {
  const { t } = useLanguage()

  const closeModal = () => {
    const modal = document.getElementById('about-modal')
    if (modal) {
      modal.classList.add('hidden')
      modal.classList.remove('flex')
    }
  }

  const scrollToContact = () => {
    closeModal()
    setTimeout(() => {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const scrollToDemo = () => {
    closeModal()
    setTimeout(() => {
      document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const expertise = [
    {
      icon: 'fas fa-robot',
      title: t('about.expertise_ai_development.title'),
      description: t('about.expertise_ai_development.description')
    },
    {
      icon: 'fas fa-comments',
      title: t('about.expertise_voice_chat.title'),
      description: t('about.expertise_voice_chat.description')
    },
    {
      icon: 'fas fa-plug',
      title: t('about.expertise_integration.title'),
      description: t('about.expertise_integration.description')
    },
    {
      icon: 'fas fa-brain',
      title: t('about.expertise_deep_learning.title'),
      description: t('about.expertise_deep_learning.description')
    },
    {
      icon: 'fas fa-headset',
      title: t('about.expertise_support.title'),
      description: t('about.expertise_support.description')
    }
  ]

  const industries = [
    { icon: 'fas fa-tooth', title: t('about.industry_dental') },
    { icon: 'fas fa-shopping-cart', title: t('about.industry_ecommerce') },
    { icon: 'fas fa-home', title: t('about.industry_real_estate') },
    { icon: 'fas fa-briefcase', title: t('about.industry_consulting') }
  ]

  const whyUs = [
    {
      icon: 'fas fa-flag',
      title: t('about.why_german.title'),
      description: t('about.why_german.description')
    },
    {
      icon: 'fas fa-industry',
      title: t('about.why_expertise.title'),
      description: t('about.why_expertise.description')
    },
    {
      icon: 'fas fa-expand',
      title: t('about.why_scalable.title'),
      description: t('about.why_scalable.description')
    },
    {
      icon: 'fas fa-user-tie',
      title: t('about.why_support.title'),
      description: t('about.why_support.description')
    }
  ]

  const highlights = [
    {
      icon: 'fas fa-bolt',
      title: t('about.highlight_fast.title'),
      description: t('about.highlight_fast.description')
    },
    {
      icon: 'fas fa-shield-alt',
      title: t('about.highlight_gdpr.title'),
      description: t('about.highlight_gdpr.description')
    },
    {
      icon: 'fas fa-cogs',
      title: t('about.highlight_custom.title'),
      description: t('about.highlight_custom.description')
    }
  ]

  return (
    <div id="about-modal" className="modal-brutal hidden">
      <div className="modal-content-brutal">
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl transition-colors z-10"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="glass-brutal rounded-2xl p-8">
            <i className="fas fa-rocket text-6xl gradient-text-brutal mb-6"></i>
            <h2 className="text-3xl font-bold gradient-text-brutal mb-4">
              {t('about.intro_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('about.intro_description')}
            </p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('about.expertise_title')}</h3>
            <p className="text-gray-300">{t('about.expertise_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="card-brutal text-center">
                <i className={`${item.icon} text-3xl gradient-text-brutal mb-4`}></i>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('about.industries_title')}</h3>
            <p className="text-gray-300">{t('about.industries_subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="glass-brutal rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <i className={`${industry.icon} text-2xl text-dental-blue-400 mb-3`}></i>
                <h4 className="text-white font-medium text-sm">{industry.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('about.why_us_title')}</h3>
            <p className="text-gray-300">{t('about.why_us_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, index) => (
              <div key={index} className="card-brutal">
                <i className={`${item.icon} text-3xl text-dental-teal-400 mb-4`}></i>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('about.highlights_title')}</h3>
            <p className="text-gray-300">{t('about.highlights_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-brutal text-center border-t-4 border-dental-blue-500">
                <i className={`${highlight.icon} text-3xl text-dental-blue-400 mb-4`}></i>
                <h4 className="text-lg font-bold text-white mb-3">{highlight.title}</h4>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t('about.cta_title')}</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t('about.cta_description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="btn-brutal inline-flex items-center"
            >
              <span className="mr-3">{t('about.cta_consultation')}</span>
              <i className="fas fa-calendar"></i>
            </button>
            <button 
              onClick={scrollToDemo}
              className="px-8 py-4 font-bold text-white border-2 border-dental-teal-500 rounded-xl hover:bg-dental-teal-500/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <span className="mr-3">{t('about.cta_demo')}</span>
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/80 -z-10"
        onClick={closeModal}
      ></div>
    </div>
  )
}