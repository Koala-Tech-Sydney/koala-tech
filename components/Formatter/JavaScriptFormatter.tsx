import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
// a11yDark androidstudio stackoverflowDark vs2015 dracula darcula atomOneDark
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

import styles from "./Formatter.module.scss";

SyntaxHighlighter.registerLanguage("javascript", js);

type Props = {
  showLineNumbers?: boolean;
};

const JavaScriptFormatter: React.FC<Props> = ({
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

export default JavaScriptFormatter;
