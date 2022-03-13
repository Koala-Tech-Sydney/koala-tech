import Image from "next/image";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { rustCourse } from "..";

const Setup = () => {
  return (
    <Chapter course={rustCourse}>
      <Subtitle1>Rust</Subtitle1>
      <Paragraph>
        Follow the instructions on{" "}
        <Hyperlink href="https://www.rust-lang.org/tools/install">
          Rust Installation
        </Hyperlink>
        , depending on your operating system you may need to restart your
        terminal or even restart your computer to let the installation take full
        effect.
      </Paragraph>
      <Subtitle1>Visual Studio Code</Subtitle1>
      <Paragraph>
        Also known as the{" "}
        <Hyperlink href="https://code.visualstudio.com/">VS Code</Hyperlink>, it
        is one of the most widely used Integrated Development Environment (IDE).
        For the sake of coding efficiency, it is highly recommended to use VS
        Code for developing Rust applications. VS Code provides many powerful
        editor features and amazing extensions out of the box, which can greatly
        boost your speed of coding.
      </Paragraph>
      <Subtitle1>Visual Studio Code Extensions</Subtitle1>
      <Paragraph>
        After you have installed the VS Code, it is time to install some helpful
        extensions to make your coding journey MUCH easier!
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
      <Subtitle2>Rust</Subtitle2>
      <Image
        src="/images/vscode/extensions/vscode-extension-rust.png"
        alt="Visual Studio Code Rust extension"
        height="228"
        width="858"
      />
      <Subtitle2>Rust Syntax</Subtitle2>
      <Image
        src="/images/vscode/extensions/vscode-extension-rust-syntax.png"
        alt="Visual Studio Code Rust Syntax extension"
        height="232"
        width="727"
      />
      <Subtitle2>Bracket Pair Colorizer</Subtitle2>
      <Image
        src="/images/vscode/extensions/vscode-extension-bracket-pair-colorizer.png"
        alt="Visual Studio Code Bracket Pair Colorizer extension"
        height="232"
        width="775"
      />
    </Chapter>
  );
};

export default Setup;
