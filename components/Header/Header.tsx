import { useState, Fragment } from "react";

import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import CollapseNavBar from "./CollapseNavBar/CollapseNavBar";
import HeaderNavList from "./HeaderNavBar/HeaderNavList";
import HeaderNavItem from "./HeaderNavBar/HeaderNavItem";
import HeaderNavLink from "./HeaderNavBar/HeaderNavLink";

import styles from "./Header.module.scss";

import ThemeToggleButton from "../Button/ThemeToggleButton";
import DropDownNavItems from "./DropDownNavItems";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const theme = useTheme();
  const isCollapseMode = useMediaQuery(theme.breakpoints.down("md"));
  const [isCollapseNavBarExpanded, setIsCollapseNavBarExpanded] =
    useState(false);

  let headerClass = isCollapseMode
    ? styles.headerCollapseMode
    : styles.headerExpandMode;

  const tutorialDropDownItems = [
    { name: "React", path: "/tutorials/react" },
    { name: "Blockchain", path: "/tutorials/blockchain" },
  ];

  let toggleCollapseNavBar = () => {
    console.log("Expanded side menu");
    setIsCollapseNavBarExpanded((prevState) => !prevState);
  };

  return (
    <header id={styles.header} className={headerClass}>
      {isCollapseNavBarExpanded && (
        <CollapseNavBar toggleCollapseNavBar={toggleCollapseNavBar} />
      )}

      <HeaderNavList>
        {isCollapseMode && (
          <HeaderNavItem className={`${styles.hamburgerMenuBtnContainer}`}>
            <IconButton
              aria-label="Side Menu"
              className={styles.hamburgerMenuBtn}
              onClick={toggleCollapseNavBar}
            >
              <MenuRoundedIcon />
            </IconButton>
          </HeaderNavItem>
        )}
        <HeaderNavItem>
          <HeaderNavLink title="Koala Tech" href="/" />
        </HeaderNavItem>
      </HeaderNavList>

      <HeaderNavList>
        {!isCollapseMode && (
          <Fragment>
            <HeaderNavItem>
              <HeaderNavLink title="Home" href="/" />
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink title="Tutorial" href="#">
                <DropDownNavItems
                  className={styles.dropDownContainer}
                  items={tutorialDropDownItems}
                />
              </HeaderNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink title="Support" href="#" />
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink title="About Us" href="/about-us" />
            </HeaderNavItem>
            <HeaderNavItem>
              <ThemeToggleButton />
            </HeaderNavItem>
          </Fragment>
        )}
      </HeaderNavList>
    </header>
  );
};

export default Header;
