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
          'light-gray': '#F9FAFB',
          'medium-gray': '#E5E7EB',
          'dark-gray': '#1F2937',
          'text-gray': '#6B7280',
          'text-dark': '#111827',
        }
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0A66C2, #4F9CF9)',
        'gradient-teal': 'linear-gradient(135deg, #00B4A6, #26D0CE)',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
        'gradient-orange': 'linear-gradient(135deg, #F59E0B, #FBBF24)',
        'gradient-pink': 'linear-gradient(135deg, #EC4899, #F472B6)',
        'gradient-light': 'linear-gradient(135deg, #F9FAFB, #F3F4F6)',
        'gradient-dark': 'linear-gradient(135deg, #1F2937, #374151)',
        'hero-bg': 'linear-gradient(rgba(10, 102, 194, 0.85), rgba(10, 102, 194, 0.9)), url("https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'large': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'glow-blue': '0 0 30px rgba(10, 102, 194, 0.3)',
        'glow-teal': '0 0 30px rgba(0, 180, 166, 0.3)',
      },
      borderRadius: {
        'modern': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.625rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      backdropBlur: {
        'glass': '20px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
