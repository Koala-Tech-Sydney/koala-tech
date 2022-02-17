import { useEffect } from "react";

const lightMode = "light";
const darkMode = "dark";

interface ColorTheme {
  "--color-primary": string;
  "--color-secondary": string;
  "--color-tertiary": string;
  "--color-tint": string;
  "--color-shade": string;
  "--color-tone": string;
  "--color-accent": string;
}

// tint => adds white, shade => adds black, tone => adds grey, accent => emphasize, contrast
const lightTheme: ColorTheme = {
  "--color-primary": "#FFFFFF",
  "--color-secondary": "#18191A",
  "--color-tertiary": "#20232A",
  "--color-tint": "#F5F6F7",
  "--color-shade": "#F2F2F2",
  "--color-tone": "#4D4D4D",
  "--color-accent": "#61DAFB",
};

const darkTheme: ColorTheme = {
  "--color-primary": "#18191A",
  "--color-secondary": "#FFFFFF",
  "--color-tertiary": "#20232A",
  "--color-tint": "#242526",
  "--color-shade": "#1C1E21",
  "--color-tone": "#4D4D4D",
  "--color-accent": "#61DAFB",
};

const useColorTheme = (colorTheme: ColorTheme) => {
  // console.log("useTheme");
  // console.log(theme);
  useEffect(
    () => {
      // console.log("useTheme -> useLayoutEffect");
      for (const key in colorTheme) {
        // Update css variables in document's root element
        // [key as keyof Theme] tells TypeScript we are confident that 'key' is one of the keys of the 'Theme' type.
        document.documentElement.style.setProperty(
          `${key}`,
          colorTheme[key as keyof ColorTheme]
        );
      }
    },
    [colorTheme] // Only call again if theme object reference changes
  );
};

export { useColorTheme as default, lightTheme, darkTheme, lightMode, darkMode };
