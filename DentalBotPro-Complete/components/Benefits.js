import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: (
        <svg className=\"w-12 h-12\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('benefits.efficiency.title', 'Increase Efficiency'),
      description: t('benefits.efficiency.description', 'Reduce administrative tasks by up to 70% and focus on patient care'),
      stat: t('benefits.efficiency.stat', '70% time saved'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: (
        <svg className=\"w-12 h-12\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('benefits.satisfaction.title', 'Improve Patient Satisfaction'),
      description: t('benefits.satisfaction.description', 'Enhanced communication and personalized care experiences'),
      stat: t('benefits.satisfaction.stat', '95% satisfaction rate'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: (
        <svg className=\"w-12 h-12\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z\" />
          <path fillRule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z\" clipRule=\"evenodd\" />
        </svg>
      ),
      title: t('benefits.revenue.title', 'Boost Revenue'),
      description: t('benefits.revenue.description', 'Optimize scheduling and reduce no-shows to maximize practice income'),
      stat: t('benefits.revenue.stat', '30% revenue increase'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id=\"benefits\" className=\"py-20 bg-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center mb-16\">
          <h2 className=\"text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6\">
            {t('benefits.title', 'Transform Your Practice Today')}
          </h2>
          <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
            {t('benefits.subtitle', 'Experience the advantages of AI-powered dental practice management')}
          </p>
        </div>

        <div className=\"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto\">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className=\"relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden\"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full -mr-16 -mt-16`}></div>
              
              <div className=\"relative z-10\">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} text-white rounded-2xl mb-6 shadow-lg`}>
                  {benefit.icon}
                </div>
                
                <h3 className=\"text-2xl font-bold text-gray-900 mb-4\">
                  {benefit.title}
                </h3>
                
                <p className=\"text-gray-600 leading-relaxed mb-6\">
                  {benefit.description}
                </p>
                
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${benefit.color} text-white font-bold rounded-full text-sm`}>
                  {benefit.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success stories section */}
        <div className=\"mt-20 bg-gradient-to-r from-dental-blue-900 to-dental-green-900 rounded-3xl p-12 text-white\">
          <div className=\"grid lg:grid-cols-2 gap-12 items-center\">
            <div>
              <h3 className=\"text-3xl font-bold mb-6\">
                Real Results from Real Practices
              </h3>
              <p className=\"text-xl mb-8 opacity-90\">
                See how dental practices around the world are transforming their operations and patient care with our AI assistant.
              </p>
              <div className=\"grid grid-cols-2 gap-6\">
                <div className=\"text-center\">
                  <div className=\"text-3xl font-bold text-dental-green-300\">500+</div>
                  <div className=\"text-dental-blue-200\">Happy Practices</div>
                </div>
                <div className=\"text-center\">
                  <div className=\"text-3xl font-bold text-dental-green-300\">50k+</div>
                  <div className=\"text-dental-blue-200\">Patients Served</div>
                </div>
              </div>
            </div>
            
            <div className=\"bg-white/10 backdrop-blur-sm rounded-2xl p-8\">
              <div className=\"flex items-center space-x-4 mb-6\">
                <div className=\"w-12 h-12 bg-dental-green-500 rounded-full flex items-center justify-center\">
                  <svg className=\"w-6 h-6 text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path fillRule=\"evenodd\" d=\"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z\" clipRule=\"evenodd\" />
                  </svg>
                </div>
                <div>
                  <div className=\"font-semibold\">Dr. Sarah Johnson</div>
                  <div className=\"text-dental-blue-200 text-sm\">Family Dentistry Practice</div>
                </div>
              </div>
              <p className=\"italic\">
                \"The AI assistant has completely transformed how we operate. Our team can now focus on what matters most - providing excellent patient care.\"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;