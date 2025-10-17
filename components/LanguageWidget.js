'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

export default function LanguageWidget() {
  const { currentLanguage, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-brutal hover:scale-105 transition-all duration-300 text-dental-blue-800 border border-dental-blue-200/50 shadow-lg"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:block font-medium">{currentLang.name}</span>
        <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 w-48 glass-brutal rounded-xl shadow-2xl z-50 border border-dental-blue-200/50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left hover:bg-dental-blue-100/30 transition-colors duration-200 flex items-center space-x-3 ${
                currentLanguage === lang.code ? 'bg-dental-blue-100/40 border-l-4 border-dental-green-500' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium text-dental-blue-800">{lang.name}</span>
              {currentLanguage === lang.code && (
                <i className="fas fa-check text-dental-green-500 ml-auto"></i>
              )}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}