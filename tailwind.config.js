/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#a8ff00',
          light: '#c4ff4d',
          dark: '#7acc00',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a',
        }
      },
      animation: {
        'walk-across': 'walk-across 10s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'walk-across': {
          '0%': { left: '-300px' },
          '100%': { left: '100vw' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { 
            boxShadow: '0 0 5px rgb(168, 255, 0), 0 0 10px rgb(168, 255, 0)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgb(168, 255, 0), 0 0 20px rgb(168, 255, 0), 0 0 30px rgb(168, 255, 0)' 
          },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(168, 255, 0, 0.3)',
        'glow-md': '0 0 20px rgba(168, 255, 0, 0.4)',
        'glow-lg': '0 0 30px rgba(168, 255, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
