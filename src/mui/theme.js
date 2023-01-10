import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#7ed56f",
      main: "#55c57a",
      dark: "#28b485",
    },
    secondary: {
      light: "#0066ff",
      main: "#2998ff",
      dark: "#5643fa",
      contrastText: "#ffcc00",
    },

    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },

    text: {
      white: "#fff",
      black: "#000",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;
