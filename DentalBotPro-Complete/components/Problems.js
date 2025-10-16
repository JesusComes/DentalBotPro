import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Problems = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z\" clipRule=\"evenodd\" />
        </svg>
      ),
      text: t('problems.item1', 'Manual appointment scheduling leads to conflicts and inefficiencies')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\" />
        </svg>
      ),
      text: t('problems.item2', 'Repetitive patient communication consumes valuable staff time')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z\" clipRule=\"evenodd\" />
        </svg>
      ),
      text: t('problems.item3', 'Treatment planning requires extensive documentation and follow-up')
    },
    {
      icon: (
        <svg className=\"w-8 h-8\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z\" clipRule=\"evenodd\" />
        </svg>
      ),
      text: t('problems.item4', 'Patient education and aftercare instructions are time-consuming')
    }
  ];

  return (
    <section className=\"py-20 bg-gray-50\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('problems.title', 'Common Challenges in Dental Practices')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
            {t('problems.subtitle', 'Dental practices face numerous operational challenges that impact efficiency and patient satisfaction')}
          </p>
        </div>

        <div className=\"grid md:grid-cols-2 gap-8 max-w-6xl mx-auto\">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className=\"flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300\"
            >
              <div className=\"flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600\">
                {problem.icon}
              </div>
              <div className=\"flex-1\">
                <p className=\"text-gray-800 font-medium leading-relaxed\">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;