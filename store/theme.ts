import { createSlice } from "@reduxjs/toolkit";

const lightMode = "light";
const darkMode = "dark";

const initialThemeState = { theme: darkMode };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
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
themeSlice.reducer;

export const themeAction = themeSlice.actions;
export default themeSlice.reducer;
