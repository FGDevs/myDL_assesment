module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customred: '#ED3237',
        customblack: '#000000',
        customblue: {
          100: '#2D9CDB',
          200: '#1976D2'
        },
        customgray: {
          100: '#ECEFF1',
          200: '#BDBDBD',
          300: '#CED4DA'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
