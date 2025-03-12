/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#7CB8AD",
        "main-gray-light": "#EEEEEE",
        "main-gray": "#D9D9D9",
        "main-gray-dark": "#939393",
        "main-brown": "#593D2A",
        "main-black": "#4E4E4E",
        "main-khaki": "#D3D9D9",
      },
    },
  },
  plugins: [],
}