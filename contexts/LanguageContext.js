'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  de: () => import('../translations/de.json').then(module => module.default),
  en: () => import('../translations/en.json').then(module => module.default),
  fr: () => import('../translations/fr.json').then(module => module.default),
  ru: () => import('../translations/ru.json').then(module => module.default),
}

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('de')
  const [translations, setTranslations] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadTranslations(currentLanguage)
  }, [currentLanguage])

  const loadTranslations = async (lang) => {
    setIsLoading(true)
    try {
      let translationData
      switch (lang) {
        case 'en':
          translationData = (await import('../translations/en.json')).default
          break
        case 'fr':
          translationData = (await import('../translations/fr.json')).default
          break
        case 'ru':
          translationData = (await import('../translations/ru.json')).default
          break
        default:
          translationData = (await import('../translations/de.json')).default
      }
      setTranslations(translationData)
    } catch (error) {
      console.error('Error loading translations:', error)
      // Fallback to German if translation fails
      if (lang !== 'de') {
        const fallbackData = (await import('../translations/de.json')).default
        setTranslations(fallbackData)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
  }

  const t = (key) => {
    if (isLoading) return key
    
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    isLoading
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}