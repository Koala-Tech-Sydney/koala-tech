import styles from "./TutorialHome.module.scss";

type Props = {
  title: string;
};

const TutorialHome: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  );
};

export default TutorialHome;
