import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background - No Gradients */}
      <div className="absolute inset-0 z-0 bg-primary-blue"></div>

      {/* Simplified Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 container mx-auto px-6 text-center text-white"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            {t('hero.title')}{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">{t('hero.titleHighlight')}</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-4 bg-accent-green/50 -z-10 rounded-sm"
              />
            </span>{' '}
            <br className="hidden md:block" />
            <span className="text-3xl md:text-5xl lg:text-6xl text-accent-green font-semibold">
              {t('hero.titleSuffix')}
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)'
            }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-green hover:bg-accent-green-600 text-white font-bold text-lg px-10 py-4 rounded-full 
                         shadow-2xl hover:shadow-3xl transition-all duration-300 
                         transform inline-flex items-center"
            >
              <span className="mr-2">{t('hero.cta')}</span>
              <i className="fas fa-arrow-right"></i>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '24/7', text: t('hero.stats.support') },
            { number: '100+', text: t('hero.stats.languages') },
            { number: '90%', text: t('hero.stats.timeSaving') },
            { number: '∞', text: t('hero.stats.learning') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{stat.number}</div>
              <div className="text-sm md:text-base drop-shadow-md">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 text-center"
          >
            <div className="text-sm mb-2 drop-shadow-md">{t('hero.scrollText')}</div>
            <i className="fas fa-chevron-down text-xl drop-shadow-lg"></i>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero