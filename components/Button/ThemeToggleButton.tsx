import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Image from "next/image";

import useColorTheme, {
  lightTheme,
  darkTheme,
  lightMode,
} from "../../hooks/useColorTheme";
import { colorThemeAction } from "../../store/colorTheme";

import styles from "./ThemeToggleButton.module.scss";

const ThemeToggleButton = () => {
  console.log("===== ThemeToggleButton =====");
  const dispatch = useDispatch();

  const [isShining, setIsShining] = useState(false);

  // Any change in the Redux store will cause the whole component to be re-evaluated.
  const currentColorThemeMode = useSelector<RootState>(
    (state) => state.theme.theme
  );
  const currentColorTheme =
    currentColorThemeMode == lightMode ? lightTheme : darkTheme;
  useColorTheme(currentColorTheme);

  const toggleHandler = () => {
    if (currentColorThemeMode != lightMode) {
      dispatch(colorThemeAction.useLightMode());
    } else {
      dispatch(colorThemeAction.useDarkMode());
    }
  };

  const onMouseEnterHandler = () => {
    setIsShining(true);
  };

  const onMouseLeaveHandler = () => {
    setIsShining(false);
  };

  const buttonClass =
    styles.button +
    ` ${currentColorThemeMode == lightMode ? styles.buttonChecked : ""}
      ${isShining ? styles.buttonOnHover : ""}`;

  return (
    <div
      className={styles.container}
      onClick={toggleHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <span id={styles.lightThemeIcon}>
        <Image
          src="/images/themes/light-theme.svg"
          width="22px"
          height="22px"
          alt="light theme icon"
        />
      </span>
      <span id={styles.darkThemeIcon}>
        <Image
          src="/images/themes/dark-theme.svg"
          width="18px"
          height="18px"
          alt="dark theme icon"
        />
      </span>
      <div className={buttonClass}></div>
    </div>
  );
};

export default ThemeToggleButton;
