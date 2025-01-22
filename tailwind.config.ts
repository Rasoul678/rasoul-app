/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      backdropBlur: {
        sm: "2px",
      },
      backgroundOpacity: {
        7: "0.07",
      },
      fontFamily: {
        iransans: ["var(--font-iransans)"],
        my_quicksand: ["var(--font-quicksand)"],
        my_exo2: ["var(--font-exo2)"],
        my_caveat: ["var(--font-caveat)"],
        my_edu: ["var(--font-edu)"],
        my_lilita: ["var(--font-lilita)"],
        my_concert: ["var(--font-concert)"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "primary-yellow": "#ffe082",
      },
    },
  },
  plugins: [],
};
