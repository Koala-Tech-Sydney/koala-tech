import JavaScriptFormatter from "../../../../components/Formatter/JavaScriptFormatter";
import Course from "../../../../components/Course/SubChapter";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import { reactCourse } from "..";

const Introduction = () => {
  return (
    <Course title="Introduction" course={reactCourse}>
      <Paragraph>
        In this section, you will learn how to create a new React app and
        understand the structure of a React project.
      </Paragraph>
      <Subtitle1>Create React App</Subtitle1>
      <Paragraph>
        <Hyperlink href="https://create-react-app.dev/">
          Create React App
        </Hyperlink>{" "}
        is a tool developed by Facebook, it is one of the best way to start
        building a new application in React. It sets up the development
        environment with the latest JavaScript features enabled and provides a
        great developer experience with all the features it provided.
      </Paragraph>
      <JavaScriptFormatter>{`npx create-react-app your-app-name
cd your-app-name
npm start`}</JavaScriptFormatter>
      <Subtitle1>Project Structure</Subtitle1>
      <Paragraph>
        Often, I find it helpful to study about the project structure of a
        framework before learning it, we will introduce the most important files
        and folders in a React project. You do not need to know them by heart
        for now, merely be aware of their existence and understand a little bit
        of their purposes can help you a lot in learning React.
      </Paragraph>
      <Subtitle2>node_modules</Subtitle2>
      <Paragraph>
        A folder for storing all of the libraries installed via npm, a tool for
        managing JavaScript libraries.
      </Paragraph>
      <Subtitle2>public</Subtitle2>
      <Paragraph>
        A folder for storing all of the things that are public to the browser,
        for example the images or other resources.
      </Paragraph>
    </Course>
  );
};

export default Introduction;
