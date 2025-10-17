import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
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

  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center mr-3 text-white text-xl">
                <i className="fas fa-robot"></i>
              </div>
              <span className="text-2xl font-bold gradient-text">DentalBotPro</span>
            </div>
            <p className="text-neutral-light leading-relaxed">
              Ihr KI-Assistent für moderne Zahnarztpraxen. 24/7 Patientenbetreuung auf höchstem Niveau.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <i className="fas fa-envelope w-5 mr-3 text-accent-teal"></i>
                <a 
                  href="mailto:info@dentalbotpro.com" 
                  className="hover:text-accent-teal transition-colors duration-300"
                >
                  info@dentalbotpro.com
                </a>
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone w-5 mr-3 text-accent-teal"></i>
                <a 
                  href="tel:+4930120844430" 
                  className="hover:text-accent-teal transition-colors duration-300"
                >
                  +49 (0) 30 120 844 30
                </a>
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <div className="space-y-3">
              {[
                { label: 'Datenschutz', href: '#' },
                { label: 'Impressum', href: '#' },
                { label: 'AGB', href: '#' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-neutral-light hover:text-white transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6">Features</h3>
            <div className="space-y-3">
              {[
                { label: '24/7 KI-Assistent', onClick: () => scrollToSection('funktionen') },
                { label: 'Mehrsprachiger Support', onClick: () => scrollToSection('funktionen') },
                { label: 'Automatische Terminbuchung', onClick: () => scrollToSection('funktionen') },
                { label: 'Deutsche Server', onClick: () => scrollToSection('funktionen') }
              ].map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={feature.onClick}
                  whileHover={{ x: 5 }}
                  className="block text-left text-neutral-light hover:text-white transition-all duration-300 relative group"
                >
                  {feature.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-neutral-text/20 mt-12 pt-8 text-center"
        >
          <p className="text-neutral-text">
            &copy; 2024 DentalBotPro. Alle Rechte vorbehalten.
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-blue text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer