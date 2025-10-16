import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      const headerOffset = 100
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern dental office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/85 via-primary-blue/90 to-accent-teal/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent-teal/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow"
          >
            Verpassen Sie nie wieder einen{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Patientenanruf!</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-3 bg-accent-orange/30 -z-10"
              />
            </span>{' '}
            Auch nach Feierabend
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 font-light"
          >
            Ihr intelligenter Assistent mit umfassendem Zahnmedizin-Wissen beantwortet Fachfragen, 
            erklärt Behandlungen, bucht Termine und lernt die Besonderheiten Ihrer Zahnarztpraxis
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-blue font-bold text-lg px-10 py-4 rounded-full 
                         shadow-2xl hover:shadow-3xl transition-all duration-300 
                         hover:bg-neutral-light transform"
            >
              <span className="mr-2">Jetzt DentalBotPro live testen</span>
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
            { number: '24/7', text: 'Zahnmedizin-Beratung' },
            { number: '100+', text: 'Sprachen' },
            { number: '90%', text: 'Zeitersparnis' },
            { number: '∞', text: 'Lernfähig' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.text}</div>
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
            className="text-white/70 text-center"
          >
            <div className="text-sm mb-2">Scroll down</div>
            <i className="fas fa-chevron-down text-xl"></i>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero