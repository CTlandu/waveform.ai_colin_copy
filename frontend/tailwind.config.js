/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#001F20", // 颜色 10
          20: "#003B3C", // 颜色 20
          30: "#005B5C", // 颜色 30
          40: "#007B7C", // 颜色 40
          50: "#009B9C", // 颜色 50
          60: "#00BDBE", // 颜色 60
          70: "#00D7D8", // 颜色 70
          80: "#00E1E2", // 颜色 80
          90: "#00EBEC", // 颜色 90
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
