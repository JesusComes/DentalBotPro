/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0A66C2',
          'blue-light': '#E8F4FD',
          'blue-50': '#EBF8FF',
          'blue-100': '#BEE3F8',
          'blue-200': '#90CDF4',
          'blue-300': '#63B3ED',
          'blue-400': '#4299E1',
          'blue-500': '#3182CE',
          'blue-600': '#2B77CB',
          'blue-700': '#2C5AA0',
          'blue-800': '#2A4365',
          'blue-900': '#1A365D'
        },
        accent: {
          green: '#10B981',
          'green-light': '#D1FAE5',
          'green-50': '#ECFDF5',
          'green-100': '#D1FAE5',
          'green-200': '#A7F3D0',
          'green-300': '#6EE7B7',
          'green-400': '#34D399',
          'green-500': '#10B981',
          'green-600': '#059669',
          'green-700': '#047857',
          'green-800': '#065F46',
          'green-900': '#064E3B',
          teal: '#00B4A6',
          light: '#E0F7FA'
        },
        neutral: {
          white: '#FFFFFF',
          light: '#F8FAFC',
          medium: '#E2E8F0',
          dark: '#1E293B',
          text: '#475569',
          'text-dark': '#0F172A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #3182CE, #63B3ED)',
        'gradient-blue-subtle': 'linear-gradient(135deg, #EBF8FF, #BEE3F8)',
        'gradient-green': 'linear-gradient(135deg, #10B981, #34D399)',
        'gradient-green-subtle': 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
        'gradient-blue-green': 'linear-gradient(135deg, #3182CE, #10B981)',
        'gradient-hero': 'linear-gradient(135deg, #2B77CB 0%, #3182CE 25%, #10B981 75%, #34D399 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'large': '0 20px 60px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}