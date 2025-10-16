import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: t('pricing.starter.name', 'Starter'),
      price: t('pricing.starter.price', '$99'),
      period: t('pricing.starter.period', '/month'),
      description: t('pricing.starter.description', 'Perfect for small practices'),
      features: [
        t('pricing.starter.features.0', 'Up to 500 patients'),
        t('pricing.starter.features.1', 'Basic scheduling automation'),
        t('pricing.starter.features.2', 'Email notifications'),
        t('pricing.starter.features.3', 'Standard support'),
        t('pricing.starter.features.4', '1 user account')
      ],
      cta: t('pricing.starter.cta', 'Start Free Trial'),
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: t('pricing.professional.name', 'Professional'),
      price: t('pricing.professional.price', '$299'),
      period: t('pricing.professional.period', '/month'),
      description: t('pricing.professional.description', 'Ideal for growing practices'),
      popular: t('pricing.professional.popular', 'Most Popular'),
      features: [
        t('pricing.professional.features.0', 'Up to 2,000 patients'),
        t('pricing.professional.features.1', 'Advanced AI scheduling'),
        t('pricing.professional.features.2', 'SMS + Email automation'),
        t('pricing.professional.features.3', 'Treatment planning AI'),
        t('pricing.professional.features.4', 'Priority support'),
        t('pricing.professional.features.5', '5 user accounts'),
        t('pricing.professional.features.6', 'Analytics dashboard')
      ],
      cta: t('pricing.professional.cta', 'Start Free Trial'),
      popular: true,
      color: 'from-dental-blue-500 to-dental-green-500'
    },
    {
      name: t('pricing.enterprise.name', 'Enterprise'),
      price: t('pricing.enterprise.price', '$699'),
      period: t('pricing.enterprise.period', '/month'),
      description: t('pricing.enterprise.description', 'For large practices and clinics'),
      features: [
        t('pricing.enterprise.features.0', 'Unlimited patients'),
        t('pricing.enterprise.features.1', 'Full AI automation suite'),
        t('pricing.enterprise.features.2', 'Multi-channel communication'),
        t('pricing.enterprise.features.3', 'Custom AI training'),
        t('pricing.enterprise.features.4', 'Dedicated support'),
        t('pricing.enterprise.features.5', 'Unlimited users'),
        t('pricing.enterprise.features.6', 'Advanced analytics'),
        t('pricing.enterprise.features.7', 'API access')
      ],
      cta: t('pricing.enterprise.cta', 'Contact Sales'),
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id=\"pricing\" className=\"py-20 bg-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('pricing.title', 'Choose Your Plan')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto mb-8\">
            {t('pricing.subtitle', 'Flexible pricing options to fit practices of all sizes')}
          </p>
          
          {/* Billing toggle */}
          <div className=\"flex items-center justify-center space-x-4\">
            <span className={`font-medium ${!isAnnual ? 'text-dental-blue-600' : 'text-gray-500'}`}>
              {t('pricing.monthly', 'Monthly')}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-dental-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-dental-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-dental-blue-600' : 'text-gray-500'}`}>
              {t('pricing.annually', 'Annually')}
              <span className=\"ml-2 text-xs bg-dental-green-100 text-dental-green-800 px-2 py-1 rounded-full\">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className=\"grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto\">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-dental-blue-200 scale-105' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className=\"absolute -top-4 left-1/2 transform -translate-x-1/2\">
                  <span className=\"bg-gradient-to-r from-dental-blue-600 to-dental-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold\">
                    {plan.popular}
                  </span>
                </div>
              )}
              
              <div className=\"p-8\">
                <div className=\"text-center mb-8\">
                  <h3 className=\"text-2xl font-bold text-gray-900 mb-2\">
                    {plan.name}
                  </h3>
                  <p className=\"text-gray-600 mb-6\">
                    {plan.description}
                  </p>
                  
                  <div className=\"mb-6\">
                    <span className=\"text-5xl font-bold text-gray-900\">
                      {plan.price}
                    </span>
                    <span className=\"text-gray-600 text-lg\">
                      {plan.period}
                    </span>
                    {isAnnual && index < 2 && (
                      <div className=\"text-sm text-dental-green-600 font-medium mt-1\">
                        Save {Math.round(parseInt(plan.price.replace(/[^0-9]/g, '')) * 0.2)} per month
                      </div>
                    )}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-dental-blue-600 to-dental-green-600 hover:from-dental-blue-700 hover:to-dental-green-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
                
                <div className=\"space-y-4\">
                  <h4 className=\"font-semibold text-gray-900 mb-4\">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className=\"flex items-start space-x-3\">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular ? 'bg-dental-green-100' : 'bg-gray-100'
                      }`}>
                        <svg className={`w-3 h-3 ${
                          plan.popular ? 'text-dental-green-600' : 'text-gray-600'
                        }`} fill=\"currentColor\" viewBox=\"0 0 20 20\">
                          <path fillRule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule=\"evenodd\" />
                        </svg>
                      </div>
                      <span className=\"text-gray-700 text-sm\">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ section */}
        <div className=\"mt-20 text-center\">
          <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">
            Have questions about pricing?
          </h3>
          <p className=\"text-gray-600 mb-8\">
            Our team is here to help you find the perfect plan for your practice.
          </p>
          <button className=\"bg-dental-blue-600 hover:bg-dental-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200\">
            Contact Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;