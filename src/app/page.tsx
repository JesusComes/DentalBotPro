'use client'

import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ProblemsSection from '@/components/ProblemsSection'
import SolutionSection from '@/components/SolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
import IntegrationSection from '@/components/IntegrationSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import PricingSection from '@/components/PricingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Problems Section */}
      <ProblemsSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Integration Section */}
      <IntegrationSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
