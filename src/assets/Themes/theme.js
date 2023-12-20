import { createTheme } from "@mui/material/styles";

export const themeTyp = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    NavTyp1: {
      fontSize: 20,
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "#1c2672",
    },
    
    NavTyp2: {
        fontSize: 20,
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: 700,
        color: "#ffffff",
      },
  },
});

export const themeNav = createTheme({
  MuiAppBar: {
    root: {
      background: "linear-gradient(90deg, #090c54, #0d0a26)", // Set the background color to transparent
      boxShadow: "none", // Remove the default box shadow
    },
  },
});