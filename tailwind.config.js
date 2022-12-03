export default {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          main: "#884AC6",
        },
        pink: {
          main: "#F72585",
        },
        blue: {
          main: "#4361EE",
          dark: "#3A0CA3",
          light: "#4CC9F0",
        },
      },
    },
  },
};
