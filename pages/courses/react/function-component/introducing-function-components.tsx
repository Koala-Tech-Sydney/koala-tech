import ReactFormatter from "../../../../components/Formatter/ReactFormatter";

import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
  FeaturedText,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { reactCourse } from "..";
import SubChapter from "../../../../components/Course/SubChapter";

const IntroducingFunctionComponents = () => {
  return (
    <Chapter course={reactCourse}>
      <SubChapter name="React Elements" />
    </Chapter>
  );
};

export default IntroducingFunctionComponents;
