/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        ink: {
          50:  '#f5f5f0',
          100: '#e8e8e0',
          200: '#d0d0c4',
          300: '#a8a896',
          400: '#7a7a68',
          500: '#565646',
          600: '#3e3e30',
          700: '#2a2a1e',
          800: '#1a1a10',
          900: '#0e0e08',
        },
        sage: {
          300: '#a8c5a0',
          400: '#7aaa6e',
          500: '#4e8c42',
        },
        gold: {
          300: '#e8d08a',
          400: '#d4b84a',
          500: '#b09020',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
