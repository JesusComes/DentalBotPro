'use client'

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: t('pricing.starter.name', 'Starter'),
      price: t('pricing.starter.price', '$99'),
      period: t('pricing.starter.period', '/month'),
      description: t('pricing.starter.description', 'Perfect for small practices'),
      features: [
        'Up to 500 patients',
        'Basic scheduling automation',
        'Email notifications',
        'Standard support',
        '1 user account'
      ],
      cta: t('pricing.starter.cta', 'Start Free Trial'),
      popular: false
    },
    {
      name: t('pricing.professional.name', 'Professional'),
      price: t('pricing.professional.price', '$299'),
      period: t('pricing.professional.period', '/month'),
      description: t('pricing.professional.description', 'Ideal for growing practices'),
      features: [
        'Up to 2,000 patients',
        'Advanced AI scheduling',
        'SMS + Email automation',
        'Treatment planning AI',
        'Priority support',
        '5 user accounts',
        'Analytics dashboard'
      ],
      cta: t('pricing.professional.cta', 'Start Free Trial'),
      popular: true
    },
    {
      name: t('pricing.enterprise.name', 'Enterprise'),
      price: t('pricing.enterprise.price', '$699'),
      period: t('pricing.enterprise.period', '/month'),
      description: t('pricing.enterprise.description', 'For large practices and clinics'),
      features: [
        'Unlimited patients',
        'Full AI automation suite',
        'Multi-channel communication',
        'Custom AI training',
        'Dedicated support',
        'Unlimited users',
        'Advanced analytics',
        'API access'
      ],
      cta: t('pricing.enterprise.cta', 'Contact Sales'),
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('pricing.title', 'Choose Your Plan')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle', 'Flexible pricing options to fit practices of all sizes')}
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-dental-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('pricing.monthly', 'Monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'annually'
                  ? 'bg-white text-dental-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('pricing.annually', 'Annually')}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 ${
                plan.popular ? 'ring-2 ring-dental-blue-500 scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-dental-blue-500 to-dental-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {t('pricing.professional.popular', 'Most Popular')}
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-dental-blue-500 to-dental-green-500 text-white hover:from-dental-blue-600 hover:to-dental-green-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              
              <div className="px-8 pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-dental-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;