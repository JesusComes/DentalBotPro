'use client'

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageWidget from './LanguageWidget';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'features', href: '#features' },
    { key: 'benefits', href: '#benefits' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dental-blue-900/95 backdrop-blur-sm border-b border-dental-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-dental-green-400 to-dental-blue-400 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">DentalBot Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-dental-blue-100 hover:text-white transition-colors duration-200 font-medium"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Right side - Demo Button + Language Widget */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-dental-green-500 hover:bg-dental-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              {t('header.demo')}
            </button>
            <LanguageWidget />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageWidget />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-dental-green-300 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dental-blue-800">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-dental-blue-100 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <button className="bg-dental-green-500 hover:bg-dental-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 w-fit">
                {t('header.demo')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;