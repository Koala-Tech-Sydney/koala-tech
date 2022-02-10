import Link from "next/link";

import styles from "./CollapseNavLink.module.scss";

type Props = {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
};

const CollapseNavLink: React.FC<Props> = ({
  title,
  href,
  onClick,
  className,
  children,
}) => {
  return (
    <div className={`${styles.collapseNavLinkContainer} ${className}`}>
      <Link href={href}>
        <a onClick={onClick}>{title}</a>
      </Link>
      <div className={styles.collapseNavLinkChild}>{children}</div>
    </div>
  );
};

export default CollapseNavLink;
