'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solution from '../components/Solution'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Integration from '../components/Integration'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
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
      <Footer />
    </main>
  )
}