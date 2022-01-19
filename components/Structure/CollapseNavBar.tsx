import { Fragment } from "react";
import ThemeToggleButton from "../Button/ThemeToggleButton";
import Backdrop from "./BackDrop";
import HeaderNavItem from "../Header/HeaderNavItem";
import HeaderNavList from "../Header/HeaderNavList";

import CloseButton from "../../public/images/buttons/close-btn.svg";

import styles from "./CollapseNavBar.module.scss";
import HeaderNavLink from "../Header/HeaderNavLink";

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
        <ul className={styles.verticalNavList}>
          <HeaderNavItem>
            <HeaderNavLink title="Home" href="/"></HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink title="Tutorial" href="#"></HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink title="Support" href="#"></HeaderNavLink>
          </HeaderNavItem>
          <HeaderNavItem>
            <HeaderNavLink title="About Us" href="#"></HeaderNavLink>
          </HeaderNavItem>
        </ul>
      </section>
    </Fragment>
  );
};

export default CollapseNavBar;
