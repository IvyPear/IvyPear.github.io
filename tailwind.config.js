/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#426DA6',
        'primary-light': '#5D8BD6',
        'primary-lighter': '#7AA3E6',
      },
    },
  },
  plugins: [],
}
