/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/components/**/*.{js,jsx,ts,tsx,vue}",
      "./src/pages/**/*.{js,jsx,ts,tsx,vue}",
    ],
    safelist: [/^bg-/, /^to-/, /^from-/],
  },

  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [],
};
