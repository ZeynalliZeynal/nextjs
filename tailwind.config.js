/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "white",
        accents: {
          1: "#111",
          2: "#333",
          3: "#444",
          4: "#666",
          5: "#888",
          6: "#999",
          7: "#eaeaea",
          8: "#fafafa",
        },
        success: {
          lighter: "#d3e5ff",
          light: "#3291ff",
          dark: "#0761d1",
          normal: "#0070f3",
        },
        error: {
          lighter: "#f7d4d6",
          light: "#ff1a1a",
          dark: "#c50000",
          normal: "#e00",
        },
        warning: {
          lighter: "#ffefcf",
          light: "#f7b955",
          dark: "#ab570a",
          normal: "#f5a623",
        },
      },
    },
  },
  plugins: [],
};
