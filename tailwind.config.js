/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#030000',
        'primary': '#e4e4f9'
      },
      fontFamily: {
        Logo: 'Ms Madi',
        Roboto: 'Roboto'
      }
    }
  },
  plugins: [],
}
