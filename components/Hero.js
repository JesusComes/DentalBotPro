'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dental-blue-900 via-dental-blue-800 to-dental-green-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dental-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dental-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dental-green-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t('hero.title', 'AI-Powered Dental Assistant')}
            </h1>
            
            <p className="text-lg sm:text-xl text-dental-blue-100 mb-8 leading-relaxed">
              {t('hero.description', 'Streamline patient communication, appointment scheduling, and treatment recommendations with our advanced AI technology designed specifically for dental professionals.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-dental-green-500 hover:bg-dental-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg">
                {t('hero.cta', 'Start Free Trial')}
              </button>
              
              <button className="border-2 border-dental-blue-300 text-dental-blue-100 hover:bg-dental-blue-300 hover:text-dental-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105">
                {t('hero.watch_demo', 'Watch Demo')}
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-dental-green-300">500+</div>
                <div className="text-dental-blue-200 text-sm">Happy Practices</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-dental-green-300">70%</div>
                <div className="text-dental-blue-200 text-sm">Time Saved</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-dental-green-300">24/7</div>
                <div className="text-dental-blue-200 text-sm">AI Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main illustration placeholder */}
              <div className="bg-gradient-to-br from-dental-blue-600 to-dental-green-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-dental-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-dental-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dental-blue-900">Dr. Mueller</div>
                      <div className="text-sm text-dental-blue-600">Appointment at 14:00</div>
                    </div>
                    <div className="ml-auto w-8 h-8 bg-dental-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-dental-blue-900 font-semibold">AI Assistant</span>
                    <div className="w-2 h-2 bg-dental-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-dental-blue-700 text-sm">"Automatically scheduled 3 follow-up appointments and sent treatment reminders to patients."</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-dental-green-500 text-white p-4 rounded-xl shadow-lg animate-bounce">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-dental-blue-500 text-white p-4 rounded-xl shadow-lg animate-pulse">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-dental-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;