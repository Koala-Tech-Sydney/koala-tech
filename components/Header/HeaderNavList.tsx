import styles from "./HeaderNavList.module.scss";

type Props = {
  className?: string;
};

const HeaderNavList: React.FC<Props> = ({ className, children }) => {
  return <ul className={`${styles.headerNavList} ${className}`}>{children}</ul>;
};

export default HeaderNavList;
