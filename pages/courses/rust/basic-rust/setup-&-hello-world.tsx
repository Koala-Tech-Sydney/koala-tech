import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { rustCourse } from "..";

const SetupAndHelloWorld = () => {
  return (
    <Chapter course={rustCourse}>
      <Subtitle1>Rust</Subtitle1>
      <Paragraph></Paragraph>
      <Subtitle1>Visual Studio Code</Subtitle1>
    </Chapter>
  );
};

export default SetupAndHelloWorld;
