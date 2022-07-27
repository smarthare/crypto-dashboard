import { createTheme, Theme } from "@mui/material";

declare module "@mui/material/styles/createTheme" {
  export interface ThemeOptions {
    grey: {
      text: string;
      border: string;
      hover: string;
      background: string;
      title: string;
      appbar: string;
    };
    success: string;
  }
}

export const lightMode: Theme = createTheme({
  grey: {
    text: "#000",
    border: "#ddd",
    hover: "#eee",
    background: "#eee",
    title: "#aaa",
    appbar: "#fff",
  },
  success: "#4caf50",
  palette: {
    mode: "light",
  },
});

export const darkMode: Theme = createTheme({
  grey: {
    text: "#fff",
    border: "#555",
    hover: "#222",
    background: "#272727",
    title: "#777",
    appbar: "#121212",
  },
  success: "#388e3c",
  palette: {
    mode: "dark",
  },
});

export const getThemeMode = () =>
  localStorage.getItem("theme") === "dark" ? true : false;

export const setThemeMode = (themeMode: boolean) =>
  localStorage.setItem("theme", themeMode ? "dark" : "light");
