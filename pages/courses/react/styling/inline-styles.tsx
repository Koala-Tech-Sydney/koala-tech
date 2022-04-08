import ReactFormatter from "../../../../components/Formatter/ReactFormatter";
import Chapter from "../../../../components/Course/Chapter";
import {
  Paragraph,
  FeaturedText,
} from "../../../../components/Text/Text";
import { reactCourse } from "..";

const InlineStyles = () => {
  return (
    <Chapter course={reactCourse}>
      <Paragraph>
        In React, each HTML element has an attribute called style which accepts
        a JavaScript object. You can specify CSS style property names and values
        as keys and values in this object.
      </Paragraph>
      <ReactFormatter showLineNumbers={false}>{`<div
  style={{
    height: "30px",
    "background-color": "grey",
  }}
>
  Koala
</div>`}</ReactFormatter>
      <Paragraph>
        Unlike normal CSS, you can use the camel case to specify a property name
        if it contains more than one word.
      </Paragraph>
      <ReactFormatter showLineNumbers={false}>{`<div
  style={{
    height: "30px",
    backgroundColor: "grey",
  }}
>
  Koala
</div>`}</ReactFormatter>
      <Paragraph>You can apply inline styles conditionally.</Paragraph>
      <ReactFormatter showLineNumbers={false}>{`<div style={{ color: !isValid ? "red" : "back" }}>Question 1</div>`}</ReactFormatter>
      <Paragraph>
        Vendor prefixes other than ms should begin with a capital letter. This
        is why WebkitTransition has an uppercase <FeaturedText>W</FeaturedText>.
      </Paragraph>
      <ReactFormatter showLineNumbers={false}>{`const KoalaTransformer = (props) => {
  const koalaStyle = {
    WebkitTransition: 'all',
    msTransition: 'all'
  }
  return <div style={koalaStyle}>This should work cross-browser</div>;
};`}</ReactFormatter>
      <Paragraph>
        React will automatically append a “px” suffix to certain numeric inline
        style properties. If you want to use units other than “px”, specify the
        value as a string with the desired unit.
      </Paragraph>
      <ReactFormatter showLineNumbers={false}>{`// Result style: '10px'
<div style={{ height: 10}}>Hello Koalas!</div>
 
// Result style: '10%'
<div style={{ height: '10%'}}>Hello Koalas!</div>`}</ReactFormatter>
    </Chapter>
  );
};

export default InlineStyles;
