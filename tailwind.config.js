/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      darkMagenta: "hsl(300, 43%, 22%)",
      softPink: "hsl(333, 80%, 67%)",
      grayMagent: "hsl(303, 10%, 53%)",
      lightGrayMagenta: "hsl(300, 24%, 96%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      league: ["League Spartan"],
    },
  },
  plugins: [],
};
