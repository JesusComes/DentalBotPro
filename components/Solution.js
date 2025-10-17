'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Solution = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      title: t('solution.automation.title', 'Intelligent Automation'),
      description: t('solution.automation.description', 'Automate routine tasks and focus on patient care')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      title: t('solution.communication.title', 'Smart Communication'),
      description: t('solution.communication.description', 'AI-powered patient interactions and follow-ups')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: t('solution.insights.title', 'Data-Driven Insights'),
      description: t('solution.insights.description', 'Analytics to optimize your practice performance')
    }
  ];

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('solution.title', 'Smart AI Solutions for Modern Dentistry')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solution.subtitle', 'Our AI assistant addresses every aspect of dental practice management')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-dental-blue-50 to-dental-green-50 rounded-2xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-dental-blue-500 to-dental-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;