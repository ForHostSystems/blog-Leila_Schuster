import { extendTheme } from "@chakra-ui/react";

const colors = {
  background: "#e7e7e7",
  black: "#1a1a1a",
  "gray-m": "#5f5f5f",
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1920px",
};

const styles = {
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    "html, body, #root": {
      width: "100%",
      height: "100%",
    },
  },
};

export const theme = extendTheme({
  colors,
  breakpoints,
  styles,
});
