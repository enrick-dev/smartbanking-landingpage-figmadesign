/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounceCard': 'bounceCard 1s linear infinite',
        'spinSlow': 'spin 10s linear infinite',
        'buttomHome': 'buttomHomeAnimate 2s 1',
        'buttomHome2': 'buttomHomeAnimate 2s linear 1',
      },
      boxShadow: {
        'cardShadow': '41px 39px 50px 31px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
