import { createTheme } from "@mui/material";

export const Colors = {
  black: "#000000",
  white: "#FFFFFF",
  primary: "#330693",
  secondary: "#8A53FF",
};

export const Theme = createTheme({
  palette: {
    common: {
      black: Colors.black,
      white: Colors.white,
    },
    text: {
      primary: Colors.primary,
      secondary: Colors.white,
    },
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      paper: Colors.primary,
      default: Colors.white,
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});
