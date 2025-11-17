module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d9488',
          50: '#e6f7f5',
          100: '#cfeef0',
          200: '#9fe0da',
          300: '#6fd1c3',
          400: '#3fc2ad',
          500: '#0d9488'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
};
