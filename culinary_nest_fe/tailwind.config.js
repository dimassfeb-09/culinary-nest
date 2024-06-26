/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "button-gray": "#D9D9D9",
        primary: "#07111A",
        secondary: "#223444",
        "btn-destination": "#C7D6FF",
      },
      backgroundImage: {
        home: "url('/public/assets/hero.png')",
        logo: "url('/public/assets/Logo.png')",
        explore: "url('/public/assets/explore.png')",
        "category-01": "url('/public/assets/category/category_01.png')",
        "category-02": "url('/public/assets/category/category_02.png')",
        "category-03": "url('/public/assets/category/category_03.png')",
        "category-04": "url('/public/assets/category/category_04.png')",
        "category-05": "url('/public/assets/category/category_05.png')",
        "category-06": "url('/public/assets/category/category_06.png')",
        "hero-search": "url('/public/assets/hero-search.png')",
      },
    },
  },

  plugins: [],
};
