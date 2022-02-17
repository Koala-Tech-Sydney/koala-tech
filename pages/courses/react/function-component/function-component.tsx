import Course from "../../../../components/Course/SubChapter";
import { reactCourse } from "..";
import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";

const FunctionComponent = () => {
  return <Course title="Function Component" course={reactCourse}></Course>;
};

export default FunctionComponent;
