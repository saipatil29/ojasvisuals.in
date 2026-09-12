/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#070a12',
          800: '#0b0f19',
          700: '#0f172a',
          600: '#1e293b',
          500: '#334155'
        },
        gold: {
          light: '#fbbf24',
          primary: '#f59e0b',
          dark: '#d97706',
          deep: '#b45309',
          glow: 'rgba(245, 158, 11, 0.25)'
        },
        cyan: {
          light: '#38bdf8',
          primary: '#0284c7'
        },
        whatsapp: {
          green: '#25D366',
          dark: '#128C7E'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'preloader-glow': 'preloaderGlow 2s ease-in-out infinite',
        'bounce-short': 'bounceShort 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        preloaderGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        bounceShort: {
          '0%': { transform: 'translate(-50%, 12px)', opacity: '0' },
          '100%': { transform: 'translate(-50%, 0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};