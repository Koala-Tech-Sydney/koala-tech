import Image from "next/image";

import ReactFormatter from "../../../../components/Formatter/ReactFormatter";
import ShellFormatter from "../../../../components/Formatter/ShellFormatter";
import Chapter from "../../../../components/Course/Chapter";
import {
  Subtitle2,
  Subtitle3,
  Paragraph,
  Hyperlink,
  FeaturedText,
  HotKey,
} from "../../../../components/Text/Text";
import SubChapter from "../../../../components/Course/SubChapter";
import { reactCourse } from "..";

const GlobalStyles = () => {
  return <Chapter course={reactCourse}></Chapter>;
};

export default GlobalStyles;
