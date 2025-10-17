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
    // Solution Section
    solution: {
      title: 'Die Lösung: Ihr intelligenter Zahnarztpraxis-Assistent',
      subtitle: 'Unser KI-Agent mit tiefem Zahnmedizin-Fachwissen übernimmt sofort alle Patientenanfragen - telefonisch und per Chat auf Ihrer Website.',
      features: [
        'Sofortige Antworten auf alle Patientenanfragen',
        'Automatische Terminbuchungen rund um die Uhr',
        'Tiefes Zahnmedizin-Fachwissen und Behandlungserklärungen',
        'Komplette Entlastung Ihres Zahnarztpraxisteams',
        'Mehr Zeit für hochwertige Patientenbehandlung',
        'Mehrsprachige Kommunikation (100+ Sprachen)',
        'Intelligente Triage und Notfall-Weiterleitung',
        'Automatische Patientenerinnerungen',
        'Integration mit bestehenden Zahnarztpraxissystemen',
        'Lernfähige AI - passt sich Ihrer Zahnarztpraxis an',
        'Nachverfolgung verpasster Anrufe',
        'Automatische Zahnarztpraxis-Bewertungen sammeln'
      ]
    },
    // Features Section
    features: {
      title: 'Alles, was Ihre Zahnarztpraxis braucht',
      subtitle: 'Umfassende KI-Funktionen für moderne Zahnarztpraxen',
      items: [
        {
          title: '24/7 Erreichbarkeit',
          description: 'Beantwortet Anrufe und Chats rund um die Uhr, auch nachts und am Wochenende. Ihre Patienten erreichen Sie immer.'
        },
        {
          title: 'Intelligente Terminverwaltung',
          description: 'Bucht, ändert und bestätigt Termine automatisch - Integration mit Ihrem bestehenden Kalender- und Zahnarztpraxissystem.'
        },
        {
          title: 'Vollständig Mehrsprachig',
          description: 'Kommuniziert perfekt in jeder Sprache - Deutsch, Englisch, Türkisch, Arabisch, Russisch, Polnisch und über 100 weitere Sprachen für maximale Patientenreichweite.'
        },
        {
          title: 'Patientendaten erfassen',
          description: 'Speichert Name, Kontaktdaten und Terminwünsche automatisch in Ihrem CRM oder Zahnarztpraxissystem.'
        },
        {
          title: 'Automatische Erinnerungen',
          description: 'Versendet Termin-SMS und E-Mails automatisch - Reduziert No-Shows um bis zu 70%.'
        },
        {
          title: 'Notfall-Weiterleitung',
          description: 'Erkennt echte Zahnnotfälle intelligent und leitet sofort an Ihre Notfallnummer oder den Bereitschaftsdienst weiter.'
        },
        {
          title: 'Zahnmedizin-Fachwissen',
          description: 'Beantwortet komplexe Fragen zu Zahnbehandlungen, Nachsorge und Prävention - basierend auf aktuellsten zahnmedizinischen Datenbanken und Leitlinien.'
        },
        {
          title: 'Deep Learning',
          description: 'Lernt kontinuierlich die spezifischen Abläufe, Behandlungsmethoden und Terminierungslogiken Ihrer Zahnarztpraxis - wird jeden Tag präziser.'
        },
        {
          title: 'Zahnmedizinische Beratung',
          description: 'Erklärt Zahnbehandlungsabläufe, beantwortet Fragen zu Kosten und bereitet Patienten optimal auf ihren Zahnarzttermin vor - menschlich und empathisch.'
        }
      ]
    },
    // Integration Section
    integration: {
      title: 'Arbeitet mit JEDER Zahnarztpraxis-Software - Garantiert',
      subtitle: 'Kein Systemwechsel. Keine komplizierten Schnittstellen. Sofort einsatzbereit.',
      steps: [
        {
          title: 'KI-Agent erfasst perfekt',
          description: 'Ihr intelligenter Assistent sammelt alle wichtigen Informationen: Name, Kontaktdaten, Terminwunsch, bevorzugter Zahnarzt und Behandlungsgrund - strukturiert und vollständig.'
        },
        {
          title: 'Zentrale Übersicht für Ihr Team',
          description: 'Alle Terminanfragen erscheinen übersichtlich in Ihrem Dashboard, werden per E-Mail zugestellt oder landen direkt in Ihrem CRM (Google Calendar, HubSpot, Excel).'
        },
        {
          title: 'Sie behalten die Kontrolle',
          description: 'Ihr Team prüft die Anfragen und bestätigt Termine mit einem Klick in Ihrer gewohnten Zahnarztpraxissoftware.'
        }
      ],
      standardTitle: 'Standard-Integration (Sofort verfügbar)',
      standardSubtitle: 'Kompatibel mit allen gängigen Zahnarztpraxissystemen:',
      premiumTitle: 'Premium-Option: Direkt-Integration',
      premiumDescription: 'Für moderne Cloud-Systeme (CGM LIFE, DocCirrus) bieten wir auf Wunsch vollautomatische Synchronisation - Termine erscheinen direkt in Ihrer Zahnarztpraxissoftware ohne manuelle Übertragung.',
      advantageTitle: '⚡ Der Vorteil unseres Ansatzes',
      advantageDescription: 'Während andere Lösungen an veralteten Schnittstellen scheitern, funktioniert DentalBotPro universell - unabhängig davon, wie alt oder modern Ihre Zahnarztpraxissoftware ist. Sie erhalten strukturierte, hochwertige Patientendaten ohne technisches Risiko oder IT-Projekte.',
      advantageExtra: 'Typischer Zeitgewinn: Eine Terminanfrage in Ihrer Software zu bestätigen dauert 10 Sekunden - das Telefonat hätte 5 Minuten gedauert. Sie sparen 90% der Zeit bei voller Kontrolle.'
    },
    // How it works Section
    howItWorks: {
      title: 'So einfach geht\'s',
      subtitle: 'In nur 3 Schritten zu Ihrem persönlichen KI-Assistenten',
      steps: [
        {
          title: 'Setup in 72 Stunden',
          description: 'Wir konfigurieren Ihren persönlichen KI-Assistenten speziell für Ihre Zahnarztpraxis und Ihre Arbeitsabläufe.'
        },
        {
          title: 'Integration mit Ihrer Zahnarztpraxis',
          description: 'Anbindung an Telefon, Website und optional an Ihre bestehende Zahnarztpraxissoftware für nahtlose Workflows.'
        },
        {
          title: 'Sofort Einsatzbereit',
          description: 'Ihr KI-Assistent startet und entlastet Ihr Team ab Tag 1 - messbare Ergebnisse von der ersten Stunde an.'
        }
      ]
    },
    // Pricing Section
    pricing: {
      title: 'Transparente Preise - Keine versteckten Kosten',
      subtitle: 'AI-Agents mit verschiedenen Zahnmedizin-Expertise-Stufen für jede Zahnarztpraxisgröße',
      plans: [
        {
          name: 'Pro',
          price: '149€',
          period: 'monatlich',
          setupFee: 'Setup-Preis: 299€',
          setupTime: 'Einrichtungszeit: 72 Stunden',
          features: [
            'Website Chatbot',
            '24/7 Terminbuchung',
            'Grundlegende zahnmedizinische Fragen',
            'Mehrsprachiger Support',
            'E-Mail Integration',
            'Automatische Erinnerungen'
          ],
          cta: 'Jetzt kaufen',
          popular: false
        },
        {
          name: 'Premium',
          price: '299€',
          period: 'monatlich',
          setupFee: 'Setup-Preis: 499€',
          setupTime: 'Einrichtungszeit: 1 Woche',
          features: [
            'Alles aus Pro Plan',
            'Voice-Enabled: AI kann sprechen',
            'Erweiterte zahnmedizinische Beratung',
            'Symptom-Erstbeurteilung',
            'Intelligente Notfall-Weiterleitung',
            'CRM Integration'
          ],
          cta: 'Jetzt kaufen',
          popular: true,
          badge: 'BELIEBT'
        },
        {
          name: 'Enterprise',
          price: '499€',
          period: 'monatlich',
          setupFee: 'Setup-Preis: 999€',
          setupTime: 'Einrichtungszeit: 2-4 Wochen',
          features: [
            'Alles aus Premium Plan',
            'Vollständige Zahnarztpraxissystem-Integration',
            'Erweiterte Zahnmedizin-KI mit Spezialistenwissen',
            'Multi-Standort Management',
            'Persönlicher Kundenbetreuer',
            'Priorisierter Support',
            'Individuelle Anpassungen'
          ],
          cta: 'Jetzt kaufen',
          popular: false
        }
      ],
      note: 'Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. Keine Mindestlaufzeit. Monatlich kündbar.'
    },
    // Benefits Section
    benefits: {
      title: 'Ihre Vorteile mit DentalBotPro',
      subtitle: 'Messbare Verbesserungen für Ihre Zahnarztpraxis',
      items: [
        {
          title: 'Mehr Neupatienten',
          description: 'Durch 24/7 Erreichbarkeit und professionelle Erstbetreuung gewinnen Sie messbar mehr Neupatienten.'
        },
        {
          title: 'Höhere Patientenzufriedenheit',
          description: 'Sofortige, kompetente Antworten führen zu zufriedeneren Patienten und besseren Bewertungen.'
        },
        {
          title: 'Entlastung des Teams',
          description: 'Ihr Personal kann sich auf wichtige Aufgaben konzentrieren statt auf repetitive Telefonate.'
        },
        {
          title: 'Kostenersparnis',
          description: 'Reduzieren Sie Personalkosten für Telefonbetreuung bei gleichzeitig besserer Servicequalität.'
        }
      ]
    },
    // Demo Section
    demo: {
      title: 'Erleben Sie DentalBotPro live in Aktion',
      subtitle: 'Sehen Sie in einer persönlichen Demo, wie unser KI-Assistent Ihre Zahnarztpraxis revolutioniert und Ihnen dabei hilft, mehr Patienten zu gewinnen und zu betreuen.',
      placeholder: 'Hier wird Ihr personalisiertes DentalBotPro Demo-Video angezeigt',
      cta: 'Jetzt kostenlose Demo buchen'
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
    // Solution Section
    solution: {
      title: 'The Solution: Your Intelligent Dental Practice Assistant',
      subtitle: 'Our AI agent with deep dental knowledge immediately handles all patient inquiries - by phone and chat on your website.',
      features: [
        'Instant answers to all patient inquiries',
        'Automatic appointment booking around the clock',
        'Deep dental knowledge and treatment explanations',
        'Complete relief for your dental practice team',
        'More time for high-quality patient treatment',
        'Multilingual communication (100+ languages)',
        'Intelligent triage and emergency forwarding',
        'Automatic patient reminders',
        'Integration with existing dental practice systems',
        'Learning AI - adapts to your dental practice',
        'Follow-up on missed calls',
        'Automatic dental practice review collection'
      ]
    },
    // Features Section
    features: {
      title: 'Everything Your Dental Practice Needs',
      subtitle: 'Comprehensive AI functions for modern dental practices',
      items: [
        {
          title: '24/7 Availability',
          description: 'Answers calls and chats around the clock, even at night and on weekends. Your patients can always reach you.'
        },
        {
          title: 'Intelligent Appointment Management',
          description: 'Books, changes and confirms appointments automatically - integration with your existing calendar and dental practice system.'
        },
        {
          title: 'Fully Multilingual',
          description: 'Communicates perfectly in any language - German, English, Turkish, Arabic, Russian, Polish and over 100 other languages for maximum patient reach.'
        },
        {
          title: 'Patient Data Capture',
          description: 'Automatically stores name, contact details and appointment preferences in your CRM or dental practice system.'
        },
        {
          title: 'Automatic Reminders',
          description: 'Sends appointment SMS and emails automatically - reduces no-shows by up to 70%.'
        },
        {
          title: 'Emergency Forwarding',
          description: 'Intelligently recognizes real dental emergencies and immediately forwards to your emergency number or emergency service.'
        },
        {
          title: 'Dental Expertise',
          description: 'Answers complex questions about dental treatments, aftercare and prevention - based on the latest dental databases and guidelines.'
        },
        {
          title: 'Deep Learning',
          description: 'Continuously learns the specific processes, treatment methods and scheduling logic of your dental practice - becomes more precise every day.'
        },
        {
          title: 'Dental Consultation',
          description: 'Explains dental treatment procedures, answers cost questions and optimally prepares patients for their dental appointment - human and empathetic.'
        }
      ]
    },
    // Integration Section
    integration: {
      title: 'Works with ANY Dental Practice Software - Guaranteed',
      subtitle: 'No system change. No complicated interfaces. Ready to use immediately.',
      steps: [
        {
          title: 'AI Agent captures perfectly',
          description: 'Your intelligent assistant collects all important information: name, contact details, appointment request, preferred dentist and reason for treatment - structured and complete.'
        },
        {
          title: 'Central overview for your team',
          description: 'All appointment requests appear clearly in your dashboard, are delivered by email or go directly into your CRM (Google Calendar, HubSpot, Excel).'
        },
        {
          title: 'You stay in control',
          description: 'Your team reviews the requests and confirms appointments with one click in your familiar dental practice software.'
        }
      ],
      standardTitle: 'Standard Integration (Immediately available)',
      standardSubtitle: 'Compatible with all common dental practice systems:',
      premiumTitle: 'Premium Option: Direct Integration',
      premiumDescription: 'For modern cloud systems (CGM LIFE, DocCirrus) we offer fully automatic synchronization on request - appointments appear directly in your dental practice software without manual transfer.',
      advantageTitle: '⚡ The Advantage of Our Approach',
      advantageDescription: 'While other solutions fail due to outdated interfaces, DentalBotPro works universally - regardless of how old or modern your dental practice software is. You receive structured, high-quality patient data without technical risk or IT projects.',
      advantageExtra: 'Typical time savings: Confirming an appointment request in your software takes 10 seconds - the phone call would have taken 5 minutes. You save 90% of the time while maintaining full control.'
    },
    // How it works Section
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Your personal AI assistant in just 3 steps',
      steps: [
        {
          title: 'Setup in 72 hours',
          description: 'We configure your personal AI assistant specifically for your dental practice and your workflows.'
        },
        {
          title: 'Integration with your dental practice',
          description: 'Connection to phone, website and optionally to your existing dental practice software for seamless workflows.'
        },
        {
          title: 'Ready to use immediately',
          description: 'Your AI assistant starts and relieves your team from day 1 - measurable results from the first hour.'
        }
      ]
    },
    // Pricing Section
    pricing: {
      title: 'Transparent Prices - No Hidden Costs',
      subtitle: 'AI agents with different dental expertise levels for every dental practice size',
      plans: [
        {
          name: 'Pro',
          price: '149€',
          period: 'monthly',
          setupFee: 'Setup price: 299€',
          setupTime: 'Setup time: 72 hours',
          features: [
            'Website Chatbot',
            '24/7 Appointment booking',
            'Basic dental questions',
            'Multilingual support',
            'Email integration',
            'Automatic reminders'
          ],
          cta: 'Buy now',
          popular: false
        },
        {
          name: 'Premium',
          price: '299€',
          period: 'monthly',
          setupFee: 'Setup price: 499€',
          setupTime: 'Setup time: 1 week',
          features: [
            'Everything from Pro plan',
            'Voice-enabled: AI can speak',
            'Advanced dental consultation',
            'Symptom assessment',
            'Intelligent emergency forwarding',
            'CRM integration'
          ],
          cta: 'Buy now',
          popular: true,
          badge: 'POPULAR'
        },
        {
          name: 'Enterprise',
          price: '499€',
          period: 'monthly',
          setupFee: 'Setup price: 999€',
          setupTime: 'Setup time: 2-4 weeks',
          features: [
            'Everything from Premium plan',
            'Full dental practice system integration',
            'Advanced dental AI with specialist knowledge',
            'Multi-location management',
            'Personal account manager',
            'Priority support',
            'Individual customizations'
          ],
          cta: 'Buy now',
          popular: false
        }
      ],
      note: 'All prices are plus statutory VAT. No minimum contract term. Monthly cancellation.'
    },
    // Benefits Section
    benefits: {
      title: 'Your Benefits with DentalBotPro',
      subtitle: 'Measurable improvements for your dental practice',
      items: [
        {
          title: 'More new patients',
          description: 'Through 24/7 availability and professional initial care, you measurably gain more new patients.'
        },
        {
          title: 'Higher patient satisfaction',
          description: 'Immediate, competent answers lead to more satisfied patients and better reviews.'
        },
        {
          title: 'Team relief',
          description: 'Your staff can focus on important tasks instead of repetitive phone calls.'
        },
        {
          title: 'Cost savings',
          description: 'Reduce personnel costs for phone support while improving service quality at the same time.'
        }
      ]
    },
    // Demo Section
    demo: {
      title: 'Experience DentalBotPro live in action',
      subtitle: 'See in a personal demo how our AI assistant revolutionizes your dental practice and helps you win and serve more patients.',
      placeholder: 'Your personalized DentalBotPro demo video will be displayed here',
      cta: 'Book free demo now'
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
