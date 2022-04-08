import Image from "next/image";

import ReactFormatter from "../../../../components/Formatter/ReactFormatter";
import ShellFormatter from "../../../../components/Formatter/ShellFormatter";
import Chapter from "../../../../components/Course/Chapter";
import {
  Subtitle2,
  Subtitle3,
  Paragraph,
  Hyperlink,
  FeaturedText,
  HotKey,
} from "../../../../components/Text/Text";
import SubChapter from "../../../../components/Course/SubChapter";
import { reactCourse } from "..";

const ComponentStyles = () => {
  return (
    <Chapter course={reactCourse}>
      <SubChapter name="Basic Approach" />
      <Paragraph>
        In React, you can add CSS class names to an HTML element by using the
        className attribute. In addition, a custom component doesn’t have the
        className attribute by default, you have to pass the class names as
        props and add them to the className attribute of the inner HTML
        elements.
      </Paragraph>
      <ReactFormatter>{`const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
 
function App() {
  return <Card className="classic">React Rocks</Card>;
}`}</ReactFormatter>
      <Paragraph>
        Add the following style in <FeaturedText>src/index.css</FeaturedText> or
        other global stylesheets.
      </Paragraph>
      <ReactFormatter>{`.classic {
    background-color: aqua;
}`}</ReactFormatter>
      <Paragraph>
        It is common for CSS classes to depend on the component props or state.
        If you often find yourself writing code like the following, the{" "}
        <Hyperlink href="https://www.npmjs.com/package/classnames#usage-with-reactjs">
          classnames
        </Hyperlink>{" "}
        package can simplify it.
      </Paragraph>
      <ReactFormatter>{`const Card = (props) => {
  let classes = "card";
  if (props.isClassic) {
    classes += " classic";
  }
  return <div className={classes}>{props.children}</div>;
};
 
function App() {
  return <Card isClassic={true}>React Rocks</Card>;
}`}</ReactFormatter>
      <SubChapter name="Styled Component" />
      <Paragraph>
        This is a Node package for creating a React component by attaching
        styles to a particular HTML element. To use it, run the following
        command in the terminal to install it in your project.
      </Paragraph>
      <ShellFormatter>{`$ npm install styled-components`}</ShellFormatter>
      <Paragraph>
        You might haven&apos;t seen the unusual syntax{" "}
        <FeaturedText>styled.button`...`</FeaturedText> before, this is actually
        called the template literal in JavaScript.
      </Paragraph>
      <ReactFormatter>{`import styled from "styled-components";
 
const StyledButton = styled.button\`
    padding: 2rem;
    color: \${(props) => (props.invalid ? "red" : "#000")};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);

    @media (min-width: 700px) {
        width: auto;
    }

    &:focus {
        outline: none;
    }
\`;

function App() {
    <StyledButton className="classic" invalid={true}>
    React Rocks
    </StyledButton>
}`}</ReactFormatter>
      <Paragraph>
        To add class(es) to a component, you can do it the normal way and
        styled-components will direct the class to the element for you. You can
        also use props within the template literal.
      </Paragraph>
      <Paragraph>
        In the background, this package encloses the styles within the tagged
        template literal to two automatically generated unique classes so that
        when these styles are added to the global style sheet, styles won’t leak
        to other components.
      </Paragraph>
      <Image
        src="/images/courses/react/styling/styled-component-button.png"
        alt="A button decorated using styled-component"
        height="22"
        width="475"
      />
      <SubChapter name="CSS Modules" />
    </Chapter>
  );
};

export default ComponentStyles;
