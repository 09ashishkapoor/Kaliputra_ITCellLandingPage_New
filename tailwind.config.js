/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#990000',     // Deep dark red
        secondary: '#c8a165',   // Warm gold
        accent: '#611818',      // Darker red accent
        background: '#000000',
        text: '#ffffff',
        'text-secondary': '#e0d0c0',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        'card': 'rgba(32, 10, 10, 0.85)'
      },
      textColor: {
        'card': '#ffffff'
      },
      boxShadow: {
        'card': '0 4px 10px rgba(153, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};