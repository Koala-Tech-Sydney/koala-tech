import styles from "./NoteCard.module.scss";

type Props = {
  type: "information" | "warning" | "danger";
  title: string;
};

const NoteCard: React.FC<Props> = ({ type, title, children }) => {
  var noteCardClasses = styles.container;
  if (type === "information") {
    noteCardClasses += " " + styles.information;
  } else if (type === "warning") {
    noteCardClasses += " " + styles.warning;
  } else if (type === "danger") {
    noteCardClasses += " " + styles.danger;
  }
  return (
    <section className={noteCardClasses}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default NoteCard;
