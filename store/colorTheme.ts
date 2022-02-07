import { createSlice } from "@reduxjs/toolkit";

import { lightMode, darkMode } from "../hooks/useColorTheme";

const initialColorThemeState = { theme: darkMode };

const colorThemeSlice = createSlice({
  name: "theme",
  initialState: initialColorThemeState,
  reducers: {
    useLightMode(state) {
      console.log("themeSlice -> useLightMode");
      state.theme = lightMode;
    },
    useDarkMode(state) {
      console.log("themeSlice -> useDarkMode");
      state.theme = darkMode;
    },
  },
});

export const colorThemeAction = colorThemeSlice.actions;
export default colorThemeSlice.reducer;
