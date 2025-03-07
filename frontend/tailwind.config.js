/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          10: "#001F20", // color 10
          20: "#003B3C", // color 20
          30: "#005B5C", // color 30
          40: "#007B7C", // color 40
          50: "#009B9C", // color 50
          60: "#00BDBE", // color 60
          70: "#00D7D8", // color 70
          80: "#00E1E2", // color 80
          90: "#00EBEC", // color 90
        },
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(100vh) scale(0)",
            opacity: "0",
          },
          "5%": {
            transform: "translateY(90vh) scale(1)",
            opacity: "1",
          },
          "95%": {
            transform: "translateY(10vh) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(0) scale(0)",
            opacity: "0",
          },
        },
        "float-random": {
          "0%": {
            transform: "translateY(0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
          "90%": {
            transform: "translateY(-200px) scale(1)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateY(-250px) scale(0)",
            opacity: "0",
          },
        },
      },
      animation: {
        float: "float 20s linear infinite",
        "float-random": "float-random 8s ease-out forwards",
      },
    },
  },
  variants: {},
  plugins: [],
};
