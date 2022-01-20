import styles from "./Text.module.scss";

const Title: React.FC = (props) => {
  return <div className={styles.title}>{props.children}</div>;
};

const Subtitle1: React.FC = (props) => {
  return <div className={styles.subtitle1}>{props.children}</div>;
};

const Subtitle2: React.FC = (props) => {
  return <div className={styles.subtitle2}>{props.children}</div>;
};

const Paragraph: React.FC = (props) => {
  return <div className={styles.paragraph}>{props.children}</div>;
};

interface HyperlinkProps {
  href: string;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, children }) => {
  return (
    <a className={styles.hyperlink} href={href}>
      {children}
    </a>
  );
};

export { Title, Subtitle1, Subtitle2, Paragraph, Hyperlink };
