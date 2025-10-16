import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text', 'This AI assistant has transformed our practice. We\\'ve reduced admin time by 60% and our patients love the automated communication.'),
      author: t('testimonials.testimonial1.author', 'Dr. Sarah Johnson'),
      position: t('testimonials.testimonial1.position', 'DDS, Family Dentistry'),
      avatar: (
        <div className=\"w-16 h-16 bg-gradient-to-br from-dental-blue-400 to-dental-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl\">
          SJ
        </div>
      ),
      rating: 5
    },
    {
      text: t('testimonials.testimonial2.text', 'The scheduling automation alone has saved us hours every week. The AI learns our preferences and makes incredibly accurate suggestions.'),
      author: t('testimonials.testimonial2.author', 'Mark Thompson'),
      position: t('testimonials.testimonial2.position', 'Practice Manager'),
      avatar: (
        <div className=\"w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl\">
          MT
        </div>
      ),
      rating: 5
    },
    {
      text: t('testimonials.testimonial3.text', 'Patient satisfaction has never been higher. The personalized follow-ups and education materials have really made a difference.'),
      author: t('testimonials.testimonial3.author', 'Dr. Michael Chen'),
      position: t('testimonials.testimonial3.position', 'Orthodontist'),
      avatar: (
        <div className=\"w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl\">
          MC
        </div>
      ),
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Practices' },
    { number: '50k+', label: 'Patients Served' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <section className=\"py-20 bg-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('testimonials.title', 'What Dental Professionals Say')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
            {t('testimonials.subtitle', 'Join thousands of satisfied dental professionals')}
          </p>
        </div>

        {/* Stats */}
        <div className=\"grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">
          {stats.map((stat, index) => (
            <div key={index} className=\"text-center\">
              <div className=\"text-4xl font-bold text-dental-blue-600 mb-2\">
                {stat.number}
              </div>
              <div className=\"text-gray-600 font-medium\">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className=\"grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto\">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=\"bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100\"
            >
              {/* Rating stars */}
              <div className=\"flex items-center space-x-1 mb-6\">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className=\"w-5 h-5 text-yellow-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className=\"text-gray-700 text-lg leading-relaxed mb-6 italic\">
                \"{testimonial.text}\"
              </blockquote>
              
              {/* Author */}
              <div className=\"flex items-center space-x-4\">
                {testimonial.avatar}
                <div>
                  <div className=\"font-semibold text-gray-900\">
                    {testimonial.author}
                  </div>
                  <div className=\"text-gray-600 text-sm\">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className=\"mt-20 bg-gradient-to-r from-dental-blue-50 to-dental-green-50 rounded-3xl p-12\">
          <div className=\"text-center mb-12\">
            <h3 className=\"text-3xl font-bold text-gray-900 mb-4\">
              Trusted by Dental Professionals Worldwide
            </h3>
            <p className=\"text-xl text-gray-600\">
              Our AI assistant is helping practices of all sizes deliver better patient care and improve operational efficiency.
            </p>
          </div>
          
          <div className=\"grid md:grid-cols-3 gap-8\">
            <div className=\"text-center\">
              <div className=\"w-16 h-16 bg-dental-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4\">
                <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                  <path fillRule=\"evenodd\" d=\"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clipRule=\"evenodd\" />
                </svg>
              </div>
              <h4 className=\"text-xl font-bold text-gray-900 mb-2\">HIPAA Compliant</h4>
              <p className=\"text-gray-600\">Enterprise-grade security protecting patient data</p>
            </div>
            
            <div className=\"text-center\">
              <div className=\"w-16 h-16 bg-dental-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4\">
                <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                  <path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\" />
                </svg>
              </div>
              <h4 className=\"text-xl font-bold text-gray-900 mb-2\">99.9% Uptime</h4>
              <p className=\"text-gray-600\">Reliable service you can depend on</p>
            </div>
            
            <div className=\"text-center\">
              <div className=\"w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4\">
                <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                  <path fillRule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z\" clipRule=\"evenodd\" />
                </svg>
              </div>
              <h4 className=\"text-xl font-bold text-gray-900 mb-2\">24/7 Support</h4>
              <p className=\"text-gray-600\">Expert assistance whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;