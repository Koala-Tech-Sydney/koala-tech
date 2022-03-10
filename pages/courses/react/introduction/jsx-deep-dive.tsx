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
  return <Chapter course={reactCourse}></Chapter>;
};

export default JSXDeepDive;
