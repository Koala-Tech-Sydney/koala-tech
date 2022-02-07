import { Fragment } from "react";
import ThemeToggleButton from "../../Button/ThemeToggleButton";
import Backdrop from "../../Structure/BackDrop";
import HeaderNavItem from "../HeaderNavBar/HeaderNavItem";
import HeaderNavList from "../HeaderNavBar/HeaderNavList";
import CollapseNavList from "./CollapseNavList";
import CollapseNavItem from "./CollapseNavItem";
import CollapseNavLink from "./CollapseNavLink";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
              <IconButton
                aria-label="Cancel"
                className={styles.closeButton}
                onClick={toggleCollapseNavBar}
              >
                <CloseIcon />
              </IconButton>
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
