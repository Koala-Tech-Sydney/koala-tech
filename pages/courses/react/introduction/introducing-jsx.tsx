import ReactFormatter from "../../../../components/Formatter/ReactFormatter";

import { Paragraph, FeaturedText } from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { reactCourse } from "..";

const IntroducingJSX = () => {
  return (
    <Chapter course={reactCourse}>
      <Paragraph>Consider the following variable declaration</Paragraph>
      <ReactFormatter showLineNumbers={false}>
        {"const cutestAnimal = <p>Koala</p>;"}
      </ReactFormatter>
      <Paragraph>
        This weird syntax is called JavaScript Syntax Extension (JSX),
        essentially, it&apos;s just a syntactic sugar which allows you to use
        HTML code within JavaScript. It is widely used in the React developer
        community as it makes our life much easier. You don&apos;t need to
        understand how they work under the hood for now, we will explore that
        very soon. Here, let&apos;s kick start by learning how to use it.
      </Paragraph>
      <Paragraph>
        To be able to use this syntax, we need to import React from the{" "}
        <FeaturedText>react</FeaturedText> library.
      </Paragraph>
      <ReactFormatter showLineNumbers={false}>
        {"import React from 'react';"}
      </ReactFormatter>
      <Paragraph>
        JSX is included in the React library and is a syntactic sugar for the{" "}
        <FeaturedText>React.createElement</FeaturedText> method. When you are
        using JSX, Babel compiles JSX down to React.createElement calls.
      </Paragraph>
      <Paragraph>
        Its prototype is the following. The first argument is the name of the
        type (it could be a HTML element or a React component), the second
        argument is the props of the type (you could omit that if you don&apos;t
        know what is a prop yet, we will discuss that later), all the arguments
        starting from the third argument are the children of the current type.
      </Paragraph>
      <ReactFormatter showLineNumbers={false}>{`React.createElement(
  type,
  [props],
  [...children]
)`}</ReactFormatter>
      <Paragraph>For example, using JSX in the following way</Paragraph>
      <ReactFormatter>{`function App() {
  return <div>
    <h1><span>Koalas are so cute~</span></h1>
    <h2>Do you agree?</h2>
  </div>
}`}</ReactFormatter>
      <Paragraph>is equivalent to the following</Paragraph>
      <ReactFormatter>{`import React from "react";
 
function App() {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {},
      React.createElement("span", {}, "Koalas are so cute~")
    ),
    React.createElement("h2", {}, "Do you agree?")
  );
}`}</ReactFormatter>
      <Paragraph>And the following</Paragraph>
      <ReactFormatter>{`function App() {
  return <div className="koala"/>
}`}</ReactFormatter>
      <Paragraph>is equivalent to</Paragraph>
      <ReactFormatter>{`import React from "react";
 
function App() {
  return React.createElement("div", { className: "koala" });
}`}</ReactFormatter>
      <Paragraph>
        Just for completeness, we will show what is it compiled to when a React
        component is used. For those who don&apos;t know what a component is
        yet, you can think of it as a collection of HTML elements,{" "}
        <FeaturedText>{"<App />"}</FeaturedText> is an example of a React
        component.
      </Paragraph>
      <ReactFormatter>{`function App() {
  return (
    <div>
      <h1>Koalas are so cute~</h1>
      <Button text="agree" />
    </div>
  );
}
 
function Button(props) {
  return <button>{props.text}</button>;
}`}</ReactFormatter>
      <Paragraph>is compiled to</Paragraph>
      <ReactFormatter>{`import React from 'react';
 
function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Koalas are so cute~"),
    React.createElement(Button, { text: "agree" })
  );
}

function Button(props) {
  return <button>{props.text}</button>;
}`}</ReactFormatter>
    </Chapter>
  );
};

export default IntroducingJSX;
