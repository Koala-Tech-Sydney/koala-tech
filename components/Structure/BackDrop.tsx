import styles from "./BackDrop.module.scss";

type Props = {
  onClick: () => void;
};

const Backdrop: React.FC<Props> = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

export default Backdrop;
