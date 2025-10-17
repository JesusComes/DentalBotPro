'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const { name, email, phone, practice } = formData
    
    if (name && email && phone && practice) {
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        message: ''
      })
      
      // Scroll to success message
      setTimeout(() => {
        document.getElementById('success-message')?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 100)
    } else {
      alert(t('contact.required'))
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 gradient-text-brutal">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-brutal">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('contact.form_title')}
              </h3>
              <p className="text-gray-300">
                {t('contact.form_subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="form-brutal space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    {t('contact.name')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.name_placeholder')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    {t('contact.email')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.email_placeholder')}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    {t('contact.phone')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.phone_placeholder')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="practice" className="block text-white font-medium mb-2">
                    {t('contact.practice')} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="practice"
                    value={formData.practice}
                    onChange={handleInputChange}
                    placeholder={t('contact.practice_placeholder')}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.message_placeholder')}
                  rows="4"
                />
              </div>

              <button type="submit" className="btn-brutal w-full justify-center">
                {t('contact.submit')}
              </button>

              <p className="text-sm text-gray-400 text-center">
                {t('contact.privacy_note')}
              </p>
            </form>

            {showSuccess && (
              <div id="success-message" className="mt-12 card-brutal bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
                <div className="text-center">
                  <i className="fas fa-check-circle text-4xl text-green-400 mb-4"></i>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('contact.success_title')}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {t('contact.success_message')}
                  </p>
                  <p className="text-gray-400">
                    {t('contact.success_email')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}