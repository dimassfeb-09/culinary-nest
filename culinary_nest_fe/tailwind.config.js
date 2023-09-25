/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'button-gray': "#D9D9D9",
        'primary': "#07111A",
        "secondary": "#223444",
      },
      backgroundImage: {
        'hero-home': "url('/public/assets/home.png')",
        'logo': "url('/public/assets/Logo.png')"
      }
    },
  },

  plugins: [],
}

