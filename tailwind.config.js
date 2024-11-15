module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mxsm": { max: "639px" }, // Targets screens smaller than 640px
        "mxmd": { max: "767px" }, // Targets screens smaller than 768px
        "mxlg": { max: "1023px" }, // Targets screens smaller than 1024px
      },
    },
  },
  plugins: [],
};
