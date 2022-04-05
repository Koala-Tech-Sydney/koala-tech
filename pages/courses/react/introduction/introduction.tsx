import Image from "next/image";

import JavaScriptFormatter from "../../../../components/Formatter/JavaScriptFormatter";
import Chapter from "../../../../components/Course/Chapter";

import {
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Paragraph,
  Hyperlink,
  HotKey
} from "../../../../components/Text/Text";
import { reactCourse } from "..";

const Introduction = () => {
  return (
    <Chapter course={reactCourse}>
      <Paragraph>
        In this section, you will learn how to create a new React app for each
        chapter later in the course and take a glance at the structure of a
        React project.
      </Paragraph>
      <Subtitle1>Create React App</Subtitle1>
      <Paragraph>
        <Hyperlink href="https://create-react-app.dev/">
          Create React App
        </Hyperlink>{" "}
        is a tool developed by Facebook, it is one of the best way to create a
        new React application. It sets up the development environment with the
        latest JavaScript features enabled and provides a great developer
        experience with all the features it provided out of the box.
      </Paragraph>
      <JavaScriptFormatter>{`npx create-react-app your-app-name
cd your-app-name
npm start // spin up the local server for your react application`}</JavaScriptFormatter>
      <Paragraph>
        After the commands above run successfully, the following browser page
        would pop up, this is a starter React app created by create-react-app.
        <br />
        If for some reason this page doesn&apos;t appear automatically, you can
        manually type in the url{" "}
        <Hyperlink href="http://localhost:3000">
          http://localhost:3000
        </Hyperlink>{" "}
        in the browser&apos;s search bar.
      </Paragraph>
      <Image
        src="/images/courses/react/introduction/create-react-app.png"
        alt="Create React App starter app"
        height="828"
        width="993"
      />
      <Paragraph>
        Now you have successfully run your first React app, we will take some
        time to understand how the code creates this application.
      </Paragraph>
      <Subtitle1>Project Structure</Subtitle1>
      <Paragraph>
        Often, I find it helpful to study the project structure of a framework
        before learning it, we will introduce the most important files and
        folders in a React project. You do not need to know them by heart for
        now, merely be aware of their existence and understand a little bit of
        their purposes can help you a lot in learning React.
      </Paragraph>
      <Subtitle2>public</Subtitle2>
      <Paragraph>
        A folder for storing all of the things that are accessible to the
        client&apos;s browser, for example the images or other resources.
      </Paragraph>
      <Subtitle3>public/index.html</Subtitle3>
      <Paragraph>
        The single html file that gets served to the client&apos;s browser along
        with a lot of JavaScript files and other resources once the browser
        sends a GET request to our server. Once the browser received this html
        file, it will render it and then run the JavaScript code to inject all
        our React components to the div with id=&quot;root&quot;.
      </Paragraph>
      <JavaScriptFormatter
        showLineNumbers={false}
      >{`<div id="root"></div>`}</JavaScriptFormatter>
      <Subtitle2>src</Subtitle2>
      <Subtitle3>src/index.js</Subtitle3>
      <Paragraph>
        This is the first JavaScript file to be run by the browser, it is
        responsible for rendering all of the React components (i.e. HTML nodes)
        to the DOM under the div with id=&quot;root&quot; which is defined in
        public/index.html.
      </Paragraph>
      <JavaScriptFormatter showLineNumbers={false}>{`ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`}</JavaScriptFormatter>
      <Paragraph>
        You may notice there&apos;s a CSS file import statement, which is
        impossible in normal JavaScript, it works because React does additional
        work under the hood to make this CSS file available globally in the
        browser.
      </Paragraph>
      <JavaScriptFormatter
        showLineNumbers={false}
      >{`import './index.css';`}</JavaScriptFormatter>
      <Paragraph>
        You may also notice the following html-style code, this is a syntax
        called JSX, it works here because React does additional transformation
        work to turn them into JavaScript function calls before the JavaScript
        is run. These special html-style tags are also known as React
        components, you can consider an React component to be one part of a
        webpage and a webpage is formed by combining many React components.
      </Paragraph>
      <JavaScriptFormatter showLineNumbers={false}>{`<React.StrictMode>
  <App />
</React.StrictMode>`}</JavaScriptFormatter>
      <Paragraph>
        Don&apos;t worry if you don&apos;t understand how this transformation
        works yet, I will soon explain it to you later in this unit.
      </Paragraph>
      <Paragraph>
        If you look at the JavaScript source code on the browser side, you can
        see the html App tag above get transformed into the following JavaScript
        function call before getting served to the browser.
      </Paragraph>
      <Image
        src="/images/courses/react/introduction/jsx-source.png"
        alt="A picture showing the JSX"
        height="421"
        width="988"
      />
      <Paragraph>
        &lt;React.StrictMode&gt; is a built-in component added by some people to
        ask React to do additional checks during development, and send warnings
        to the console if there are warnings to report.
      </Paragraph>
      <Paragraph>
        &lt;App&gt; is the component created by create-react-app for you, it
        acts as the root component of your React app to be rendered within the
        root div we mentioned above.
      </Paragraph>
      <Image
        src="/imagePs/courses/react/introduction/inspector.png"
        alt="Inspecting the root div and the App Component"
        height="124"
        width="460"
      />
      <Subtitle3>src/index.css</Subtitle3>
      <Paragraph>
        This is the global CSS file for your React application.
      </Paragraph>
      <Subtitle2>package.json</Subtitle2>
      <Paragraph>
        This lists all of the dependencies, in which you can run `npm install`
        to install all of them.
      </Paragraph>
      <Subtitle2>package-lock.json</Subtitle2>
      <Paragraph>
        This stores an exact, versioned dependency tree rather than using
        starred versioning like in package.json (e.g. 1.0.*). This means you can
        guarantee the dependencies installed are of the correct versions by
        looking at this file. Generally this file will be regenerated if
        package.json changes.
      </Paragraph>
      <Subtitle2>node_modules</Subtitle2>
      <Paragraph>
        A folder for storing all of the libraries installed via npm (node
        package manager), npm is a tool for managing libraries for NodeJS
        projects, it is included in the installation of NodeJS.
      </Paragraph>
    </Chapter>
  );
};

export default Introduction;
