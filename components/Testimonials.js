'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text', 'This AI assistant has transformed our practice. We\'ve reduced admin time by 60% and our patients love the automated communication.'),
      author: t('testimonials.testimonial1.author', 'Dr. Sarah Johnson'),
      position: t('testimonials.testimonial1.position', 'DDS, Family Dentistry'),
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-dental-blue-400 to-dental-green-400 rounded-full flex items-center justify-center text-white font-bold">
          SJ
        </div>
      )
    },
    {
      text: t('testimonials.testimonial2.text', 'The scheduling automation alone has saved us hours every week. The AI learns our preferences and makes incredibly accurate suggestions.'),
      author: t('testimonials.testimonial2.author', 'Mark Thompson'),
      position: t('testimonials.testimonial2.position', 'Practice Manager'),
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-dental-green-400 to-dental-blue-400 rounded-full flex items-center justify-center text-white font-bold">
          MT
        </div>
      )
    },
    {
      text: t('testimonials.testimonial3.text', 'Patient satisfaction has never been higher. The personalized follow-ups and education materials have really made a difference.'),
      author: t('testimonials.testimonial3.author', 'Dr. Michael Chen'),
      position: t('testimonials.testimonial3.position', 'Orthodontist'),
      avatar: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-dental-blue-400 rounded-full flex items-center justify-center text-white font-bold">
          MC
        </div>
      )
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title', 'What Dental Professionals Say')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle', 'Join thousands of satisfied dental professionals')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
              <div className="mb-6">
                <svg className="w-8 h-8 text-dental-blue-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                {testimonial.avatar}
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">4.9/5</span> from 500+ dental practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;