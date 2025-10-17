'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { key: 'features', href: '#features' },
      { key: 'pricing', href: '#pricing' },
      { key: 'demo', href: '#demo' }
    ],
    support: [
      { key: 'help', href: '#help' },
      { key: 'documentation', href: '#docs' },
      { key: 'contact', href: '#contact' }
    ],
    legal: [
      { key: 'privacy', href: '#privacy' },
      { key: 'terms', href: '#terms' }
    ]
  };

  return (
    <footer className="bg-dental-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-dental-green-400 to-dental-blue-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">{t('footer.company', 'DentalBot Pro')}</span>
            </div>
            <p className="text-dental-blue-200 mb-6 max-w-md">
              {t('footer.description', 'AI-powered solutions for modern dental practices')}
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-dental-blue-800 hover:bg-dental-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.product', 'Product')}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-dental-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {t(`footer.links.${link.key}`, link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.support', 'Support')}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-dental-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {t(`footer.links.${link.key}`, link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-dental-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dental-blue-200 text-sm">
            {t('footer.copyright', '© 2025 DentalBot Pro. All rights reserved.')}
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-dental-blue-200 hover:text-white text-sm transition-colors duration-200"
              >
                {t(`footer.links.${link.key}`, link.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;