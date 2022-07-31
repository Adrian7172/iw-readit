/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'hero-pattern': "url(https://preview.colorlib.com/theme/readit/images/bg_1.jpg)",
          "hero-gadient": "linear-gradient(45deg, #f200ff 0%, #ffba42 100%)"
        },
        colors: {
          'nav-item': 'rgba(255, 255, 255, 0.8)',
          "text-color1": "rgba(0,0,0,.2)",
          "text-color2": "rgba(0,0,0,.05)",
          "text-color3": "#ffd369",
          "text-color4": "rgba(255,255,255,.7)",
          "text-color5": "rgba(255,255,255,.05)",
          "text-color6": "#808080",
          "bg-color1": "#222831",
        },
        backgroundPosition: {
          "little-top": "0 -30px"
        },
      
    },
  },
  plugins: [],
}