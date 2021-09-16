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
    inset: {
      12: '3.35rem',
    },

    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
