import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('howItWorks.step1.title', 'Quick Setup'),
      description: t('howItWorks.step1.description', 'Connect your existing systems and configure AI preferences')
    },
    {
      number: '02',
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\" />
        </svg>
      ),
      title: t('howItWorks.step2.title', 'AI Training'),
      description: t('howItWorks.step2.description', 'Our AI learns your practice patterns and patient preferences')
    },
    {
      number: '03',
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('howItWorks.step3.title', 'Go Live'),
      description: t('howItWorks.step3.description', 'Start benefiting from automated workflows and intelligent assistance')
    }
  ];

  return (
    <section className=\"py-20 bg-gradient-to-br from-dental-blue-50 to-dental-green-50\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('howItWorks.title', 'How It Works')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
            {t('howItWorks.subtitle', 'Get started with our AI assistant in three simple steps')}
          </p>
        </div>

        <div className=\"max-w-6xl mx-auto\">
          {/* Steps for desktop */}
          <div className=\"hidden lg:block\">
            <div className=\"relative\">
              {/* Connection line */}
              <div className=\"absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-dental-blue-200 via-dental-green-200 to-dental-blue-200 transform -translate-y-1/2 z-0\"></div>
              
              <div className=\"relative z-10 grid grid-cols-3 gap-8\">
                {steps.map((step, index) => (
                  <div key={index} className=\"text-center\">
                    <div className=\"relative inline-block\">
                      <div className=\"w-20 h-20 bg-gradient-to-br from-dental-blue-500 to-dental-green-500 rounded-full flex items-center justify-center text-white shadow-lg mb-6\">
                        {step.icon}
                      </div>
                      <div className=\"absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-dental-blue-600 font-bold text-sm shadow-md\">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className=\"text-xl font-bold text-gray-900 mb-4\">
                      {step.title}
                    </h3>
                    
                    <p className=\"text-gray-600 leading-relaxed\">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps for mobile/tablet */}
          <div className=\"lg:hidden space-y-8\">
            {steps.map((step, index) => (
              <div key={index} className=\"flex items-start space-x-6\">
                <div className=\"flex-shrink-0 relative\">
                  <div className=\"w-16 h-16 bg-gradient-to-br from-dental-blue-500 to-dental-green-500 rounded-full flex items-center justify-center text-white shadow-lg\">
                    {step.icon}
                  </div>
                  <div className=\"absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-dental-blue-600 font-bold text-xs shadow-md\">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className=\"absolute top-16 left-1/2 w-0.5 h-12 bg-gradient-to-b from-dental-blue-200 to-dental-green-200 transform -translate-x-1/2\"></div>
                  )}
                </div>
                
                <div className=\"flex-1 pt-2\">
                  <h3 className=\"text-xl font-bold text-gray-900 mb-3\">
                    {step.title}
                  </h3>
                  <p className=\"text-gray-600 leading-relaxed\">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className=\"text-center mt-16\">
          <div className=\"bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto\">
            <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">
              Ready to get started?
            </h3>
            <p className=\"text-gray-600 mb-8\">
              Join hundreds of dental practices that have already transformed their operations with our AI assistant.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
              <button className=\"bg-gradient-to-r from-dental-blue-600 to-dental-green-600 hover:from-dental-blue-700 hover:to-dental-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg\">
                {t('hero.cta', 'Start Free Trial')}
              </button>
              <button className=\"border-2 border-dental-blue-600 text-dental-blue-600 hover:bg-dental-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200\">
                {t('hero.watch_demo', 'Watch Demo')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;