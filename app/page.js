'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Problems from '../components/Problems'
import Solution from '../components/Solution'
import Features from '../components/Features'
import Integration from '../components/Integration'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Benefits from '../components/Benefits'
import Demo from '../components/Demo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AboutModal from '../components/AboutModal'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Problems />
      <Solution />
      <Features />
      <Integration />
      <HowItWorks />
      <Pricing />
      <Benefits />
      <Demo />
      <Contact />
      <Footer />
      <AboutModal />
    </main>
  )
}