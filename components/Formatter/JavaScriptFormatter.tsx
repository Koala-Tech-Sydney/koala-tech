import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
// a11yDark androidstudio stackoverflowDark vs2015 dracula darcula atomOneDark
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

SyntaxHighlighter.registerLanguage("javascript", js);

const JavaScriptFormatter = (props) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
    //   showLineNumbers="true"
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default JavaScriptFormatter;
