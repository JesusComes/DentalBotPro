import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('features.scheduling.title', 'Smart Scheduling'),
      description: t('features.scheduling.description', 'AI-powered appointment management with conflict detection and optimization')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('features.communication.title', 'Patient Communication'),
      description: t('features.communication.description', 'Automated reminders, follow-ups, and educational content delivery')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z\" />
          <path fillRule=\"evenodd\" d=\"M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('features.treatment.title', 'Treatment Planning'),
      description: t('features.treatment.description', 'AI-assisted diagnosis and treatment recommendation system')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('features.records.title', 'Digital Records'),
      description: t('features.records.description', 'Comprehensive patient history and treatment tracking')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z\" />
          <path d=\"M6 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V6zM6 14a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z\" />
        </svg>
      ),
      title: t('features.billing.title', 'Automated Billing'),
      description: t('features.billing.description', 'Streamlined insurance claims and payment processing')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z\" />
        </svg>
      ),
      title: t('features.analytics.title', 'Practice Analytics'),
      description: t('features.analytics.description', 'Real-time insights into practice performance and growth opportunities')
    }
  ];

  return (
    <section id=\"features\" className=\"py-20 bg-gray-50\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('features.title', 'Powerful Features for Dental Excellence')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
            {t('features.subtitle', 'Everything you need to run a modern, efficient dental practice')}
          </p>
        </div>

        <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto\">
          {features.map((feature, index) => (
            <div 
              key={index}
              className=\"bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100\"
            >
              <div className=\"inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-dental-blue-500 to-dental-green-500 text-white rounded-xl mb-6\">
                {feature.icon}
              </div>
              <h3 className=\"text-xl font-bold text-gray-900 mb-4\">
                {feature.title}
              </h3>
              <p className=\"text-gray-600 leading-relaxed\">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className=\"mt-20 bg-gradient-to-r from-dental-blue-600 to-dental-green-600 rounded-3xl p-12 text-center text-white\">
          <h3 className=\"text-2xl sm:text-3xl font-bold mb-4\">
            Ready to revolutionize your dental practice?
          </h3>
          <p className=\"text-xl mb-8 opacity-90\">
            Join hundreds of dental professionals who are already saving time and improving patient care with our AI assistant.
          </p>
          <button className=\"bg-white text-dental-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105\">
            {t('hero.cta', 'Start Free Trial')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;