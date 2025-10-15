'use client';

import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('de');

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        <Header language={language} setLanguage={setLanguage} />
        <Hero language={language} />
        <Problems language={language} />
        <Solution language={language} />
        <Features language={language} />
        <Pricing language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </main>
    </LanguageProvider>
  );
}
