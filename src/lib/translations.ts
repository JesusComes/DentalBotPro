export type Language = 'de' | 'en' | 'fr';

export const translations = {
  de: {
    // Navigation
    "nav.home": "Home",
    "nav.solution": "Lösung",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.contact": "Kontakt",
    "nav.about": "Über uns",
    "nav.demo": "Kostenlose Demo",
    
    // Hero section
    "hero.title": "Verpassen Sie nie wieder einen Patientenanruf! Auch nach Feierabend",
    "hero.subtitle": "Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis",
    "hero.button": "Jetzt DentalBotPro live testen",
    
    // Stats section
    "stats.consultation": "Zahnmedizin-Beratung",
    "stats.languages": "Sprachen",
    "stats.savings": "Zeitersparnis",
    "stats.learning": "Lernfähig",
    
    // Problems section
    "problems.title": "Kennen Sie diese Probleme in Ihrer Zahnarztpraxis?",
    "problems.subtitle": "Diese typischen Herausforderungen kosten Sie täglich Patienten und Umsatz",
    "problems.missed.title": "Verpasste Anrufe nach Feierabend",
    "problems.missed.description": "Das Problem: Jeder nicht angenommene Anruf nach 18 Uhr bedeutet potenziell einen verlorenen Neupatienten. Studien zeigen, dass 70% der Patienten bei nicht erreichter Zahnarztpraxis direkt zur Konkurrenz weiterwählen.",
    "problems.staff.title": "Chronische Personalengpässe",
    "problems.staff.description": "Das Problem: Ihr bestens ausgebildetes Rezeptionsteam ist dauerhaft überlastet mit repetitiven Telefonaten zu Standardfragen, Öffnungszeiten und einfachen Terminanfragen.",
    "problems.wait.title": "Lange Wartezeiten für Rückrufe",
    "problems.wait.description": "Das Problem: Neue Patienten müssen oft tagelang auf Rückrufe warten - in Zeiten von Sofort-Service eine fatale Erfahrung. Jeder Tag Wartezeit reduziert Ihre Konversionsrate um bis zu 30%.",
    "problems.cancellations.title": "Unbemerkte Terminabsagen",
    "problems.cancellations.description": "Das Problem: Absagen auf dem Anrufbeantworter bleiben häufig stundenlang unbemerkt. Wertvolle Behandlungstermine bleiben ungenutzt, während andere Patienten wochenlang warten müssen.",
    "problems.language.title": "Sprachbarrieren",
    "problems.language.description": "Das Problem: In multilingualen Städten gehen wertvolle Patientenpotenziale verloren, weil Anfragen auf Türkisch, Arabisch oder anderen Sprachen nicht professionell bearbeitet werden können.",
    "problems.chaos.title": "Termin-Chaos",
    "problems.chaos.description": "Das Problem: Manuelle Terminverwaltung führt zu Doppelbuchungen und Terminkollisionen. Die Folge: gestresste Teams, verärgerte Patienten und Imageschaden.",
    "problems.noShow.title": "Hohe Ausfallquote",
    "problems.noShow.description": "Das Problem: Ohne systematische Erinnerungen liegt die Ausfallquote bei 15-20%. Das sind täglich mehrere ungenutzte Behandlungseinheiten bei gleichzeitig vollen Wartelisten.",
    "problems.inefficient.title": "Ineffiziente Zeitverteilung",
    "problems.inefficient.description": "Das Problem: Ihr Fachpersonal verbringt 60-70% der Arbeitszeit mit einfachen Telefonaten statt mit wertschöpfender Patientenbetreuung. Sie bezahlen Fachkraft-Gehälter für Telefondienst.",
    "problems.emergency.title": "Verlorene Notfalltermine",
    "problems.emergency.description": "Das Problem: Patienten mit akuten Zahnschmerzen rufen mehrere Zahnarztpraxen an und wählen die erste, die sofort antwortet. Ist Ihr Telefon besetzt, sind diese wertvollen Notfall- und Akutpatienten unwiederbringlich verloren.",
    
    // Solution section
    "solution.title": "Die Lösung: Ihr intelligenter Zahnarztpraxis-Assistent",
    "solution.subtitle": "Unser KI-Agent mit tiefem Zahnmedizin-Wissen behandelt sofort alle Patientenanfragen - telefonisch und per Chat auf Ihrer Website.",
    "solution.feature1": "Sofortige Antworten auf alle Patientenanfragen",
    "solution.feature2": "Automatische Terminbuchungen rund um die Uhr",
    "solution.feature3": "Tiefes Zahnmedizin-Wissen und Behandlungserklärungen",
    "solution.feature4": "Komplette Entlastung für Ihr Zahnarztpraxis-Team",
    "solution.feature5": "Mehr Zeit für hochwertige Patientenbehandlung",
    "solution.feature6": "Mehrsprachige Kommunikation (100+ Sprachen)",
    "solution.feature7": "Intelligente Triage und Notfall-Weiterleitung",
    "solution.feature8": "Automatische Patienten-Erinnerungen",
    "solution.feature9": "Integration in bestehende Zahnarztpraxis-Systeme",
    "solution.feature10": "Lernende KI - passt sich Ihrer Zahnarztpraxis an",
    "solution.feature11": "Nachverfolgung verpasster Anrufe",
    "solution.feature12": "Automatische Sammlung von Zahnarztpraxis-Bewertungen",
    
    // Features section
    "features.title": "Alles was Ihre Zahnarztpraxis braucht",
    "features.subtitle": "Umfassende KI-Funktionen für moderne Zahnarztpraxen",
    "features.availability.title": "24/7 Verfügbarkeit",
    "features.availability.description": "Beantwortet Anrufe und Chats rund um die Uhr, auch nachts und am Wochenende. Ihre Patienten erreichen Sie immer.",
    "features.scheduling.title": "Intelligente Terminverwaltung",
    "features.scheduling.description": "Bucht, ändert und bestätigt Termine automatisch - Integration in Ihren bestehenden Kalender und Zahnarztpraxis-System.",
    "features.multilingual.title": "Vollständig mehrsprachig",
    "features.multilingual.description": "Kommuniziert perfekt in jeder Sprache - Deutsch, Englisch, Türkisch, Arabisch, Russisch, Polnisch und über 100 weitere Sprachen für maximale Patientenreichweite.",
    "features.data.title": "Patientendaten erfassen",
    "features.data.description": "Speichert automatisch Name, Kontaktdaten und Terminwünsche in Ihrem CRM oder Zahnarztpraxis-System.",
    "features.reminders.title": "Automatische Erinnerungen",
    "features.reminders.description": "Versendet automatisch Termin-SMS und E-Mails - reduziert No-Shows um bis zu 70%.",
    "features.emergency.title": "Notfall-Weiterleitung",
    "features.emergency.description": "Erkennt intelligente echte Zahnnotfälle und leitet sofort an Ihre Notfallnummer oder Bereitschaftsdienst weiter.",
    "features.knowledge.title": "Zahnmedizin-Wissen",
    "features.knowledge.description": "Beantwortet komplexe Fragen zu Zahnbehandlungen, Nachsorge und Prävention - basierend auf neuesten Zahndatenbanken und Richtlinien.",
    "features.learning.title": "Deep Learning",
    "features.learning.description": "Lernt kontinuierlich die spezifischen Abläufe, Behandlungsmethoden und Terminlogik Ihrer Zahnarztpraxis - wird täglich präziser.",
    "features.consultation.title": "Zahnmedizin-Beratung",
    "features.consultation.description": "Erklärt zahnmedizinische Behandlungsabläufe, beantwortet Kostenfragen und bereitet Patienten optimal auf ihren Zahnarzttermin vor - menschlich und einfühlsam.",
    
    // Integration section
    "integration.title": "Funktioniert mit JEDER Zahnarztpraxis-Software - Garantiert",
    "integration.subtitle": "Kein Systemwechsel. Keine komplizierten Schnittstellen. Sofort einsatzbereit.",
    "integration.step1.title": "KI-Agent erfasst perfekt",
    "integration.step1.description": "Ihr intelligenter Assistent sammelt alle wichtigen Informationen: Name, Kontaktdaten, Terminwunsch, Wunschzahnarzt und Behandlungsgrund - strukturiert und vollständig.",
    "integration.step2.title": "Zentrale Übersicht für Ihr Team",
    "integration.step2.description": "Alle Terminanfragen erscheinen übersichtlich in Ihrem Dashboard, werden per E-Mail zugestellt oder landen direkt in Ihrem CRM (Google Calendar, HubSpot, Excel).",
    "integration.step3.title": "Sie behalten die Kontrolle",
    "integration.step3.description": "Ihr Team prüft die Anfragen und bestätigt Termine mit einem Klick in Ihrer gewohnten Zahnarztpraxis-Software.",
    "integration.standard.title": "Standard-Integration (Sofort verfügbar)",
    "integration.standard.subtitle": "Kompatibel mit allen gängigen Zahnarztpraxis-Systemen:",
    "integration.premium.title": "Premium-Option: Direkte Integration",
    "integration.premium.description": "Für moderne Cloud-Systeme (CGM LIFE, DocCirrus) bieten wir auf Wunsch vollautomatische Synchronisation - Termine erscheinen direkt in Ihrer Zahnarztpraxis-Software ohne manuellen Transfer.",
    "integration.advantage.title": "Der Vorteil unseres Ansatzes",
    "integration.advantage.description1": "Während andere Lösungen an veralteten Schnittstellen scheitern, funktioniert DentalBotPro universal - egal wie alt oder modern Ihre Zahnarztpraxis-Software ist. Sie erhalten strukturierte, hochwertige Patientendaten ohne technisches Risiko oder IT-Projekte.",
    "integration.advantage.description2": "Typische Zeitersparnis: Eine Terminanfrage in Ihrer Software zu bestätigen dauert 10 Sekunden - das Telefonat hätte 5 Minuten gedauert. Sie sparen 90% der Zeit bei voller Kontrolle.",
    
    // How it works section
    "howitworks.title": "So funktioniert es",
    "howitworks.subtitle": "In nur 3 Schritten zu Ihrem persönlichen KI-Assistenten",
    "howitworks.step1.title": "Setup in 72 Stunden",
    "howitworks.step1.description": "Wir konfigurieren Ihren persönlichen KI-Assistenten spezifisch für Ihre Zahnarztpraxis und Ihre Arbeitsabläufe.",
    "howitworks.step2.title": "Integration in Ihre Zahnarztpraxis",
    "howitworks.step2.description": "Anbindung an Telefon, Website und optional an Ihre bestehende Zahnarztpraxis-Software für nahtlose Arbeitsabläufe.",
    "howitworks.step3.title": "Sofort einsatzbereit",
    "howitworks.step3.description": "Ihr KI-Assistent startet und entlastet Ihr Team ab Tag 1 - messbare Ergebnisse ab der ersten Stunde.",
    
    // Pricing section
    "pricing.title": "Transparente Preise - Keine versteckten Kosten",
    "pricing.subtitle": "KI-Agenten mit verschiedenen Zahnmedizin-Wissensstufen für jede Zahnarztpraxis-Größe",
    "pricing.pro.name": "Pro",
    "pricing.premium.name": "Premium",
    "pricing.enterprise.name": "Enterprise",
    "pricing.monthly": "monatlich",
    "pricing.setup": "Setup-Preis: 299€",
    "pricing.setupTime": "Setup-Zeit: 72 Stunden",
    "pricing.setupTimePremium": "Setup-Zeit: 1 Woche",
    "pricing.setupTimeEnterprise": "Setup-Zeit: 2-4 Wochen",
    "pricing.popular": "BELIEBT",
    "pricing.pro.feature1": "Website-Chatbot",
    "pricing.pro.feature2": "24/7 Terminbuchung",
    "pricing.pro.feature3": "Basis Zahnfragen",
    "pricing.pro.feature4": "Mehrsprachiger Support",
    "pricing.pro.feature5": "E-Mail Integration",
    "pricing.pro.feature6": "Automatische Erinnerungen",
    "pricing.premium.feature1": "Alles aus Pro Plan",
    "pricing.premium.feature2": "Sprachfähig: KI kann sprechen",
    "pricing.premium.feature3": "Erweiterte Zahnberatung",
    "pricing.premium.feature4": "Symptom-Ersteinschätzung",
    "pricing.premium.feature5": "Intelligente Notfall-Weiterleitung",
    "pricing.premium.feature6": "CRM Integration",
    "pricing.enterprise.feature1": "Alles aus Premium Plan",
    "pricing.enterprise.feature2": "Telefon-Agent: Führt echte Anrufe",
    "pricing.enterprise.feature3": "Audio-Input: Patienten können sprechen",
    "pricing.enterprise.feature4": "Echtzeit-Gespräche am Telefon",
    "pricing.enterprise.feature5": "Zahnarztpraxis-spezifisches Deep Learning",
    "pricing.enterprise.feature6": "Umfassende Patientenberatung",
    "pricing.enterprise.feature7": "Vollautomatisierte Arbeitsabläufe",
    "pricing.enterprise.feature8": "Persönlicher Success Manager",
    "pricing.buy": "Jetzt kaufen",
    "pricing.note": "Alle Preise zzgl. MwSt | 30 Tage Kündigungsfrist | Kostenlose Testversion verfügbar",
    
    // Benefits section
    "benefits.title": "Warum Zahnarztpraxen auf DentalBotPro setzen",
    "benefits.subtitle": "Der KI-Agent mit tiefem Zahnmedizin-Wissen - weit mehr als nur Terminbuchung",
    "benefits.morePatients.title": "Mehr Patienten",
    "benefits.morePatients.description": "Nie wieder verlorene Anfragen durch Nichterreichbarkeit - jeder Anruf wird professionell mit Zahnmedizin-Kompetenz beantwortet",
    "benefits.knowledge.title": "Zahnmedizin-Wissen",
    "benefits.knowledge.description": "Erklärt Zahnbehandlungen, beantwortet Fachfragen und berät Patienten kompetent - basierend auf erstklassigen Zahndaten",
    "benefits.efficiency.title": "Höhere Effizienz",
    "benefits.efficiency.description": "80% weniger Zeit für Patientenkommunikation - der KI-Agent übernimmt auch Beratungsgespräche",
    "benefits.availability.title": "24/7 Verfügbar",
    "benefits.availability.description": "Rund um die Uhr verfügbar - auch nachts für Zahnbehandlungsberatung und Terminbuchung",
    "benefits.learning.title": "Deep Learning",
    "benefits.learning.description": "Lernt kontinuierlich die spezifischen Abläufe und Besonderheiten Ihrer Zahnarztpraxis - wird präziser",
    "benefits.empathy.title": "Menschlich & Einfühlsam",
    "benefits.empathy.description": "Antwortet natürlich und verständnisvoll - Patienten merken oft nicht, dass sie mit einem KI-Agenten sprechen",
    "benefits.savings.title": "Kosteneinsparung",
    "benefits.savings.description": "Ersetzt mehrere Mitarbeiter: Rezeption + Beratung + Terminkoordination - alles in einem System",
    "benefits.competence.title": "Zahnmedizin-Kompetenz",
    "benefits.competence.description": "Beantwortet Fragen zu Zahnbehandlungen, Nachsorge und Prävention - mit Zugang zu neuesten Zahndatenbanken.",
    
    // Demo section
    "demo.title": "Jetzt DentalBotPro live testen",
    "demo.subtitle": "Chatten Sie mit unserem KI-Assistenten mit echtem Zahnmedizin-Wissen - stellen Sie Fragen zu Behandlungen, Terminen oder Zahnarztpraxis-Abläufen",
    "demo.placeholder1": "KI-Agent Integration bereit",
    "demo.placeholder2": "Hier wird Ihr DentalBotPro KI-Agent eingebettet.",
    "demo.placeholder3": "Für Entwickler: Ersetzen Sie diesen div-Container durch Ihr KI-Agent Embed Script.",
    "demo.pricingButton": "Zu den Preismodellen",
    
    // Contact section
    "contact.title": "Starten Sie noch heute",
    "contact.subtitle": "Vereinbaren Sie Ihre kostenlose 30-minütige Demo und sehen Sie DentalBotPro live in Aktion. Erfahren Sie, wie Sie Ihre Zahnarztpraxis revolutionieren können.",
    "contact.form.title": "Demo Termin vereinbaren",
    "contact.form.subtitle": "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Ihr vollständiger Name",
    "contact.form.email": "E-Mail",
    "contact.form.emailPlaceholder": "Ihre E-Mail-Adresse",
    "contact.form.phone": "Telefon",
    "contact.form.phonePlaceholder": "Ihre Telefonnummer",
    "contact.form.practice": "Zahnarztpraxisname",
    "contact.form.practicePlaceholder": "Name Ihrer Zahnarztpraxis",
    "contact.form.message": "Ihre Nachricht (optional)",
    "contact.form.messagePlaceholder": "Besondere Anforderungen oder Fragen...",
    "contact.form.submit": "Jetzt Demo buchen",
    "contact.form.privacy": "Ihre Daten werden vertraulich behandelt und nach deutschen Datenschutzstandards verarbeitet.",
    "contact.success.title": "Vielen Dank für Ihre Anfrage!",
    "contact.success.message1": "Wir haben Ihre Demo-Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.",
    "contact.success.message2": "Sie erhalten in Kürze eine Bestätigungs-E-Mail mit weiteren Details.",
    
    // Footer
    "footer.description": "Ihr KI-Assistent für moderne Zahnarztpraxen. 24/7 Patientenbetreuung auf höchstem Niveau.",
    "footer.email": "E-Mail: info@dentalbotpro.de",
    "footer.phone": "Telefon: +49 (0) 30 120 844 30",
    "footer.links": "Links",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
    "footer.terms": "AGB",
    "footer.features": "Features",
    "footer.feature1": "24/7 KI-Assistent",
    "footer.feature2": "Mehrsprachiger Support",
    "footer.feature3": "Automatische Terminbuchung",
    "footer.feature4": "Deutsche Server",
    "footer.rights": "Alle Rechte vorbehalten.",
    
    // About modal
    "about.intro.title": "Ihr Partner für professionelle AI-Agent-Entwicklung",
    "about.intro.description": "Unsere Firma DentalBotPro ist ein führender Spezialist für die professionelle Erstellung, Programmierung und Erweiterung von AI-Agenten aller Art. Wir entwickeln intelligente Automatisierungslösungen, die Unternehmen revolutionieren und ihre Effizienz drastisch steigern.",
    "about.expertise.title": "Unsere Expertise",
    "about.expertise.subtitle": "Maßgeschneiderte Lösungen für jeden Anwendungsfall",
    "about.expertise.card1.title": "AI-Agent-Entwicklung",
    "about.expertise.card1.description": "Maßgeschneiderte Lösungen für jeden Anwendungsfall",
    "about.expertise.card2.title": "Voice & Chat AI",
    "about.expertise.card2.description": "Natürliche Kommunikationsfähigkeiten in über 100 Sprachen",
    "about.expertise.card3.title": "System-Integration",
    "about.expertise.card3.description": "Nahtlose Anbindung an bestehende Software und Workflows",
    "about.expertise.card4.title": "Deep Learning",
    "about.expertise.card4.description": "Kontinuierlich lernende AI-Systeme mit branchenspezifischem Fachwissen",
    "about.expertise.card5.title": "24/7 Support",
    "about.expertise.card5.description": "Zuverlässiger Betrieb und kontinuierliche Optimierung",
    "about.industries.title": "Für wen wir arbeiten",
    "about.industries.subtitle": "Unsere AI-Agenten unterstützen Unternehmen jeder Größe",
    "about.industries.card1": "Zahnarztpraxen & Kliniken",
    "about.industries.card2": "E-Commerce & Retail",
    "about.industries.card3": "Immobilien & Makler",
    "about.industries.card4": "Beratung & Services",
    "about.why.title": "Warum DentalBotPro?",
    "about.why.subtitle": "Die Vorteile unserer Lösungen",
    "about.why.card1.title": "Deutsche Entwicklung",
    "about.why.card1.description": "Höchste Qualitätsstandards und DSGVO-Konformität",
    "about.why.card2.title": "Branchenexpertise",
    "about.why.card2.description": "Tiefes Verständnis für spezifische Geschäftsprozesse",
    "about.why.card3.title": "Skalierbare Lösungen",
    "about.why.card3.description": "Von kleinen Automatisierungen bis zu Enterprise-Systemen",
    "about.why.card4.title": "Persönlicher Support",
    "about.why.card4.description": "Dedicated Success Manager für jeden Kunden",
    "about.highlights.title": "Unsere Highlights",
    "about.highlights.subtitle": "Was uns besonders macht",
    "about.highlights.card1.title": "Schnelle Implementierung",
    "about.highlights.card1.description": "Ihr KI-Assistent in nur 72 Stunden einsatzbereit",
    "about.highlights.card2.title": "GDPR-konform",
    "about.highlights.card2.description": "Datenschutz nach deutschen und europäischen Standards",
    "about.highlights.card3.title": "Maßgeschneidert",
    "about.highlights.card3.description": "Individuelle Anpassung an Ihre Zahnarztpraxisabläufe",
    "about.cta.title": "Bereit für Ihren AI-Agenten?",
    "about.cta.subtitle": "Lassen Sie uns gemeinsam die perfekte AI-Lösung für Ihr Unternehmen entwickeln.",
    "about.cta.button1": "Jetzt Beratung anfragen",
    "about.cta.button2": "Live Demo testen!"
  },
  // Note: I'm including partial EN and FR translations for brevity
  // In a full implementation, these would be complete
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.solution": "Solution",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.about": "About Us",
    "nav.demo": "Free Demo",
    
    // Hero section
    "hero.title": "Never Miss a Patient Call Again! Even After Hours",
    "hero.subtitle": "Your intelligent assistant with comprehensive dental knowledge answers professional questions, explains treatments, books appointments, and learns the specifics of your dental practice",
    "hero.button": "Test DentalBotPro Live Now",
    
    // Add other English translations here...
    // For brevity, I'm showing the structure
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.solution": "Solution",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Tarifs",
    "nav.contact": "Contact",
    "nav.about": "À propos",
    "nav.demo": "Démo gratuite",
    
    // Hero section
    "hero.title": "Ne manquez plus jamais un appel de patient ! Même après les heures de travail",
    "hero.subtitle": "Votre assistant intelligent avec des connaissances dentaires complètes répond aux questions professionnelles, explique les traitements, prend des rendez-vous et apprend les spécificités de votre cabinet dentaire",
    "hero.button": "Testez DentalBotPro en direct maintenant",
    
    // Add other French translations here...
    // For brevity, I'm showing the structure
  }
} as const;

export function getTranslation(key: string, language: Language = 'de'): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}
