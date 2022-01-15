import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import useTheme, { lightTheme, darkTheme } from "../../hooks/useTheme";
import { themeAction } from "../../store/theme";

import styles from "./ThemeToggleButton.module.scss";

const ThemeToggleButton = () => {
  // console.log("ToggleButton");
  const dispatch = useDispatch();

  const [isLightMode, setIsLightMode] = useState(false);
  const [isShining, setIsShining] = useState(false);

  const currentTheme = isLightMode ? lightTheme : darkTheme;
  useTheme(currentTheme);

  const toggleHandler = () => {
    setIsLightMode(!isLightMode);
    if (isLightMode) {
      console.log("toggleHandler -> isLightMode");
      dispatch(themeAction.useLightMode());
    } else {
      console.log("toggleHandler -> isDarkMode");
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
    ` ${isLightMode ? styles.buttonChecked : ""}
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
          alt="Kiwi standing on oval"
        />
      </span>
      <span id={styles.darkThemeIcon}>
        <Image
          src="/images/themes/dark-theme.svg"
          width="18px"
          height="18px"
          alt="Kiwi standing on oval"
        />
      </span>
      <div className={buttonClass}></div>
    </div>
  );
};

export default ThemeToggleButton;
