'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Integration = () => {
  const { t } = useLanguage();

  const integrations = [
    {
      name: 'Dentrix',
      logo: (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg">
          DX
        </div>
      )
    },
    {
      name: 'Eaglesoft',
      logo: (
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-lg">
          ES
        </div>
      )
    },
    {
      name: 'Open Dental',
      logo: (
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-lg">
          OD
        </div>
      )
    },
    {
      name: 'Curve Dental',
      logo: (
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-lg">
          CD
        </div>
      )
    },
    {
      name: 'PracticeWorks',
      logo: (
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-lg">
          PW
        </div>
      )
    },
    {
      name: 'SoftDent',
      logo: (
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold text-lg">
          SD
        </div>
      )
    }
  ];

  return (
    <section id="integration" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('integration.title', 'Seamless Integrations')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('integration.subtitle', 'Connect with your existing dental software and tools')}
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto">
            {t('integration.description', 'Our AI assistant integrates with popular dental practice management systems, ensuring a smooth transition without disrupting your current workflows.')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              {integration.logo}
              <span className="mt-3 text-sm font-medium text-gray-700">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your practice management system? Contact us for custom integration options.
          </p>
          <button className="bg-dental-blue-500 hover:bg-dental-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            Request Integration
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integration;