module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'theme-txt': 'var(--clr-text)',
      'theme-bg': 'var(--clr-bg)',
      'theme-elements': 'var(--clr-elements)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
