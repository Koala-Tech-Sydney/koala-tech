import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import rust from "react-syntax-highlighter/dist/cjs/languages/hljs/rust";
// a11yDark androidstudio stackoverflowDark vs2015 dracula darcula atomOneDark
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

import styles from "./Formatter.module.scss";

SyntaxHighlighter.registerLanguage("rust", rust);

const RustFormatter: React.FC = ({ children }) => {
  return (
    <SyntaxHighlighter
      className={styles.formatter}
      language="rust"
      style={dracula}
      showLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default RustFormatter;
