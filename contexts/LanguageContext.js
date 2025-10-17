'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  const languages = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Français',
    ru: 'Русский'
  };

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../translations/${currentLanguage}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.warn(`Failed to load translations for ${currentLanguage}, falling back to English`);
        const fallback = await import('../translations/en.json');
        setTranslations(fallback.default);
      }
    };

    loadTranslations();
  }, [currentLanguage]);

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setCurrentLanguage(lang);
      localStorage?.setItem('language', lang);
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage?.getItem('language');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const t = (key, fallback = '') => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};