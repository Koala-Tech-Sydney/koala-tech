import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

import ThemeToggleButton from "../Button/ThemeToggleButton";
import DropDownNavItems from "./DropDownNavItems";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = () => {
  const [width, _] = useWindowDimensions();
  const shouldShowHamburgerMenu = width < 1000;

  const tutorialDropDownItems = [
    { name: "React", path: "/tutorials/react" },
    {
      name: "Data Structure and Algorithm",
      path: "/tutorials/data-structure-and-algorithm",
    },
    { name: "Blockchain", path: "/tutorials/blockchain" },
  ];

  return (
    <header id={styles.header}>
      <ul className={styles.headerNavList}>
        <li className={styles.headerNavListItem}>
          <Link href="/">
            <a className={styles.headerNavLink}>Koala Tech</a>
          </Link>
        </li>
      </ul>
      {!shouldShowHamburgerMenu && (
        <ul className={styles.headerNavList}>
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
        </ul>
      )}
      {shouldShowHamburgerMenu && (
        <span>
          <Image
            src="/images/buttons/hamburger-menu.svg"
            width="22px"
            height="22px"
            alt="A"
          />
        </span>
      )}
    </header>
  );
};

export default Header;
