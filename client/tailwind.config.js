/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Oswald'],
      sans: ['Poppins'],
    },
    extend: {
      colors: {
        primary: '#009982',
        primaryLight: '#58D0B7',
      },
      backgroundImage: {
        'hero-cover': "url('/img/hero-cover.png')",
      },
    },
  },
  plugins: [],
};
