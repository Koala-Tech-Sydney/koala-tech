import { Fragment } from "react";
import Image from "next/image";
import ThemeToggleButton from "../Button/ThemeToggleButton";
import Backdrop from "./BackDrop";

import styles from "./CollapseNavBar.module.scss";

const CollapseNavBar = () => {
  return (
    <Fragment>
      <Backdrop />
      <nav id={styles.collapseNavBar}>
        <ul className={styles.headerSection}>
          <li></li>
          <li>Koala Tech</li>
          <li>
            <ThemeToggleButton />
          </li>
          <li>
            <Image
              src="/images/buttons/cancel-btn.svg"
              width="18px"
              height="18px"
              alt="Kiwi standing on oval"
            />
          </li>
        </ul>
        <ul>
          <li>Home</li>
          <li>Tutorial</li>
          <li>Support</li>
          <li>About Us</li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default CollapseNavBar;
