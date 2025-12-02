/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A4A', // Deep Royal Blue
        secondary: '#FDB913', // Logo Yellow
        background: '#F9FAFB', // Warm White
        text: '#333333', // Dark Slate
        'accent-preschool': '#87CEEB', // Soft Sky Blue
        'accent-primary': '#98FB98', // Fresh Mint Green
        'accent-highschool': '#FFA500', // Vibrant Orange
        'accent-college': '#800000', // Mature Maroon
      },
      fontFamily: {
        sans: ['Futura', 'Jost', 'sans-serif'],
        serif: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
