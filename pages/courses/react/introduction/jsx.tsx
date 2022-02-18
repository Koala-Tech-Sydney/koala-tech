import JavaScriptFormatter from "../../../../components/Formatter/JavaScriptFormatter";
import NoteCard from "../../../../components/Course/NoteCard";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { reactCourse } from "..";

const JSX = () => {
  return (
    <Chapter title="JSX" course={reactCourse}>
      <Paragraph>Consider the following variable declaration</Paragraph>
      <JavaScriptFormatter>
        {"const cutestAnimal = <p>Koala</p>;"}
      </JavaScriptFormatter>
      <Paragraph>
        This weird syntax is called JavaScript Syntax Extension (JSX),
        essentially, it&apos;s just a syntatic sugar which allows you to use
        HTML code within JavaScript. It is widely used in the React developer
        community as it makes our life much easier. You don&apos;t need to
        understand how they work under the hood for now, we will explore that in
        the next section. Here, let&apos;s kick start by learning how to use it.
      </Paragraph>
      <Subtitle1>Setup</Subtitle1>
      <Paragraph>
        To be able to use this syntax, we need to import React from the
        &apos;react&apos; library.
      </Paragraph>
      <JavaScriptFormatter>{"import React from 'react';"}</JavaScriptFormatter>
      <NoteCard type="info" title="Note">
        Many modern React project setups nowadays (like{" "}
        <Hyperlink href="https://create-react-app.dev/">
          create-react-app
        </Hyperlink>
        ) are able to do the above import automatically with the help of tools
        like Babel, so you can save some boilerplate typings.
      </NoteCard>
      <Subtitle1>Syntax</Subtitle1>
      <Paragraph>
        There are two kinds of components in React, built-in HTML components and
        custom components. Built-in components are those you probably have
        already seen, e.g. &apos;div&apos;. Custom component are those built by
        you, they are composed of other built-in components or/and custom
        components.
      </Paragraph>
      <Paragraph>
        The name of your custom component should always be capitalized, because
        when the compiler compiles your JSX code, it treats components start
        with a lowercase letter as built-in HTML components, while those start
        with an uppercase letter as custom components.
      </Paragraph>
      <Subtitle2>Dynamic Component</Subtitle2>
      <Paragraph>
        You cannot directly use a JavaScript expression as the component name.
      </Paragraph>
      <JavaScriptFormatter>{`let MyComponents = [<div key="0">first component</div>, <p key="1">second component</p>]
let index = 1
// This won't work
let MyComponent = <MyComponents[index] />`}</JavaScriptFormatter>
      <Paragraph>
        Instead, you need to assign it to a capitalized variable first.
      </Paragraph>
      <JavaScriptFormatter>{`let MyComponents = [<div key="0">first component</div>, <p key="1">second component</p>]
let index = 1
// This works like a charm! Now you can use <MyComponent /> in your JSX code.
let MyComponent = MyComponents[index]`}</JavaScriptFormatter>
    </Chapter>
  );
};

export default JSX;
