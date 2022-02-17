import Link from "next/link";
import styles from "./HeaderNavLink.module.scss";

type Props = {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
};

const HeaderNavLink: React.FC<Props> = ({
  title,
  href,
  onClick,
  className,
  children,
}) => {
  return (
    <div className={`${styles.headerNavLinkContainer} ${className}`}>
      <Link href={href}>
        <a onClick={onClick}>{title}</a>
      </Link>
      <div className={styles.headerNavLinkChild}>{children}</div>
    </div>
  );
};

export default HeaderNavLink;
