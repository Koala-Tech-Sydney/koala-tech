import styles from "./TutorialText.module.scss";

const Title = (props) => {
  return <div className={styles.title}>{props.children}</div>;
};

const Subtitle1 = (props) => {
  return <div className={styles.subtitle1}>{props.children}</div>;
};

const Subtitle2 = (props) => {
  return <div className={styles.subtitle2}>{props.children}</div>;
};

const Paragraph = (props) => {
  return <div className={styles.paragraph}>{props.children}</div>;
};

const Hyperlink = (props) => {
  return <a className={styles.hyperlink} href={props.href}>{props.children}</a>;
};

export { Title, Subtitle1, Subtitle2, Paragraph, Hyperlink };
