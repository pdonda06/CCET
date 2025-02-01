/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        secondary: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}