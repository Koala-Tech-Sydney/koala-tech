import { ClassNames } from "@emotion/react";
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

const Subtitle3: React.FC = (props) => {
  return <div className={styles.subtitle3}>{props.children}</div>;
};

const Paragraph: React.FC = (props) => {
  return <div className={styles.paragraph}>{props.children}</div>;
};

type SmallTextProps = {
  className?: string;
};

const SmallText: React.FC<SmallTextProps> = ({ className, children }) => {
  const smallTextClassName = `${styles.small_text} ${
    !!className ? className : ""
  }`;
  return <div className={smallTextClassName}>{children}</div>;
};

type FeaturedTextProps = {
  className?: string;
};

const FeaturedText: React.FC<FeaturedTextProps> = ({ className, children }) => {
  const featuredTextClassName = `${styles.featured_text} ${
    !!className ? className : ""
  }`;
  return <span className={featuredTextClassName}>{children}</span>;
};

interface HyperlinkProps {
  href: string;
}

const Hyperlink: React.FC<HyperlinkProps> = ({ href, children }) => {
  return (
    <a
      className={styles.hyperlink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

type HotKeyProps = {
  className?: string;
};

const HotKey: React.FC<HotKeyProps> = ({ className, children }) => {
  const hotKeyClassName = `${styles.hotkey} ${!!className ? className : ""}`;
  return <span className={hotKeyClassName}>{children}</span>;
};

export {
  Title,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Paragraph,
  SmallText,
  FeaturedText,
  Hyperlink,
  HotKey,
};
