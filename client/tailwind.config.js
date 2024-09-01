/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'sans-serif'],
        serif: ['Rubik', 'serif'],
      },
      "fade-out-up": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate3d(0, -100%, 0)",
                    },
                },
    },
    scrollBehavior: ['smooth'],
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
