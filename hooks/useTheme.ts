import { useEffect } from "react";

// tint => adds white, shade => adds black, tone => adds grey, accent => emphasize, contrast
const lightTheme = {
  "--color-primary": "#FFFFFF",
  "--color-secondary": "#18191A",
  "--color-tertiary": "#20232A",
  "--color-tint": "#F5F6F7",
  "--color-shade": "#F2F2F2",
  "--color-tone": "#4D4D4D",
  "--color-accent": "#61DAFB",
};

const darkTheme = {
  "--color-primary": "#18191A",
  "--color-secondary": "#FFFFFF",
  "--color-tertiary": "#20232A",
  "--color-tint": "#242526",
  "--color-shade": "#1C1E21",
  "--color-tone": "#4D4D4D",
  "--color-accent": "#61DAFB",
};

const useTheme = (theme) => {
  console.log("useTheme");
  console.log(theme);
  useEffect(
    () => {
      // console.log("useTheme -> useLayoutEffect");
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`${key}`, theme[key]);
      }
    },
    [theme] // Only call again if theme object reference changes
  );
};

export { useTheme as default, lightTheme, darkTheme };
