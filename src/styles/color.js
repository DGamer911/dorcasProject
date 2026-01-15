/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f5f5f5",
        black: "#0a0a0b",
        grey: "#AAAAAA",
        wine: "#5a0f1b",
        red: "#DC2626",
        accent: "#FFD700",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.3, 0, 0, 1)",
        snappy: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
