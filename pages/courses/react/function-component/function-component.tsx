import Chapter from "../../../../components/Course/Chapter";
import { reactCourse } from "..";
import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../../components/Text/Text";

const FunctionComponent = () => {
  return <Chapter title="Function Component" course={reactCourse}></Chapter>;
};

export default FunctionComponent;
