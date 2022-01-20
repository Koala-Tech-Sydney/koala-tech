import { Fragment } from "react";
import ThemeToggleButton from "../Button/ThemeToggleButton";
import Backdrop from "../Structure/BackDrop";
import HeaderNavItem from "./HeaderNavItem";
import HeaderNavList from "./HeaderNavList";
import CollapseNavList from "./CollapseNavList";
import CollapseNavItem from "./CollapseNavItem";
import CollapseNavLink from "./CollapseNavLink";
import Link from "next/link";

import CloseButton from "../../public/images/buttons/close-btn.svg";

import styles from "./CollapseNavBar.module.scss";
import HeaderNavLink from "./HeaderNavLink";
import ArrowButton from "../Button/ArrowButton";

type Props = {
  toggleCollapseNavBar: () => void;
};

const CollapseNavBar: React.FC<Props> = ({ toggleCollapseNavBar }) => {
  return (
    <Fragment>
      <Backdrop onClick={toggleCollapseNavBar} />
      <section className={styles.collapseNavBar}>
        <section className={styles.headerSection}>
          <HeaderNavList>
            <HeaderNavItem>
              <HeaderNavLink title="Koala Tech" href="" />
            </HeaderNavItem>
            <HeaderNavItem>
              <ThemeToggleButton />
            </HeaderNavItem>
          </HeaderNavList>
          <HeaderNavList>
            <HeaderNavItem>
              <CloseButton
                onClick={toggleCollapseNavBar}
                className={styles.closeButton}
                fill="#fff"
                height="1.5rem"
                width="1.5rem"
              />
            </HeaderNavItem>
          </HeaderNavList>
        </section>
        <CollapseNavList>
          <CollapseNavItem>
            <CollapseNavLink title="Home" href="/"></CollapseNavLink>
            <ArrowButton />
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink title="Tutorial" href="#"></CollapseNavLink>
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink title="Support" href="#"></CollapseNavLink>
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink title="About Us" href="#"></CollapseNavLink>
          </CollapseNavItem>
        </CollapseNavList>
      </section>
    </Fragment>
  );
};

export default CollapseNavBar;
