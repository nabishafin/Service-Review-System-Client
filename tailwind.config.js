/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          text: '#000000',
          header: '#F8F9FA',
          button: '#007BFF',
          card: '#F1F1F1',
        },
        dark: {
          background: '#121212',
          text: '#E5E5E5',
          header: '#1F1F1F',
          button: '#1D72B8',
          card: '#333333',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('daisyui'),
  ],
}
