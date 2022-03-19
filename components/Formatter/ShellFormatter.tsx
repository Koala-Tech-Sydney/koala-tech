import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import shell from "react-syntax-highlighter/dist/cjs/languages/hljs/shell";
// a11yDark androidstudio stackoverflowDark vs2015 dracula darcula atomOneDark
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

import styles from "./Formatter.module.scss";

SyntaxHighlighter.registerLanguage("shell", shell);

type Props = {
  showLineNumbers?: boolean;
};

const ShellFormatter: React.FC<Props> = ({
  showLineNumbers = false,
  children,
}) => {
  return (
    <SyntaxHighlighter
      className={styles.formatter}
      language="shell"
      style={dracula}
      showLineNumbers={showLineNumbers}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default ShellFormatter;
