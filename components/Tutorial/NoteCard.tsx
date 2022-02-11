import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";

import styles from "./NoteCard.module.scss";

type Props = {
  type: "info" | "success" | "warning" | "danger";
  title: string;
};

const NoteCard: React.FC<Props> = ({ type, title, children }) => {
  var noteCardClasses = styles.container;
  if (type === "info") {
    noteCardClasses += " " + styles.info;
  } else if (type === "success") {
    noteCardClasses += " " + styles.success;
  } else if (type === "warning") {
    noteCardClasses += " " + styles.warning;
  } else if (type === "danger") {
    noteCardClasses += " " + styles.danger;
  }
  console.log(noteCardClasses);
  return (
    <Card className={noteCardClasses}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </Card>
  );
};

export default NoteCard;
