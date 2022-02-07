import { Fragment } from "react";
import ThemeToggleButton from "../../Button/ThemeToggleButton";
import Backdrop from "../../Structure/BackDrop";
import HeaderNavItem from "../HeaderNavBar/HeaderNavItem";
import HeaderNavList from "../HeaderNavBar/HeaderNavList";
import CollapseNavList from "./CollapseNavList";
import CollapseNavItem from "./CollapseNavItem";
import CollapseNavLink from "./CollapseNavLink";

import CloseButton from "../../../public/images/buttons/close-btn.svg";

import styles from "./CollapseNavBar.module.scss";
import HeaderNavLink from "../HeaderNavBar/HeaderNavLink";

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
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink
              title="Tutorial"
              href="/tutorial"
            ></CollapseNavLink>
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink title="Support" href="/support"></CollapseNavLink>
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink
              title="About Us"
              href="/about-us"
            ></CollapseNavLink>
          </CollapseNavItem>
        </CollapseNavList>
      </section>
    </Fragment>
  );
};

export default CollapseNavBar;
