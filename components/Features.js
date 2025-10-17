import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Features = () => {
  const { t } = useLanguage()
  
  // Refs for each section
  const problemsRef = useRef(null)
  const solutionRef = useRef(null)
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const benefitsRef = useRef(null)
  const liveDemoRef = useRef(null)

  // InView hooks
  const problemsInView = useInView(problemsRef, { once: true, threshold: 0.1 })
  const solutionInView = useInView(solutionRef, { once: true, threshold: 0.1 })
  const featuresInView = useInView(featuresRef, { once: true, threshold: 0.1 })
  const howItWorksInView = useInView(howItWorksRef, { once: true, threshold: 0.1 })
  const benefitsInView = useInView(benefitsRef, { once: true, threshold: 0.1 })
  const liveDemoInView = useInView(liveDemoRef, { once: true, threshold: 0.1 })

  // Animation variants
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

  const cardHoverVariants = {
    scale: 1.05,
    y: -10,
    rotateY: 5,
    transition: { duration: 0.3, ease: "easeOut" }
  }

  return (
    <>
      {/* PROBLEMS SECTION - 8 Problems with Stunning Visuals */}
      <section ref={problemsRef} id="probleme" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 bg-red-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-40 left-10 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={problemsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6"
            >
              {t('problems.title')}
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              {t('problems.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={problemsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t('problems.items').map((problem, index) => (
              <motion.div
                key={problem.id}
                variants={itemVariants}
                whileHover={cardHoverVariants}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/40 
                          hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4 text-red-500 group-hover:text-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <i className={`fas fa-${problem.icon}`}></i>
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {problem.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION - Clean and Powerful */}
      <section ref={solutionRef} id="loesung" className="py-20 bg-gradient-to-br from-accent-green-50 via-green-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-10 left-10 w-64 h-64 bg-accent-green-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent-green-600 to-blue-600 bg-clip-text text-transparent mb-8"
            >
              {t('solution.title')}
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 mx-auto"
            >
              <motion.p 
                variants={itemVariants} 
                className="text-xl md:text-3xl text-gray-700 leading-relaxed font-medium"
              >
                {t('solution.subtitle')}
              </motion.p>
              
              {/* Central AI Icon */}
              <motion.div
                className="mt-8 text-6xl md:text-8xl text-accent-green-500"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <i className="fas fa-robot"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION - 6 Dynamic Features */}
      <section ref={featuresRef} id="funktionen" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-blue-300 rotate-45"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 border-4 border-purple-300 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              {t('features.title')}
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
            >
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
                key={feature.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 
                          hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))" }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-6 text-blue-500 group-hover:text-purple-500 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <i className={`fas fa-${feature.icon}`}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'subtract' }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION - 3 Steps with Flow */}
      <section ref={howItWorksRef} id="so-gehts" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
            >
              {t('howItWorks.title')}
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            >
              {t('howItWorks.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          >
            {t('howItWorks.steps').map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  transition: { duration: 0.3 }
                }}
                className="text-center relative"
              >
                {/* Connecting Line */}
                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent-green-400 to-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: howItWorksInView ? 1 : 0 }}
                    transition={{ delay: index * 0.5 + 1, duration: 0.8 }}
                  />
                )}

                {/* Step Number */}
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-accent-green-400 to-blue-500 rounded-full 
                            flex items-center justify-center text-white shadow-2xl relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <motion.i 
                    className={`fas fa-${step.icon} text-3xl relative z-10`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <div className="absolute top-2 right-2 text-sm font-bold bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                    {step.id}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS SECTION - 4 Key Benefits */}
      <section ref={benefitsRef} id="vorteile" className="py-20 bg-gradient-to-br from-accent-green-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Flowing Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-20 left-20 w-72 h-72 bg-accent-green-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent-green-600 to-blue-600 bg-clip-text text-transparent mb-6"
            >
              {t('benefits.title')}
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t('benefits.items').map((benefit, index) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -12,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 
                          hover:shadow-2xl transition-all duration-500 group text-center relative overflow-hidden"
              >
                {/* Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-6 text-accent-green-500 group-hover:text-blue-500 transition-colors duration-300"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                  >
                    <i className={`fas fa-${benefit.icon}`}></i>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-accent-green-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-accent-green-400 rounded-3xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIVE DEMO SECTION - Interactive Feel */}
      <section ref={liveDemoRef} id="live-demo" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 text-8xl text-blue-400"
          >
            <i className="fas fa-cog"></i>
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 text-6xl text-purple-400"
          >
            <i className="fas fa-microchip"></i>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={liveDemoInView ? "visible" : "hidden"}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-8"
            >
              {t('liveDemo.title')}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t('liveDemo.subtitle')}
            </motion.p>

            {/* Demo Widget Placeholder */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 
                         shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-8xl mb-8 text-accent-green-400"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <i className="fas fa-comments"></i>
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Live Chat Demo Widget
                </h3>
                
                <p className="text-lg text-gray-300 mb-8">
                  Der interaktive Chatbot wird hier geladen...
                </p>
                
                <motion.div
                  className="inline-flex items-center space-x-3 text-accent-green-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="fas fa-circle text-sm"></i>
                  <span className="text-lg">Bot ist bereit</span>
                  <i className="fas fa-circle text-sm"></i>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Features