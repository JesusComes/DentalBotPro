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
            50: '#EEF7FF',
            100: '#D9EDFF',
            200: '#BCDEFF',
            300: '#8ECAFF',
            400: '#59ABFF',
            500: '#3B82F6',
            600: '#0A66C2',
            700: '#1E40AF',
            800: '#1E3A8A',
            900: '#1E2B4F',
            950: '#0F172A',
          },
          teal: {
            50: '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            400: '#2DD4BF',
            500: '#00B4A6',
            600: '#0891B2',
            700: '#0E7490',
            800: '#155E75',
            900: '#164E63',
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
        'gradient-brutal': 'linear-gradient(135deg, #0A66C2 0%, #00B4A6 50%, #8B5CF6 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(10, 102, 194, 0.95) 0%, rgba(0, 180, 166, 0.9) 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
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