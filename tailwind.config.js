/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0A66C2',
        'primary-light': '#E8F4FD',
        'accent-teal': '#00B4A6',
        'accent-light': '#E0F7FA',
        'accent-purple': '#8B5CF6',
        'accent-orange': '#F59E0B',
        'accent-pink': '#EC4899',
        'light-gray': '#F9FAFB',
        'medium-gray': '#E5E7EB',
        'dark-gray': '#1F2937',
        'text-gray': '#6B7280',
        'text-dark': '#111827',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0A66C2, #4F9CF9)',
        'gradient-teal': 'linear-gradient(135deg, #00B4A6, #26D0CE)',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        'gradient-orange': 'linear-gradient(135deg, #F59E0B, #FBBF24)',
        'gradient-pink': 'linear-gradient(135deg, #EC4899, #F472B6)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(rgba(10, 102, 194, 0.85), rgba(10, 102, 194, 0.9))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10, 102, 194, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(10, 102, 194, 0.6), 0 0 60px rgba(10, 102, 194, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'large': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 30px rgba(10, 102, 194, 0.3)',
        'glow-teal': '0 0 30px rgba(0, 180, 166, 0.3)',
      },
    },
  },
  plugins: [],
}
