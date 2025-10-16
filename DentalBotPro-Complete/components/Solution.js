import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Solution = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: (
        <svg className=\"w-12 h-12\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('solution.automation.title', 'Intelligent Automation'),
      description: t('solution.automation.description', 'Automate routine tasks and focus on patient care')
    },
    {
      icon: (
        <svg className=\"w-12 h-12\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('solution.communication.title', 'Smart Communication'),
      description: t('solution.communication.description', 'AI-powered patient interactions and follow-ups')
    },
    {
      icon: (
        <svg className=\"w-12 h-12\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z\" />
        </svg>
      ),
      title: t('solution.insights.title', 'Data-Driven Insights'),
      description: t('solution.insights.description', 'Analytics to optimize your practice performance')
    }
  ];

  return (
    <section className=\"py-20 bg-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('solution.title', 'Smart AI Solutions for Modern Dentistry')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
            {t('solution.subtitle', 'Our AI assistant addresses every aspect of dental practice management')}
          </p>
        </div>

        <div className=\"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto\">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className=\"text-center p-8 bg-gradient-to-br from-dental-blue-50 to-dental-green-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2\"
            >
              <div className=\"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-dental-blue-500 to-dental-green-500 text-white rounded-2xl mb-6\">
                {solution.icon}
              </div>
              <h3 className=\"text-xl font-bold text-gray-900 mb-4\">
                {solution.title}
              </h3>
              <p className=\"text-gray-600 leading-relaxed\">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className=\"text-center mt-16\">
          <button className=\"bg-gradient-to-r from-dental-blue-600 to-dental-green-600 hover:from-dental-blue-700 hover:to-dental-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg\">
            {t('hero.cta', 'Start Free Trial')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;