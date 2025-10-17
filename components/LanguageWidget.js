import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageWidget = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-xl 
          bg-white/10 backdrop-blur-md border border-white/20
          hover:bg-white/20 hover:border-white/30
          transition-all duration-300 ease-out
          text-sm font-medium text-primary-blue-800
          shadow-lg hover:shadow-xl
          ${isOpen ? 'bg-white/20 border-white/30' : ''}
        `}
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline-block font-semibold">
          {currentLang?.code.toUpperCase()}
        </span>
        <motion.i 
          className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>

      {/* Language Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              absolute top-full right-0 mt-2 w-48
              bg-white/95 backdrop-blur-xl rounded-2xl 
              border border-primary-blue-200 shadow-2xl
              overflow-hidden z-50
            "
          >
            <div className="py-2">
              {languages.map((language, index) => (
                <motion.button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  whileHover={{ 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    x: 4
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3
                    text-left text-sm font-medium text-primary-blue-800
                    hover:bg-primary-blue/10 transition-all duration-200
                    ${currentLanguage === language.code ? 'bg-primary-blue/5 border-r-2 border-primary-blue' : ''}
                  `}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1">
                    <div className="font-semibold">{language.name}</div>
                    <div className="text-xs text-primary-blue-600 uppercase tracking-wide">
                      {language.code}
                    </div>
                  </div>
                  {currentLanguage === language.code && (
                    <motion.i 
                      className="fas fa-check text-primary-blue text-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Elegant bottom accent */}
            <div className="h-1 bg-gradient-blue-green" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageWidget