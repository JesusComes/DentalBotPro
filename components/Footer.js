'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-brutal rounded-xl flex items-center justify-center">
                <i className="fas fa-robot text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold gradient-text-brutal">
                {t('footer.title')}
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="mailto:info@dentalbotpro.de" className="hover:text-dental-blue-400 transition-colors">
                  {t('footer.email')}
                </a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+4930120844330" className="hover:text-dental-blue-400 transition-colors">
                  {t('footer.phone')}
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('footer.links')}</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.imprint')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t('footer.features_title')}</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.feature_1')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.feature_2')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.feature_3')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-dental-blue-400 transition-colors">
                {t('footer.feature_4')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}