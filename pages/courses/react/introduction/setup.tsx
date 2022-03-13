import Image from "next/image";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";

import Chapter from "../../../../components/Course/Chapter";
import { reactCourse } from "..";

const Setup = () => {
  return (
    <Chapter course={reactCourse}>
      <Subtitle1>NodeJS</Subtitle1>
      <Paragraph>
        The most conventient way to set up your React development environment is
        via <Hyperlink href="https://nodejs.org/en/">NodeJS</Hyperlink>, go
        download the latest stable release.
      </Paragraph>
      <Subtitle1>Visual Studio Code</Subtitle1>
      <Paragraph>
        Also known as the{" "}
        <Hyperlink href="https://code.visualstudio.com/">VS Code</Hyperlink>, it
        is one of the most widely used Integrated Development Environment (IDE).
        For the sake of coding efficiency, it is highly recommended to use VS
        Code for developing React applications. VS Code provides many powerful
        editor features and amazing extensions out of the box, which can greatly
        boost your speed of coding.
      </Paragraph>
      <Subtitle1>Visual Studio Code Extensions</Subtitle1>
      <Paragraph>
        After you have installed the VS Code, it is time to install some helpful
        extensions to make your coding journey MUCH easier!
        <br />
        <br />
        Open VS Code, there is a tab called the &apos;Extensions&apos; in the
        left bar. You can use the search bar here to search for extensions that
        you need.
      </Paragraph>
      <Image
        src="/images/vscode/extensions/vscode-extension.png"
        alt="Visual Studio Code extension"
        height="406"
        width="1090"
      />
      <Subtitle2>Prettier</Subtitle2>
      <Paragraph>
        Install this extension to format your code automagically.
      </Paragraph>
      <Image
        src="/images/vscode/extensions/vscode-extension-prettier.png"
        alt="Visual Studio Code Prettier extension"
        height="229"
        width="774"
      />
      <Paragraph>
        After that, go to &apos;Settings&apos; and search for the keyword
        &apos;format&apos;. Then select Prettier as your default formatter and
        turn on the &apos;Format On Save&apos; option. Once you have done that,
        every time you write some code, you can hold Ctrl + S (Windows) or
        Command + X (Mac), then VS Code will format the code for you.
      </Paragraph>
      <Image
        src="/images/courses/react/setup/prettier-setting.png"
        alt="Prettier setting"
        height="916"
        width="1864"
      />
      <Subtitle2>Bracket Pair Colorizer</Subtitle2>
      <Paragraph>
        Install this extension so that you can find matching brackets in your
        code easily.
      </Paragraph>
      <Image
        src="/images/vscode/extensions/vscode-extension-bracket-pair-colorizer.png"
        alt="Visual Studio Code Bracket Pair Colorizer extension"
        height="232"
        width="775"
      />
      <Subtitle2>Material Icon Theme</Subtitle2>
      <Image
        src="/images/vscode/extensions/vscode-extension-material-icon-theme.png"
        alt="Visual Studio Code Material Icon Theme extension"
        height="228"
        width="735"
      />
      <Subtitle2>Simple React Snippets</Subtitle2>
      <Image
        src="/images/vscode/extensions/vscode-extension-simple-react-snippets.png"
        alt="Visual Studio Code Simple React Snippets extension"
        height="220"
        width="760"
      />
      <Subtitle2>ES7 + React/Redux/React-Native Snippets</Subtitle2>
      <Image
        src="/images/vscode/extensions/vscode-extension-react-redux-react-native-snippets.png"
        alt="Visual Studio Code ES7 + React/Redux/React-Native Snippets extension"
        height="220"
        width="760"
      />
      <Subtitle2>Material Icon Theme</Subtitle2>
      <Paragraph>
        This is optional, it prepends a material icon for each filename shown in
        the &apos;Explorer&apos; tab in VS Code.
      </Paragraph>
      <Image
        src="/images/courses/react/setup/material-icon-theme.png"
        alt="Material Icon Theme"
        height="234"
        width="757"
      />
    </Chapter>
  );
};

export default Setup;
