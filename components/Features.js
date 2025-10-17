import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Features = () => {
  const { t } = useLanguage()
  const problemsRef = useRef(null)
  const solutionRef = useRef(null)
  const featuresRef = useRef(null)
  const integrationRef = useRef(null)
  const howItWorksRef = useRef(null)
  const pricingRef = useRef(null)
  const benefitsRef = useRef(null)

  const problemsInView = useInView(problemsRef, { once: true, threshold: 0.1 })
  const solutionInView = useInView(solutionRef, { once: true, threshold: 0.1 })
  const featuresInView = useInView(featuresRef, { once: true, threshold: 0.1 })
  const integrationInView = useInView(integrationRef, { once: true, threshold: 0.1 })
  const howItWorksInView = useInView(howItWorksRef, { once: true, threshold: 0.1 })
  const pricingInView = useInView(pricingRef, { once: true, threshold: 0.1 })
  const benefitsInView = useInView(benefitsRef, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <>
      {/* Problems Section */}
      <section ref={problemsRef} id="probleme" className="py-20 bg-primary-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={problemsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-blue-800 mb-6">
              {t('problems.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-primary-blue-600 max-w-3xl mx-auto">
              {t('problems.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={problemsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {t('problems.items').map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border-l-4 border-accent-green"
              >
                <div className="text-3xl mb-4 text-accent-green">
                  <i className={index === 0 ? "fas fa-phone-slash" : index === 1 ? "fas fa-users" : "fas fa-clock"}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-blue-800 mb-4">{problem.title}</h3>
                <p className="text-primary-blue-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} id="loesung" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-blue-800 mb-6">
              {t('solution.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-primary-blue-600 max-w-4xl mx-auto">
              {t('solution.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {t('solution.features').map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-primary-blue-50 border border-primary-blue-200 p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
              >
                <div className="text-2xl mb-3 text-primary-blue">
                  <i className={[
                    "fas fa-bolt", "fas fa-calendar-check", "fas fa-stethoscope", 
                    "fas fa-user-friends", "fas fa-clock", "fas fa-globe",
                    "fas fa-exclamation-triangle", "fas fa-bell", "fas fa-plug",
                    "fas fa-brain", "fas fa-phone-alt", "fas fa-star"
                  ][index]}></i>
                </div>
                <h3 className="text-sm font-semibold text-primary-blue-800 leading-tight">{feature}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="funktionen" className="py-20 bg-accent-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-blue-800 mb-6">
              {t('features.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-primary-blue-600 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t('features.items').map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="text-4xl mb-6 text-primary-blue">
                  <i className={[
                    "fas fa-clock", "fas fa-calendar-check", "fas fa-globe",
                    "fas fa-database", "fas fa-bell", "fas fa-exclamation-triangle",
                    "fas fa-stethoscope", "fas fa-brain", "fas fa-comments"
                  ][index]}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-blue-800 mb-4">{feature.title}</h3>
                <p className="text-primary-blue-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section ref={integrationRef} id="integration" className="py-20 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              {t('integration.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto opacity-90">
              {t('integration.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {t('integration.steps').map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-large text-neutral-dark text-center"
              >
                <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-neutral-text leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-neutral-dark"
          >
            <h3 className="text-center text-xl font-bold mb-4">{t('integration.standardTitle')}</h3>
            <p className="text-center text-neutral-text mb-6">{t('integration.standardSubtitle')}</p>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {['CGM LIFE', 'DocCirrus', 'MediDent', 'Albis', 'ELGA', 'Vivendi', 'DENT-X', 'CompuGroup', '+ alle anderen'].map((system, index) => (
                <div key={index} className="bg-neutral-light p-3 rounded-lg text-center text-sm font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200">
                  {system}
                </div>
              ))}
            </div>

            <div className="text-center">
              <h4 className="text-primary-blue font-bold mb-3">{t('integration.premiumTitle')}</h4>
              <p className="text-neutral-text">{t('integration.premiumDescription')}</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={integrationInView ? "visible" : "hidden"}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mt-8"
          >
            <h3 className="text-2xl font-bold mb-4">{t('integration.advantageTitle')}</h3>
            <p className="text-lg mb-4 opacity-90">{t('integration.advantageDescription')}</p>
            <p className="text-lg font-semibold opacity-95">{t('integration.advantageExtra')}</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} id="wie-es-funktioniert" className="py-20 bg-primary-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-blue-800 mb-6">
              {t('howItWorks.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-primary-blue-600 max-w-3xl mx-auto">
              {t('howItWorks.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between">
              {t('howItWorks.steps').map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex-1 text-center px-4 mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary-blue-800 mb-4">{step.title}</h3>
                  <p className="text-primary-blue-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} id="preise" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-blue-800 mb-6">
              {t('pricing.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-primary-blue-600 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {t('pricing.plans').map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-accent-green' : 'border border-primary-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-6 right-6 bg-accent-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {plan.badge}
                  </div>
                )}
                
                <div className={`p-8 text-center text-white ${
                  plan.popular ? 'bg-accent-green' : 'bg-primary-blue'
                }`}>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <div className="text-lg opacity-90 mb-4">{plan.period}</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-sm font-semibold mb-2">{plan.setupFee}</div>
                    <div className="text-sm opacity-90">{plan.setupTime}</div>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <i className="fas fa-check text-accent-green mr-3 mt-1"></i>
                        <span className="text-primary-blue-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-3 px-6 rounded-full font-bold transition-all duration-300 bg-accent-green text-white hover:bg-accent-green-600 hover:shadow-lg hover:-translate-y-1">
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={pricingInView ? "visible" : "hidden"}
            className="text-center mt-8"
          >
            <p className="text-primary-blue-600">{t('pricing.note')}</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} id="vorteile" className="py-20 bg-accent-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-blue-800 mb-6">
              {t('benefits.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-primary-blue-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t('benefits.items').map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-6 text-accent-teal">
                  <i className={[
                    "fas fa-user-plus", "fas fa-smile", "fas fa-users", "fas fa-piggy-bank"
                  ][index]}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-blue-800 mb-4">{benefit.title}</h3>
                <p className="text-primary-blue-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Agent Section */}
      <section className="py-20 bg-primary-blue-50" id="ai-agent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-large border border-primary-blue-200">
              <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-robot text-3xl text-white"></i>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue-800 mb-6">
                Ihr intelligenter DentalBot AI-Agent
              </h2>
              
              <p className="text-xl text-primary-blue-600 mb-8 leading-relaxed">
                Erleben Sie die Zukunft der Zahnarztpraxis-Kommunikation mit unserem fortschrittlichen AI-Agenten
              </p>
              
              {/* AI Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-accent-green-50 rounded-xl p-6 border border-accent-green-200">
                  <i className="fas fa-brain text-3xl text-accent-green mb-4 block"></i>
                  <h3 className="text-lg font-bold text-primary-blue-800 mb-2">Intelligente Antworten</h3>
                  <p className="text-sm text-primary-blue-600">Versteht komplexe Fragen und gibt präzise, fachliche Antworten</p>
                </div>
                
                <div className="bg-primary-blue-50 rounded-xl p-6 border border-primary-blue-200">
                  <i className="fas fa-language text-3xl text-primary-blue mb-4 block"></i>
                  <h3 className="text-lg font-bold text-primary-blue-800 mb-2">100+ Sprachen</h3>
                  <p className="text-sm text-primary-blue-600">Kommuniziert fließend in über 100 Sprachen weltweit</p>
                </div>
                
                <div className="bg-accent-green-50 rounded-xl p-6 border border-accent-green-200">
                  <i className="fas fa-clock text-3xl text-accent-green mb-4 block"></i>
                  <h3 className="text-lg font-bold text-primary-blue-800 mb-2">24/7 Verfügbar</h3>
                  <p className="text-sm text-primary-blue-600">Nie wieder verpasste Anrufe oder unbeantwortet Anfragen</p>
                </div>
              </div>
              
              <button
                onClick={() => {
                  const element = document.getElementById('kontakt')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-accent-green hover:bg-accent-green-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                <span className="mr-2">Jetzt AI-Agent testen</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features