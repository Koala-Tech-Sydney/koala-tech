import { Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";

import ThemeToggleButton from "../../Button/ThemeToggleButton";
import HeaderNavItem from "../HeaderNavBar/HeaderNavItem";
import HeaderNavList from "../HeaderNavBar/HeaderNavList";
import CollapseNavList from "./CollapseNavList";
import CollapseNavItem from "./CollapseNavItem";
import CollapseNavLink from "./CollapseNavLink";
import HeaderNavLink from "../HeaderNavBar/HeaderNavLink";
// import Backdrop from "../../Structure/BackDrop";

import styles from "./CollapseNavBar.module.scss";

type Props = {
  toggleCollapseNavBar: () => void;
};

const CollapseNavBar: React.FC<Props> = ({ toggleCollapseNavBar }) => {
  return (
    <Fragment>
      <Backdrop
        className={styles.backdrop}
        open={true}
        onClick={toggleCollapseNavBar}
      />
      <section className={styles.collapseNavBar}>
        <section className={styles.headerSection}>
          <HeaderNavList>
            <HeaderNavItem>
              <HeaderNavLink
                title="Koala Tech"
                href="/"
                onClick={toggleCollapseNavBar}
              />
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
            <CollapseNavLink
              title="Home"
              href="/"
              onClick={toggleCollapseNavBar}
            />
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink
              title="Courses"
              href="/courses"
              onClick={toggleCollapseNavBar}
            />
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink
              title="Support"
              href="/support"
              onClick={toggleCollapseNavBar}
            />
          </CollapseNavItem>
          <CollapseNavItem>
            <CollapseNavLink
              title="About Us"
              href="/about-us"
              onClick={toggleCollapseNavBar}
            />
          </CollapseNavItem>
        </CollapseNavList>
      </section>
    </Fragment>
  );
};

export default CollapseNavBar;
