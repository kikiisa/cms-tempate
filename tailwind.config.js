// tailwind.config.js
module.exports = {
  purge: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  content:[
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}