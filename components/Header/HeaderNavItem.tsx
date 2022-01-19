import styles from "./HeaderNavItem.module.scss";

type Props = {
  className?: string;
};

const HeaderNavItem: React.FC<Props> = ({ className, children }) => {
  return <li className={`${className} ${styles.headerNavItem}`}>{children}</li>;
};

export default HeaderNavItem;
