import JavaScriptFormatter from "./JavaScriptFormatter";

type Props = {
  showLineNumbers?: boolean;
};

const ReactFormatter: React.FC<Props> = ({ showLineNumbers, children }) => {
  return (
    <JavaScriptFormatter showLineNumbers={showLineNumbers}>
      {children}
    </JavaScriptFormatter>
  );
};

export default ReactFormatter;
