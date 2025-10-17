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
      title: 'Verpassen Sie nie wieder einen Patientenanruf - Auch nach Feierabend',
      subtitle: 'Ihr KI-Assistent beantwortet Anrufe, bucht Termine und betreut Patienten 24/7 - auf mehr als 100 Sprachen',
      cta: 'Kostenlose Demo vereinbaren',
      stats: {
        support: '24/7 Verfügbar',
        languages: '100+ Sprachen',
        timeSaving: '80% Zeitersparnis',
        learning: 'KI-Powered'
      },
      scrollText: 'Nach unten scrollen'
    },
    // Problems Section
    problems: {
      title: 'Kennen Sie diese Probleme in Ihrer Praxis?',
      subtitle: 'Diese typischen Herausforderungen kosten Sie täglich Patienten und Umsatz',
      items: [
        {
          id: 1,
          title: 'Verpasste Anrufe nach Feierabend',
          description: 'Jeder nicht angenommene Anruf nach 18 Uhr bedeutet potenziell einen verlorenen Neupatienten. Studien zeigen, dass 70% der Patienten bei nicht erreichter Praxis direkt zur Konkurrenz weiterwählen. Diese stille Patientenflucht bleibt oft unbemerkt, während Sie kontinuierlich Neukunden verlieren.',
          icon: 'phone-slash'
        },
        {
          id: 2,
          title: 'Chronische Personalengpässe an der Rezeption',
          description: 'Ihr bestens ausgebildetes Rezeptionsteam ist dauerhaft überlastet mit repetitiven Telefonaten zu Standardzeiten, Öffnungszeiten und einfachen Terminanfragen. Dadurch bleibt keine Zeit für die wirklich wichtigen Aufgaben wie persönliche Patientenbetreuung und administrative Planung.',
          icon: 'users'
        },
        {
          id: 3,
          title: 'Lange Wartezeiten für Rückrufe',
          description: 'Neue Patienten müssen oft tagelang auf Rückrufe warten - in Zeiten von Sofort-Service eine fatale Erfahrung. Die digitale Konkurrenz bietet Termine in Minuten, nicht in Tagen. Jeder Tag Wartezeit reduziert Ihre Konversionsrate um bis zu 30%.',
          icon: 'clock'
        },
        {
          id: 4,
          title: 'Unbemerkte Terminabsagen',
          description: 'Absagen auf dem Anrufbeantworter bleiben häufig stundenlang unbemerkt. Wertvolle Behandlungstermine bleiben ungenutzt, während andere Patienten wochenlang warten müssen. Dies führt zu massiven Einnahmeausfällen und ineffizienter Kapazitätsplanung.',
          icon: 'calendar-times'
        },
        {
          id: 5,
          title: 'Sprachbarrieren bei internationalen Patienten',
          description: 'In multilingualen Städten gehen wertvolle Patientenpotenziale verloren, weil Anfragen auf Türkisch, Arabisch oder anderen Sprachen nicht professionell bearbeitet werden können. Jede abgebrochene Kommunikation bedeutet verlorenes Geschäft.',
          icon: 'language'
        },
        {
          id: 6,
          title: 'Termin-Chaos durch Doppelbuchungen',
          description: 'Manuelle Terminverwaltung führt zu Doppelbuchungen und Terminkollisionen. Die Folge: gestresste Teams, verärgerte Patienten und Imageschaden. Jede Terminüberschneidung kostet Sie wertvolles Vertrauen.',
          icon: 'exclamation-triangle'
        },
        {
          id: 7,
          title: 'Hohe Ausfallquote durch vergessene Termine',
          description: 'Ohne systematische Erinnerungen liegt die Ausfallquote bei 15-20%. Das sind täglich mehrere ungenutzte Behandlungseinheiten bei gleichzeitig vollen Wartelisten - ein direkter finanzieller Verlust.',
          icon: 'user-times'
        },
        {
          id: 8,
          title: 'Ineffiziente Arbeitszeitverteilung',
          description: 'Ihr Fachpersonal verbringt 60-70% der Arbeitszeit mit einfachen Telefonaten statt mit wertschöpfender Patientenbetreuung. Sie zahlen Fachpersonal-Gehälter für Telefondienst - eine massive Fehlallokation Ihrer wertvollsten Ressource.',
          icon: 'chart-line'
        }
      ]
    },
    // Solution Section
    solution: {
      title: 'Die Lösung: Ihr intelligenter Praxis-Assistent',
      subtitle: 'Unser KI-Agent übernimmt sofort alle Patientenanfragen - telefonisch und per Chat auf Ihrer Website. Ohne Wartezeit, ohne Feierabend, ohne Urlaub.'
    },
    // Features Section
    features: {
      title: 'Alles, was Ihre Praxis braucht',
      subtitle: 'Umfassende KI-Funktionen für moderne Zahnarztpraxen',
      items: [
        {
          id: 1,
          title: '24/7 Erreichbarkeit',
          description: 'Beantwortet Anrufe und Chats rund um die Uhr, auch nachts und am Wochenende',
          icon: 'clock'
        },
        {
          id: 2,
          title: 'Intelligente Terminverwaltung',
          description: 'Bucht, ändert und bestätigt Termine automatisch - Integration mit Ihrem Kalender',
          icon: 'calendar-check'
        },
        {
          id: 3,
          title: 'Mehrsprachig',
          description: 'Kommuniziert fließend auf Deutsch, Türkisch und Arabisch mit Ihren Patienten',
          icon: 'globe'
        },
        {
          id: 4,
          title: 'Patientendaten erfassen',
          description: 'Speichert Name, Kontaktdaten und Terminwünsche automatisch in Ihrem CRM',
          icon: 'database'
        },
        {
          id: 5,
          title: 'Automatische Erinnerungen',
          description: 'Versendet Termin-SMS und E-Mails - Reduziert No-Shows um 70%',
          icon: 'bell'
        },
        {
          id: 6,
          title: 'Notfall-Weiterleitung',
          description: 'Erkennt echte Notfälle und leitet sofort an Ihre Notfallnummer weiter',
          icon: 'exclamation-triangle'
        }
    },
    // How it works Section
    howItWorks: {
      title: 'So einfach geht\'s',
      subtitle: 'In nur 3 Schritten zu Ihrem persönlichen KI-Assistenten',
      steps: [
        {
          id: 1,
          title: 'Setup in 48 Stunden',
          description: 'Wir konfigurieren Ihren persönlichen KI-Assistenten',
          icon: 'cog'
        },
        {
          id: 2,
          title: 'Integration mit Ihrer Praxis',
          description: 'Anbindung an Telefon, Website und optional Praxissoftware',
          icon: 'link'
        },
        {
          id: 3,
          title: 'Sofort Einsatzbereit',
          description: 'Ihr KI-Assistent startet und entlastet Ihr Team ab Tag 1',
          icon: 'rocket'
        }
      ]
    },
    // Benefits Section
    benefits: {
      title: 'Warum Zahnarztpraxen auf DentalBotPro setzen',
      items: [
        {
          id: 1,
          title: 'Mehr Patienten',
          description: 'Nie wieder verlorene Anfragen durch Nichterreichbarkeit',
          icon: 'user-plus'
        },
        {
          id: 2,
          title: 'Weniger Stress',
          description: 'Ihr Rezeptionsteam konzentriert sich auf wichtige Aufgaben',
          icon: 'heart'
        },
        {
          id: 3,
          title: 'Höhere Effizienz',
          description: '80% weniger Zeitaufwand für Terminkoordination',
          icon: 'chart-line'
        },
        {
          id: 4,
          title: 'GDPR-konform',
          description: 'Deutsche Server, vollständige Datenschutz-Compliance',
          icon: 'shield-alt'
        }
      ]
    },
    // Live Demo Section
    liveDemo: {
      title: 'Testen Sie jetzt unseren KI-Assistenten',
      subtitle: 'Chatten Sie direkt hier mit unserem Demo-Assistenten und erleben Sie, wie natürlich die Konversation abläuft'
    },
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
    // Demo Section
    liveDemo: {
      title: 'Testen Sie jetzt unseren KI-Assistenten',
      subtitle: 'Chatten Sie direkt hier mit unserem Demo-Assistenten und erleben Sie, wie natürlich die Konversation abläuft'
    },
    // Contact Section
    contact: {
      title: 'Starten Sie noch heute',
      subtitle: 'Vereinbaren Sie Ihre kostenlose 30-minütige Demo und sehen Sie DentalBotPro live in Aktion',
      form: {
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        practice: 'Praxisname',
        submit: 'Jetzt Demo buchen',
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
      title: 'Do You Know These Problems in Your Dental Practice?',
      subtitle: 'These typical challenges cost you patients and revenue daily',
      items: [
        {
          title: 'Missed Calls After Hours',
          description: 'Every unanswered call after 6 PM potentially means a lost new patient. Studies show that 70% of patients call competitors directly when unable to reach a dental practice.'
        },
        {
          title: 'Chronic Staff Shortages',
          description: 'Your well-trained reception team is permanently overloaded with repetitive phone calls about standard questions, opening hours and simple appointment requests.'
        },
        {
          title: 'Long Waiting Times for Callbacks',
          description: 'New patients often have to wait days for callbacks - a fatal experience in times of instant service. Each day of waiting reduces your conversion rate by up to 30%.'
        },
        {
          title: 'High Costs for External Call Centers',
          description: 'External call centers cost a fortune and understand nothing about dentistry. Patients immediately notice they\'re speaking with strangers who don\'t know your practice.'
        },
        {
          title: 'Poor Phone Accessibility',
          description: 'Constantly busy lines frustrate patients and lead to lost appointment requests. Valuable calls are lost especially during peak hours.'
        },
        {
          title: 'Unsatisfied Patients Due to Unreachability',
          description: 'Patients today expect immediate answers. Those who can\'t be reached lose trust and referrals. Poor reviews are the consequence.'
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
      title: 'Connaissez-vous ces Problèmes dans votre Cabinet Dentaire?',
      subtitle: 'Ces défis typiques vous coûtent des patients et des revenus quotidiennement',
      items: [
        {
          title: 'Appels Manqués Après les Heures',
          description: 'Chaque appel sans réponse après 18h signifie potentiellement un nouveau patient perdu. Les études montrent que 70% des patients appellent directement la concurrence quand ils ne peuvent pas joindre un cabinet dentaire.'
        },
        {
          title: 'Pénuries Chroniques de Personnel',
          description: 'Votre équipe de réception bien formée est surchargée en permanence avec des appels répétitifs sur des questions standard, les heures d\'ouverture et les demandes de rendez-vous simples.'
        },
        {
          title: 'Longs Temps d\'Attente pour les Rappels',
          description: 'Les nouveaux patients doivent souvent attendre des jours pour les rappels - une expérience fatale à l\'ère du service instantané. Chaque jour d\'attente réduit votre taux de conversion jusqu\\à 30%.'
        },
        {
          title: 'Coûts Élevés pour Centre d\'Appels Externe',
          description: 'Les centres d\'appels externes coûtent une fortune et ne comprennent rien à la dentisterie. Les patients remarquent immédiatement qu\'ils parlent avec des étrangers qui ne connaissent pas votre cabinet.'
        },
        {
          title: 'Mauvaise Accessibilité Téléphonique',
          description: 'Les lignes constamment occupées frustrent les patients et conduisent à des demandes de rendez-vous perdues. Des appels précieux sont perdus surtout pendant les heures de pointe.'
        },
        {
          title: 'Patients Insatisfaits par l\'Injoignabilité',
          description: 'Les patients d\'aujourd\'hui s\'attendent à des réponses immédiates. Ceux qui ne peuvent pas être joints perdent la confiance et les recommandations. De mauvais avis en sont la conséquence.'
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
    // Solution Section
    solution: {
      title: 'La Solution: Votre Assistant Intelligent de Cabinet Dentaire',
      subtitle: 'Notre agent IA avec des connaissances dentaires approfondies gère immédiatement toutes les demandes de patients - par téléphone et chat sur votre site web.',
      features: [
        'Réponses instantanées à toutes les demandes de patients',
        'Réservations automatiques de rendez-vous 24h/24',
        'Connaissances dentaires approfondies et explications de traitements',
        'Soulagement complet de votre équipe de cabinet dentaire',
        'Plus de temps pour des soins de haute qualité',
        'Communication multilingue (100+ langues)',
        'Triage intelligent et redirection d\'urgence',
        'Rappels automatiques de patients',
        'Intégration avec les systèmes de cabinet dentaire existants',
        'IA apprenante - s\'adapte à votre cabinet dentaire',
        'Suivi des appels manqués',
        'Collecte automatique d\'avis de cabinet dentaire'
      ]
    },
    // Features Section
    features: {
      title: 'Tout ce dont votre Cabinet Dentaire a besoin',
      subtitle: 'Fonctions IA complètes pour les cabinets dentaires modernes',
      items: [
        {
          title: 'Disponibilité 24/7',
          description: 'Répond aux appels et chats 24h/24, même la nuit et le week-end. Vos patients peuvent toujours vous joindre.'
        },
        {
          title: 'Gestion Intelligente des Rendez-vous',
          description: 'Réserve, modifie et confirme les rendez-vous automatiquement - intégration avec votre calendrier et système de cabinet dentaire existant.'
        },
        {
          title: 'Entièrement Multilingue',
          description: 'Communique parfaitement dans toutes les langues - Allemand, Anglais, Turc, Arabe, Russe, Polonais et plus de 100 autres langues pour une portée maximale des patients.'
        },
        {
          title: 'Capture de Données Patients',
          description: 'Stocke automatiquement nom, coordonnées et préférences de rendez-vous dans votre CRM ou système de cabinet dentaire.'
        },
        {
          title: 'Rappels Automatiques',
          description: 'Envoie automatiquement des SMS et e-mails de rendez-vous - réduit les absences jusqu\'à 70%.'
        },
        {
          title: 'Redirection d\'Urgence',
          description: 'Reconnaît intelligemment les vraies urgences dentaires et redirige immédiatement vers votre numéro d\'urgence ou service de garde.'
        },
        {
          title: 'Expertise Dentaire',
          description: 'Répond aux questions complexes sur les traitements dentaires, les soins post-opératoires et la prévention - basé sur les dernières bases de données dentaires.'
        },
        {
          title: 'Apprentissage Profond',
          description: 'Apprend continuellement les processus spécifiques, méthodes de traitement et logique de planification de votre cabinet dentaire - devient plus précis chaque jour.'
        },
        {
          title: 'Consultation Dentaire',
          description: 'Explique les procédures de traitement dentaire, répond aux questions de coûts et prépare optimalement les patients pour leur rendez-vous dentaire - humain et empathique.'
        }
      ]
    },
    // Integration Section
    integration: {
      title: 'Fonctionne avec TOUT Logiciel de Cabinet Dentaire - Garanti',
      subtitle: 'Aucun changement de système. Aucune interface compliquée. Prêt à utiliser immédiatement.',
      steps: [
        {
          title: 'L\'agent IA capture parfaitement',
          description: 'Votre assistant intelligent collecte toutes les informations importantes: nom, coordonnées, demande de rendez-vous, dentiste préféré et raison du traitement - structuré et complet.'
        },
        {
          title: 'Vue d\'ensemble centrale pour votre équipe',
          description: 'Toutes les demandes de rendez-vous apparaissent clairement dans votre tableau de bord, sont livrées par e-mail ou vont directement dans votre CRM (Google Calendar, HubSpot, Excel).'
        },
        {
          title: 'Vous gardez le contrôle',
          description: 'Votre équipe examine les demandes et confirme les rendez-vous en un clic dans votre logiciel de cabinet dentaire familier.'
        }
      ],
      standardTitle: 'Intégration Standard (Immédiatement disponible)',
      standardSubtitle: 'Compatible avec tous les systèmes de cabinet dentaire courants:',
      premiumTitle: 'Option Premium: Intégration Directe',
      premiumDescription: 'Pour les systèmes cloud modernes (CGM LIFE, DocCirrus), nous offrons une synchronisation entièrement automatique sur demande - les rendez-vous apparaissent directement dans votre logiciel de cabinet dentaire sans transfert manuel.',
      advantageTitle: '⚡ L\'Avantage de Notre Approche',
      advantageDescription: 'Alors que d\'autres solutions échouent en raison d\'interfaces obsolètes, DentalBotPro fonctionne universellement - peu importe l\'âge ou la modernité de votre logiciel de cabinet dentaire. Vous recevez des données patients structurées et de haute qualité sans risque technique ou projets informatiques.',
      advantageExtra: 'Gain de temps typique: Confirmer une demande de rendez-vous dans votre logiciel prend 10 secondes - l\'appel téléphonique aurait pris 5 minutes. Vous économisez 90% du temps tout en gardant le contrôle total.'
    },
    // How it works Section
    howItWorks: {
      title: 'Comment ça Marche',
      subtitle: 'Votre assistant IA personnel en seulement 3 étapes',
      steps: [
        {
          title: 'Configuration en 72 heures',
          description: 'Nous configurons votre assistant IA personnel spécifiquement pour votre cabinet dentaire et vos flux de travail.'
        },
        {
          title: 'Intégration avec votre cabinet dentaire',
          description: 'Connexion au téléphone, site web et optionnellement à votre logiciel de cabinet dentaire existant pour des flux de travail sans couture.'
        },
        {
          title: 'Prêt à utiliser immédiatement',
          description: 'Votre assistant IA démarre et soulage votre équipe dès le jour 1 - résultats mesurables dès la première heure.'
        }
      ]
    },
    // Pricing Section
    pricing: {
      title: 'Prix Transparents - Aucun Coût Caché',
      subtitle: 'Agents IA avec différents niveaux d\'expertise dentaire pour chaque taille de cabinet dentaire',
      plans: [
        {
          name: 'Pro',
          price: '149€',
          period: 'mensuel',
          setupFee: 'Prix de configuration: 299€',
          setupTime: 'Temps de configuration: 72 heures',
          features: [
            'Chatbot de site web',
            'Réservation de rendez-vous 24/7',
            'Questions dentaires de base',
            'Support multilingue',
            'Intégration e-mail',
            'Rappels automatiques'
          ],
          cta: 'Acheter maintenant',
          popular: false
        },
        {
          name: 'Premium',
          price: '299€',
          period: 'mensuel',
          setupFee: 'Prix de configuration: 499€',
          setupTime: 'Temps de configuration: 1 semaine',
          features: [
            'Tout du plan Pro',
            'Vocal: IA peut parler',
            'Conseil dentaire avancé',
            'Évaluation initiale des symptômes',
            'Redirection d\'urgence intelligente',
            'Intégration CRM'
          ],
          cta: 'Acheter maintenant',
          popular: true,
          badge: 'POPULAIRE'
        },
        {
          name: 'Enterprise',
          price: '499€',
          period: 'mensuel',
          setupFee: 'Prix de configuration: 999€',
          setupTime: 'Temps de configuration: 2-4 semaines',
          features: [
            'Tout du plan Premium',
            'Intégration complète du système de cabinet dentaire',
            'IA dentaire avancée avec connaissance spécialisée',
            'Gestion multi-sites',
            'Gestionnaire de compte personnel',
            'Support prioritaire',
            'Personnalisations individuelles'
          ],
          cta: 'Acheter maintenant',
          popular: false
        }
      ],
      note: 'Tous les prix s\'entendent hors TVA légale. Aucune durée minimale. Résiliation mensuelle.'
    },
    // Benefits Section
    benefits: {
      title: 'Vos Avantages avec DentalBotPro',
      subtitle: 'Améliorations mesurables pour votre cabinet dentaire',
      items: [
        {
          title: 'Plus de Nouveaux Patients',
          description: 'Grâce à la disponibilité 24/7 et aux soins initiaux professionnels, vous gagnez mesurément plus de nouveaux patients.'
        },
        {
          title: 'Satisfaction Patient Plus Élevée',
          description: 'Des réponses instantanées et compétentes conduisent à des patients plus satisfaits et de meilleures évaluations.'
        },
        {
          title: 'Soulagement de l\'Équipe',
          description: 'Votre personnel peut se concentrer sur des tâches importantes au lieu d\'appels téléphoniques répétitifs.'
        },
        {
          title: 'Économies de Coûts',
          description: 'Réduisez les coûts de personnel pour l\'assistance téléphonique tout en améliorant la qualité de service.'
        }
      ]
    },
    // Demo Section
    demo: {
      title: 'Découvrez DentalBotPro en Action en Direct',
      subtitle: 'Voyez dans une démonstration personnelle comment notre assistant IA révolutionne votre cabinet dentaire et vous aide à gagner et soigner plus de patients.',
      placeholder: 'Ici sera affiché votre vidéo de démonstration DentalBotPro personnalisée',
      cta: 'Réserver une démonstration gratuite maintenant'
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
      title: 'Знакомы ли Вам Эти Проблемы в Вашей Стоматологической Практике?',
      subtitle: 'Эти типичные вызовы ежедневно стоят вам пациентов и доходов',
      items: [
        {
          title: 'Пропущенные Звонки После Часов',
          description: 'Каждый неотвеченный звонок после 18:00 потенциально означает потерянного нового пациента. Исследования показывают, что 70% пациентов звонят конкурентам напрямую, когда не могут дозвониться в стоматологическую клинику.'
        },
        {
          title: 'Хроническая Нехватка Персонала',
          description: 'Ваша хорошо обученная команда администраторов постоянно перегружена повторяющимися телефонными звонками по стандартным вопросам, часам работы и простым запросам на приём.'
        },
        {
          title: 'Долгое Ожидание Обратных Звонков',
          description: 'Новые пациенты часто должны ждать дни для обратных звонков - фатальный опыт во времена мгновенного сервиса. Каждый день ожидания снижает ваш коэффициент конверсии до 30%.'
        },
        {
          title: 'Высокие Расходы на Внешний Колл-центр',
          description: 'Внешние колл-центры стоят состояние и ничего не понимают в стоматологии. Пациенты сразу замечают, что говорят с незнакомцами, которые не знают вашу практику.'
        },
        {
          title: 'Плохая Телефонная Доступность',
          description: 'Постоянно занятые линии расстраивают пациентов и приводят к потерянным запросам на приём. Ценные звонки теряются особенно в часы пик.'
        },
        {
          title: 'Недовольные Пациенты из-за Недоступности',
          description: 'Пациенты сегодня ожидают немедленных ответов. Те, к кому нельзя дозвониться, теряют доверие и рекомендации. Плохие отзывы - следствие.'
        }
      ]
    },
    // Solution Section
    solution: {
      title: 'Решение: Ваш Интеллектуальный Помощник Стоматологической Практики',
      subtitle: 'Наш ИИ-агент с глубокими знаниями стоматологии немедленно обрабатывает все запросы пациентов - по телефону и в чате на вашем сайте.',
      features: [
        'Мгновенные ответы на все запросы пациентов',
        'Автоматическое бронирование приёмов круглосуточно',
        'Глубокие стоматологические знания и объяснения лечения',
        'Полное облегчение для вашей команды стоматологической практики',
        'Больше времени для высококачественного лечения пациентов',
        'Многоязычная коммуникация (100+ языков)',
        'Интеллектуальная сортировка и перенаправление экстренных случаев',
        'Автоматические напоминания пациентам',
        'Интеграция с существующими системами стоматологической практики',
        'Обучающийся ИИ - адаптируется к вашей стоматологической практике',
        'Отслеживание пропущенных звонков',
        'Автоматический сбор отзывов о стоматологической практике'
      ]
    },
    // Features Section
    features: {
      title: 'Всё, что нужно вашей Стоматологической Практике',
      subtitle: 'Комплексные ИИ-функции для современных стоматологических практик',
      items: [
        {
          title: 'Доступность 24/7',
          description: 'Отвечает на звонки и чаты круглосуточно, даже ночью и в выходные. Ваши пациенты всегда могут с вами связаться.'
        },
        {
          title: 'Интеллектуальное Управление Приёмами',
          description: 'Бронирует, изменяет и подтверждает приёмы автоматически - интеграция с вашим существующим календарём и системой стоматологической практики.'
        },
        {
          title: 'Полностью Многоязычный',
          description: 'Идеально общается на любом языке - немецкий, английский, турецкий, арабский, русский, польский и более 100 других языков для максимального охвата пациентов.'
        },
        {
          title: 'Сбор Данных Пациентов',
          description: 'Автоматически сохраняет имя, контактные данные и предпочтения по приёмам в вашей CRM или системе стоматологической практики.'
        },
        {
          title: 'Автоматические Напоминания',
          description: 'Автоматически отправляет SMS и электронные письма о приёмах - снижает пропуски до 70%.'
        },
        {
          title: 'Перенаправление Экстренных Случаев',
          description: 'Интеллектуально распознаёт реальные стоматологические экстренные случаи и немедленно перенаправляет на ваш экстренный номер или дежурную службу.'
        },
        {
          title: 'Стоматологическая Экспертиза',
          description: 'Отвечает на сложные вопросы о стоматологических процедурах, послеоперационном уходе и профилактике - на основе последних стоматологических баз данных.'
        },
        {
          title: 'Глубокое Обучение',
          description: 'Непрерывно изучает специфические процессы, методы лечения и логику планирования вашей стоматологической практики - становится точнее каждый день.'
        },
        {
          title: 'Стоматологическая Консультация',
          description: 'Объясняет процедуры стоматологического лечения, отвечает на вопросы о стоимости и оптимально готовит пациентов к приёму у стоматолога - по-человечески и эмпатично.'
        }
      ]
    },
    // Integration Section
    integration: {
      title: 'Работает с ЛЮБЫМ Программным Обеспечением Стоматологической Практики - Гарантированно',
      subtitle: 'Никакой смены системы. Никаких сложных интерфейсов. Готов к использованию немедленно.',
      steps: [
        {
          title: 'ИИ-агент идеально собирает данные',
          description: 'Ваш интеллектуальный помощник собирает всю важную информацию: имя, контактные данные, запрос на приём, предпочтительный стоматолог и причина лечения - структурированно и полно.'
        },
        {
          title: 'Центральный обзор для вашей команды',
          description: 'Все запросы на приёмы чётко отображаются в вашей панели управления, доставляются по электронной почте или попадают прямо в вашу CRM (Google Calendar, HubSpot, Excel).'
        },
        {
          title: 'Вы сохраняете контроль',
          description: 'Ваша команда проверяет запросы и подтверждает приёмы одним щелчком в вашем привычном программном обеспечении стоматологической практики.'
        }
      ],
      standardTitle: 'Стандартная Интеграция (Немедленно доступна)',
      standardSubtitle: 'Совместимо со всеми распространёнными системами стоматологических практик:',
      premiumTitle: 'Премиум-опция: Прямая Интеграция',
      premiumDescription: 'Для современных облачных систем (CGM LIFE, DocCirrus) мы предлагаем полностью автоматическую синхронизацию по запросу - приёмы появляются прямо в вашем программном обеспечении стоматологической практики без ручного переноса.',
      advantageTitle: '⚡ Преимущество Нашего Подхода',
      advantageDescription: 'В то время как другие решения терпят неудачу из-за устаревших интерфейсов, DentalBotPro работает универсально - независимо от того, насколько старо или современно ваше программное обеспечение стоматологической практики. Вы получаете структурированные, высококачественные данные пациентов без технического риска или IT-проектов.',
      advantageExtra: 'Типичная экономия времени: Подтверждение запроса на приём в вашем программном обеспечении занимает 10 секунд - телефонный звонок занял бы 5 минут. Вы экономите 90% времени при сохранении полного контроля.'
    },
    // How it works Section
    howItWorks: {
      title: 'Как это Работает',
      subtitle: 'Ваш персональный ИИ-помощник всего за 3 шага',
      steps: [
        {
          title: 'Настройка за 72 часа',
          description: 'Мы настраиваем вашего персонального ИИ-помощника специально для вашей стоматологической практики и ваших рабочих процессов.'
        },
        {
          title: 'Интеграция с вашей стоматологической практикой',
          description: 'Подключение к телефону, сайту и опционально к вашему существующему программному обеспечению стоматологической практики для бесшовных рабочих процессов.'
        },
        {
          title: 'Готов к использованию немедленно',
          description: 'Ваш ИИ-помощник запускается и облегчает работу вашей команды с 1-го дня - измеримые результаты с первого часа.'
        }
      ]
    },
    // Pricing Section
    pricing: {
      title: 'Прозрачные Цены - Никаких Скрытых Расходов',
      subtitle: 'ИИ-агенты с различными уровнями стоматологической экспертизы для каждого размера стоматологической практики',
      plans: [
        {
          name: 'Pro',
          price: '149€',
          period: 'в месяц',
          setupFee: 'Цена настройки: 299€',
          setupTime: 'Время настройки: 72 часа',
          features: [
            'Чат-бот сайта',
            'Бронирование приёмов 24/7',
            'Основные стоматологические вопросы',
            'Многоязычная поддержка',
            'Интеграция электронной почты',
            'Автоматические напоминания'
          ],
          cta: 'Купить сейчас',
          popular: false
        },
        {
          name: 'Premium',
          price: '299€',
          period: 'в месяц',
          setupFee: 'Цена настройки: 499€',
          setupTime: 'Время настройки: 1 неделя',
          features: [
            'Всё из плана Pro',
            'Голосовые возможности: ИИ может говорить',
            'Расширенное стоматологическое консультирование',
            'Первичная оценка симптомов',
            'Интеллектуальное перенаправление экстренных случаев',
            'Интеграция CRM'
          ],
          cta: 'Купить сейчас',
          popular: true,
          badge: 'ПОПУЛЯРНЫЙ'
        },
        {
          name: 'Enterprise',
          price: '499€',
          period: 'в месяц',
          setupFee: 'Цена настройки: 999€',
          setupTime: 'Время настройки: 2-4 недели',
          features: [
            'Всё из плана Premium',
            'Полная интеграция системы стоматологической практики',
            'Продвинутый стоматологический ИИ со специализированными знаниями',
            'Управление несколькими площадками',
            'Персональный менеджер аккаунта',
            'Приоритетная поддержка',
            'Индивидуальные настройки'
          ],
          cta: 'Купить сейчас',
          popular: false
        }
      ],
      note: 'Все цены указаны без учёта законного НДС. Никакого минимального срока. Ежемесячная отмена.'
    },
    // Benefits Section
    benefits: {
      title: 'Ваши Преимущества с DentalBotPro',
      subtitle: 'Измеримые улучшения для вашей стоматологической практики',
      items: [
        {
          title: 'Больше Новых Пациентов',
          description: 'Благодаря доступности 24/7 и профессиональному первичному уходу вы измеримо получаете больше новых пациентов.'
        },
        {
          title: 'Более Высокая Удовлетворённость Пациентов',
          description: 'Мгновенные, компетентные ответы приводят к более довольным пациентам и лучшим оценкам.'
        },
        {
          title: 'Облегчение Команды',
          description: 'Ваш персонал может сосредоточиться на важных задачах вместо повторяющихся телефонных звонков.'
        },
        {
          title: 'Экономия Расходов',
          description: 'Снижайте расходы на персонал для телефонной поддержки при одновременном улучшении качества обслуживания.'
        }
      ]
    },
    // Demo Section
    demo: {
      title: 'Испытайте DentalBotPro в Действии в Прямом Эфире',
      subtitle: 'Посмотрите в персональной демонстрации, как наш ИИ-помощник революционизирует вашу стоматологическую практику и помогает вам завоевать и обслуживать больше пациентов.',
      placeholder: 'Здесь будет отображено ваше персонализированное демонстрационное видео DentalBotPro',
      cta: 'Забронировать бесплатную демонстрацию сейчас'
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
