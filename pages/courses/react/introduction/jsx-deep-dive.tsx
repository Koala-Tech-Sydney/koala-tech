import {
  Title,
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { reactCourse } from "..";

const JSXDeepDive = () => {
  return <Chapter title="JSX Deep Dive" course={reactCourse}></Chapter>;
};

export default JSXDeepDive;
