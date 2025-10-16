import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  de: {
    // Header/Navigation
    nav: {
      home: 'Home',
      solution: 'Lösung',
      features: 'Funktionen',
      pricing: 'Preise',
      contact: 'Kontakt',
      about: 'Über uns'
    },
    // Hero Section
    hero: {
      title: 'Verpassen Sie nie wieder einen',
      titleHighlight: 'Patientenanruf!',
      titleSuffix: 'Auch nach Feierabend',
      subtitle: 'Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis',
      cta: 'Jetzt DentalBotPro live testen',
      stats: {
        support: 'Zahnmedizin-Beratung',
        languages: 'Sprachen',
        timeSaving: 'Zeitersparnis',
        learning: 'Lernfähig'
      },
      scrollText: 'Nach unten scrollen'
    },
    // Problems Section
    problems: {
      title: 'Die Probleme Ihrer Zahnarztpraxis',
      subtitle: 'Erkennen Sie sich wieder?',
      items: [
        {
          title: 'Verpasste Anrufe nach Feierabend',
          description: 'Das Problem: Jeder nicht angenommene Anruf nach 18 Uhr bedeutet potenziell einen verlorenen Neupatienten. Studien zeigen, dass 70% der Patienten bei nicht erreichter Zahnarztpraxis direkt zur Konkurrenz weiterwählen.'
        },
        {
          title: 'Chronische Personalengpässe',
          description: 'Das Problem: Ihr bestens ausgebildetes Rezeptionsteam ist dauerhaft überlastet mit repetitiven Telefonaten zu Standardfragen, Öffnungszeiten und einfachen Terminanfragen.'
        },
        {
          title: 'Lange Wartezeiten für Rückrufe',
          description: 'Das Problem: Neue Patienten müssen oft tagelang auf Rückrufe warten - in Zeiten von Sofort-Service eine fatale Erfahrung. Jeder Tag Wartezeit reduziert Ihre Conversion-Rate um 15%.'
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Bereit für DentalBotPro? Kontaktieren Sie uns noch heute!',
      form: {
        name: 'Ihr Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        practice: 'Praxisname',
        message: 'Nachricht (optional)',
        submit: 'Nachricht senden',
        success: 'Vielen Dank! Wir melden uns bald bei Ihnen.'
      }
    },
    // Footer
    footer: {
      company: 'Unternehmen',
      about: 'Über DentalBotPro',
      services: 'Dienstleistungen',
      support: 'Support',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      imprint: 'Impressum',
      rights: 'Alle Rechte vorbehalten.'
    }
  },
  en: {
    // Header/Navigation
    nav: {
      home: 'Home',
      solution: 'Solution',
      features: 'Features',
      pricing: 'Pricing',
      contact: 'Contact',
      about: 'About Us'
    },
    // Hero Section
    hero: {
      title: 'Never miss a',
      titleHighlight: 'patient call!',
      titleSuffix: 'Even after hours',
      subtitle: 'Your intelligent assistant with comprehensive dental knowledge answers expert questions, explains treatments, books appointments and learns the specifics of your dental practice',
      cta: 'Test DentalBotPro live now',
      stats: {
        support: 'Dental Consultation',
        languages: 'Languages',
        timeSaving: 'Time Savings',
        learning: 'Self-Learning'
      },
      scrollText: 'Scroll down'
    },
    // Problems Section
    problems: {
      title: 'Your Dental Practice Problems',
      subtitle: 'Do you recognize yourself?',
      items: [
        {
          title: 'Missed calls after hours',
          description: 'The problem: Every unanswered call after 6 PM potentially means a lost new patient. Studies show that 70% of patients call the competition directly when their dental practice is unreachable.'
        },
        {
          title: 'Chronic staff shortages',
          description: 'The problem: Your well-trained reception team is constantly overwhelmed with repetitive phone calls about standard questions, opening hours and simple appointment requests.'
        },
        {
          title: 'Long waiting times for callbacks',
          description: 'The problem: New patients often have to wait days for callbacks - a fatal experience in times of instant service. Each day of waiting reduces your conversion rate by 15%.'
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready for DentalBotPro? Contact us today!',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        practice: 'Practice Name',
        message: 'Message (optional)',
        submit: 'Send Message',
        success: 'Thank you! We will contact you soon.'
      }
    },
    // Footer
    footer: {
      company: 'Company',
      about: 'About DentalBotPro',
      services: 'Services',
      support: 'Support',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      imprint: 'Imprint',
      rights: 'All rights reserved.'
    }
  },
  fr: {
    // Header/Navigation
    nav: {
      home: 'Accueil',
      solution: 'Solution',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      contact: 'Contact',
      about: 'À propos'
    },
    // Hero Section
    hero: {
      title: 'Ne manquez plus jamais un',
      titleHighlight: 'appel de patient!',
      titleSuffix: 'Même après les heures de bureau',
      subtitle: 'Votre assistant intelligent avec des connaissances dentaires complètes répond aux questions d\'experts, explique les traitements, prend des rendez-vous et apprend les spécificités de votre cabinet dentaire',
      cta: 'Tester DentalBotPro en direct maintenant',
      stats: {
        support: 'Consultation Dentaire',
        languages: 'Langues',
        timeSaving: 'Gain de Temps',
        learning: 'Auto-apprentissage'
      },
      scrollText: 'Faire défiler vers le bas'
    },
    // Problems Section
    problems: {
      title: 'Les Problèmes de Votre Cabinet Dentaire',
      subtitle: 'Vous reconnaissez-vous?',
      items: [
        {
          title: 'Appels manqués après les heures',
          description: 'Le problème: Chaque appel non répondu après 18h signifie potentiellement un nouveau patient perdu. Les études montrent que 70% des patients appellent directement la concurrence quand leur cabinet dentaire n\'est pas joignable.'
        },
        {
          title: 'Pénuries chroniques de personnel',
          description: 'Le problème: Votre équipe de réception bien formée est constamment débordée par des appels téléphoniques répétitifs sur des questions standard, les heures d\'ouverture et les demandes de rendez-vous simples.'
        },
        {
          title: 'Longs délais d\'attente pour les rappels',
          description: 'Le problème: Les nouveaux patients doivent souvent attendre des jours pour les rappels - une expérience fatale à l\'ère du service instantané. Chaque jour d\'attente réduit votre taux de conversion de 15%.'
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Prêt pour DentalBotPro? Contactez-nous aujourd\'hui!',
      form: {
        name: 'Votre Nom',
        email: 'Adresse E-mail',
        phone: 'Numéro de Téléphone',
        practice: 'Nom du Cabinet',
        message: 'Message (optionnel)',
        submit: 'Envoyer le Message',
        success: 'Merci! Nous vous contacterons bientôt.'
      }
    },
    // Footer
    footer: {
      company: 'Entreprise',
      about: 'À propos de DentalBotPro',
      services: 'Services',
      support: 'Support',
      legal: 'Légal',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions Générales',
      imprint: 'Mentions Légales',
      rights: 'Tous droits réservés.'
    }
  },
  ru: {
    // Header/Navigation
    nav: {
      home: 'Главная',
      solution: 'Решение',
      features: 'Функции',
      pricing: 'Цены',
      contact: 'Контакты',
      about: 'О нас'
    },
    // Hero Section
    hero: {
      title: 'Никогда больше не пропускайте',
      titleHighlight: 'звонок пациента!',
      titleSuffix: 'Даже после рабочих часов',
      subtitle: 'Ваш интеллектуальный помощник с комплексными знаниями стоматологии отвечает на экспертные вопросы, объясняет лечение, записывает на приём и изучает особенности вашей стоматологической практики',
      cta: 'Протестировать DentalBotPro прямо сейчас',
      stats: {
        support: 'Стоматологическая Консультация',
        languages: 'Языков',
        timeSaving: 'Экономия Времени',
        learning: 'Самообучение'
      },
      scrollText: 'Прокрутить вниз'
    },
    // Problems Section
    problems: {
      title: 'Проблемы Вашей Стоматологической Практики',
      subtitle: 'Узнаёте себя?',
      items: [
        {
          title: 'Пропущенные звонки после часов',
          description: 'Проблема: Каждый неотвеченный звонок после 18:00 потенциально означает потерянного нового пациента. Исследования показывают, что 70% пациентов сразу звонят конкурентам, когда их стоматологическая клиника недоступна.'
        },
        {
          title: 'Хроническая нехватка персонала',
          description: 'Проблема: Ваша хорошо обученная команда регистратуры постоянно перегружена повторяющимися телефонными звонками по стандартным вопросам, часам работы и простым запросам на приём.'
        },
        {
          title: 'Длительное ожидание обратных звонков',
          description: 'Проблема: Новым пациентам часто приходится ждать дни для обратных звонков - фатальный опыт во времена мгновенного сервиса. Каждый день ожидания снижает ваш коэффициент конверсии на 15%.'
        }
      ]
    },
    // Contact Section
    contact: {
      title: 'Связаться с Нами',
      subtitle: 'Готовы к DentalBotPro? Свяжитесь с нами сегодня!',
      form: {
        name: 'Ваше Имя',
        email: 'Адрес Электронной Почты',
        phone: 'Номер Телефона',
        practice: 'Название Практики',
        message: 'Сообщение (необязательно)',
        submit: 'Отправить Сообщение',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время.'
      }
    },
    // Footer
    footer: {
      company: 'Компания',
      about: 'О DentalBotPro',
      services: 'Услуги',
      support: 'Поддержка',
      legal: 'Правовая Информация',
      privacy: 'Политика Конфиденциальности',
      terms: 'Условия Использования',
      imprint: 'Выходные Данные',
      rights: 'Все права защищены.'
    }
  }
}

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('de')

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return value || key
  }

  const value = {
    currentLanguage,
    changeLanguage,
    languages,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
