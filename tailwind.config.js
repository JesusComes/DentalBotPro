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
        dental: {
          blue: {
            50: '#EDF8FF',
            100: '#D6EFFF',
            200: '#B5E3FF',
            300: '#83D1FF',
            400: '#48B5FF',
            500: '#1E90FF',
            600: '#0066FF',
            700: '#0052CC',
            800: '#003D99',
            900: '#002966',
            950: '#001433',
          },
          green: {
            50: '#EDFFF7',
            100: '#D5FFEC',
            200: '#AFFEDC',
            300: '#7DFCC4',
            400: '#42F5A7',
            500: '#00E68C',
            600: '#00C76F',
            700: '#009954',
            800: '#007A45',
            900: '#00663A',
            950: '#00331D',
          },
          teal: {
            50: '#EDFFFE',
            100: '#C7FFFC',
            200: '#9FFEF8',
            300: '#5DF9F0',
            400: '#1EEAE1',
            500: '#00CFC7',
            600: '#00A5A0',
            700: '#008480',
            800: '#006866',
            900: '#005753',
            950: '#002B2A',
          },
          purple: {
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
          },
          orange: {
            400: '#FBBF24',
            500: '#F59E0B',
            600: '#D97706',
          },
          pink: {
            400: '#F472B6',
            500: '#EC4899',
            600: '#DB2777',
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brutal': 'linear-gradient(135deg, #1E90FF 0%, #00E68C 50%, #00CFC7 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1E90FF 0%, #00E68C 50%, #00CFC7 100%)',
        'gradient-hero-bg': 'linear-gradient(135deg, rgba(30, 144, 255, 0.95) 0%, rgba(0, 230, 140, 0.9) 50%, rgba(0, 207, 199, 0.85) 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #1E40AF',
        'brutal-lg': '12px 12px 0px 0px #1E40AF',
        'neon': '0 0 5px theme(colors.cyan.400), 0 0 20px theme(colors.cyan.400), 0 0 50px theme(colors.cyan.400)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}