module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#ffffff',
          text: '#111827',
        },
        dark: {
          DEFAULT: '#1f2937',
          text: '#f9fafb',
        },
      },
    },
  },
}