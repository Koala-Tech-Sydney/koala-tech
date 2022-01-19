import Link from "next/link";
import { Fragment } from "react";
import styles from "./HeaderNavLink.module.scss";

type Props = {
  title: string;
  href: string;
  className?: string;
};

const HeaderNavLink: React.FC<Props> = ({
  title,
  href,
  className,
  children,
}) => {
  return (
    <div className={styles.headerNavLinkContainer}>
      <Link href={href}>
        <a className={`${className} ${styles.headerNavLink}`}>{title}</a>
      </Link>
      <div className={styles.headerNavLinkChild}>{children}</div>
    </div>
  );
};

export default HeaderNavLink;
