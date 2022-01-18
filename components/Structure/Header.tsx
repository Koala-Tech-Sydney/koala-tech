import Link from "next/link";
import Image from "next/image";

import HamburgerMenu from "../../public/images/buttons/hamburger-menu.svg";

import styles from "./Header.module.scss";

import ThemeToggleButton from "../Button/ThemeToggleButton";
import DropDownNavItems from "./DropDownNavItems";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Fragment } from "react";

const Header = () => {
  const [width, _] = useWindowDimensions();
  const isCollapseMode = !!width ? width < 1000 : false;

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

  return (
    <header id={styles.header} className={headerClass}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavListItem}>
          <Link href="/">
            <a className={styles.headerNavLink}>Koala Tech</a>
          </Link>
        </li>
      </ul>

      <ul className={styles.headerNavList}>
        {!isCollapseMode && (
          <Fragment>
            <li className={styles.headerNavListItem}>
              <Link href="/">
                <a className={styles.headerNavLink}>Home</a>
              </Link>
            </li>
            <li className={styles.headerNavListItem}>
              <a className={styles.headerNavLink}>Tutorial</a>

              <DropDownNavItems
                className={styles.dropDownContainer}
                items={tutorialDropDownItems}
              />
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#" className={styles.headerNavLink}>
                Support
              </a>
            </li>
            <li className={styles.headerNavListItem}>
              <a href="#" className={styles.headerNavLink}>
                About Us
              </a>
              <DropDownNavItems
                className={styles.dropDownContainer}
                items={tutorialDropDownItems}
              />
            </li>
            <li className={styles.headerNavListItem}>
              <div className={styles.themeToggleBtn}>
                <ThemeToggleButton />
              </div>
            </li>
          </Fragment>
        )}
        {isCollapseMode && (
          <li
            className={`${styles.headerNavListItem} ${styles.hamburgerMenuBtn}`}
          >
            <HamburgerMenu fill="#fff" height="1.2rem" width="1.2rem" />
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
