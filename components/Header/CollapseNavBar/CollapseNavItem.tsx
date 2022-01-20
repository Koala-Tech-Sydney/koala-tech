import styles from "./CollapseNavItem.module.scss";

type Props = {
  className?: string;
};

const CollapseNavItem: React.FC<Props> = ({ className, children }) => {
  return (
    <li className={`${styles.collapseNavItem} ${className}`}>{children}</li>
  );
};

export default CollapseNavItem;
