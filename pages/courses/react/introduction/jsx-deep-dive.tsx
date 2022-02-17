import {
  Title,
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import Course from "../../../../components/Course/SubChapter";
import { reactCourse } from "..";

const JSXDeepDive = () => {
  return <Course title="JSX Deep Dive" course={reactCourse}></Course>;
};

export default JSXDeepDive;
