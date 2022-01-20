import styles from "./CollapseNavList.module.scss";

type Props = {
  className?: string;
};

const CollapseNavList: React.FC<Props> = ({ className, children }) => {
  return (
    <ul className={`${styles.collapseNavList} ${className}`}>{children}</ul>
  );
};

export default CollapseNavList;
