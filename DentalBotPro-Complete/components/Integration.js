import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Integration = () => {
  const { t } = useLanguage();

  const integrations = [
    {
      name: 'Dentrix',
      logo: (
        <div className=\"w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl\">
          D
        </div>
      ),
      description: 'Complete practice management'
    },
    {
      name: 'Eaglesoft',
      logo: (
        <div className=\"w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl\">
          E
        </div>
      ),
      description: 'Dental software solution'
    },
    {
      name: 'OpenDental',
      logo: (
        <div className=\"w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl\">
          O
        </div>
      ),
      description: 'Open source dental software'
    },
    {
      name: 'Curve Dental',
      logo: (
        <div className=\"w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl\">
          C
        </div>
      ),
      description: 'Cloud-based practice management'
    },
    {
      name: 'Dentimax',
      logo: (
        <div className=\"w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xl\">
          Dm
        </div>
      ),
      description: 'All-in-one dental solution'
    },
    {
      name: 'Practice-Web',
      logo: (
        <div className=\"w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl\">
          PW
        </div>
      ),
      description: 'Web-based dental software'
    }
  ];

  return (
    <section className=\"py-20 bg-gray-50\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('integration.title', 'Seamless Integrations')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto mb-8\">
            {t('integration.subtitle', 'Connect with your existing dental software and tools')}
          </p>
          <p className=\"text-lg text-gray-600 max-w-4xl mx-auto\">
            {t('integration.description', 'Our AI assistant integrates with popular dental practice management systems, ensuring a smooth transition without disrupting your current workflows.')}
          </p>
        </div>

        {/* Integration logos */}
        <div className=\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16\">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className=\"bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center\"
            >
              <div className=\"flex justify-center mb-4\">
                {integration.logo}
              </div>
              <h3 className=\"font-semibold text-gray-900 mb-2\">
                {integration.name}
              </h3>
              <p className=\"text-sm text-gray-600\">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration process */}
        <div className=\"bg-white rounded-3xl p-12 shadow-xl\">
          <div className=\"grid lg:grid-cols-2 gap-12 items-center\">
            <div>
              <h3 className=\"text-3xl font-bold text-gray-900 mb-6\">
                Easy Integration Process
              </h3>
              <div className=\"space-y-6\">
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-8 h-8 bg-dental-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm\">
                    1
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900 mb-2\">Connect Your System</h4>
                    <p className=\"text-gray-600\">Securely link your existing practice management software with our AI platform.</p>
                  </div>
                </div>
                
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-8 h-8 bg-dental-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm\">
                    2
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900 mb-2\">Configure Settings</h4>
                    <p className=\"text-gray-600\">Customize AI behavior and automation rules to match your practice workflow.</p>
                  </div>
                </div>
                
                <div className=\"flex items-start space-x-4\">
                  <div className=\"w-8 h-8 bg-dental-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm\">
                    3
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900 mb-2\">Start Automating</h4>
                    <p className=\"text-gray-600\">Begin enjoying automated scheduling, patient communication, and data insights.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className=\"relative\">
              <div className=\"bg-gradient-to-br from-dental-blue-100 to-dental-green-100 rounded-2xl p-8\">
                <div className=\"grid grid-cols-2 gap-4 mb-6\">
                  <div className=\"bg-white rounded-lg p-4 shadow-md\">
                    <div className=\"w-8 h-8 bg-dental-blue-500 rounded-lg mb-2\"></div>
                    <div className=\"text-sm font-medium text-gray-900\">Practice Management</div>
                    <div className=\"text-xs text-gray-600\">Your current system</div>
                  </div>
                  <div className=\"bg-white rounded-lg p-4 shadow-md\">
                    <div className=\"w-8 h-8 bg-dental-green-500 rounded-lg mb-2\"></div>
                    <div className=\"text-sm font-medium text-gray-900\">AI Assistant</div>
                    <div className=\"text-xs text-gray-600\">DentalBot Pro</div>
                  </div>
                </div>
                
                <div className=\"bg-white rounded-lg p-4 shadow-md\">
                  <div className=\"flex items-center space-x-2 mb-2\">
                    <div className=\"w-2 h-2 bg-dental-green-500 rounded-full animate-pulse\"></div>
                    <span className=\"text-sm font-medium text-gray-900\">Connected & Syncing</span>
                  </div>
                  <div className=\"text-xs text-gray-600\">Real-time data synchronization active</div>
                </div>
              </div>
              
              {/* Floating connection indicators */}
              <div className=\"absolute -top-4 -right-4 w-8 h-8 bg-dental-green-500 rounded-full flex items-center justify-center animate-bounce\">
                <svg className=\"w-4 h-4 text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                  <path fillRule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule=\"evenodd\" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* API section */}
        <div className=\"mt-16 text-center\">
          <div className=\"bg-gradient-to-r from-dental-blue-900 to-dental-green-900 rounded-3xl p-12 text-white\">
            <h3 className=\"text-3xl font-bold mb-6\">
              Need a Custom Integration?
            </h3>
            <p className=\"text-xl mb-8 opacity-90\">
              Our API allows you to build custom integrations for specialized workflows and third-party tools.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
              <button className=\"bg-white text-dental-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105\">
                View API Documentation
              </button>
              <button className=\"border-2 border-white text-white hover:bg-white hover:text-dental-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105\">
                Contact Integration Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;