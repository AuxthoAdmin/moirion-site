module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        ink: "#f3efe7",
        canvas: "#0d1012",
        ember: "#d9a56b",
        moss: "#7f9389"
      },
      fontFamily: {
        display: ["Newsreader", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        calm: "0 20px 60px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};
