import { motion } from 'framer-motion'
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
      {/* Background with Fresh Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-blue via-primary-blue-600 to-accent-green-600"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent-green/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 container mx-auto px-6 text-center text-white"
      >
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed font-light"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-green hover:bg-accent-green-600 text-white font-bold text-xl px-12 py-5 rounded-full 
                         shadow-2xl hover:shadow-3xl transition-all duration-300 
                         transform inline-flex items-center group"
            >
              <span className="mr-3">{t('hero.cta')}</span>
              <motion.i 
                className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { number: '24/7', text: t('hero.stats.support'), icon: 'clock' },
            { number: '100+', text: t('hero.stats.languages'), icon: 'globe' },
            { number: '80%', text: t('hero.stats.timeSaving'), icon: 'chart-line' },
            { number: 'KI', text: t('hero.stats.learning'), icon: 'brain' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -8,
                rotateY: 5 
              }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl 
                         hover:bg-white/25 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl mb-3 text-accent-green-200 group-hover:text-accent-green-100 transition-colors">
                <i className={`fas fa-${stat.icon}`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/90 text-center cursor-pointer group"
            onClick={() => document.getElementById('probleme')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="text-sm mb-3">{t('hero.scrollText')}</div>
            <motion.i 
              className="fas fa-chevron-down text-2xl group-hover:text-accent-green-200 transition-colors"
              animate={{ 
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity 
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero