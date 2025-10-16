import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { label: t('footer.links.features', 'Features'), href: '#features' },
      { label: t('footer.links.pricing', 'Pricing'), href: '#pricing' },
      { label: t('footer.links.demo', 'Demo'), href: '#demo' }
    ],
    support: [
      { label: t('footer.links.help', 'Help Center'), href: '#help' },
      { label: t('footer.links.documentation', 'Documentation'), href: '#docs' },
      { label: t('footer.links.contact', 'Contact'), href: '#contact' }
    ],
    legal: [
      { label: t('footer.links.privacy', 'Privacy Policy'), href: '#privacy' },
      { label: t('footer.links.terms', 'Terms of Service'), href: '#terms' }
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z\" clipRule=\"evenodd\" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path d=\"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84\" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z\" clipRule=\"evenodd\" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
          <path fillRule=\"evenodd\" d=\"M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z\" clipRule=\"evenodd\" />
        </svg>
      )
    }
  ];

  return (
    <footer className=\"bg-gray-900 text-white\">
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Main footer content */}
        <div className=\"py-16\">
          <div className=\"grid lg:grid-cols-5 gap-8\">
            {/* Company info */}
            <div className=\"lg:col-span-2\">
              <div className=\"flex items-center space-x-3 mb-6\">
                <div className=\"w-10 h-10 bg-gradient-to-br from-dental-green-400 to-dental-blue-400 rounded-lg flex items-center justify-center\">
                  <svg className=\"w-6 h-6 text-white\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path d=\"M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z\"/>
                  </svg>
                </div>
                <span className=\"text-2xl font-bold\">{t('footer.company', 'DentalBot Pro')}</span>
              </div>
              
              <p className=\"text-gray-300 text-lg mb-6 leading-relaxed\">
                {t('footer.description', 'AI-powered solutions for modern dental practices')}
              </p>
              
              {/* Social links */}
              <div className=\"flex space-x-4\">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className=\"w-10 h-10 bg-gray-800 hover:bg-dental-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200\"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Product links */}
            <div>
              <h3 className=\"text-lg font-semibold mb-6\">
                {t('footer.product', 'Product')}
              </h3>
              <ul className=\"space-y-3\">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className=\"text-gray-300 hover:text-dental-green-400 transition-colors duration-200\"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support links */}
            <div>
              <h3 className=\"text-lg font-semibold mb-6\">
                {t('footer.support', 'Support')}
              </h3>
              <ul className=\"space-y-3\">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className=\"text-gray-300 hover:text-dental-green-400 transition-colors duration-200\"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal links */}
            <div>
              <h3 className=\"text-lg font-semibold mb-6\">
                {t('footer.legal', 'Legal')}
              </h3>
              <ul className=\"space-y-3\">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className=\"text-gray-300 hover:text-dental-green-400 transition-colors duration-200\"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter signup */}
        <div className=\"border-t border-gray-800 py-12\">
          <div className=\"grid lg:grid-cols-2 gap-8 items-center\">
            <div>
              <h3 className=\"text-2xl font-bold mb-2\">
                Stay Updated
              </h3>
              <p className=\"text-gray-300\">
                Get the latest updates on AI innovations in dentistry and new features.
              </p>
            </div>
            
            <div className=\"flex flex-col sm:flex-row gap-4\">
              <input
                type=\"email\"
                placeholder=\"Enter your email\"
                className=\"flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-dental-blue-500 focus:border-transparent text-white placeholder-gray-400\"
              />
              <button className=\"bg-dental-blue-600 hover:bg-dental-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap\">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className=\"border-t border-gray-800 py-8\">
          <div className=\"flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0\">
            <p className=\"text-gray-400 text-center lg:text-left\">
              {t('footer.copyright', '© 2025 DentalBot Pro. All rights reserved.')}
            </p>
            
            <div className=\"flex items-center space-x-6\">
              <div className=\"flex items-center space-x-2 text-gray-400\">
                <div className=\"w-2 h-2 bg-dental-green-400 rounded-full animate-pulse\"></div>
                <span className=\"text-sm\">All systems operational</span>
              </div>
              
              <div className=\"flex items-center space-x-2 text-gray-400\">
                <svg className=\"w-4 h-4\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                  <path fillRule=\"evenodd\" d=\"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z\" clipRule=\"evenodd\" />
                </svg>
                <span className=\"text-sm\">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;