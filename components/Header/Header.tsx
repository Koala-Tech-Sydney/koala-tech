import { useState, Fragment } from "react";

import HamburgerMenu from "../../public/images/buttons/hamburger-menu.svg";
import CollapseNavBar from "./CollapseNavBar/CollapseNavBar";
import HeaderNavList from "./HeaderNavBar/HeaderNavList";
import HeaderNavItem from "./HeaderNavBar/HeaderNavItem";
import HeaderNavLink from "./HeaderNavBar/HeaderNavLink";

import styles from "./Header.module.scss";

import ThemeToggleButton from "../Button/ThemeToggleButton";
import DropDownNavItems from "./DropDownNavItems";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const [width, _] = useWindowDimensions();
  const isCollapseMode = !!width ? width < 800 : false;
  const [isCollapseNavBarExpanded, setIsCollapseNavBarExpanded] =
    useState(false);

  let headerClass = isCollapseMode
    ? styles.headerCollapseMode
    : styles.headerExpandMode;

  const tutorialDropDownItems = [
    { name: "React", path: "/tutorials/react" },
    {
      name: "Data Structure and Algorithm",
      path: "/tutorials/data-structure-and-algorithm",
    },
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
            <HamburgerMenu
              onClick={toggleCollapseNavBar}
              className={styles.hamburgerMenuBtn}
              fill="#fff"
              height="1.2rem"
              width="1.2rem"
            />
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
