/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#3ac87b',
        'light-green': '#ddf7e9',
        'dark-gray': '#838383',
        'light-gray': '#f1f1f1',
        'light-black': '#3a3a3a',
        'light-gray-100': '#f3f2ef',
      },
      fontFamily: {
        'roboto': ['Roboto', 'Consolas', 'monospace'],
        'open-sans': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

