import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
// a11yDark androidstudio stackoverflowDark vs2015 dracula darcula atomOneDark
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

import styles from "./Formatter.module.scss";

SyntaxHighlighter.registerLanguage("javascript", javascript);

type Props = {
  showLineNumbers?: boolean;
};

const SolidityFormatter: React.FC<Props> = ({
  showLineNumbers = true,
  children,
}) => {
  return (
    <SyntaxHighlighter
      className={styles.formatter}
      language="javascript"
      style={dracula}
      showLineNumbers={showLineNumbers}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default SolidityFormatter;
