const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    extend: {
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        times: 'times',
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem"
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        "extra-small": "1.25rem",
        small: "1.875rem",
        medium: "2.5rem",
        large: "3.125rem",
        label: "clamp(1rem, 1vw + 1.31rem, 1.2rem)",
        "sub-title": "clamp(1.95rem, 1.56vw + 1.56rem, 1.25rem)",
        title: "clamp(2.44rem, 2.38vw + 1.85rem, 2.8rem)",
        features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        section: "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        hero: "clamp(4.77rem, 7.48vw + 2.9rem, 6rem)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "7rem",
          "2xl": "8rem",
        }
      },
      colors: {
        green: {
          primary: "#f0f8ed",
          dark: "#42A150",
          tan: "#D1FFCE",
        },
        primary: {
          50: '#B2B8A1',
          200: '#7C8464',
          500: '#646B4B',
          700: '#4B5331',

        },
        secondary: {
          100: '#EFEBE6',
          300: '#CDA66D',
          500: '#F3A756',
          600: '#DF7300',
        },
        grey: {
          50: '#FFFFFF',
          100: '#F8F8F8',
          200: '#F1F3F4',
          300: '#EDEDED',
          400: '#D9D9D9',
          500: '#CCCCCC',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
