/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "base-100": "#070707",
        "base-200": "#181818",
        "base-300": "#313131",
        "base-content": "#eeeeee",
        "accent-content": "#B8B8B8",
        "neutral-content": "#6E6E6E"
      },
      
    },
  },
  plugins: [],
}

