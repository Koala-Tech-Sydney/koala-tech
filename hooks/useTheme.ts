import { useEffect } from "react";

interface Theme {
  "--color-primary": string;
  "--color-secondary": string;
  "--color-tertiary": string;
  "--color-tint": string;
  "--color-shade": string;
  "--color-tone": string;
  "--color-accent": string;
}

// tint => adds white, shade => adds black, tone => adds grey, accent => emphasize, contrast
const lightTheme: Theme = {
  "--color-primary": "#FFFFFF",
  "--color-secondary": "#18191A",
  "--color-tertiary": "#20232A",
  "--color-tint": "#F5F6F7",
  "--color-shade": "#F2F2F2",
  "--color-tone": "#4D4D4D",
  "--color-accent": "#61DAFB",
};

const darkTheme: Theme = {
  "--color-primary": "#18191A",
  "--color-secondary": "#FFFFFF",
  "--color-tertiary": "#20232A",
  "--color-tint": "#242526",
  "--color-shade": "#1C1E21",
  "--color-tone": "#4D4D4D",
  "--color-accent": "#61DAFB",
};

const useTheme = (theme: Theme) => {
  console.log("useTheme");
  // console.log(theme);
  useEffect(
    () => {
      // console.log("useTheme -> useLayoutEffect");
      for (const key in theme) {
        // Update css variables in document's root element
        // [key as keyof Theme] tells TypeScript we are confident that 'key' is one of the keys of the 'Theme' type.
        document.documentElement.style.setProperty(
          `${key}`,
          theme[key as keyof Theme]
        );
      }
    },
    [theme] // Only call again if theme object reference changes
  );
};

export { useTheme as default, lightTheme, darkTheme };
