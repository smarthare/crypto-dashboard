import { createTheme, Theme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    button: {
      text: string;
      border: string;
      hover: string;
    };
    border: string;
  }
}

export const lightMode: Theme = createTheme({
  palette: {
    button: {
      text: "#000",
      border: "#4caf50",
      hover: "#eee"
    },
    border: "#ddd",
    mode: "light",
  }
});

export const darkMode: Theme = createTheme({
  palette: {
    button: {
      text: "#fff",
      border: "#388e3c",
      hover: "#222"
    },
    border: "#555",
    mode: "dark",
  }
});

export const getThemeMode = () =>
  localStorage.getItem("theme") === "dark" ? true : false;

export const setThemeMode = (themeMode: boolean) =>
  localStorage.setItem("theme", themeMode ? "dark" : "light");
