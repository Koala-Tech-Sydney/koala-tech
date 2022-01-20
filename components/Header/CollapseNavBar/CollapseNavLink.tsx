import Link from "next/link";

import styles from "./CollapseNavLink.module.scss";

type Props = {
  title: string;
  href: string;
  className?: string;
};

const CollapseNavLink: React.FC<Props> = ({
  title,
  href,
  className,
  children,
}) => {
  return (
    <div className={`${styles.collapseNavLinkContainer} ${className}`}>
      <Link href={href}>
        <a>{title}</a>
      </Link>
      <div className={styles.collapseNavLinkChild}>{children}</div>
    </div>
  );
};

export default CollapseNavLink;
