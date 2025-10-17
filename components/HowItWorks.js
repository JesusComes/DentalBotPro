'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('howItWorks.step1.title', 'Quick Setup'),
      description: t('howItWorks.step1.description', 'Connect your existing systems and configure AI preferences'),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: '2',
      title: t('howItWorks.step2.title', 'AI Training'),
      description: t('howItWorks.step2.description', 'Our AI learns your practice patterns and patient preferences'),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '3',
      title: t('howItWorks.step3.title', 'Go Live'),
      description: t('howItWorks.step3.description', 'Start benefiting from automated workflows and intelligent assistance'),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section id="howItWorks" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('howItWorks.title', 'How It Works')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('howItWorks.subtitle', 'Get started with our AI assistant in three simple steps')}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-dental-blue-300 to-dental-green-300 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-dental-blue-500 to-dental-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 relative z-10">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-dental-blue-100 to-dental-green-100 rounded-lg flex items-center justify-center text-dental-blue-600 mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;