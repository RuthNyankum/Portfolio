/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         primary: "#22d3ee",
         dark: '#00A6A7',
         secondary: '#111827',
      },
      fontFamily: {
        'poppins-regular': ['Poppins', 'sans-serif'],
        'poppins-medium-italic': ['Poppins', 'sans-serif'],
        'poppins-semibold-italic': ['Poppins', 'sans-serif'],
        'montserrat-unique-class': ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      fontStyle: {
        italic: 'italic',
      },
      
      // CSS transitions and transformations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
  },
  plugins: [],
}

