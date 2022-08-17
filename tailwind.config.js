/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounceCard': 'bounceCard 1s linear infinite',
        'cardMobile': 'CardMobile 3s infinite',
        'spinSlow': 'spin 10s linear infinite',
        'buttomHome': 'buttomHomeAnimate 2s 1',
        'buttomHome1': 'bounce 2s infinite ',
        'buttomHome2': 'bounce 2s infinite 300ms',
        'buttomHome3': 'bounce 2s infinite 600ms',
        'buttomHome4': 'bounce 2s infinite 900ms',
        'buttomHome5': 'bounce 2s infinite 1200ms',
        'buttomHome6': 'bounce 2s infinite 1500ms',
      },
      boxShadow: {
        'cardShadow': '41px 39px 50px 31px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
