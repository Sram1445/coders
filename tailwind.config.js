module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)", "900_b2": "var(--black_900_b2)" },
        blue: { 300: "var(--blue_300)" },
        blue_gray: { 900: "var(--blue_gray_900)" },
        deep_purple: { 300: "var(--deep_purple_300)", a100_c6: "var(--deep_purple_a100_c6)" },
        gray: { 900: "var(--gray_900)", "900_14": "var(--gray_900_14)", "900_1e": "var(--gray_900_1e)" },
        light_green: { a700: "var(--light_green_a700)" },
        pink: { a100: "var(--pink_a100)" },
        purple: {
          100: "var(--purple_100)",
          300: "var(--purple_300)",
          800: "var(--purple_800)",
          "300_4c": "var(--purple_300_4c)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_19: "var(--white_a700_19)",
          a700_26: "var(--white_a700_26)",
          a700_4c: "var(--white_a700_4c)",
        },
        yellow: { "300_26": "var(--yellow_300_26)", a200: "var(--yellow_a200)" },
      },
      boxShadow: {
        xs: "0 0 87px 21.97px #bf7bffc6",
        sm: "0 0 91px 22.95px #bf7bffc6",
        md: "0 0 91px 22.8px #bf7bffc6",
        lg: "0 3.97px 48px 0 #0007481e",
        xl: "32px 29px 49px 0 #00074814",
      },
      fontFamily: { sarpanch: "Sarpanch", malrindemo: "Malrin DEMO", orbitron: "Orbitron", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(95deg, #9173d1,#ec6ead)",
        gradient1: "linear-gradient(136deg, #fcff7426,#ffffff26)",
        gradient2: "linear-gradient(136deg, #ffffff26,#ffffff26)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
