import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      practice: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id=\"contact\" className=\"py-20 bg-gradient-to-br from-dental-blue-900 via-dental-blue-800 to-dental-green-900\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6\">
            {t('contact.title', 'Get Started Today')}
          </h2>
          <p className=\"text-xl text-dental-blue-100 max-w-3xl mx-auto\">
            {t('contact.subtitle', 'Ready to transform your dental practice? Contact us for a personalized demo.')}
          </p>
        </div>

        <div className=\"grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto\">
          {/* Contact Form */}
          <div className=\"bg-white rounded-3xl p-8 shadow-2xl\">
            <h3 className=\"text-2xl font-bold text-gray-900 mb-6\">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className=\"space-y-6\">
              <div>
                <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  {t('contact.form.name', 'Full Name')}
                </label>
                <input
                  type=\"text\"
                  id=\"name\"
                  name=\"name\"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue-500 focus:border-transparent transition-colors duration-200\"
                  placeholder=\"Enter your full name\"
                />
              </div>
              
              <div>
                <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  {t('contact.form.email', 'Email Address')}
                </label>
                <input
                  type=\"email\"
                  id=\"email\"
                  name=\"email\"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue-500 focus:border-transparent transition-colors duration-200\"
                  placeholder=\"Enter your email address\"
                />
              </div>
              
              <div>
                <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  {t('contact.form.phone', 'Phone Number')}
                </label>
                <input
                  type=\"tel\"
                  id=\"phone\"
                  name=\"phone\"
                  value={formData.phone}
                  onChange={handleChange}
                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue-500 focus:border-transparent transition-colors duration-200\"
                  placeholder=\"Enter your phone number\"
                />
              </div>
              
              <div>
                <label htmlFor=\"practice\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  {t('contact.form.practice', 'Practice Name')}
                </label>
                <input
                  type=\"text\"
                  id=\"practice\"
                  name=\"practice\"
                  value={formData.practice}
                  onChange={handleChange}
                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue-500 focus:border-transparent transition-colors duration-200\"
                  placeholder=\"Enter your practice name\"
                />
              </div>
              
              <div>
                <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">
                  {t('contact.form.message', 'Message')}
                </label>
                <textarea
                  id=\"message\"
                  name=\"message\"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue-500 focus:border-transparent transition-colors duration-200 resize-none\"
                  placeholder=\"Tell us about your practice and how we can help\"
                ></textarea>
              </div>
              
              <button
                type=\"submit\"
                className=\"w-full bg-gradient-to-r from-dental-blue-600 to-dental-green-600 hover:from-dental-blue-700 hover:to-dental-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg\"
              >
                {t('contact.form.submit', 'Send Message')}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className=\"space-y-8\">
            {/* Contact Details */}
            <div className=\"bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20\">
              <h3 className=\"text-2xl font-bold text-white mb-6\">
                Get in Touch
              </h3>
              
              <div className=\"space-y-6\">
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-12 h-12 bg-dental-green-500 rounded-lg flex items-center justify-center flex-shrink-0\">
                    <svg className=\"w-6 h-6 text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                      <path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\" />
                      <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=\"text-lg font-semibold text-white mb-1\">Email Us</h4>
                    <p className=\"text-dental-blue-100\">info@dentalbotpro.com</p>
                    <p className=\"text-dental-blue-100\">support@dentalbotpro.com</p>
                  </div>
                </div>
                
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-12 h-12 bg-dental-blue-500 rounded-lg flex items-center justify-center flex-shrink-0\">
                    <svg className=\"w-6 h-6 text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                      <path d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=\"text-lg font-semibold text-white mb-1\">Call Us</h4>
                    <p className=\"text-dental-blue-100\">+1 (555) 123-4567</p>
                    <p className=\"text-dental-blue-100 text-sm\">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0\">
                    <svg className=\"w-6 h-6 text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                      <path fillRule=\"evenodd\" d=\"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z\" clipRule=\"evenodd\" />
                    </svg>
                  </div>
                  <div>
                    <h4 className=\"text-lg font-semibold text-white mb-1\">Visit Us</h4>
                    <p className=\"text-dental-blue-100\">123 Innovation Drive</p>
                    <p className=\"text-dental-blue-100\">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className=\"bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20\">
              <h3 className=\"text-2xl font-bold text-white mb-6\">
                Quick Actions
              </h3>
              
              <div className=\"space-y-4\">
                <button className=\"w-full bg-dental-green-500 hover:bg-dental-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2\">
                  <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path d=\"M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z\" />
                  </svg>
                  <span>Schedule Demo</span>
                </button>
                
                <button className=\"w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2\">
                  <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path fillRule=\"evenodd\" d=\"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z\" clipRule=\"evenodd\" />
                  </svg>
                  <span>Download Brochure</span>
                </button>
                
                <button className=\"w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2\">
                  <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\" />
                  </svg>
                  <span>Start Free Trial</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;