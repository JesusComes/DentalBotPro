import React from 'react';
import Head from 'next/head';
import { useLanguage } from '../contexts/LanguageContext';

// Import all components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Integration from '../components/Integration';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t('hero.title', 'AI-Powered Dental Assistant')} | DentalBot Pro</title>
        <meta name="description" content={t('hero.description', 'Streamline patient communication, appointment scheduling, and treatment recommendations with our advanced AI technology designed specifically for dental professionals.')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DentalBot Pro - AI-Powered Dental Assistant" />
        <meta property="og:description" content="Revolutionize your dental practice with intelligent automation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Hero />
          <Problems />
          <Solution />
          <Features />
          <Benefits />
          <HowItWorks />
          <Pricing />
          <Integration />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}