import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Image from "next/image";

import useTheme, { lightTheme, darkTheme } from "../../hooks/useTheme";
import { themeAction, lightMode } from "../../store/theme";

import styles from "./ThemeToggleButton.module.scss";

const ThemeToggleButton = () => {
  console.log("===== ThemeToggleButton =====");
  const dispatch = useDispatch();

  const [isShining, setIsShining] = useState(false);

  // Any change in the Redux store will cause the whole component to be re-evaluated.
  const currentThemeMode = useSelector<RootState>((state) => state.theme.theme);
  const currentTheme = currentThemeMode == lightMode ? lightTheme : darkTheme;
  useTheme(currentTheme);

  const toggleHandler = () => {
    if (currentThemeMode != lightMode) {
      dispatch(themeAction.useLightMode());
    } else {
      dispatch(themeAction.useDarkMode());
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
    ` ${currentThemeMode == lightMode ? styles.buttonChecked : ""}
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
