/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#2D2424',
      'secondary': '#5C3D2E',
      'tertiary': '#B85C38',
      'quaternary': '#E0C097',
    }
  },
  plugins: [],
}
