import { Fragment } from "react";
import Image from "next/image";
import ThemeToggleButton from "../Button/ThemeToggleButton";
import Backdrop from "./BackDrop";
import HeaderNavItem from "../Header/HeaderNavItem";

import styles from "./CollapseNavBar.module.scss";

type Props = {
  toggleCollapseNavBar: () => void;
};

const CollapseNavBar: React.FC<Props> = ({ toggleCollapseNavBar }) => {
  return (
    <Fragment>
      <Backdrop onClick={toggleCollapseNavBar} />
      <nav id={styles.collapseNavBar}>
        <ul className={styles.headerSection}>
          <HeaderNavItem></HeaderNavItem>
          <HeaderNavItem className={styles.headerNavListItem}>
            Koala Tech
          </HeaderNavItem>
          <HeaderNavItem className={styles.headerNavListItem}>
            <ThemeToggleButton />
          </HeaderNavItem>
          <HeaderNavItem>
            <Image
              src="/images/buttons/cancel-btn.svg"
              width="18px"
              height="18px"
              alt="Kiwi standing on oval"
            />
          </HeaderNavItem>
        </ul>
        <ul>
          <HeaderNavItem>Home</HeaderNavItem>
          <HeaderNavItem>Tutorial</HeaderNavItem>
          <HeaderNavItem>Support</HeaderNavItem>
          <HeaderNavItem>About Us</HeaderNavItem>
        </ul>
      </nav>
    </Fragment>
  );
};

export default CollapseNavBar;
