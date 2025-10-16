import React from 'react';
import Head from 'next/head';
import { useLanguage } from '../contexts/LanguageContext';

const Custom500 = () => {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>500 - Server Error | DentalBot Pro</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dental-blue-900 to-dental-green-900">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">500</h1>
          <p className="text-xl mb-8">Server Error</p>
          <a href="/" className="bg-dental-green-500 hover:bg-dental-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Custom500;