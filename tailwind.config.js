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
          light: '#E8F4FD',
        },
        accent: {
          teal: '#00B4A6',
          light: '#E0F7FA',
          purple: '#8B5CF6',
          orange: '#F59E0B',
          pink: '#EC4899',
        },
        neutral: {
          white: '#FFFFFF',
          light: '#F9FAFB',
          medium: '#E5E7EB',
          dark: '#1F2937',
          text: '#6B7280',
          'text-dark': '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0A66C2, #4F9CF9)',
        'gradient-teal': 'linear-gradient(135deg, #00B4A6, #26D0CE)',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        'gradient-orange': 'linear-gradient(135deg, #F59E0B, #FBBF24)',
        'gradient-pink': 'linear-gradient(135deg, #EC4899, #F472B6)',
        'gradient-light': 'linear-gradient(135deg, #F9FAFB, #F3F4F6)',
        'gradient-dark': 'linear-gradient(135deg, #1F2937, #374151)',
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